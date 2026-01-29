
import React from 'react';
import { TRUST_ITEMS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TrustBar: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={ref}
      className={`py-12 bg-[#FDFBF8] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
          {TRUST_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 transition-opacity duration-1000"
              style={{ transitionDelay: `${index * 200}ms`}}
            >
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <span className="font-sans text-brand-text text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
