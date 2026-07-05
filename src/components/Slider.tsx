import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sliderImages as images } from '../data';

export default function Slider({ onOpenGallery }: { onOpenGallery: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
      <div className="relative w-screen -ml-[50vw] left-1/2 h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden shadow-sm">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index].url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-24 gap-6">
          <h2 className="text-[#71777A] text-5xl font-light tracking-tight">{images[index].title}</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenGallery}
            className="bg-[#dcd8cf] text-[#71777A] px-8 py-3 rounded-full font-light shadow-md"
          >
            Galería de servicios
          </motion.button>
        </div>
        <button onClick={prev} className="absolute left-4 top-1/2 p-2 bg-white/30 backdrop-blur-sm rounded-full text-white hover:bg-white/50 transition-colors">
          <ChevronLeft />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 p-2 bg-white/30 backdrop-blur-sm rounded-full text-white hover:bg-white/50 transition-colors">
          <ChevronRight />
        </button>
      </div>
  );
}
