import { Gift } from "lucide-react";
import { useInView } from "../hooks/useInView";

const bonuses = [
  { num: 1, name: "Guia de Como Plastificar", desc: "Aprenda a plastificar seus jogos para durarem muito mais!", price: 10, emoji: "📋" },
  { num: 2, name: "Meu Primeiro Guia de Oração", desc: "Ensine seu filho a orar com esse guia ilustrado e carinhoso.", price: 5, emoji: "🙏" },
  { num: 3, name: "A História da Salvação", desc: "A maior história já contada, adaptada para os pequenos.", price: 5, emoji: "✝️" },
];

function BonusCard({ bonus, index }: { bonus: typeof bonuses[0]; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll delay-${index} relative gradient-bonus rounded-[2rem] border-3 border-brand-yellow p-8 text-center hover:scale-105 transition-transform ${isInView ? "in-view" : ""}`}
    >
      <div className="absolute -top-3 -right-3 bg-brand-green text-white font-display font-black text-xs px-3 py-1.5 rounded-full border-2 border-white shadow-lg">
        GRÁTIS
      </div>
      <div className="text-5xl mb-4">{bonus.emoji}</div>
      <div className="font-display font-black text-brand-yellow-dark text-xs tracking-widest mb-2">BÔNUS {bonus.num}</div>
      <h3 className="font-display font-black text-lg text-slate-900 mb-3">{bonus.name}</h3>
      <p className="text-slate-600 text-sm font-medium mb-4 leading-relaxed">{bonus.desc}</p>
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm text-slate-400 font-bold line-through-red">R${bonus.price}</span>
        <span className="text-sm font-display font-black text-brand-green">R$0</span>
      </div>
    </div>
  );
}

export default function Bonuses() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-green/10 text-brand-green font-display font-black text-sm px-4 py-2 rounded-full mb-6 border border-brand-green/20">
            <Gift className="w-4 h-4 inline mr-1 -mt-0.5" /> BÔNUS EXCLUSIVOS
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl mb-4 text-slate-900">
            + 3 Bônus <span className="text-brand-green">Grátis</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">Materiais extras que você recebe junto com o kit, sem pagar nada a mais!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus, i) => (
            <BonusCard key={i} bonus={bonus} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 rounded-full px-6 py-3 shadow-pop-white">
            <span className="text-slate-500 font-bold">Valor dos bônus:</span>
            <span className="font-display font-black text-slate-400 line-through-red text-lg">R$20</span>
            <span className="font-display font-black text-brand-green text-lg">→ GRÁTIS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
