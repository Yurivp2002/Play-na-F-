import { Target, Smartphone, Heart } from "lucide-react";
import { useInView } from "../hooks/useInView";

function ProblemCard({ text, icon, color, delay }: { text: string; icon: React.ReactNode; color: string; delay: number }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll delay-${delay} p-8 bg-brand-cream rounded-[2rem] border-2 border-slate-100 shadow-pop-white text-center hover:translate-y-[-4px] transition-transform ${isInView ? "in-view" : ""}`}
    >
      <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center
        ${color === 'blue' ? 'bg-blue-100 text-brand-blue' : color === 'yellow' ? 'bg-amber-100 text-brand-yellow' : 'bg-emerald-100 text-brand-green'}`}>
        {icon}
      </div>
      <p className="font-bold text-slate-700 leading-relaxed italic">{text}</p>
    </div>
  );
}

export default function Problem() {
  const problems = [
    { text: "Eu queria ensinar mais a Bíblia, mas não sei por onde começar...", icon: <Target className="w-5 h-5 text-brand-blue" />, color: "blue" },
    { text: "Meu filho só quer saber de celular...", icon: <Smartphone className="w-5 h-5 text-brand-yellow" />, color: "yellow" },
    { text: "Eu me sinto falhando na educação espiritual dele...", icon: <Heart className="w-5 h-5 text-brand-green" />, color: "green" },
  ];

  return (
    <section className="py-24 bg-white border-y-2 border-dashed border-amber-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl lg:text-5xl mb-12 text-slate-900">Você não está sozinha nisso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((prob, i) => (
              <ProblemCard key={i} text={prob.text} icon={prob.icon} color={prob.color} delay={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
