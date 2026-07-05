import { Service } from '../types';
import { motion } from 'motion/react';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/40 backdrop-blur-md border border-white/30 text-[#71777A] p-6 rounded-3xl shadow-sm flex items-center justify-center"
    >
      <span className="font-sans font-light text-lg">{service.name}</span>
    </motion.div>
  );
}
