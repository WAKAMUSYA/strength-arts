import Link from "next/link";
import { BookOpen, Dumbbell, FlaskConical, ArrowRight } from "lucide-react";

export default function Home() {
  const sections = [
    {
      title: "SA ACADEMY",
      href: "/academy",
      icon: BookOpen,
      color: "bg-blue-900",
      textColor: "text-blue-900",
      copy: "知識を構造化し、専門性を高める",
      desc: "NSCAベースの理論、解剖学、試験対策(CSCS/CPT)。指導者としての盤石な土台を築く。",
    },
    {
      title: "TRAINING",
      href: "/training",
      icon: Dumbbell,
      color: "bg-red-900",
      textColor: "text-red-900",
      copy: "身体を操作し、力を通す",
      desc: "筋力向上からパフォーマンスアップまで。頭で理解した構造を、自らの肉体で体現する。",
    },
    {
      title: "LAB / OSA",
      href: "/lab",
      icon: FlaskConical,
      color: "bg-purple-900",
      textColor: "text-purple-900",
      copy: "枠組みを超え、真理に触れる",
      desc: "身体哲学、関係性、そして力の在り方。常識を疑い、さらに深い「強さ」の深淵へ。",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-950 text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            強さの構造を、解き明かす。
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            トレーニング、科学、身体操作、そして哲学。
            <br className="hidden md:block" />
            すべては「一つ」に繋がっている。
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* 3 Entry Points */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 relative z-20 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.title}
                href={section.href}
                className="group block bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`h-3 ${section.color}`} />
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gray-50 group-hover:${section.color} group-hover:text-white transition-colors`}>
                    <Icon className={`w-7 h-7 ${section.textColor} group-hover:text-white transition-colors`} />
                  </div>
                  <h2 className="text-xl font-bold mb-2 tracking-tight">
                    {section.title}
                  </h2>
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">
                    {section.copy}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {section.desc}
                  </p>
                  <div className={`flex items-center text-sm font-bold ${section.textColor}`}>
                    Explore <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
