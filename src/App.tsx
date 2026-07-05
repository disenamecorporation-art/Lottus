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
                <div id="servicios">
                {servicesData.map((category, index) => (
                    <ServiceSection key={index} data={category} />
                ))}
                </div>
                
                <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                className="bg-white/40 backdrop-blur-md border border-white/30 text-[#71777A] p-6 md:p-12 rounded-3xl text-center mt-20 shadow-sm"
                >
                <h2 className="font-light text-2xl md:text-4xl mb-6 tracking-tight">¿Listo para lucir espectacular?</h2>
                <p className="mb-8 font-light opacity-70">Envíanos un mensaje para cotizaciones o más información.</p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block bg-[#A99C8C] text-white px-10 py-4 rounded-full font-light hover:bg-[#968979] transition-colors"
                >
                    Contactar por WhatsApp
                </button>
                </motion.div>
            </main>
        </>
      ) : (
        <ContactPage />
      )}
      <Footer setPage={setPage} setIsGalleryOpen={setIsGalleryOpen} setIsModalOpen={setIsModalOpen} />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
}
