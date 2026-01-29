
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onBookNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNowClick }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative h-screen w-full flex items-center justify-center text-white text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://picsum.photos/1920/1280?grayscale&blur=2')`,
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-brand-dark via-black/60 to-transparent"></div>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-no-repeat"
        style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0) 60%)` }}
      ></div>

      <div className="relative z-10 px-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-white/90 mb-4"
        style={{ textShadow: '0 2px 20px rgba(212, 175, 55, 0.3)'}}>
          Solo Beauty
        </h1>
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl opacity-90 mb-6" style={{ animationDelay: '0.5s' }}>
          النسخة الأجمل منك تبدأ هنا
        </p>
        <p className="font-sans text-base md:text-lg max-w-lg mx-auto opacity-80 mb-10" style={{ animationDelay: '0.8s' }}>
          عيادة تجميل للنخبة فقط — نتائج تُرى وجودة تُحس
        </p>
        <button
          onClick={onBookNowClick}
          className="bg-brand-gold text-brand-dark font-sans font-semibold py-3 px-10 rounded-full text-lg 
                     transition-all duration-300 ease-in-out
                     hover:bg-brand-gold-light hover:shadow-glow-gold-md 
                     focus:outline-none focus:ring-4 focus:ring-brand-gold-light focus:ring-opacity-50"
          style={{ animationDelay: '1.1s' }}
        >
          احجزي موعدك الآن
        </button>
      </div>
    </header>
  );
};

export default Hero;
