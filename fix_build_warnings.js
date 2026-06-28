const fs = require('fs');
const path = require('path');

const labDir = path.join(__dirname, 'app', '(public)', 'lab');
const dirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

for (const cat of dirs) {
  const slugPagePath = path.join(labDir, cat, '[slug]', 'page.tsx');
  const articlesPagePath = path.join(labDir, cat, 'articles', 'page.tsx');

  if (fs.existsSync(slugPagePath)) {
    let code = fs.readFileSync(slugPagePath, 'utf8');
    // 'useEffect' is declared but its value is never read.
    code = code.replace(/import React, \{ useEffect \} from 'react'/g, "import React from 'react'");
    code = code.replace(/import \{ useEffect, React \} from 'react'/g, "import React from 'react'");
    fs.writeFileSync(slugPagePath, code);
  }

  if (fs.existsSync(articlesPagePath)) {
    let code = fs.readFileSync(articlesPagePath, 'utf8');
    // 'isLoggedIn' is declared but its value is never read.
    code = code.replace(/\s*const \[isLoggedIn, setIsLoggedIn\] = useState<boolean \| null>\(null\)\r?\n/g, '\n');
    code = code.replace(/\s*setIsLoggedIn\(!!status\.user\)\r?\n/g, '\n');
    fs.writeFileSync(articlesPagePath, code);
  }
}
