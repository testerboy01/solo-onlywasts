
import React, { useState, useMemo, useEffect } from 'react';
import { SERVICES, CLINIC_PHONE_NUMBER } from '../constants';
import type { Service } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredTime, setPreferredTime] = useState<'صباحي' | 'مسائي'>('صباحي');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setTimeout(() => setShow(false), 300);
    }
  }, [isOpen]);

  const totalCost = useMemo(() => {
    return SERVICES.filter(s => selectedServices.includes(s.id))
                   .reduce((acc, service) => acc + service.price, 0);
  }, [selectedServices]);

  const handleServiceToggle = (serviceId: number) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };
  
  const isFormValid = useMemo(() => {
    return selectedServices.length > 0 && fullName.trim() !== '' && phoneNumber.trim().length > 8;
  }, [selectedServices, fullName, phoneNumber]);


  const handleConfirmBooking = () => {
    if (!isFormValid) return;
    
    const selectedServiceDetails = SERVICES.filter(s => selectedServices.includes(s.id));
    const serviceListText = selectedServiceDetails.map(s => `• ${s.name}`).join('\n');
    const formattedTotal = `${totalCost.toLocaleString('ar-IQ')} د.ع`;

    const message = `مرحبًا Solo Beauty 👋
أرغب بحجز موعد جديد
👤 الاسم: ${fullName}
🛍️ الخدمات:
${serviceListText}
💰 المجموع المتوقع: ${formattedTotal}
📅 الوقت المفضل: ${preferredTime}
بانتظار التأكيد.`;

    const whatsappUrl = `https://wa.me/${CLINIC_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />
      <div
        className={`relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 end-4 text-white/70 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className="font-serif text-3xl text-white text-center mb-6">حجز موعد VIP</h2>

        {/* Services Selection */}
        <div className="mb-6">
          <h3 className="font-sans font-semibold text-lg mb-3 text-white">١. اختاري خدماتك</h3>
          <div className="space-y-3 max-h-48 overflow-y-auto pl-2">
            {SERVICES.map(service => (
              <label key={service.id} htmlFor={`service-${service.id}`} className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border ${selectedServices.includes(service.id) ? 'bg-brand-gold/80 border-brand-gold' : 'bg-white/20 border-white/30 hover:border-white/50'}`}>
                <input
                    id={`service-${service.id}`}
                    type="checkbox"
                    checked={selectedServices.includes(service.id)}
                    onChange={() => handleServiceToggle(service.id)}
                    className="sr-only"
                />
                <div className={`${selectedServices.includes(service.id) ? 'text-brand-dark' : 'text-white'}`}>
                  <span className="font-sans font-medium">{service.name}</span>
                  <p className="text-sm opacity-90">{service.price.toLocaleString('ar-IQ')} د.ع</p>
                </div>
                <div className={`w-5 h-5 rounded border-2 ${selectedServices.includes(service.id) ? 'bg-white border-white' : 'border-white/50'} flex items-center justify-center flex-shrink-0`}>
                    {selectedServices.includes(service.id) && <svg className="w-3 h-3 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>}
                </div>
              </label>
            ))}
          </div>
        </div>
        
        {/* Client Info Form */}
        <div className="mb-6">
            <h3 className="font-sans font-semibold text-lg mb-3 text-white">٢. معلوماتك الشخصية</h3>
            <div className="space-y-4">
                 <input type="text" placeholder="الاسم الكامل" value={fullName} onChange={e => setFullName(e.target.value)} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"/>
                 <input type="tel" placeholder="رقم الهاتف" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300" dir="ltr"/>
                <div>
                    <h4 className="font-sans text-sm mb-2 text-white/80">الوقت المفضل</h4>
                    <div className="flex gap-4">
                        <button onClick={() => setPreferredTime('صباحي')} className={`w-full py-2 rounded-lg transition-all text-sm ${preferredTime === 'صباحي' ? 'bg-brand-gold text-brand-dark font-semibold' : 'bg-white/20 text-white border border-white/30'}`}>صباحي</button>
                        <button onClick={() => setPreferredTime('مسائي')} className={`w-full py-2 rounded-lg transition-all text-sm ${preferredTime === 'مسائي' ? 'bg-brand-gold text-brand-dark font-semibold' : 'bg-white/20 text-white border border-white/30'}`}>مسائي</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Price & Confirmation */}
        <div>
            <div className="bg-black/20 p-4 rounded-lg mb-4 text-center text-white">
                <p className="opacity-80">المجموع المتوقع:</p>
                <p className="font-serif text-3xl font-bold">{totalCost.toLocaleString('ar-IQ')} د.ع</p>
                 <p className="text-xs opacity-60 mt-2">الدفع يتم داخل العيادة بعد التقييم الطبي</p>
            </div>
            <button
              onClick={handleConfirmBooking}
              disabled={!isFormValid}
              className="w-full bg-brand-gold text-brand-dark font-sans font-semibold py-3 px-10 rounded-full text-lg 
                         transition-all duration-300 ease-in-out
                         hover:bg-brand-gold-light hover:shadow-glow-gold-md 
                         disabled:bg-gray-400/50 disabled:text-white/50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              تأكيد الحجز عبر واتساب
            </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
