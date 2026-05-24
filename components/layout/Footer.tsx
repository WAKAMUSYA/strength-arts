import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-12 md:py-16 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo / Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block text-xl font-bold tracking-tighter text-gray-900 mb-4">
              STRENGTH <span className="text-[#800020]">ARTS</span>
            </Link>
            <p className="text-sm font-light leading-relaxed">
              身体を、もっと上手く使う。
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-gray-900 text-sm font-bold tracking-widest uppercase">Explore</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link href="/" className="hover:text-gray-900 transition-colors">ホーム</Link></li>
                <li><Link href="/about" className="hover:text-gray-900 transition-colors">SAについて</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-900 text-sm font-bold tracking-widest uppercase">Contents</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link href="/athlete" className="hover:text-gray-900 transition-colors">アスリート</Link></li>
                <li><Link href="/bodymake" className="hover:text-gray-900 transition-colors">ボディメイク</Link></li>
                <li><Link href="/special" className="hover:text-gray-900 transition-colors">スペシャル</Link></li>
                <li><Link href="/lab" className="hover:text-gray-900 transition-colors">研究所一覧</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-900 text-sm font-bold tracking-widest uppercase">Projects</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link href="/project" className="hover:text-gray-900 transition-colors">プロジェクト</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light tracking-widest text-gray-500">
            &copy; {new Date().getFullYear()} STRENGTH ARTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
