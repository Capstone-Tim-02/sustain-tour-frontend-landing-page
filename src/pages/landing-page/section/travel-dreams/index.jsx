import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import {
  Bromo,
  Bunaken,
  CandiPrambanan,
  KawahIjen,
  NusaPenida,
  PantaiPink,
  PulauWeh,
  RajaAmpat,
  Rinjani,
} from '@/assets/images/ImagesFindDestination';

export const TravelDreams = () => {
  const images = [
    Bromo,
    Bunaken,
    CandiPrambanan,
    KawahIjen,
    NusaPenida,
    PantaiPink,
    PulauWeh,
    RajaAmpat,
    Rinjani,
  ];
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => setStartIndex((prevIndex) => (prevIndex + 3) % images.length);

  const handlePrev = () =>
    setStartIndex((prevIndex) => (prevIndex - 3 + images.length) % images.length);

  const visibleImages = images.slice(startIndex, startIndex + 3);

  return (
    <section id="travel-dreams">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 sm:gap-10 lg:mb-[10rem] lg:mt-16 lg:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
          {visibleImages.map((image, index) => (
            <div key={index} className="relative h-[338px] w-[200px]">
              <img className="object-fill" src={image} alt={`Image ${startIndex + index}`} />
              <h1 className="absolute bottom-5 left-0 right-0 text-center font-sans text-xs font-bold text-white">
                {startIndex + index === 0 && 'Bromo, Jawa Timur'}
                {startIndex + index === 1 && 'Bunaken, Sulawesi Utara'}
                {startIndex + index === 2 && 'Candi Prambanan, Magelang'}
                {startIndex + index === 3 && 'Kawah Ijen, Jawa Timur'}
                {startIndex + index === 4 && 'Nusa Penida, Bali'}
                {startIndex + index === 5 && 'Pantai Pink, NTT'}
                {startIndex + index === 6 && 'Pulau Weh, Aceh'}
                {startIndex + index === 7 && 'Raja Ampat, Papua'}
                {startIndex + index === 8 && 'Rinjani, NTB'}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse items-start justify-start gap-5 p-0 lg:flex-col lg:p-5">
          <div className="flex flex-col items-start justify-start gap-4">
            <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-3xl">
              Temukan Destinasi Impianmu dengan Destimate!
            </h1>
            <p className="font-sans text-xs font-normal text-black sm:text-sm">
              Explore Seribu Kemungkinan! Destimate Hadir dengan Pilihan Wisata yang Menakjubkan,
              Sempurna untuk Setiap Jiwa Petualang
            </p>
          </div>

          <div className="flex w-full items-center justify-center gap-5 lg:justify-start">
            <div
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border-2 border-solid border-primary-100 shadow-md hover:border-primary-80 md:h-10 md:w-10"
              onClick={handlePrev}
            >
              <ChevronLeftIcon className="text-primary-100" />
            </div>
            <div
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border-2 border-solid border-primary-100 shadow-md hover:border-primary-80 md:h-10 md:w-10"
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
