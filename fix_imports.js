const fs = require('fs');
const path = require('path');

const labDir = path.join(__dirname, 'app', '(public)', 'lab');
const dirs = fs.readdirSync(labDir).filter(f => fs.statSync(path.join(labDir, f)).isDirectory());

for (const cat of dirs) {
  if (cat === 'benchpress') continue;
  
  const p = path.join(labDir, cat, '[slug]', 'page.tsx');
  if (fs.existsSync(p)) {
    let code = fs.readFileSync(p, 'utf8');
    code = code.replace(/notFound \} from 'next\/navigation'/g, "import { notFound } from 'next/navigation'");
    fs.writeFileSync(p, code);
  }
}
