import { CircleDollarSign, DownloadCloud, MapPin } from 'lucide-react';

import { AppStore, ImageHero, PlayStore } from '@/assets/images/ImagesHero';
import { IconLine } from '@/components/Icons';

export const Hero = () => {
  return (
    <section id="hero">
      <div className="mx-auto flex w-full flex-col pb-10">
        <div className="flex flex-col justify-between gap-5 md:gap-10 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col gap-[2em] sm:w-2/4 lg:max-w-[40%]">
            <h1 className="w-2/4 text-left font-sans text-xl font-bold text-primary-100 sm:w-full sm:text-2xl lg:text-xl">
              EKSPLORASI KECANTIKAN YANG MEMPESONA
            </h1>
            <p className="font-greyDestimate-100 text-left font-sans text-xs sm:text-sm">
              Temukan keindahan tersembunyi dan alami petualangan tanpa batas! Unduh Destimate
              sekarang dan jadilah bagian dari ekspedisi seru bersama tim ahli. Jangan lewatkan!
              🌍✨
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-start">
              <img src={AppStore} style={{ maxWidth: '8em' }} onClick={() => {}} />
              <img src={PlayStore} style={{ maxWidth: '8em' }} />
            </div>
          </div>
          <div className="mb-3 flex w-full justify-center lg:max-w-[40%]">
            <img src={ImageHero} className="w-[50%] lg:w-full" />
          </div>
        </div>

        <div className="mt-2 flex justify-center gap-4 lg:gap-[4em]">
          <div className="flex flex-col justify-center gap-2 text-center">
            <h1 className="text-md font-sans font-bold text-primary-100 lg:text-2xl">+2k</h1>
            <div className="flex flex-row items-center justify-center gap-2 text-center">
              <DownloadCloud />
              <p className="font-sans text-xs sm:text-sm">Pengguna</p>
            </div>
          </div>

          <IconLine className="hidden sm:block" />

          <div className="flex flex-col justify-center gap-2 text-center">
            <h1 className="text-md font-sans font-bold text-primary-100 lg:text-2xl">+5k</h1>
            <div className="flex flex-row items-center justify-center gap-2 text-center">
              <CircleDollarSign />
              <p className="font-sans text-xs sm:text-sm ">Transaksi</p>
            </div>
          </div>

          <IconLine className="hidden sm:block" />

          <div className="flex flex-col justify-center gap-2 text-center">
            <h1 className="text-md font-sans font-bold text-primary-100 lg:text-2xl">+100</h1>
            <div className="flex flex-row items-center justify-center gap-2 text-center">
              <MapPin />
              <p className="font-sans text-xs sm:text-sm">Destinasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
