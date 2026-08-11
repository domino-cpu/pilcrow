/*
  Generates warm, on-brand placeholder images so the template looks finished
  out of the box. On customization, replace the files in /public/images with
  real photography of the same name and dimensions. Re-run with:
    node scripts/generate-placeholders.mjs
*/
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "public", "images");
mkdirSync(OUT, { recursive: true });

// Tender palette
const CREAM = "#FDF6F3";
const CREAM_DEEP = "#F6E7E1";
const SAGE = "#7A896B";
const TERRA = "#CF8569";
const INK = "#45362B";
const BORDER = "#EDDCD5";

function grain(w, h) {
  // Subtle fibrous texture so the placeholder reads like paper, not a flat box.
  return `<filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope="0.05"/></feComponentTransfer><feComposite operator="over" in2="SourceGraphic"/></filter>`;
}

function portraitSVG(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0" stop-color="${CREAM_DEEP}"/>
        <stop offset="1" stop-color="${SAGE}" stop-opacity="0.55"/>
      </linearGradient>
      ${grain(w, h)}
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <!-- soft light source, top-left, like window light -->
    <ellipse cx="${w * 0.32}" cy="${h * 0.3}" rx="${w * 0.5}" ry="${h * 0.45}" fill="${CREAM}" opacity="0.5"/>
    <!-- abstract shoulders / portrait silhouette -->
    <circle cx="${w * 0.5}" cy="${h * 0.42}" r="${w * 0.19}" fill="${INK}" opacity="0.14"/>
    <path d="M${w * 0.16} ${h} C ${w * 0.2} ${h * 0.74}, ${w * 0.36} ${h * 0.66}, ${w * 0.5} ${h * 0.66} C ${w * 0.64} ${h * 0.66}, ${w * 0.8} ${h * 0.74}, ${w * 0.84} ${h} Z" fill="${INK}" opacity="0.14"/>
    <rect width="${w}" height="${h}" fill="transparent" filter="url(#g)"/>
    <rect x="6" y="6" width="${w - 12}" height="${h - 12}" fill="none" stroke="${BORDER}" stroke-width="2"/>
    <text x="${w * 0.5}" y="${h * 0.5}" font-family="Georgia, serif" font-size="${w * 0.05}" fill="${INK}" opacity="0.5" text-anchor="middle" dominant-baseline="middle">portrait.jpg</text>
    <text x="${w * 0.5}" y="${h * 0.5 + w * 0.05}" font-family="Georgia, serif" font-size="${w * 0.028}" fill="${INK}" opacity="0.4" text-anchor="middle">replace with your headshot</text>
  </svg>`;
}

function officeSVG(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${CREAM}"/>
        <stop offset="1" stop-color="${CREAM_DEEP}"/>
      </linearGradient>
      ${grain(w, h)}
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect x="${w * 0.08}" y="${h * 0.18}" width="${w * 0.28}" height="${h * 0.64}" fill="${SAGE}" opacity="0.16"/>
    <rect x="${w * 0.42}" y="${h * 0.34}" width="${w * 0.5}" height="${h * 0.34}" fill="${TERRA}" opacity="0.14"/>
    <circle cx="${w * 0.7}" cy="${h * 0.26}" r="${w * 0.05}" fill="${TERRA}" opacity="0.2"/>
    <rect width="${w}" height="${h}" fill="transparent" filter="url(#g)"/>
    <text x="${w * 0.5}" y="${h * 0.5}" font-family="Georgia, serif" font-size="${w * 0.03}" fill="${INK}" opacity="0.45" text-anchor="middle" dominant-baseline="middle">office.jpg</text>
  </svg>`;
}

function ogSVG(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0" stop-color="${CREAM}"/>
        <stop offset="1" stop-color="${CREAM_DEEP}"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect x="0" y="0" width="10" height="${h}" fill="${TERRA}"/>
    <text x="80" y="${h * 0.42}" font-family="Georgia, serif" font-size="64" font-style="italic" fill="${INK}">Maya Okonkwo, LPC</text>
    <text x="80" y="${h * 0.56}" font-family="Georgia, serif" font-size="30" fill="${SAGE}" font-style="italic">A therapist for the ones who hold everyone together</text>
    <text x="80" y="${h * 0.82}" font-family="Arial, sans-serif" font-size="22" letter-spacing="3" fill="${INK}" opacity="0.6">AUSTIN, TEXAS</text>
  </svg>`;
}

async function write(name, svg) {
  await sharp(Buffer.from(svg)).jpeg({ quality: 82, mozjpeg: true }).toFile(join(OUT, name));
  console.log("wrote", name);
}

await write("portrait.jpg", portraitSVG(1200, 1500));
await write("office.jpg", officeSVG(1600, 1100));
await write("og-image.jpg", ogSVG(1200, 630));
console.log("done");
