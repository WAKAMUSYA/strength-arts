const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'zijuArticles.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Isolate the JS object part
const codeBefore = content.substring(0, content.indexOf('export const ZIJU_ARTICLES'));
const arrayPartStr = content.substring(content.indexOf('[\n  {\n    "id": "ziju-1"'));

// Temporarily eval the array
const arrayScript = `module.exports = ${arrayPartStr.trim()}`;
const tempPath = path.join(__dirname, 'tempArray.js');
fs.writeFileSync(tempPath, arrayScript, 'utf8');

const articles = require('./tempArray.js');

articles.forEach(article => {
  let overview = article.overview;
  
  // Fix incomplete sentences ending with grammar particles + "。"
  if (overview.endsWith('ついて。')) {
    overview = overview.replace(/について。$/, 'について解説します。');
  } else if (overview.endsWith('アプローチを。')) {
    overview = overview.replace(/アプローチを。$/, 'アプローチを徹底解剖します。');
  } else if (overview.endsWith('至るまで。')) {
    overview = overview.replace(/至るまで。$/, '至るまで解剖します。');
  } else if (overview.endsWith('メカニズム。')) {
    overview = overview.replace(/メカニズム。$/, 'メカニズムを解説します。');
  } else if (overview.endsWith('メカニズムについて。')) {
    overview = overview.replace(/メカニズムについて。$/, 'メカニズムについて解説します。');
  }
  
  // If my previous regex stripped the entire sentence, leaving it ending in a weird way
  // E.g. "物理学の観点からマッスルアップを" -> wait, my regex was /2000文字[^。]*。/
  // So "物理学の観点からマッスルアップを2000文字以上の深さで徹底的に解剖します。"
  // became "物理学の観点からマッスルアップを"
  if (overview.endsWith('マッスルアップを')) {
    overview += '徹底的に解剖します。';
  } else if (overview.endsWith('プログレッションについて')) {
    overview += '詳細に解説します。';
  } else if (overview.endsWith('視点から論じます。')) {
    // maybe intact
  } else if (overview.match(/を$/)) {
    overview += '解説します。';
  } else if (overview.match(/について$/)) {
    overview += '解説します。';
  } else if (overview.match(/から$/)) {
    overview += '解き明かします。';
  } else if (overview.match(/で$/)) {
    overview += '深掘りします。';
  }
  
  article.overview = overview;
});

const newContent = codeBefore + 'export const ZIJU_ARTICLES: Article[] = ' + JSON.stringify(articles, null, 2) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
fs.unlinkSync(tempPath);

console.log('Fixed overviews.');
