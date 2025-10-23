import fs from "fs";
import path from "path";

const bannerDir = path.join(process.cwd(), "public", "assets", "banners");
const files = fs.readdirSync(bannerDir).filter(f => /\.(jpg|jpeg|png|gif|webp)$/.test(f));

fs.writeFileSync(
    path.join(process.cwd(), "src", "constants", "banners.json"),
    JSON.stringify(files.map(f => `/assets/banners/${f}`), null, 2)
);

console.log(`Banners generated: ${files.length} banners generated.`);