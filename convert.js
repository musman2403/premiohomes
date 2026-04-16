import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = ['View 1.jpeg', 'View 2.jpeg', 'View 3.jpeg', 'View 4.jpeg'];
const destDir = path.join('src', 'assets', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function convert() {
  for (let i = 0; i < images.length; i++) {
    const file = images[i];
    const targetFile = `view${i + 1}.webp`;
    console.log(`Converting ${file} to ${targetFile}...`);
    try {
      await sharp(file)
        .webp({ quality: 80 })
        .toFile(path.join(destDir, targetFile));
      
      console.log(`Successfully converted ${file}.`);
      fs.unlinkSync(file); // Optional: delete original
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
}

convert();
