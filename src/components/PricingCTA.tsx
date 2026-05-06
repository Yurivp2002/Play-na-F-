import { motion } from "motion/react";
import { CheckCircle2, Shield, Zap, Clock } from "lucide-react";

export default function PricingCTA() {
  const included = [
    "12 Jogos Bíblicos para imprimir",
    "Bônus: Guia de Como Plastificar",
    "Bônus: Meu Primeiro Guia de Oração",
    "Bônus: A História da Salvação",
    "Acesso imediato após pagamento",
    "Atualizações futuras gratuitas",
  ];

  return (
    <section id="preco" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="inline-block bg-brand-red/10 text-brand-red font-display font-black text-sm px-4 py-2 rounded-full mb-8 border border-brand-red/20 animate-pulse">
            🔥 OFERTA POR TEMPO LIMITADO
          </div>

          <h2 className="font-display font-black text-4xl lg:text-5xl mb-8 text-slate-900">
            Tudo isso por um preço <span className="text-brand-green">inacreditável</span>
          </h2>

          <div className="bg-white border-4 border-slate-900 rounded-[3rem] p-10 shadow-pop-black relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 animate-shine bg-brand-yellow" />

            <div className="absolute -top-5 -right-5 w-24 h-24 bg-brand-yellow rounded-full border-4 border-slate-900 shadow-[4px_4px_0_#D97706] flex items-center justify-center font-display font-black text-white text-sm rotate-12 animate-wiggle z-10">
              90%<br />OFF!
            </div>

            <div className="font-display font-black text-slate-400 text-lg mb-2 tracking-widest uppercase">Kit Completo</div>
            <div className="font-display font-black text-slate-400 text-sm mb-6">12 jogos + 3 bônus</div>

            <div className="mb-2">
              <span className="text-2xl font-bold text-slate-400 line-through-red">R$ 155,00</span>
            </div>

            <div className="flex items-center justify-center gap-1 mb-8">
              <span className="text-xl font-bold align-top mt-3 text-brand-green">R$</span>
              <span className="text-8xl font-display font-black text-slate-900">15</span>
              <span className="text-3xl font-display font-black align-bottom mb-3 text-slate-900">,90</span>
            </div>

            <div className="text-left space-y-3 mb-10 max-w-sm mx-auto">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                  <span className="font-medium text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.kiwify.com.br/RDBrQcS"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-brand-yellow border-4 border-slate-900 text-white px-8 py-6 rounded-3xl text-2xl font-display font-black shadow-[8px_8px_0_#D97706] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#D97706] transition-all outline-none text-center animate-pulse-glow cursor-pointer"
            >
              QUERO O KIT AGORA POR R$15,90
            </a>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-brand-green" />
                7 dias de garantia
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-brand-yellow" />
                Acesso imediato
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-blue" />
                Pagamento seguro
              </div>
            </div>
          </div>

          <p className="mt-8 text-slate-500 font-medium text-sm">
            Você recebe o acesso imediato por e-mail. Menos que um lanche, com valor eterno. ❤️
          </p>
        </div>
      </div>
    </section>
  );
}
