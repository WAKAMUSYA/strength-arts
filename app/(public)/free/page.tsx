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
    description: "筋肥大の原理・全体設計を、最初に押さえるためのまとめ。",
    href: getPublicFreeHref("筋肥大の基本.pdf"),
    coverSrc: getPublicFreeHref("筋肥大表紙.png"),
    cta: "PDFを開く",
  },
  {
    title: "腰痛の基本（ジム編）",
    description: "トレーニング現場で多い腰痛の原因と、考え方・対応の整理。",
    href: getPublicFreeHref("腰痛の基本ジム編.pdf"),
    coverSrc: getPublicFreeHref("腰痛の基本ジム編表紙.png"),
    cta: "PDFを開く",
  },
];

export const metadata: Metadata = {
  title: "無料コンテンツ | Strength Arts",
  description: "無料で読めるPDFなどをまとめています。",
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
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          無料で読めるPDFなどをまとめています。気になるものからどうぞ。
        </p>
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
                  priority
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
