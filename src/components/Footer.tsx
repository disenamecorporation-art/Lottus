import { Instagram, Music } from 'lucide-react';

export default function Footer({ setPage, setIsGalleryOpen, setIsModalOpen }: { setPage: (p: 'home' | 'contact') => void, setIsGalleryOpen: (v: boolean) => void, setIsModalOpen: (v: boolean) => void }) {
  return (
    <footer className="mt-20 border-t border-white/30 pt-10 pb-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-4">
              <img src="https://i.postimg.cc/637Rb8Yj/IMAGOTIPO-LOTTUS-WEB.png" alt="Lottus Studio Logo" className="h-6 w-auto object-contain" />
              <div className="flex flex-col gap-2 font-light text-sm text-[#71777A]">
                  <p>📍 C.C. Betania de Cúa Local PA11, Cúa edo. Miranda</p>
                  <p>📞 Teléfono: 0422-5000268</p>
                  <div className="flex gap-6 mt-2">
                      <a href="https://www.instagram.com/lottustudiove?igsh=eWtnYWc2dWsxMHgz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#A99C8C] transition-colors"><Instagram size={20} /></a>
                      <a href="https://www.tiktok.com/@lottustudiove?_r=1&_t=ZS-97lISO99Uge" target="_blank" rel="noopener noreferrer" className="hover:text-[#A99C8C] transition-colors"><Music size={20} /></a>
                  </div>
              </div>
          </div>
          
          <div className="flex flex-col gap-4 font-light text-sm text-[#71777A] max-w-sm">
              <h4 className="font-medium text-lg">Sobre Nosotros</h4>
              <p>Lottus Studio Venezuela – "Donde tu belleza florece". Ofrecemos servicios de belleza de alta calidad para resaltar tu estilo único con elegancia y profesionalismo.</p>
          </div>

          <div className="flex flex-col gap-4 font-light text-sm text-[#71777A]">
              <h4 className="font-medium text-lg">Menú</h4>
              <button onClick={() => { setPage('home'); setTimeout(() => { const el = document.getElementById('servicios'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-[#A99C8C] transition-colors text-left">Servicios</button>
              <button onClick={() => setIsGalleryOpen(true)} className="hover:text-[#A99C8C] transition-colors text-left">Galeria</button>
              <button onClick={() => setIsModalOpen(true)} className="hover:text-[#A99C8C] transition-colors text-left">Contacto</button>
          </div>
      </div>
      <div className="text-center pt-10 font-light text-[#A99C8C] text-xs">
          © {new Date().getFullYear()} Lottus Studio Venezuela. Hecho por Legaint Corporation
      </div>
    </footer>
  );
}
