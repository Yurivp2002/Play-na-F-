import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { q: "Como recebo os jogos?", a: "Você recebe acesso imediato pela plataforma após a confirmação do pagamento. O link é enviado para o seu e-mail." },
    { q: "Preciso ter impressora em casa?", a: "Os jogos são em PDF, você pode imprimir em casa ou em qualquer gráfica rápida da sua cidade." },
    { q: "Serve pra qualquer idade?", a: "Ideal para crianças de 4 a 10 anos, com linguagem simples, visual lúdico e didática adaptada." },
    { q: "Como funciona a garantia?", a: "Você tem 7 dias para testar. Se não gostar, devolvemos seu dinheiro sem burocracia!" },
    { q: "O que vem no kit?", a: "São 12 jogos bíblicos completos (Cartões da Palavra, ABC da Fé, Alfabeto Bíblico, Album Heróis da Fé, Ebook Heróis da Fé, Dominó da Palavra, Jogo da Velha Bíblico, Passa Tempo Bíblico, Quebra-cabeça Bíblico, Quiz Bíblico, Jogo da Memória, Olhos Atentos da Fé) + 3 bônus exclusivos." },
    { q: "Posso usar na EBD/igreja?", a: "Sim! Os materiais são perfeitos para Escola Bíblica Dominical, culto infantil e pequenos grupos." },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white border-t-2 border-dashed border-amber-100">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="font-display font-black text-4xl mb-12 text-center underline decoration-brand-yellow/30 underline-offset-8">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-2 border-slate-900 rounded-2xl overflow-hidden shadow-pop-black">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-brand-cream transition-colors"
              >
                <span className="font-display font-black text-slate-800 text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-blue transition-transform shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="p-6 pt-0 text-slate-600 font-medium border-t-2 border-slate-900 bg-brand-cream/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
