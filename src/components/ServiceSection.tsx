import { ServiceCategory } from '../types';
import ServiceCard from './ServiceCard';

export default function ServiceSection({ data }: { data: ServiceCategory }) {
  return (
    <section className="my-12">
      <h2 className="font-light text-4xl text-[#71777A] mb-8 text-center tracking-tight">{data.category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
