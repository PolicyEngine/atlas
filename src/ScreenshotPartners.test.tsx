import { test } from 'vitest';
import puppeteer from 'puppeteer';

test('Screenshot partners page', async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('http://localhost:5174/policy-library/');

  // Click on Partners tab
  await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const partnersLink = links.find((link) => link.textContent?.includes('Partners'));
    if (partnersLink) (partnersLink as HTMLElement).click();
  });
  await new Promise((r) => setTimeout(r, 2000)); // Wait for transition and images to load

  // Take screenshot
  await page.screenshot({
    path: 'test-screenshots/partners-current.png',
    fullPage: true,
  });

  console.log('Screenshot saved to test-screenshots/partners-current.png');

  await browser.close();
});
