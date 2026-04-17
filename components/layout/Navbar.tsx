import Link from "next/link";
import { Menu } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={user ? "/dashboard" : "/"} className="font-bold text-xl tracking-tighter text-gray-900">
          STRENGTH <span className="text-gray-400">ARTS</span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <Link href={user ? "/dashboard/academy" : "/academy"} className="hover:text-blue-600 transition-colors">ACADEMY</Link>
            <Link href={user ? "/dashboard/training" : "/training"} className="hover:text-red-600 transition-colors">TRAINING</Link>
            <Link href={user ? "/dashboard/lab" : "/lab"} className="hover:text-purple-600 transition-colors">LAB</Link>
          </nav>

          {user ? (
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
          <MobileMenu isLoggedIn={!!user} signOutAction={signOut} />
        </div>
      </div>
    </header>
  );
}
