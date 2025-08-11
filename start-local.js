#!/usr/bin/env node

// Node.js 18 compatible startup script
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting Node.js 18 compatible portfolio server...');

// Set environment variables
process.env.NODE_ENV = 'development';

// Start the server using the Node.js 18 compatible version
const serverPath = join(__dirname, 'server', 'index.local.ts');

const child = spawn('npx', ['tsx', serverPath], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

child.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  process.exit(code);
});

child.on('error', (error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  child.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down server...');
  child.kill('SIGTERM');
});