const fs = require('fs');
const path = require('path');

const srcLabDir = 'c:\\Users\\PSPO-Office2\\nt\\strength-arts\\app\\(public)\\lab\\power';
const destLabDir = 'c:\\Users\\PSPO-Office2\\nt\\strength-arts\\app\\(public)\\lab\\golf';

const srcDataPath = 'c:\\Users\\PSPO-Office2\\nt\\strength-arts\\data\\powerArticles.ts';
const destDataPath = 'c:\\Users\\PSPO-Office2\\nt\\strength-arts\\data\\golfArticles.ts';

// 1. Copy data file
let dataContent = fs.readFileSync(srcDataPath, 'utf8');
dataContent = dataContent.replace(/POWER_ARTICLES/g, 'GOLF_ARTICLES');
dataContent = dataContent.replace(/powerArticles/g, 'golfArticles');
dataContent = dataContent.replace(/\/power\//g, '/golf/');
dataContent = dataContent.replace(/クリーン＆スナッチ/g, 'ゴルフ');
fs.writeFileSync(destDataPath, dataContent);

// 2. Copy Lab directory
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // Replacements
      content = content.replace(/powerArticles/g, 'golfArticles');
      content = content.replace(/POWER_ARTICLES/g, 'GOLF_ARTICLES');
      content = content.replace(/\/lab\/power/g, '/lab/golf');
      content = content.replace(/クリーン＆スナッチ/g, 'ゴルフ');
      content = content.replace(/PW-LAB/g, 'GOLF-LAB');
      content = content.replace(/power/g, 'golf');
      content = content.replace(/Power/g, 'Golf');
      content = content.replace(/POWER/g, 'GOLF');
      // Replace hero image
      content = content.replace(/\/power\.jpg/g, '/golf.jpg');
      
      // Update specific text for golf
      if (entry.name === 'page.tsx' && destPath.includes('lab\\golf\\page.tsx')) {
        content = content.replace('瞬発力とボディコントロール', 'スイングの力学と身体操作');
      }

      fs.writeFileSync(destPath, content);
    }
  }
}

copyDir(srcLabDir, destLabDir);
console.log('Golf lab successfully generated from Power lab template.');
