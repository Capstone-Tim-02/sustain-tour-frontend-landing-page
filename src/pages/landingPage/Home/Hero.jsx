import { DownloadCloud, MapPin } from 'lucide-react';

import {appstore,playstore } from '@/assets/images';
import ImageHero from '@/assets/images/image-hero.png';
import { IconLine, IconPepole } from '@/components/Icons';


export const Hero = () => {
  return (
    <section id="hero">
      <div className='mx-auto w-full flex flex-col'>
        <div className="flex flex-col justify-between gap-5 md:gap-10 lg:flex-row lg:gap-20">
          <div className='flex flex-col gap-[2em] w-full lg:max-w-[40%]'>
            <h1 className='font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-4xl text-center md:text-left'>
              EKSPLORASI KECANTIKAN YANG MEMPESONA
            </h1>
            <p className='font-sans text-sm font-greyDestimate-100 text-center md:text-left'>
              Temukan keindahan tersembunyi dan alami petualangan tanpa batas! Unduh Destimate sekarang dan jadilah bagian dari ekspedisi seru bersama tim ahli. Jangan lewatkan! 🌍✨
            </p>
            <div 
              className="flex gap-6 justify-center lg:justify-start"
            >
              <img src={appstore} style={{maxWidth:'8em'}} onClick={() => {}}/>
              <img src={playstore} style={{maxWidth:'8em'}}/>
            </div>
          </div>
          <div  className='flex justify-self-center w-full lg:max-w-[40%] lg:justify-end'>
            <img src={ImageHero}/>
          </div>
        </div>

        <div className='flex justify-center gap-[2em] lg:gap-[4em] mt-2'>

          <div className='flex flex-col justify-center text-center gap-2'>
            <h1 className='font-sans text-md font-bold text-primary-100 lg:text-2xl'>+2k</h1>
            <div className='flex flex-row gap-2 justify-center text-center'>
              <DownloadCloud />
              <p className='font-sans text-sm'>Pengguna</p>
            </div>
          </div>

          <IconLine/>

          <div className='flex flex-col justify-center text-center gap-2'>
            <h1 className='font-sans text-md font-bold text-primary-100 lg:text-2xl'>+5k</h1>
            <div className='flex flex-row gap-2 justify-center text-center'>
              <IconPepole/>
              <p className='font-sans text-sm '>Transaksi</p>
            </div>
          </div>

          <IconLine/>

          <div className='flex flex-col justify-center text-center gap-2'>
            <h1 className='font-sans text-md font-bold text-primary-100 lg:text-2xl'>+100</h1>
            <div className='flex flex-row gap-2 justify-center text-center'>
              <MapPin />
              <p className='font-sans text-sm '>Destinasi</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}