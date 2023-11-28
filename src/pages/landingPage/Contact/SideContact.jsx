import React from 'react';
import { Link } from 'react-router-dom';
import Bubble1 from '@/assets/images/ContactPage/bubble-1.png';
import Bubble2 from '@/assets/images/ContactPage/bubble-2.png';

import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPin,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';

const data = {
  title: 'Informasi Kontak',
  desc: 'Bagikan Wisata Anda atau Sampaikan Pendapat Anda!',
  phone: '+62 812 3456 7890',
  email: 'destimate@gmail.com',
  address:
    'Kantor E2, Lantai 5, Khalifa Heights, Jalan Chaklala dekat dengan Committee Chowk, Rawalpindi',
};

export const ContactInfo = () => {
  return (
    <div className="flex max-h-full w-full flex-col gap-4 rounded-2xl rounded-b-none rounded-bl-none bg-primary-100 p-7 text-left text-white md:max-h-[490px] md:max-w-[300px] md:rounded-r-none md:rounded-bl-2xl lg:max-w-[360px] xl:max-h-[430px]">
      <img src={Bubble1} alt="bubble" className="-ml-24 -mt-12 w-[180px]" />
      <h1 className="-mt-24 text-[33px] font-bold md:-mt-14">{data.title}</h1>
      <p className="max-w-[300px] text-sm md:text-xs xl:max-w-[250px]">{data.desc}</p>

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex gap-2">
          <PhoneIcon alt="phone" className="h-5 w-5" />
          <p className="max-w-[180px] text-sm  md:max-w-[210px] md:text-xs xl:max-w-[230px]">
            {data.phone}
          </p>
        </div>
        <div className="flex gap-2">
          <MailIcon alt="email" className="h-5 w-5" />
          <p className="max-w-[180px] text-sm  md:max-w-[210px] md:text-xs xl:max-w-[230px]">
            {data.email}
          </p>
        </div>
        <div className="flex gap-2">
          <MapPin alt="address" className="h-5 w-5" />
          <p className="max-w-[180px] text-sm  md:max-w-[210px] md:text-xs xl:max-w-[230px]">
            {data.address}
          </p>
        </div>
      </div>
      <SosmedIcon />
    </div>
  );
};

const SosmedIcon = () => {
  return (
    <div className="flex justify-between">
      <div className="left mt-4 flex gap-4 text-sm text-white md:mt-7">
        <Link to={'https://www.facebook.com/'} className="cursor-auto">
          <FacebookIcon className="x-6 -6 rounded-full bg-primary-60  p-1" />
        </Link>
        <Link to={'https://www.youtube.com/'} className="cursor-auto">
          <YoutubeIcon className="h-6 w-6  rounded-full bg-primary-60 p-1" />
        </Link>
        <Link to={'https://www.twitter.com/'} className="cursor-auto">
          <TwitterIcon className="h-6 w-6  rounded-full bg-primary-60 p-1" />
        </Link>
        <Link to={'https://www.instagram.com/'} className="cursor-auto">
          <InstagramIcon className="h-6 w-6  rounded-full bg-primary-60 p-1" />
        </Link>
      </div>
      <img src={Bubble2} alt="bubble" className="relative -mb-28 -mr-10 -mt-4 w-[160px]" />
    </div>
  );
};
