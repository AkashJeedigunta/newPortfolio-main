#!/usr/bin/env node

/**
 * Modern Node.js 20+ development server startup script
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting modern Node.js 20+ portfolio server...');

// Set environment variables
process.env.NODE_ENV = 'development';

// Start the server using the modern version
const serverPath = join(__dirname, 'server', 'index.modern.ts');

const child = spawn('npx', ['tsx', serverPath], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

child.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  process.exit(code || 0);
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