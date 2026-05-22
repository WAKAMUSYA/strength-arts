import type { Metadata } from "next";
import Image from "next/image";

const getPublicFreeHref = (fileName: string) =>
  `/free/${encodeURIComponent(fileName)}`;

type FreeItem = {
  title: string;
  description?: string;
  href: string;
  coverSrc?: string;
  cta: string;
};

const FREE_ITEMS: FreeItem[] = [
  {
    title: "筋肥大の基本",
    description:
      "筋肥大を狙うための考え方（種目選び・回数/強度・ボリュームなど）をまとめたPDFです。",
    href: getPublicFreeHref("筋肥大の基本.pdf"),
    coverSrc: getPublicFreeHref("筋肥大表紙.png"),
    cta: "PDFを見る",
  },
  {
    title: "腰痛の基本（ジム編）",
    description:
      "トレーニング時に起こりやすい腰痛の原因と、基本的な対処の方向性を整理したPDFです。",
    href: getPublicFreeHref("腰痛の基本ジム編.pdf"),
    coverSrc: getPublicFreeHref("腰痛の基本ジム編表紙.png"),
    cta: "PDFを見る",
  },
  {
    title: "女性のトレーニング基本",
    description:
      "女性向けのトレーニングの基本（目標設定・頻度・強度・種目選びなど）をまとめたPDFです。",
    href: getPublicFreeHref("女性のトレーニング基本.pdf"),
    coverSrc: getPublicFreeHref("女性のトレーニング基本表紙.png"),
    cta: "PDFを見る",
  },
  {
    title: "高校ハンドボール選手のトレーニング",
    description:
      "高校ハンドボール選手向けに、強化の考え方やトレーニングの組み立て方をまとめたPDFです。",
    href: getPublicFreeHref("高校ハンドボール選手のトレーニング.pdf"),
    coverSrc: getPublicFreeHref("高校ハンドボール選手のトレーニング表紙.png"),
    cta: "PDFを見る",
  },
];

export const metadata: Metadata = {
  title: "まとめコンテンツ | Strength Arts",
  description:
    "読めるPDFコンテンツ（筋肥大、腰痛、女性向けトレーニング、ハンドボールなど）をまとめています。",
};

export default function FreeContentPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200 pb-32 pt-20">
      <main className="mx-auto w-full max-w-6xl px-6">
        <header className="space-y-4 text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-zinc-400">
            CONTENTS
          </p>
          <h1 className="text-3xl font-bold tracking-widest text-white md:text-4xl">
            まとめコンテンツ
          </h1>
        </header>

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FREE_ITEMS.map((item) => (
            <article
              key={item.href}
              className="group rounded-2xl border border-zinc-700 bg-zinc-800 p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-blue-500/50 flex flex-col"
            >
              {item.coverSrc && (
                <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
                  <Image
                    src={item.coverSrc}
                    alt={`${item.title} 表紙`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              <h2 className="text-center text-lg font-bold tracking-wider text-white line-clamp-2 mb-4 group-hover:text-blue-100 transition-colors">
                {item.title}
              </h2>

              {item.description && (
                <p className="text-sm leading-relaxed text-zinc-400 mb-8 text-center flex-grow">
                  {item.description}
                </p>
              )}

              <div className="mt-auto">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold tracking-widest text-black transition-colors hover:bg-blue-50 hover:text-blue-900"
                >
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
