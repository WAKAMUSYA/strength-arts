const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', '(auth)', 'dashboard', 'academy', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Change text
content = content.replace('CPT 問題集', 'CPT 資格対策 模擬テスト');
content = content.replace('CPT向けの基礎問題（スクリーニング/評価/設計）', '全150問（30問×5ブロック）の実践テスト');

// 2. Swap the two details blocks
const cscsStartMarker = `<details className="mb-12 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">
        <summary className="w-full flex items-center justify-between p-5 md:p-6 bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 text-left">CSCS 資格対策 模擬テスト</h2>`;

const cptStartMarker = `<details className="mb-12 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">
        <summary className="w-full flex items-center justify-between p-5 md:p-6 bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 text-left">CPT 資格対策 模擬テスト</h2>`; // since we already replaced the text

// Find the boundaries
// We can just use split since we know the exact structure
const parts = content.split('<details className="mb-12 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">');

if (parts.length === 3) {
    // parts[0] is everything before the first details
    // parts[1] is CSCS details (up to the next <details>)
    // parts[2] is CPT details (up to the end of details, followed by the rest)
    
    const prefix = parts[0];
    const cscsBlock = '<details className="mb-12 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">' + parts[1];
    
    // We need to separate the CPT details block from the rest of the code (the basic theory sections)
    // The CPT block ends with </details>
    const cptPart = '<details className="mb-12 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">' + parts[2];
    const cptEndIndex = cptPart.indexOf('</details>') + '</details>'.length;
    
    const cptBlock = cptPart.substring(0, cptEndIndex) + '\n\n      ';
    const rest = cptPart.substring(cptEndIndex).trimStart();
    
    // Reconstruct with CPT first
    content = prefix + cptBlock + cscsBlock + rest;
    
    fs.writeFileSync(file, content);
    console.log('Successfully swapped CPT and CSCS blocks in dashboard/academy/page.tsx');
} else {
    console.log('Could not parse the details blocks correctly. parts length:', parts.length);
}
