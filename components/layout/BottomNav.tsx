"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Bookmark, User, Dumbbell, Beaker } from "lucide-react";

export default function BottomNav({ isLoggedIn }: { isLoggedIn?: boolean }) {
  const pathname = usePathname();

  // URLから現在の「研究所」を判定する
  // 例: /lab/benchpress/... -> currentLabId = "benchpress"
  let currentLabId: string | null = null;
  if (pathname.startsWith('/lab/')) {
    const parts = pathname.split('/');
    if (parts.length > 2 && parts[2]) {
      currentLabId = parts[2];
    }
  }

  // リンクとアイコンの動的切り替え
  let centerHref = "/";
  let articlesHref = "/lab"; // 研究所外でのデフォルト
  let CenterIcon = null;
  let centerImgSrc = "/sa-logo-maru.png"; // 母艦SAデフォルト

  if (currentLabId === 'benchpress') {
    centerHref = "/lab/benchpress";
    articlesHref = "/lab/benchpress/articles";
    centerImgSrc = ""; 
    CenterIcon = Dumbbell; // ベンチプレス研究所用ダミーアイコン
  } else if (currentLabId) {
    // ベンチプレス以外の未知の研究所の場合のフォールバック
    centerHref = `/lab/${currentLabId}`;
    articlesHref = `/lab/${currentLabId}/articles`;
    centerImgSrc = "";
    CenterIcon = Beaker;
  }

  return (
    <nav className="fixed bottom-0 w-full bg-white/85 backdrop-blur-xl border-t border-slate-200 pb-safe md:hidden z-50">
      <div className="flex justify-around items-end h-[68px] px-2 pb-2">
        
        {/* 左①：SA 母艦トップ */}
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center w-[20%] space-y-1 transition-colors duration-200 ${
            pathname === "/" ? "text-blue-600" : "text-slate-400 hover:text-slate-800"
          }`}
        >
          <Home className={`w-[22px] h-[22px] ${pathname === "/" ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
          <span className="text-[9px] font-bold tracking-wider">SA</span>
        </Link>

        {/* 左②：コラム一覧 */}
        <Link 
          href={articlesHref} 
          className={`flex flex-col items-center justify-center w-[20%] space-y-1 transition-colors duration-200 ${
            pathname.includes("/articles") ? "text-blue-600" : "text-slate-400 hover:text-slate-800"
          }`}
        >
          <BookOpen className={`w-[22px] h-[22px] ${pathname.includes("/articles") ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
          <span className="text-[9px] font-bold tracking-wider">コラム</span>
        </Link>

        {/* 中央：現在のページロゴ（浮いたFAB風） */}
        <div className="w-[20%] flex justify-center relative h-full">
          <Link 
            href={centerHref} 
            className="absolute -top-5 flex items-center justify-center w-14 h-14 bg-zinc-950 text-white rounded-full shadow-lg shadow-black/15 border-4 border-white hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {centerImgSrc ? (
              <Image 
                src={centerImgSrc} 
                alt="Logo" 
                fill 
                className="rounded-full object-cover p-0.5" 
              />
            ) : CenterIcon ? (
              <CenterIcon className="w-6 h-6 text-white" />
            ) : null}
          </Link>
        </div>

        {/* 右①：ライブラリ (将来実装ダミー) */}
        <button 
          className="flex flex-col items-center justify-center w-[20%] space-y-1 text-slate-300 cursor-not-allowed transition-colors duration-200"
          onClick={() => alert("ライブラリ機能（保存記事・学習履歴）は将来実装予定です。")}
        >
          <Bookmark className="w-[22px] h-[22px] stroke-[2px]" />
          <span className="text-[9px] font-bold tracking-wider">ライブラリ</span>
        </button>

        {/* 右②：マイページ */}
        <Link 
          href="/mypage" 
          className={`flex flex-col items-center justify-center w-[20%] space-y-1 transition-colors duration-200 ${
            pathname.startsWith("/mypage") ? "text-blue-600" : "text-slate-400 hover:text-slate-800"
          }`}
        >
          <User className={`w-[22px] h-[22px] ${pathname.startsWith("/mypage") ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
          <span className="text-[9px] font-bold tracking-wider">マイページ</span>
        </Link>

      </div>
    </nav>
  );
}
