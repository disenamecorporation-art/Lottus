/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Slider from './components/Slider';
import Features from './components/Features';
import ContactPage from './components/ContactPage';
import AppointmentModal from './components/AppointmentModal';
import AppointmentForm from './components/AppointmentForm';
import GalleryModal from './components/GalleryModal';
import Footer from './components/Footer';
import { servicesData } from './data';
import { motion } from 'motion/react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [page, setPage] = useState<'home' | 'contact'>('home');

  return (
    <div className="min-h-screen pb-20 pt-16 md:pt-20">
      <Header onNavigate={setPage} onOpenGallery={() => setIsGalleryOpen(true)} />
      {page === 'home' ? (
        <>
            <Hero onOpen={() => setIsModalOpen(true)} />
            <main className="max-w-6xl mx-auto px-6">
                <Slider onOpenGallery={() => setIsGalleryOpen(true)} />
                <Features />
                <div id="servicios" className="space-y-6">
                    {Array.from({ length: Math.ceil(servicesData.length / 2) }).map((_, i) => (
                        <div key={i} className="grid md:grid-cols-2 gap-6">
                            <ServiceSection data={servicesData[i * 2]} />
                            {servicesData[i * 2 + 1] && <ServiceSection data={servicesData[i * 2 + 1]} />}
                        </div>
                    ))}
                </div>
                
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    className="bg-white/40 backdrop-blur-md border border-white/30 text-[#71777A] p-6 md:p-12 rounded-3xl mt-20 shadow-sm grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h3 className="font-serif text-3xl mb-4">Tu momento de relax</h3>
                        <p className="font-sans font-light opacity-80">
                            En nuestro espacio, cuidamos cada detalle para ofrecerte una experiencia inolvidable de belleza y bienestar. 
                            Permítete el lujo de desconectar.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-serif text-2xl mb-6">Agenda tu cita</h3>
                        <AppointmentForm />
                    </div>
                </motion.div>

                <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                className="bg-white/40 backdrop-blur-md border border-white/30 text-[#71777A] p-6 md:p-12 rounded-3xl text-center mt-20 shadow-sm"
                >
                <h2 className="font-serif font-medium text-2xl md:text-4xl mb-6 tracking-tight">¿Listo para lucir espectacular?</h2>
                <p className="mb-8 font-light opacity-70">Envíanos un mensaje para cotizaciones o más información.</p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block bg-[#A99C8C] text-white px-10 py-4 rounded-full font-light hover:bg-[#968979] transition-colors"
                >
                    Reservar cita
                </button>
                </motion.div>
            </main>
        </>
      ) : (
        <ContactPage />
      )}
      <Footer setPage={setPage} setIsGalleryOpen={setIsGalleryOpen} setIsModalOpen={setIsModalOpen} />
      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
