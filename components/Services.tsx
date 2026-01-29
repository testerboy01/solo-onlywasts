
import React from 'react';
import { SERVICES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    const formattedPrice = `${service.price.toLocaleString('ar-IQ')} د.ع`;

    return (
        <div
            ref={ref}
            className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out group
                        transform hover:-translate-y-2 hover:ring-2 hover:ring-brand-gold hover:ring-opacity-50
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="overflow-hidden h-64">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 text-center">
                <h3 className="font-serif text-2xl text-brand-dark mb-2">{service.name}</h3>
                <p className="font-sans text-brand-text mb-4">{service.description}</p>
                <p className="font-sans font-semibold text-brand-gold text-lg">{formattedPrice}</p>
            </div>
        </div>
    );
};


const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  return (
    <section ref={ref} id="services" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">خدماتنا الحصرية</h2>
          <p className="font-sans text-lg text-brand-text max-w-2xl mx-auto">
            كل علاج هو مزيج من الفن والعلم، مصمم لنتائج تفوق التوقعات.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
