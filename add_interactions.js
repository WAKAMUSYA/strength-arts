const fs = require('fs');
const path = require('path');

const labDir = path.join(__dirname, 'app', '(public)', 'lab');
const dirs = fs.readdirSync(labDir, { withFileTypes: true });

dirs.forEach(dirent => {
  if (dirent.isDirectory()) {
    const labName = dirent.name;
    const slugPagePath = path.join(labDir, labName, '[slug]', 'page.tsx');
    
    // benchpress is already handled (it is a Server Component)
    if (labName === 'benchpress') return;
    
    if (fs.existsSync(slugPagePath)) {
      let content = fs.readFileSync(slugPagePath, 'utf8');
      
      // If already added, skip
      if (content.includes('ArticleInteractionsClient')) return;
      
      // Add import
      const importStatement = `import { ArticleInteractionsClient } from '@/app/components/sa/ArticleInteractionsClient'\n`;
      // Find the last import
      const lastImportIndex = content.lastIndexOf('import ');
      const endOfLastImport = content.indexOf('\n', lastImportIndex);
      if (endOfLastImport !== -1) {
        content = content.substring(0, endOfLastImport + 1) + importStatement + content.substring(endOfLastImport + 1);
      } else {
        content = importStatement + content;
      }
      
      // Add the component before ARTICLE TAGS or BOTTOM NAVIGATION
      const injectMarker1 = '{/* 🚀 ARTICLE TAGS */}';
      const injectMarker2 = '{/* 🚀 BOTTOM NAVIGATION */}';
      const injectMarker3 = '{/* Bottom Navigation */}';
      
      const componentStr = `\n        <ArticleInteractionsClient articleId={\`${labName}/\${slug}\`} />\n\n        `;
      
      let injected = false;
      
      if (content.includes(injectMarker1)) {
        content = content.replace(injectMarker1, componentStr + injectMarker1);
        injected = true;
      } else if (content.includes(injectMarker2)) {
        content = content.replace(injectMarker2, componentStr + injectMarker2);
        injected = true;
      } else if (content.includes(injectMarker3)) {
        content = content.replace(injectMarker3, componentStr + injectMarker3);
        injected = true;
      }
      
      if (injected) {
        fs.writeFileSync(slugPagePath, content);
        console.log(`Injected into ${labName}/[slug]/page.tsx`);
      } else {
        console.log(`Failed to find injection point in ${labName}/[slug]/page.tsx`);
      }
    }
  }
});
