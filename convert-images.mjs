import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/MOCKUPS/KIT PRINCIPAL';
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));

console.log(`Convertendo ${files.length} imagens PNG → WebP...\n`);

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(inputDir, file.replace('.png', '.webp'));
  
  const inputStats = fs.statSync(inputPath);
  const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);
  
  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);
  
  const outputStats = fs.statSync(outputPath);
  const outputSizeKB = (outputStats.size / 1024).toFixed(0);
  const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(0);
  
  console.log(`✅ ${file} (${inputSizeMB}MB) → ${file.replace('.png', '.webp')} (${outputSizeKB}KB) [-${reduction}%]`);
}

console.log('\n🎉 Conversão completa!');
