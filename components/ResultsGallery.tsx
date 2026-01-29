
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BeforeAfterSlider: React.FC<{ before: string; after: string }> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };
  
  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseLeave = () => { isDragging.current = false; };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if(!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square select-none overflow-hidden rounded-lg group"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
        }}
      >
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div 
        className="absolute top-0 h-full w-1 bg-white/80 backdrop-blur-sm cursor-ew-resize"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
        </div>
      </div>
    </div>
  );
};

const ResultsGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? GALLERY_IMAGES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === GALLERY_IMAGES.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, goToNext]);


  return (
    <section ref={ref} id="results" className={`py-20 bg-[#FDFBF8] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">نتائج حقيقية لنساء اخترن النخبة</h2>
          <p className="font-sans text-lg text-brand-text max-w-2xl mx-auto">
            تحولات تلهم الثقة وتصنع الجمال.
          </p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
             <div className="whitespace-nowrap transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {GALLERY_IMAGES.map((img, index) => (
                  <div key={index} className="inline-block w-full">
                    <BeforeAfterSlider before={img.before} after={img.after} />
                  </div>
                ))}
              </div>
          </div>

          <button onClick={goToPrevious} className="absolute top-1/2 -translate-y-1/2 start-0 md:-start-16 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-all">
            <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 end-0 md:-end-16 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-all">
            <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

           <div className="flex justify-center mt-4 space-x-2">
                {GALLERY_IMAGES.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-gold' : 'bg-gray-300'}`}></button>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;
