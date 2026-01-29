
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ClinicStory: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  return (
    <section ref={ref} id="story" className="py-20 bg-white/50">
      <div className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
                <img src="https://picsum.photos/800/600?random=20" alt="Solo Beauty Clinic Interior" className="rounded-lg shadow-lg"/>
            </div>
            <div className="lg:w-1/2 text-start">
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">فلسفتنا في الجمال</h2>
                <div className="space-y-6 text-brand-text leading-relaxed font-sans text-lg">
                    <p className="font-bold text-brand-dark">
                        في Solo Beauty لا نقدم خدمات… نحن نصنع نسخًا أكثر ثقة وجمالًا.
                    </p>
                    <p>
                        نحن نخدم النساء اللواتي لا يقبلن إلا بالكمال. عيادتنا هي وجهة النخبة، حيث يلتقي العلم المتقدم بالفن الرفيع لتقديم تجارب تجميلية استثنائية. كل تفصيل مصمم ليمنحكِ شعورًا بالتميز والتفرد الذي تستحقينه.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicStory;
