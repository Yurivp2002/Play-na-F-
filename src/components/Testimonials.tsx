export default function Testimonials() {
  const testimonials = [
    { text: "Finalmente consegui tirar ele do celular sem briga!", author: "Mariana S.", stars: 5 },
    { text: "Meu filho agora pede para brincar com a Bíblia!", author: "Carla M.", stars: 5 },
    { text: "Uso na EBD e as crianças ficam muito mais atentas!", author: "Jéssica P.", stars: 5 },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display font-black text-4xl mb-4 underline decoration-white/20 underline-offset-8">O que outras mães dizem</h2>
        <p className="text-blue-100/70 font-medium mb-16">Famílias reais que já transformaram seus lares com o Play na Fé</p>
        <div className="flex gap-8 overflow-hidden justify-center items-stretch flex-wrap">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-none w-full md:w-80 flex flex-col items-center gap-4 px-8 py-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
              <div className="text-brand-yellow text-lg tracking-wider">{"⭐".repeat(t.stars)}</div>
              <p className="text-lg font-medium italic leading-relaxed">"{t.text}"</p>
              <div className="mt-auto font-display font-black text-brand-yellow">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
