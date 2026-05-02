import { CheckCircle2 } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-white border-4 border-slate-900 rounded-[3rem] p-8 lg:p-20 shadow-pop-black flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-display font-black text-4xl lg:text-5xl mb-8 leading-tight">Uma forma simples de ensinar a Bíblia todos os dias</h2>
            <p className="text-lg text-slate-600 mb-10 font-medium">
              O <span className="font-black text-brand-yellow">Play na Fé</span> transforma minutos do dia em momentos com Deus. Receba <span className="font-black text-brand-blue">12 jogos + 3 bônus</span> prontos para imprimir — pensados para ensinar de forma leve e divertida.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {["Sem planejar nada", "Sem complicação", "Fácil de aplicar", "Zero telas"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-display font-bold text-slate-800">
                  <div className="w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <a href="#preco">
              <button className="bg-brand-blue text-white px-10 py-5 rounded-full text-xl font-display font-black shadow-[8px_8px_0_#2563EB] border-2 border-brand-blue-dark hover:brightness-105 transition-all">
                VER O KIT COMPLETO
              </button>
            </a>
          </div>
          <div className="flex-1 w-full max-w-sm">
            <div className="grid grid-cols-3 gap-3">
              {["📜","🔤","📖","🎲","❌","✏️","🧩","❓","🧠","👀","🏆","✝️"].map((e, i) => (
                <div key={i} className="aspect-square bg-brand-cream rounded-2xl border-2 border-slate-200 flex items-center justify-center text-3xl hover:scale-110 hover:rotate-3 transition-all cursor-default shadow-pop-white">
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
