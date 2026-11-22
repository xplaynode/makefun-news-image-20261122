// news-image-20261122 entry: sums up 22 November 2026 in one image.
// The image beside this file (entry.png) shows a lone globe waiting on an
// empty summit negotiating table under a large wall clock: the COP31
// climate talks in Antalya, Turkiye, deadlocked over fossil fuels and
// running into overtime on Sunday 22 November 2026. A caption band under
// the image names the day and the event. The program copies that image
// to /output/entry.png (no network needed).
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs this twice; both runs must copy the same bytes.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const srcPath = fileURLToPath(new URL('./entry.png', import.meta.url));

if (!existsSync(srcPath)) {
  throw new Error(`entry.png not found at ${srcPath}`);
}

// The gate accepts a whole PNG or JPEG, told apart by first bytes.
const header = readFileSync(srcPath).subarray(0, 3);
const isPng = header[0] === 0x89 && header[1] === 0x50 && header[2] === 0x4e;
const isJpeg = header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error('entry.png is neither PNG nor JPEG');
}

// The gate also caps the image at 1 MiB; fail loudly instead of copying
// an oversize file that would be scored invalid.
const srcSize = statSync(srcPath).size;
if (srcSize > 1_048_576) {
  throw new Error(`entry.png is ${srcSize} bytes, over the 1 MiB gate limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const destPath = join(outDir, 'entry.png');
copyFileSync(srcPath, destPath);
console.log(`Copied ${statSync(destPath).size} bytes to ${destPath}`);
