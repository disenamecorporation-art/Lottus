import { useState } from 'react';
import { servicesData } from '../data';

export default function AppointmentForm() {
  const [isPetFriendly, setIsPetFriendly] = useState(false);
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
Mascota: ${isPetFriendly ? 'Sí, llevaré mascota' : 'No'}
Fecha: ${day}/${month}/${year}
Hora: ${time}`;
    window.open(`https://wa.me/584225000268?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
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
      </div>
      <label className="flex items-center gap-2">
          <input type="checkbox" checked={isPetFriendly} onChange={e => setIsPetFriendly(e.target.checked)} />
          Iré con mi mascota (Somos Pet Friendly)
      </label>
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
      <button type="submit" className="w-full bg-[#A99C8C] text-white py-3 rounded-full font-light hover:bg-[#968979] transition-colors">Solicitar cita</button>
    </form>
  );
}
