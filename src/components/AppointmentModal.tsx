import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { servicesData } from '../data';

export default function AppointmentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [service, setService] = useState(servicesData[0].services[0].name);
  const [location, setLocation] = useState('Studio');
  const [time, setTime] = useState('10:00');
  const [day, setDay] = useState('01');
  const [month, setMonth] = useState('01');
  const [year, setYear] = useState('2026');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, quiero agendar una cita:
Nombre: ${name} ${surname}
Servicio: ${service}
Ubicación: ${location}
Fecha: ${day}/${month}/${year}
Hora: ${time}`;
    window.open(`https://wa.me/584225000268?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white p-8 rounded-3xl shadow-xl z-50"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-[#71777A]"><X /></button>
            <h2 className="text-2xl font-light mb-6">Agenda tu cita</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 rounded-full border border-gray-200" required />
                <input type="text" placeholder="Apellido" value={surname} onChange={e => setSurname(e.target.value)} className="w-full p-3 rounded-full border border-gray-200" required />
              </div>
              <select value={service} onChange={e => setService(e.target.value)} className="w-full p-3 rounded-full border border-gray-200">
                {servicesData.map(cat => cat.services.map(s => <option key={s.name} value={s.name}>{s.name}</option>))}
              </select>
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2">
                    <input type="radio" name="location" value="Studio" checked={location === 'Studio'} onChange={e => setLocation(e.target.value)} />
                    Studio
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="location" value="Domicilio" checked={location === 'Domicilio'} onChange={e => setLocation(e.target.value)} />
                    Domicilio
                </label>
              </div>
              <input type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full p-3 rounded-full border border-gray-200" required />
              <div className="flex gap-2">
                <select value={day} onChange={e => setDay(e.target.value)} className="flex-1 p-3 rounded-full border border-gray-200">
                  {[...Array(31)].map((_, i) => <option key={i+1} value={String(i+1).padStart(2, '0')}>{i+1}</option>)}
                </select>
                <select value={month} onChange={e => setMonth(e.target.value)} className="flex-1 p-3 rounded-full border border-gray-200">
                  {[...Array(12)].map((_, i) => <option key={i+1} value={String(i+1).padStart(2, '0')}>{i+1}</option>)}
                </select>
                <select value={year} onChange={e => setYear(e.target.value)} className="flex-1 p-3 rounded-full border border-gray-200">
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#A99C8C] text-white py-3 rounded-full font-light hover:bg-[#968979] transition-colors">Confirmar Cita</button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
