
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import ResultsGallery from './components/ResultsGallery';
import ClinicStory from './components/ClinicStory';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);
  
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#FDFBF8] font-sans text-brand-text antialiased">
      <Hero onBookNowClick={handleOpenModal} />
      <main>
        <TrustBar />
        <Services />
        <ResultsGallery />
        <ClinicStory />
      </main>
      <Footer />
      <div
        onClick={handleOpenModal}
        className="fixed bottom-6 end-6 z-40 md:hidden p-4 bg-brand-gold rounded-full shadow-lg cursor-pointer hover:bg-brand-gold-light transition-all duration-300">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
