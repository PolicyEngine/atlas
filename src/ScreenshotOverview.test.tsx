import { test } from 'vitest';
import puppeteer from 'puppeteer';

test('Screenshot overview page with logo', { timeout: 30000 }, async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('http://localhost:5174/policy-library/');
  await new Promise((r) => setTimeout(r, 2000));

  // Take screenshot
  await page.screenshot({
    path: 'test-screenshots/overview-logo.png',
    fullPage: false,
  });

  console.log('Screenshot saved to test-screenshots/overview-logo.png');

  await browser.close();
});
