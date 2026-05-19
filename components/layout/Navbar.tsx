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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={isLoggedIn ? "/dashboard" : "/"} className="font-bold text-xl tracking-tighter text-gray-900">
          STRENGTH <span className="text-gray-400">ARTS</span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium text-gray-600">
            <Link href="/about" className="hover:text-zinc-950 transition-colors">about</Link>
            <Link href="/athlete" className="hover:text-amber-600 transition-colors">アスリート</Link>
            <Link href="/bodymake" className="hover:text-blue-600 transition-colors">ボディメイク</Link>
            <Link href={isLoggedIn ? "/dashboard/academy" : "/academy"} className="hover:text-indigo-600 transition-colors">アカデミー</Link>
            <Link href={isLoggedIn ? "/dashboard/lab" : "/lab"} className="hover:text-purple-600 transition-colors">ラボ</Link>
            <Link href="/free" className="hover:text-emerald-600 transition-colors">無料コンテンツ</Link>
          </nav>

          {isLoggedIn ? (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="text-sm font-medium text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Dashboard
              </Link>
              <form action={signOut}>
                <button className="text-sm text-gray-500 hover:text-gray-900">
                  ログアウト
                </button>
              </form>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                ログイン
              </Link>
              <Link
                href="/signup"
                className="text-sm font-medium text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
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
