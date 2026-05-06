import { motion } from "motion/react";
import { Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:pt-8 lg:pb-24">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center mb-12 border-b-2 border-dashed border-amber-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center text-white shadow-[4px_4px_0_#D97706]">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <span className="font-display font-black text-2xl text-slate-900 tracking-tight">Play na Fé</span>
        </div>
        <div className="hidden md:flex gap-8 font-display font-bold text-slate-500 text-sm tracking-wide mr-8 uppercase">
          <a href="#kit" className="hover:text-brand-blue transition-colors">O Kit</a>
          <a href="#depoimentos" className="hover:text-brand-blue transition-colors">Depoimentos</a>
          <a href="#preco" className="hover:text-brand-blue transition-colors">Oferta</a>
          <a href="#faq" className="hover:text-brand-blue transition-colors">Dúvidas</a>
        </div>
      </nav>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block bg-brand-green/10 text-brand-green font-display font-black text-sm px-4 py-2 rounded-full mb-6 border border-brand-green/20">
              🎉 +2.000 famílias já transformaram seus lares
            </div>
            <h1 className="font-display font-black text-5xl lg:text-7xl leading-[1.1] mb-8 text-slate-900">
              Seu filho mais perto de <span className="text-brand-blue underline decoration-brand-blue/20">Deus</span> — sem precisar de tela.
            </h1>
            <p className="text-xl text-slate-600 mb-6 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              12 jogos bíblicos + 3 bônus exclusivos prontos para imprimir. Transforme minutos do dia em momentos com Deus.
            </p>
            <p className="text-lg text-brand-red font-display font-black mb-10 max-w-xl mx-auto lg:mx-0">
              De <span className="line-through-red">R$155</span> por apenas <span className="text-3xl text-brand-green">R$15,90</span>
            </p>
            <a
              href="https://pay.kiwify.com.br/RDBrQcS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow text-white px-10 py-5 rounded-full text-xl font-display font-black shadow-pop-yellow border-2 border-brand-yellow-dark hover:brightness-105 transition-all outline-none animate-pulse-glow cursor-pointer"
            >
              QUERO O KIT COMPLETO AGORA
            </a>
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 text-sm text-slate-500 font-medium">
              <span>✅ Acesso imediato</span>
              <span>✅ 7 dias de garantia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative flex justify-center py-12"
          >
            <div className="relative w-full max-w-md aspect-[3/4]">
              <div className="absolute inset-0 bg-white border-4 border-brand-blue rounded-[2.5rem] shadow-pop-blue rotate-3 flex flex-col p-6 overflow-hidden">
                <div className="bg-blue-50 w-full h-2/3 rounded-2xl mb-6 flex items-center justify-center p-4">
                  <img src="/MOCKUPS/KIT PRINCIPAL/quebra_cabeca.png" alt="Quebra-cabeça Bíblico" className="max-w-full max-h-full object-contain drop-shadow-md rounded-xl" />
                </div>
                <p className="text-slate-900 text-xs font-display font-black uppercase tracking-wider leading-relaxed my-auto text-center px-2">
                  Fortaleça os valores bíblicos do seu filho através de atividades lúdicas que ensinam enquanto divertem.
                </p>
                <div className="mt-auto text-center font-display font-black text-brand-blue tracking-wider uppercase text-xs">Quebra-Cabeça Bíblico</div>
              </div>
              <div className="absolute inset-0 bg-white border-4 border-brand-green rounded-[2.5rem] rotate-[-6deg] -z-10 shadow-pop-green flex flex-col p-6">
                <div className="bg-emerald-50 w-full h-2/3 rounded-2xl mb-6 flex items-center justify-center p-4">
                  <img src="/MOCKUPS/KIT PRINCIPAL/memoria.png" alt="Jogo da Memória" className="max-w-full max-h-full object-contain drop-shadow-md rounded-xl" />
                </div>
                <p className="text-slate-900 text-xs font-display font-black uppercase tracking-wider leading-relaxed my-auto text-center px-2">
                  Fortaleça os valores bíblicos do seu filho através de atividades lúdicas que ensinam enquanto divertem.
                </p>
                <div className="mt-auto text-center font-display font-black text-brand-green tracking-wider uppercase text-xs">Jogo da Memória</div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-yellow rounded-full border-4 border-slate-900 shadow-pop-black flex items-center justify-center font-display font-black text-white text-xs text-center leading-tight animate-wiggle z-20">
                12<br />JOGOS!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
