import { Service } from '../types';
import { motion } from 'motion/react';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/40 backdrop-blur-md border border-white/30 text-[#71777A] p-6 rounded-3xl shadow-sm flex justify-between items-center"
    >
      <span className="font-light text-lg">{service.name}</span>
      <span className="bg-[#A99C8C] text-white py-1 px-4 rounded-full font-light">
        {service.price}
      </span>
    </motion.div>
  );
}
