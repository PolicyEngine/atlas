/**
 * TDD Test for Full-Screen Layout
 * 
 * Requirements:
 * 1. The app should use the full viewport width (no white margins on sides)
 * 2. Content containers should extend edge-to-edge
 * 3. No elements should have unnecessary margins creating gaps
 */

import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import puppeteer, { Browser, Page } from 'puppeteer';

describe('Full-Screen Layout E2E Tests', () => {
  let browser: Browser;
  let page: Page;
  const APP_URL = 'http://localhost:5174/policy-library/';

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false }); // Set to false to see the browser
    page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Demo page should use full viewport width', async () => {
    await page.goto(APP_URL);
    
    // Click on Live Demo tab
    await page.click('text=Live Demo');
    await new Promise(r => setTimeout(r, 500)); // Wait for transition

    // Get viewport width
    const viewportWidth = await page.evaluate(() => window.innerWidth);

    // Check that the demo container uses full width
    const demoContainerWidth = await page.evaluate(() => {
      const demo = document.querySelector('.demo-container');
      return demo ? demo.getBoundingClientRect().width : 0;
    });

    // The demo container should be at least 95% of viewport width
    expect(demoContainerWidth).toBeGreaterThan(viewportWidth * 0.95);
    
    // Check there's no significant left margin
    const demoContainerLeft = await page.evaluate(() => {
      const demo = document.querySelector('.demo-container');
      return demo ? demo.getBoundingClientRect().left : 0;
    });
    
    expect(demoContainerLeft).toBeLessThan(50); // Should have minimal or no left margin
  });

  test('Content wrapper should not add unnecessary padding', async () => {
    await page.goto(APP_URL);
    
    const contentPadding = await page.evaluate(() => {
      const content = document.querySelector('.content');
      if (!content) return null;
      const styles = window.getComputedStyle(content);
      return {
        paddingLeft: styles.paddingLeft,
        paddingRight: styles.paddingRight,
        width: content.getBoundingClientRect().width,
      };
    });

    // Content should have minimal or no horizontal padding
    expect(parseInt(contentPadding?.paddingLeft || '0')).toBeLessThan(50);
    expect(parseInt(contentPadding?.paddingRight || '0')).toBeLessThan(50);
    
    // Content width should be full viewport
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(contentPadding?.width).toBeGreaterThan(viewportWidth * 0.95);
  });

  test('No elements should overflow viewport horizontally', async () => {
    await page.goto(APP_URL);
    
    const overflowingElements = await page.evaluate(() => {
      const viewportWidth = window.innerWidth;
      const elements = document.querySelectorAll('*');
      const overflowing: string[] = [];
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > viewportWidth + 5) { // 5px tolerance
          overflowing.push(`${el.className || el.tagName}: ${rect.right - viewportWidth}px overflow`);
        }
      });
      
      return overflowing;
    });

    expect(overflowingElements).toHaveLength(0);
  });

  test('Cards grid should use available width efficiently', async () => {
    await page.goto(APP_URL);
    
    const cardsGridInfo = await page.evaluate(() => {
      const grid = document.querySelector('.cards-grid');
      if (!grid) return null;
      
      const rect = grid.getBoundingClientRect();
      const parent = grid.parentElement?.getBoundingClientRect();
      
      return {
        width: rect.width,
        parentWidth: parent?.width || 0,
        left: rect.left,
      };
    });

    if (cardsGridInfo) {
      // Cards grid should use most of its parent's width
      expect(cardsGridInfo.width).toBeGreaterThan(cardsGridInfo.parentWidth * 0.9);
      
      // Should not have large left margin
      expect(cardsGridInfo.left).toBeLessThan(50);
    }
  });

  test('Visual regression: take screenshot for manual review', async () => {
    await page.goto(APP_URL);
    
    // Take screenshots of each section
    const sections = ['Overview', 'Live Demo', 'Partners'];
    
    for (const section of sections) {
      if (section !== 'Overview') {
        await page.click(`text=${section}`);
        await new Promise(r => setTimeout(r, 500));
      }
      
      await page.screenshot({ 
        path: `test-screenshots/${section.toLowerCase().replace(' ', '-')}.png`,
        fullPage: false 
      });
    }
  });
});