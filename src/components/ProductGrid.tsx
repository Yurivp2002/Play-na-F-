import { motion } from "motion/react";

const products = [
  { name: "Cartões da Palavra", price: 10, image: "/MOCKUPS/KIT PRINCIPAL/cartoes.png", color: "blue" },
  { name: "ABC da Fé", price: 20, image: "/MOCKUPS/KIT PRINCIPAL/abc.png", color: "yellow" },
  { name: "Alfabeto Bíblico", price: 5, image: "/MOCKUPS/KIT PRINCIPAL/alfabeto.png", color: "green" },
  { name: "Album Heróis da Fé", price: 10, image: "/MOCKUPS/KIT PRINCIPAL/album.png", color: "purple" },
  { name: "Ebook Heróis da Fé", price: 15, image: "/MOCKUPS/KIT PRINCIPAL/ebook.png", color: "blue" },
  { name: "Dominó da Palavra", price: 10, image: "/MOCKUPS/KIT PRINCIPAL/domino.png", color: "yellow" },
  { name: "Jogo da Velha Bíblico", price: 5, image: "/MOCKUPS/KIT PRINCIPAL/velha.png", color: "green" },
  { name: "Passa Tempo Bíblico", price: 10, image: "/MOCKUPS/KIT PRINCIPAL/passatempo.png", color: "purple" },
  { name: "Quebra-cabeça Bíblico", price: 20, image: "/MOCKUPS/KIT PRINCIPAL/quebra_cabeca.png", color: "blue" },
  { name: "Quiz Bíblico", price: 10, image: "/MOCKUPS/KIT PRINCIPAL/quiz.png", color: "yellow" },
  { name: "Jogo da Memória", price: 10, image: "/MOCKUPS/KIT PRINCIPAL/memoria.png", color: "green" },
  { name: "Olhos Atentos da Fé", price: 10, image: "/MOCKUPS/KIT PRINCIPAL/olhos.png", color: "purple" },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  blue: { bg: "bg-blue-50", border: "border-brand-blue", text: "text-brand-blue", badge: "bg-brand-blue" },
  yellow: { bg: "bg-amber-50", border: "border-brand-yellow", text: "text-brand-yellow", badge: "bg-brand-yellow" },
  green: { bg: "bg-emerald-50", border: "border-brand-green", text: "text-brand-green", badge: "bg-brand-green" },
  purple: { bg: "bg-purple-50", border: "border-brand-purple", text: "text-brand-purple", badge: "bg-brand-purple" },
};

export default function ProductGrid() {
  return (
    <section id="kit" className="py-24 border-y-2 border-dashed border-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-yellow/10 text-brand-yellow font-display font-black text-sm px-4 py-2 rounded-full mb-6 border border-brand-yellow/20">
            📦 O QUE VEM NO KIT
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl mb-4 text-slate-900">
            12 Jogos Bíblicos Incríveis
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Cada jogo foi pensado para ensinar valores bíblicos de forma lúdica e divertida. Prontos para baixar e imprimir!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {products.map((product, i) => {
            const c = colorMap[product.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`${c.bg} rounded-2xl border-3 ${c.border} p-5 text-center product-card-hover relative overflow-hidden group`}
              >
                <div className="mb-4 aspect-square flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain drop-shadow-lg rounded-xl" />
                </div>
                <h3 className="font-display font-black text-sm text-slate-800 mb-2 leading-tight">{product.name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xs text-slate-400 font-bold line-through-red">R${product.price}</span>
                  <span className={`text-xs font-display font-black ${c.text}`}>INCLUSO</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 rounded-full px-6 py-3 shadow-pop-white">
            <span className="text-slate-500 font-bold">Valor separado:</span>
            <span className="font-display font-black text-slate-400 line-through-red text-lg">R$135</span>
            <span className="font-display font-black text-brand-green text-lg">→ INCLUSO NO KIT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
