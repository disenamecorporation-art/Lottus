import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Truck, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <h1 className="font-serif text-4xl font-medium text-center mb-12 text-[#71777A]">Contacto</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Contact Info */}
        <div className="bg-white/50 p-8 rounded-3xl shadow-sm border border-white/20">
            <h2 className="font-serif text-2xl font-medium mb-8">Información</h2>
            <div className="space-y-6 text-[#71777A] font-light">
                <div className="flex items-center gap-4">
                    <MapPin className="text-[#A99C8C]" />
                    <p>C.C. Betania de Cúa Local PA11, Cúa edo. Miranda</p>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="text-[#A99C8C]" />
                    <p>0422-5000268</p>
                </div>
                <div className="text-[#71777A] font-light mt-4">
                    <p>✨ Belleza con propósito, somos pet friendly y junto a nuestra clientela ayudamos a los animalitos que están en condición de calle.</p>
                    <p className="mt-2 text-sm italic">Nota: Consulta nuestro reglamento para solicitar citas.</p>
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white/50 p-8 rounded-3xl shadow-sm border border-white/20 space-y-4">
            <input type="text" placeholder="Nombre" className="w-full p-3 rounded-full border border-gray-200" />
            <input type="email" placeholder="Email" className="w-full p-3 rounded-full border border-gray-200" />
            <textarea placeholder="Mensaje" rows={4} className="w-full p-4 rounded-3xl border border-gray-200" />
            <button className="w-full bg-[#dcd8cf] text-[#71777A] py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#cbbcb0] transition-colors">
                Enviar <Send size={18} />
            </button>
        </form>
      </div>

      {/* Map */}
      <h2 className="font-serif text-2xl font-medium mb-6 text-center text-[#71777A]">¿Cómo llegar?</h2>
      <div className="rounded-3xl overflow-hidden shadow-sm border border-white/20">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8631481816353!2d-66.6430335!3d10.1337424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a8648e5831557%3A0x647f1b74c4391c53!2sC.C.+Betania+de+C%C3%BAa!5e0!3m2!1ses!2sve!4v1542123456789!5m2!1ses!2sve" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
}
