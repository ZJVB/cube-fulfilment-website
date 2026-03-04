import { cpSync, mkdirSync } from 'fs';
const base = '/vercel/share/v0-project';
mkdirSync(`${base}/public/images`, { recursive: true });
cpSync(`${base}/assets/images`, `${base}/public/images`, { recursive: true });
console.log('Assets copied to public/images');
