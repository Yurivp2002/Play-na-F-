import { motion } from "motion/react";
import { Target, Smartphone, Heart } from "lucide-react";

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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 bg-brand-cream rounded-[2rem] border-2 border-slate-100 shadow-pop-white text-center hover:translate-y-[-4px] transition-transform"
              >
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center
                  ${prob.color === 'blue' ? 'bg-blue-100 text-brand-blue' : prob.color === 'yellow' ? 'bg-amber-100 text-brand-yellow' : 'bg-emerald-100 text-brand-green'}`}>
                  {prob.icon}
                </div>
                <p className="font-bold text-slate-700 leading-relaxed italic">{prob.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
