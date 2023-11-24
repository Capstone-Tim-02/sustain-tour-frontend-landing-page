import { Clock, PercentCircle } from 'lucide-react';

import { IconCompass } from '@/components/Icons'; 

import Image from '../../../assets/images/advantage-destimate-image.png';

const cardData = [
  {
    id: 1,
    icon: Clock,
    title: 'Kemudahan',
    description:
      'Dengan aplikasi tiket wisata, pesan cepat tanpa antrian dan pastikan perencanaan Anda terjamin.',
  },
  {
    id: 2,
    icon: PercentCircle,
    title: 'Diskon Eksklusif',
    description: 'Temukan diskon eksklusif & paket istimewa! Hemat biaya, nikmati liburan.',
  },
  {
    id: 3,
    icon: IconCompass,
    title: 'Fleksibilitas',
    description:
      'Dengan aplikasi tiket wisata, pilih destinasi dan atraksi sesuai preferensi Anda dengan mudah.',
  },
];

export const AdvantageDestimate = () => {
  return (
    <section id="advantage-destimate" className="py-14 lg:pb-[45rem]">
      <div className="right-0 flex flex-col lg:absolute lg:w-screen">
        <div
          className="flex h-96 w-full rounded-lg bg-cover bg-center bg-no-repeat text-center max-lg:items-center lg:h-[600px] lg:rounded-none"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div className="flex w-full flex-col gap-10 lg:pt-20">
            <h1 className="text-5xl font-bold text-white max-md:text-xl">MENGAPA DESTIMATE?</h1>
            <p className="text-xl text-white max-md:text-base/tight">
              Temukan Destinasi Impian Anda dengan Mudah dan Cepat bersama Destimate
            </p>
          </div>
        </div>
        <div className="bottom-0 left-0 right-0 flex flex-col justify-center gap-8 max-lg:mt-5 md:flex-row lg:-mt-[22rem] lg:px-3">
          {cardData.map((data) => (
            <div
              key={data.id}
              className="flex w-full flex-col justify-start gap-6 rounded-xl bg-white px-7 py-10 drop-shadow-lg lg:h-[27rem] lg:w-[23rem]"
            >
              <div className="flex h-[7rem] w-[7rem] items-center rounded-xl bg-black text-white max-lg:mx-auto">
                {<data.icon className="mx-auto h-16 w-16" />}
              </div>
              <h1 className="font-bold max-lg:mx-auto max-sm:text-2xl md:text-xl lg:text-2xl/normal">
                {data.title}
              </h1>
              <p className="text-justify text-base font-normal text-gray-600 lg:text-xl/normal">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
