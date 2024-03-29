import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPin,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';

import { Bubble1, Bubble2 } from '@/assets/images/ImagesContact';

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
    <div className="flex max-h-full w-full flex-col gap-1 rounded-none rounded-b-none rounded-bl-none bg-primary-100 p-7 text-left text-white md:max-h-[490px] md:max-w-[350px] md:gap-4 md:rounded-l-2xl md:rounded-r-none lg:max-w-[380px] xl:max-h-[430px] xl:max-w-[400px]">
      <img src={Bubble1} alt="bubble-1" className="-ml-24 -mt-12 w-[180px]" />
      <h1 className="-mt-24 text-base font-bold md:-mt-14 md:text-2xl">{data.title}</h1>
      <p className="text-xs sm:text-sm md:max-w-[300px] xl:max-w-[250px]">{data.desc}</p>

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="md:min-w-[8px]">
            <PhoneIcon alt="email" className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <p className="max-w-full text-xs sm:text-sm">{data.phone}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="md:min-w-[8px]">
            <MailIcon alt="email" className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <p className="max-w-full text-xs sm:text-sm">{data.email}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="md:min-w-[8px]">
            <MapPin alt="address" className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div>
            <p className="max-w-full pl-2 text-xs sm:text-sm">{data.address}</p>
          </div>
        </div>
      </div>
      <SosmedIcon />
    </div>
  );
};

const SosmedIcon = () => {
  return (
    <div className="flex justify-between">
      <div className="left mt-4 flex gap-4 text-sm text-white">
        <Link to={'https://www.facebook.com/'} target="_blank" className="cursor-pointer">
          <FacebookIcon className="x-6 -6 rounded-full bg-primary-60  p-1" />
        </Link>
        <Link to={'https://www.youtube.com/'} target="_blank" className="cursor-pointer">
          <YoutubeIcon className="h-6 w-6  rounded-full bg-primary-60 p-1" />
        </Link>
        <Link to={'https://www.twitter.com/'} target="_blank" className="cursor-pointer">
          <TwitterIcon className="h-6 w-6  rounded-full bg-primary-60 p-1" />
        </Link>
        <Link to={'https://www.instagram.com/'} target="_blank" className="cursor-pointer">
          <InstagramIcon className="h-6 w-6  rounded-full bg-primary-60 p-1" />
        </Link>
      </div>
      <img src={Bubble2} alt="bubble-2" className="relative -mb-28 -mr-10 -mt-4 w-[160px]" />
    </div>
  );
};
