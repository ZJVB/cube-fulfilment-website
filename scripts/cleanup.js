import { rmSync, existsSync } from 'fs';

const base = '/vercel/share/v0-project';

const dirsToRemove = ['.nuxt', '.output', 'node_modules'];

for (const dir of dirsToRemove) {
  const fullPath = `${base}/${dir}`;
  if (existsSync(fullPath)) {
    console.log(`Removing ${dir}...`);
    rmSync(fullPath, { recursive: true, force: true });
    console.log(`Removed ${dir}`);
  } else {
    console.log(`${dir} does not exist, skipping`);
  }
}

console.log('Cleanup complete. Next npm install will use the Next.js package.json.');
