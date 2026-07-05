import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, type: 'spring', damping: 15 }}
      className="relative text-center pt-16 pb-24 md:pt-24 md:pb-32 bg-white/30 backdrop-blur-lg border-b border-white/20 text-[#71777A] shadow-sm"
    >
      <div className="absolute -bottom-4 left-0 w-full flex justify-center gap-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
            <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: 16 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="w-4 md:w-6 bg-white/40 backdrop-blur-lg border-x border-white/20"
                style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
            />
        ))}
      </div>
      <img src="https://i.postimg.cc/637Rb8Yj/IMAGOTIPO-LOTTUS-WEB.png" alt="Lottus Studio Logo" className="h-24 md:h-32 w-auto mb-6 mx-auto" />
      <p className="font-light text-base md:text-xl mb-8 opacity-70">Belleza y Elegancia en cada detalle</p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative inline-block"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-[#A99C8C]/50"
        />
        <button
          onClick={onOpen}
          className="relative inline-flex items-center gap-3 bg-[#A99C8C] text-white px-8 py-4 rounded-full font-light hover:bg-[#968979] transition-colors"
        >
          <MessageCircle size={20} />
          Reservar cita por WhatsApp
        </button>
      </motion.div>
    </motion.div>
  );
}
