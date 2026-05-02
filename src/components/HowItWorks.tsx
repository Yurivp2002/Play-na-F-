export default function HowItWorks() {
  const steps = [
    { title: "Menos Tela", desc: "Substitua o celular por propósito e conexão real.", icon: "📱", color: "yellow" },
    { title: "Pronto em Minutos", desc: "É só baixar, imprimir e começar a brincar agora.", icon: "🖨️", color: "blue" },
    { title: "Aprendizado Feliz", desc: "Conteúdo lúdico adaptado para a mente infantil.", icon: "🎨", color: "green" },
  ];

  return (
    <section className="py-24 bg-brand-blue text-white">
      <div className="container mx-auto px-6">
        <h2 className="font-display font-black text-4xl text-center mb-16 underline decoration-white/20 underline-offset-8">Como funciona?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className={`w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center text-4xl shadow-pop-black border-2 border-slate-900 group-hover:scale-110 transition-transform
                ${step.color === 'yellow' ? 'bg-brand-yellow' : step.color === 'blue' ? 'bg-white/20 border-white/30' : 'bg-brand-green'}`}>
                {step.icon}
              </div>
              <div>
                <div className="font-display font-black text-xs text-white/50 mb-1 tracking-widest">PASSO {i + 1}</div>
                <h4 className="font-display font-black text-2xl mb-2">{step.title}</h4>
                <p className="text-blue-50/80 font-medium leading-tight">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
