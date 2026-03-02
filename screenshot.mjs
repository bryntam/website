import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:5174';
const label = process.argv[3] || '';

const dir = './temporary screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Find next available index
const existing = fs.existsSync(dir)
  ? fs.readdirSync(dir).filter(f => f.endsWith('.png'))
  : [];
const indices = existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)?.[1] ?? '0')).filter(Boolean);
const next = indices.length ? Math.max(...indices) + 1 : 1;

const filename = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;
const filepath = path.join(dir, filename);

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });

// Force all fade-section elements visible (IntersectionObserver won't fire in headless)
await page.evaluate(() => {
  document.querySelectorAll('.fade-section').forEach(el => el.classList.add('visible'));
});
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Saved: ${filepath}`);
