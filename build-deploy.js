#!/usr/bin/env node

/**
 * Build script for GitHub Pages deployment
 * Compatible with Node.js 20+
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Building portfolio for GitHub Pages deployment...\n');

try {
  // Clean previous build
  console.log('🧹 Cleaning previous build...');
  if (fs.existsSync(path.join(__dirname, 'dist'))) {
    fs.rmSync(path.join(__dirname, 'dist'), { recursive: true, force: true });
  }

  // Build using the deploy config
  console.log('📦 Building React application...');
  execSync('npx vite build --config vite.config.deploy.ts', {
    stdio: 'inherit',
    cwd: __dirname
  });

  // Copy index.html to root for GitHub Pages
  console.log('📋 Copying index.html to root...');
  const distIndex = path.join(__dirname, 'dist', 'index.html');
  const rootIndex = path.join(__dirname, 'index.html');
  
  if (fs.existsSync(distIndex)) {
    fs.copyFileSync(distIndex, rootIndex);
    console.log('✅ index.html copied to root');
  } else {
    throw new Error('Built index.html not found in dist folder');
  }

  // Create a simple 404.html for GitHub Pages SPA support
  console.log('📄 Creating 404.html for SPA support...');
  const index404 = path.join(__dirname, '404.html');
  fs.copyFileSync(rootIndex, index404);
  console.log('✅ 404.html created');

  // Copy all assets to root level for GitHub Pages
  console.log('📁 Copying assets to root...');
  const distDir = path.join(__dirname, 'dist');
  const files = fs.readdirSync(distDir);
  
  files.forEach(file => {
    if (file !== 'index.html') {
      const srcPath = path.join(distDir, file);
      const destPath = path.join(__dirname, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        // Copy directory recursively
        if (fs.existsSync(destPath)) {
          fs.rmSync(destPath, { recursive: true, force: true });
        }
        fs.cpSync(srcPath, destPath, { recursive: true });
      } else {
        // Copy file
        fs.copyFileSync(srcPath, destPath);
      }
    }
  });

  console.log('\n✅ Build completed successfully!');
  console.log('\n📋 GitHub Pages Setup Instructions:');
  console.log('1. Push all files to your GitHub repository');
  console.log('2. Go to Settings > Pages in your GitHub repo');
  console.log('3. Select "Deploy from a branch"');
  console.log('4. Choose "main" branch and "/ (root)" folder');
  console.log('5. Your portfolio will be available at: https://username.github.io/repository-name/');
  console.log('\n🌟 Files ready for GitHub Pages deployment!');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}