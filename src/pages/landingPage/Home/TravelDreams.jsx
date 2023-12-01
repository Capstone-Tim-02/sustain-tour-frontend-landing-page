// import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// import ImageBromo from '@/assets/images/Bromo.png';
// import ImageNusaPenida from '@/assets/images/Nusa-Penida.png';
// import ImageRajaAmpat from '@/assets/images/Raja-Ampat.png';

// export const TravelDreams = () => {
//   return (
//     <section id="travel-dreams">
//       <div className="mx-auto my-14 flex w-full flex-col items-center justify-center gap-5  sm:gap-10 lg:flex-row">
//         <div className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
//           <div className="relative h-[338px] w-[200px]">
//             <img className="object-fill" src={ImageBromo} alt="ImageBromo" />
//             <h1 className="absolute bottom-5 left-0 right-0 text-center font-sans text-sm font-bold text-white">
//               Bromo, Jawa Timur
//             </h1>
//           </div>
//           <div className="relative h-[338px] w-[200px]">
//             <img className="object-cover" src={ImageRajaAmpat} alt="ImageRajaAmpat" />
//             <h1 className="absolute bottom-5 left-0 right-0 text-center font-sans text-sm font-bold text-white">
//               Raja Ampat, Papua
//             </h1>
//           </div>
//           <div className="relative h-[338px] w-[200px] ">
//             <img className="object-cover" src={ImageNusaPenida} alt="ImageNusaPenida" />
//             <h1 className="absolute bottom-5  left-0 right-0 text-center font-sans text-sm font-bold text-white">
//               Nusa Penida, Bali
//             </h1>
//           </div>
//         </div>

//         <div className="flex flex-col items-start justify-start gap-4 p-5">
//           <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-3xl">
//             Temukan Destinasi Impianmu dengan Destimate!
//           </h1>
//           <p className="font-sans text-xs font-normal text-black sm:text-sm">
//             Explore Seribu Kemungkinan! Destimate Hadir dengan Pilihan Wisata yang Menakjubkan,
//             Sempurna untuk Setiap Jiwa Petualang
//           </p>
//           <div className="flex gap-5">
//             <div className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-solid border-primary-100 shadow-md hover:border-primary-80">
//               <ChevronLeftIcon className="text-primary-100" />
//             </div>
//             <div className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-solid border-primary-100 shadow-md hover:border-primary-80">
//               <ChevronRightIcon className="text-primary-100" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import ImageBromo from '@/assets/images/Bromo.png';
import ImageBunaken from '@/assets/images/Bunaken.png';
import ImageCandiPrambanan from '@/assets/images/Candi-Prambanan.png';
import ImageKawahIjen from '@/assets/images/Kawah-Ijen.png';
import ImageNusaPenida from '@/assets/images/Nusa-Penida.png';
import ImagePantaiPink from '@/assets/images/Pantai-Pink.png';
import ImagePulauWeh from '@/assets/images/Pulau-Weh.png';
import ImageRajaAmpat from '@/assets/images/Raja-Ampat.png';
import ImageRinjani from '@/assets/images/Rinjani.png';

export const TravelDreams = () => {
  const images = [
    ImageBromo,
    ImageRajaAmpat,
    ImageNusaPenida,
    ImageCandiPrambanan,
    ImagePantaiPink,
    ImageBunaken,
    ImageRinjani,
    ImageKawahIjen,
    ImagePulauWeh,
  ];
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 3 + images.length) % images.length);
  };

  const visibleImages = images.slice(startIndex, startIndex + 3);

  return (
    <section id="travel-dreams">
      <div className="mx-auto my-14 flex w-full flex-col items-center justify-center gap-5 sm:gap-10 lg:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
          {visibleImages.map((image, index) => (
            <div key={index} className="relative h-[338px] w-[200px]">
              <img className="object-fill" src={image} alt={`Image ${startIndex + index}`} />
              <h1 className="absolute bottom-5 left-0 right-0 text-center font-sans text-xs font-bold text-white">
                {startIndex + index === 0 && 'Bromo, Jawa Timur'}
                {startIndex + index === 1 && 'Raja Ampat, Papua'}
                {startIndex + index === 2 && 'Nusa Penida, Bali'}
                {startIndex + index === 3 && 'Candi Prambanan, Magelang'}
                {startIndex + index === 4 && 'Pantai Pink, NTT'}
                {startIndex + index === 5 && 'Bunaken, Sulawesi Utara'}
                {startIndex + index === 6 && 'Rinjani, NTB'}
                {startIndex + index === 7 && 'Kawah Ijen, Jawa Timur'}
                {startIndex + index === 8 && 'Pulau Weh, Aceh'}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-start gap-4 p-5">
          <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-3xl">
            Temukan Destinasi Impianmu dengan Destimate!
          </h1>
          <p className="font-sans text-xs font-normal text-black sm:text-sm">
            Explore Seribu Kemungkinan! Destimate Hadir dengan Pilihan Wisata yang Menakjubkan,
            Sempurna untuk Setiap Jiwa Petualang
          </p>
          <div className="flex gap-5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-solid border-primary-100 shadow-md hover:border-primary-80"
              onClick={handlePrev}
            >
              <ChevronLeftIcon className="text-primary-100" />
            </div>
            <div
              className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-solid border-primary-100 shadow-md hover:border-primary-80"
              onClick={handleNext}
            >
              <ChevronRightIcon className="text-primary-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

