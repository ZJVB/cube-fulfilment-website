import { cpSync } from 'fs';
cpSync('./assets/images', './public/images', { recursive: true });
console.log('Assets copied to public/images');
