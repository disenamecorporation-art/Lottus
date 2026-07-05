import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ onNavigate, onOpenGallery }: { onNavigate: (page: 'home' | 'contact') => void, onOpenGallery: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}>
            <img src="https://i.postimg.cc/637Rb8Yj/IMAGOTIPO-LOTTUS-WEB.png" alt="Lottus Studio Logo" className="h-16 md:h-20 w-auto" />
        </button>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-light text-sm">
          <button onClick={() => onNavigate('home')} className="hover:text-[#A99C8C] transition-colors">Inicio</button>
          <button onClick={() => { onNavigate('home'); setTimeout(() => { const el = document.getElementById('servicios'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-[#A99C8C] transition-colors">Servicios</button>
          <button onClick={onOpenGallery} className="hover:text-[#A99C8C] transition-colors">Galeria</button>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#A99C8C] transition-colors">Contacto</button>
        </nav>

        {/* Mobile Burger */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md p-6 flex flex-col gap-4 font-light text-sm border-b border-white/20">
          <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-left hover:text-[#A99C8C]">Inicio</button>
          <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); setTimeout(() => { const el = document.getElementById('servicios'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="text-left hover:text-[#A99C8C]">Servicios</button>
          <button onClick={() => { onOpenGallery(); setIsMenuOpen(false); }} className="text-left hover:text-[#A99C8C]">Galeria</button>
          <button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="text-left hover:text-[#A99C8C]">Contacto</button>
        </div>
      )}
    </header>
  );
}
