
import React from 'react';
import { CLINIC_PHONE_NUMBER } from '../constants';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-gold transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/50 border-t border-gray-200/50 py-10">
      <div className="container mx-auto px-6 text-center text-brand-text">
        <h3 className="font-serif text-2xl text-brand-dark mb-4">Solo Beauty Clinic</h3>
        <p className="font-sans mb-2" dir="ltr">{CLINIC_PHONE_NUMBER}</p>
        <p className="font-sans mb-6">بابل — الحلة, العراق</p>
        <div className="flex justify-center items-center space-x-6 mb-4">
            <SocialIcon href="https://instagram.com">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </SocialIcon>
            <SocialIcon href="https://tiktok.com">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/><path d="M12 15v6"/><path d="M8 21h8"/></svg>
            </SocialIcon>
        </div>
        <p className="font-sans text-sm mb-8">تابعينا على إنستغرام وتيك توك</p>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Solo Beauty Clinic. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
