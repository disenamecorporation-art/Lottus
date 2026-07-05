import { motion } from 'motion/react';
import { Sparkles, Star, Heart } from 'lucide-react';

const features = [
  { icon: Sparkles, title: "Calidad Premium", desc: "Productos de alta gama para resultados impecables." },
  { icon: Star, title: "Atención Personalizada", desc: "Diseños únicos adaptados a tu estilo y personalidad." },
  { icon: Heart, title: "Ambiente Relajante", desc: "Un espacio diseñado para tu bienestar y confort total." },
];

export default function Features() {
  return (
    <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="bg-white/40 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-sm text-center"
        >
          <feature.icon size={48} className="mx-auto mb-6 text-[#A99C8C]" strokeWidth={1} />
          <h3 className="font-serif text-xl font-medium mb-3">{feature.title}</h3>
          <p className="font-light opacity-70">{feature.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
