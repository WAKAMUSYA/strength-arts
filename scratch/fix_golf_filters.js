const fs = require('fs');
const dataPath = 'c:\\Users\\PSPO-Office2\\nt\\strength-arts\\app\\(public)\\lab\\golf\\articles\\page.tsx';
let content = fs.readFileSync(dataPath, 'utf8');

// Replace OBSTACLES
content = content.replace(
  /const OBSTACLES = \[\s*\{ label: '飛距離が伸びない'[\s\S]*?\}\s*\]/,
  `const OBSTACLES = [
  { label: '飛距離が伸びない', desc: 'ヘッドスピードが上がらず、ボール初速が出ない' },
  { label: 'スライスが直らない', desc: '軌道がアウトサイドインになり、フェースが開く' },
  { label: 'ダフリ・トップが出る', desc: 'アーリーエクステンション（起き上がり）が起きている' },
  { label: '腰や背中が痛い', desc: '関節の役割分担ができず、腰椎を過剰に捻っている' },
  { label: 'コースでスイングが崩れる', desc: '練習場では打てるのに、本番でフォームが分からなくなる' }
]`
);

// Replace useEffect
const useEffectStart = content.indexOf('useEffect(() => {');
const useEffectEnd = content.indexOf('}, [searchParams])') + 18;
content = content.substring(0, useEffectStart) + `useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam === 'applied') {
      setActiveTab('applied')
    } else if (tabParam === 'program') {
      setActiveTab('program')
    } else if (tabParam === 'basic') {
      setActiveTab('basic')
    }
    
    const obsParam = searchParams.get('obstacle')
    if (obsParam) {
      setSelectedObstacle(obsParam)
    }
  }, [searchParams])` + content.substring(useEffectEnd);

// Replace handleTabChange
const handleTabChangeStart = content.indexOf('const handleTabChange =');
const handleTabChangeEnd = content.indexOf('};', handleTabChangeStart) + 2;
content = content.substring(0, handleTabChangeStart) + `const handleTabChange = (tab: 'basic' | 'applied' | 'program') => {
    setActiveTab(tab);
    setSelectedObstacle(null);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('tab', tab);
    newParams.delete('obstacle');
    router.replace("?" + newParams.toString(), { scroll: false });
  };` + content.substring(handleTabChangeEnd);

// Replace filteredArticles
const filteredArticlesStart = content.indexOf('const filteredArticles =');
const filteredArticlesEnd = content.indexOf('})', filteredArticlesStart) + 2;
content = content.substring(0, filteredArticlesStart) + `const filteredArticles = GOLF_ARTICLES.filter(art => {
    if (selectedObstacle) {
      const OBSTACLE_MAP: Record<string, string[]> = {
        '飛距離が伸びない': ['golf-1', 'golf-6', 'golf-8', 'golf-9', 'golf-15', 'golf-19'],
        'スライスが直らない': ['golf-3', 'golf-4', 'golf-11'],
        'ダフリ・トップが出る': ['golf-7', 'golf-12', 'golf-13', 'golf-21'],
        '腰や背中が痛い': ['golf-2', 'golf-5', 'golf-10', 'golf-14'],
        'コースでスイングが崩れる': ['golf-16', 'golf-17', 'golf-18', 'golf-20', 'golf-21']
      };
      const allowedIds = OBSTACLE_MAP[selectedObstacle] || [];
      return allowedIds.includes(art.id);
    }
    
    return art.type === activeTab;
  })` + content.substring(filteredArticlesEnd);

// Replace tab active styling logic (e.g. activeTab === 'basic')
// We want to add `&& !selectedObstacle`
content = content.replace(/activeTab === 'basic'\n\s*\? 'bg-gradient/g, `activeTab === 'basic' && !selectedObstacle\n                ? 'bg-gradient`);
content = content.replace(/activeTab === 'applied'\n\s*\? 'bg-gradient/g, `activeTab === 'applied' && !selectedObstacle\n                ? 'bg-gradient`);
content = content.replace(/activeTab === 'program'\n\s*\? 'bg-gradient/g, `activeTab === 'program' && !selectedObstacle\n                ? 'bg-gradient`);
content = content.replace(/activeTab === 'basic' \? 'text-emerald-400'/g, `activeTab === 'basic' && !selectedObstacle ? 'text-emerald-400'`);
content = content.replace(/activeTab === 'applied' \? 'text-emerald-400'/g, `activeTab === 'applied' && !selectedObstacle ? 'text-emerald-400'`);
content = content.replace(/activeTab === 'program' \? 'text-emerald-400'/g, `activeTab === 'program' && !selectedObstacle ? 'text-emerald-400'`);

// Replace obstacle button onClick
content = content.replace(/onClick=\{\(\) => setSelectedObstacle\(isActive \? null : obs\.label\)\}/g, `onClick={() => {
                  const newObs = isActive ? null : obs.label;
                  setSelectedObstacle(newObs);
                  const newParams = new URLSearchParams(searchParams.toString());
                  if (newObs) newParams.set('obstacle', newObs);
                  else newParams.delete('obstacle');
                  router.replace("?" + newParams.toString(), { scroll: false });
                }}`);
                
// Also fix the "すべて表示" button
content = content.replace(/onClick=\{\(\) => setSelectedObstacle\(null\)\}/g, `onClick={() => {
              setSelectedObstacle(null);
              const newParams = new URLSearchParams(searchParams.toString());
              newParams.delete('obstacle');
              router.replace("?" + newParams.toString(), { scroll: false });
            }}`);


fs.writeFileSync(dataPath, content);
console.log('Successfully updated obstacle filtering logic.');
