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
    title: "高校ハンドボール選手のトレーニング",
    description:
      "高校ハンドボール選手向けに、強化の考え方やトレーニングの組み立て方をまとめたPDFです。",
    href: getPublicFreeHref("高校ハンドボール選手のトレーニング.pdf"),
    coverSrc: getPublicFreeHref("高校ハンドボール選手のトレーニング表紙.png"),
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
];

export const metadata: Metadata = {
  title: "無料コンテンツ | Strength Arts",
  description:
    "無料で読めるPDFコンテンツ（筋肥大、腰痛、女性向けトレーニング、ハンドボールなど）をまとめています。",
};

export default function FreeContentPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
          FREE CONTENTS
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          無料コンテンツ
        </h1>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FREE_ITEMS.map((item) => (
          <article
            key={item.href}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {item.coverSrc && (
              <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <Image
                  src={item.coverSrc}
                  alt={`${item.title} 表紙`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}

            <h2 className="text-center text-base font-bold text-slate-900 line-clamp-2 md:text-lg">
              {item.title}
            </h2>

            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            )}

            <div className="mt-4">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                {item.cta}
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
