
import { Service, GalleryImage } from './types';

export const TRUST_ITEMS = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`,
    text: 'أطباء معتمدون'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.022.547m-3.86-3.86a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.806.547a2 2 0 00-.547 1.806zM12 2.25a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM15 12a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" /></svg>`,
    text: 'مواد أصلية عالمية'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l-6-2m6 2l-3 1m-3-1l-3 9" /></svg>`,
    text: 'تعقيم طبي 100%'
  },
   {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
    text: 'نتائج موثوقة'
  },
];

export const SERVICES: Service[] = [
    { id: 1, name: 'هايدرافيشل', description: 'استعيدي إشراقتك خلال 45 دقيقة', price: 35000, image: 'https://picsum.photos/400/500?random=1' },
    { id: 2, name: 'ميزوثيرابي', description: 'غذي بشرتك من الأعماق لنضارة لا مثيل لها', price: 75000, image: 'https://picsum.photos/400/500?random=2' },
    { id: 3, name: 'بوتوكس', description: 'لمسات فنية تخفي خطوط الزمن وتعيد الشباب', price: 120000, image: 'https://picsum.photos/400/500?random=3' },
    { id: 4, name: 'ليزر إزالة الشعر', description: 'استمتعي ببشرة حريرية دائمة', price: 90000, image: 'https://picsum.photos/400/500?random=4' },
    { id: 5, name: 'تقشير كيميائي', description: 'اكشفي عن طبقة جديدة من الجمال الخالص', price: 60000, image: 'https://picsum.photos/400/500?random=5' },
    { id: 6, name: 'فيلر', description: 'عززي ملامحك بامتلاء طبيعي وجذاب', price: 150000, image: 'https://picsum.photos/400/500?random=6' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { before: 'https://picsum.photos/600/600?random=10', after: 'https://picsum.photos/600/600?random=11' },
  { before: 'https://picsum.photos/600/600?random=12', after: 'https://picsum.photos/600/600?random=13' },
  { before: 'https://picsum.photos/600/600?random=14', after: 'https://picsum.photos/600/600?random=15' },
];

export const CLINIC_PHONE_NUMBER = '+9647716903866'; // Placeholder phone number
