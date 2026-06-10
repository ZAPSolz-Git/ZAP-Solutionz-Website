// scripts/upload-frames.mjs
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env.local") });

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error("❌ Missing Cloudinary credentials. Check your .env.local file.");
  process.exit(1);
}

cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });

async function uploadFolder(localFolder, cloudinaryFolder) {
  const files = fs.readdirSync(localFolder)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort();

  console.log(`\nUploading ${files.length} files → ${cloudinaryFolder}...`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const localPath = path.join(localFolder, file);
    const publicId = `${cloudinaryFolder}/${path.parse(file).name}`;

    try {
      await cloudinary.uploader.upload(localPath, {
        public_id: publicId,
        overwrite: false,
        resource_type: "image",
      });
      console.log(`✓ [${i + 1}/${files.length}] ${file}`);
    } catch (err) {
      console.error(`✗ Failed: ${file}`, err.message);
    }
  }
}

// ✅ Correct local paths matching your actual folder structure
await uploadFolder("public/images/First Frames", "zapsolution/frames-1");
await uploadFolder("public/images/Second Frames", "zapsolution/frames-2");

console.log("\n✅ Frames upload done!");