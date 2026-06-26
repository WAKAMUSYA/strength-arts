import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {

  const signOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter text-white">
          STRENGTH <span className="text-red-600">ARTS</span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium text-zinc-300">
            <Link href="/about" className="hover:text-white transition-colors">SAについて</Link>
            <Link href="/athlete" className="hover:text-red-400 transition-colors">競技別</Link>
            <Link href="/bodymake" className="hover:text-red-400 transition-colors">トレーニング</Link>
            <Link href="/special" className="hover:text-red-400 transition-colors">スペシャル</Link>
            <Link href={isLoggedIn ? "/dashboard/lab" : "/lab"} className="hover:text-red-400 transition-colors">研究所一覧</Link>
            <Link href="/project" className="hover:text-red-400 transition-colors">プロジェクト</Link>
          </nav>

          {isLoggedIn ? (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="text-sm font-medium text-black bg-white px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors"
              >
                Dashboard
              </Link>
              <form action={signOut}>
                <button className="text-sm text-zinc-400 hover:text-white transition-colors">
                  ログアウト
                </button>
              </form>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                ログイン
              </Link>
              <Link
                href="/signup"
                className="text-sm font-medium text-black bg-white px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors"
              >
                新規登録
              </Link>
            </div>
          )}
          <MobileMenu isLoggedIn={isLoggedIn} signOutAction={signOut} />
        </div>
      </div>
    </header>
  );
}
