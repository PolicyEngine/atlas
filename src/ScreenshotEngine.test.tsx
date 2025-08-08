import { test } from 'vitest';
import puppeteer from 'puppeteer';

test('Screenshot ENGINE application page', async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('http://localhost:5174/policy-library/');

  // Click on ENGINE Application tab
  await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const engineLink = links.find((link) => link.textContent?.includes('ENG(INE)'));
    if (engineLink) (engineLink as HTMLElement).click();
  });
  await new Promise((r) => setTimeout(r, 3000)); // Wait for iframe to load

  // Take screenshot
  await page.screenshot({
    path: 'test-screenshots/engine-current.png',
    fullPage: true,
  });

  console.log('Screenshot saved to test-screenshots/engine-current.png');

  await browser.close();
});
