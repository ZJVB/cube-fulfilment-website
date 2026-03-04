import { execSync } from 'child_process';

console.log('Updating caniuse-lite database...');
try {
  execSync('npx update-browserslist-db@latest --update-db', {
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit',
  });
  console.log('caniuse-lite database updated successfully.');
} catch (err) {
  console.error('Failed to update caniuse-lite:', err.message);
}
