const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', '(public)', 'lab', 'benchpress', 'articles', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Add Lock import
if (!content.includes('Lock')) {
    content = content.replace('Activity\n} from \'lucide-react\'', 'Activity,\n  Lock\n} from \'lucide-react\'');
}

// 2. Add createClient import
if (!content.includes('@/utils/supabase/client')) {
    content = content.replace("import { CheckCircle2 } from 'lucide-react'", "import { createClient } from '@/utils/supabase/client'\nimport { CheckCircle2 } from 'lucide-react'");
}

// 3. Update state and checkAuth
const hookTarget = `  const [statuses, setStatuses] = useState<Record<string, { isFavorite: boolean; isRead: boolean }>>({})

  useEffect(() => {
    const fetchStatuses = async () => {`;

const hookReplacement = `  const [statuses, setStatuses] = useState<Record<string, { isFavorite: boolean; isRead: boolean }>>({})
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }
    checkAuth()

    const fetchStatuses = async () => {`;

if (content.includes(hookTarget) && !content.includes('const [isAuthenticated, setIsAuthenticated] = useState')) {
    content = content.replace(hookTarget, hookReplacement);
}

// 4. Inject Overlay
const overlayTarget = `          >
            {/* Soft decorative accent glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />`;

const overlayReplacement = `          >
            {/* Hover overlay for non-members */}
            {isAuthenticated === false && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center rounded-2xl pointer-events-none">
                <div className="bg-zinc-900 border border-zinc-800 text-white text-xs font-bold px-5 py-3 rounded-full flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Lock className="w-4 h-4 text-blue-400" />
                  会員限定コンテンツ（一部無料公開）
                </div>
              </div>
            )}

            {/* Soft decorative accent glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />`;

if (content.includes(overlayTarget) && !content.includes('Hover overlay for non-members')) {
    content = content.replace(overlayTarget, overlayReplacement);
}

fs.writeFileSync(file, content);
console.log('Successfully updated page.tsx with Lock overlay');
