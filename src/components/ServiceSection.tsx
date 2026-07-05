import { useState } from 'react';
import { ServiceCategory } from '../types';
import ServiceCard from './ServiceCard';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { galleryAlbums } from '../data';

export default function ServiceSection({ data }: { data: ServiceCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const coverImage = galleryAlbums.find(a => a.category === data.category)?.cover;

  return (
    <section className="my-6">
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex flex-col items-center gap-4 p-8 bg-white/50 hover:bg-white/60 transition-colors border border-white/30 rounded-2xl shadow-sm relative"
        >
            <h2 className="font-serif font-medium text-3xl text-[#71777A] tracking-tight">{data.category}</h2>
            {coverImage && (
                <img src={coverImage} alt={data.category} className="h-24 w-24 object-cover rounded-full shadow-md" />
            )}
            <ChevronDown className={`absolute top-6 right-6 text-[#71777A] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.services.map((service, idx) => (
                            <ServiceCard key={idx} service={service} />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </section>
  );
}
