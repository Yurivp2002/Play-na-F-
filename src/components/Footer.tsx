import { Gamepad2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-white/50 text-sm">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-8 border-b border-white/10 pb-8">
          <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center text-white shadow-[3px_3px_0_#D97706]">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <span className="font-display font-black text-white text-2xl tracking-tight">Play na Fé</span>
        </div>
        <div className="flex justify-center gap-8 mb-8 text-white font-display font-bold uppercase tracking-wider text-xs">
          <a href="#" className="hover:text-brand-yellow transition-colors">Termos</a>
          <a href="#" className="hover:text-brand-yellow transition-colors">Privacidade</a>
          <a href="#" className="hover:text-brand-yellow transition-colors">Suporte</a>
        </div>
        <p className="font-medium text-white/60">© 2026 Play na Fé. Menos tela, mais conexão real. ❤️</p>
      </div>
    </footer>
  );
}
