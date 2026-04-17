'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  isLoggedIn: boolean;
  signOutAction?: (formData: FormData) => void;
};

export default function MobileMenu({ isLoggedIn, signOutAction }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ルートが変更されたらメニューを閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // メニューが開いているときは背景のスクロールを無効化
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-md border-t border-gray-100 flex flex-col pt-8 px-8 overflow-y-auto pb-24">
          <nav className="flex flex-col space-y-6 text-xl font-bold text-gray-800">
            <Link href={isLoggedIn ? "/dashboard/academy" : "/academy"} className="hover:text-blue-600 transition-colors">ACADEMY</Link>
            <Link href={isLoggedIn ? "/dashboard/training" : "/training"} className="hover:text-red-600 transition-colors">TRAINING</Link>
            <Link href={isLoggedIn ? "/dashboard/lab" : "/lab"} className="hover:text-purple-600 transition-colors">LAB</Link>
            
            <div className="h-px bg-gray-200 w-full my-4"></div>
            
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
                {signOutAction && (
                  <form action={signOutAction}>
                    <button type="submit" className="text-left text-gray-500 hover:text-gray-900">
                      ログアウト
                    </button>
                  </form>
                )}
              </>
            ) : (
              <div className="flex flex-col space-y-4">
                <Link href="/login" className="text-gray-600 hover:text-gray-900">
                  ログイン
                </Link>
                <Link href="/signup" className="text-gray-600 hover:text-gray-900">
                  新規登録
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
