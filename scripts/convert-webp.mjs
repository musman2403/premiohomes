/**
 * Converts all PNGs in src/assets/images/ to WebP using sharp.
 * Run: node scripts/convert-webp.mjs
 */
import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_DIR  = join(__dirname, '../src/assets/images');
const OUTPUT_DIR = join(__dirname, '../src/assets/images');

const files = readdirSync(INPUT_DIR).filter(f => extname(f).toLowerCase() === '.png');

console.log(`Converting ${files.length} PNG(s) to WebP…`);

await Promise.all(files.map(async (file) => {
  const inputPath  = join(INPUT_DIR, file);
  const outputPath = join(OUTPUT_DIR, basename(file, '.png') + '.webp');
  await sharp(inputPath)
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);
  const { size: inSize  } = await import('fs').then(m => Promise.resolve(m.statSync(inputPath)));
  const { size: outSize } = await import('fs').then(m => Promise.resolve(m.statSync(outputPath)));
  const saving = Math.round((1 - outSize / inSize) * 100);
  console.log(`  ✓ ${file} → ${basename(outputPath)}  (${saving}% smaller)`);
}));

console.log('\nDone! Update your imports to use .webp extensions.');
