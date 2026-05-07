import Image from "next/image";

const PDF_FILE_NAME = "筋肥大の基本.pdf";
const PDF_HREF = `/free/${encodeURIComponent(PDF_FILE_NAME)}`;
const COVER_FILE_NAME = "筋肥大表紙.png";
const COVER_SRC = `/free/${encodeURIComponent(COVER_FILE_NAME)}`;

type FreeItem = {
  title: string;
  href: string;
  coverSrc?: string;
  cta: string;
};

const FREE_ITEMS: FreeItem[] = [
  {
    title: "筋肥大の基本",
    href: PDF_HREF,
    coverSrc: COVER_SRC,
    cta: "PDFを開く",
  },
];

export default function FreeContentPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
          FREE CONTENTS
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
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
              <div className="relative mb-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 aspect-[4/5]">
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
            <h2 className="text-center text-base md:text-lg font-bold text-slate-900 line-clamp-2">
              {item.title}
            </h2>

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
