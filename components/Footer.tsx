'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800">
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              Strength Arts
            </h3>
            <p className="text-gray-400 text-sm">
              科学、トレーニング、感覚、そして哲学を通じて強さを探求する。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">探索</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">について</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">プログラム</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">リソース</a></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold text-white mb-4">プラットフォーム</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">たむ研</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">OSA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">コミュニティ</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">つながる</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Strength Arts. すべての権利を保有します。 | <a href="#" className="hover:text-gray-300">プライバシー</a> | <a href="#" className="hover:text-gray-300">利用規約</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
