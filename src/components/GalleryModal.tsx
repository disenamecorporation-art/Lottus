import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { sliderImages } from '../data';

export default function GalleryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-white p-6 rounded-3xl shadow-xl z-50 overflow-y-auto"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-[#71777A] p-2 bg-gray-100 rounded-full hover:bg-gray-200"><X /></button>
            <h2 className="text-2xl font-light mb-6 text-center text-[#71777A]">Catálogo de Servicios</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sliderImages.map((img, i) => (
                <motion.img
                  key={i}
                  src={img.url}
                  alt={img.title}
                  onClick={() => setSelectedImage(img.url)}
                  className="w-full h-40 object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                />
              ))}
            </div>
          </motion.div>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4"
            >
              <img src={selectedImage} alt="Large view" className="max-w-full max-h-full rounded-lg" />
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
