// scripts/upload-to-cloudinary.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('❌ Missing Cloudinary credentials. Check your .env.local file.');
  process.exit(1);
}

cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });

// ✅ Correct folder path
const imagesDir = path.join(__dirname, '../public/images/All Projects Images');
const files = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

async function uploadImages() {
  console.log(`\nUploading ${files.length} project images...`);

  for (const file of files) {
    const filePath = path.join(imagesDir, file);

    // Strip Cloudinary delivery suffix (e.g. "_zme062") from filename
    // e.g. "admin_healthcare_asia_zme062.png" → "projects/admin-healthcare-asia"
    const nameWithoutExt = path.parse(file).name;
    const cleanName = nameWithoutExt
      .replace(/_[a-z0-9]{6}$/i, '')   // remove 6-char Cloudinary suffix
      .replace(/[\s_]+/g, '-')          // spaces/underscores → hyphens
      .toLowerCase();

    const publicId = `projects/${cleanName}`;

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'projects',
        public_id: publicId,
        overwrite: true,
      });
      console.log(`✅ ${file} → ${result.secure_url}`);
    } catch (error) {
      console.error(`❌ Failed: ${file}:`, error.message);
    }
  }
}

uploadImages();