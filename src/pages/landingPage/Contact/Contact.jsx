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
  title: 'Kontak Kami',
  desc: 'Kami Menantikan Cerita Unik Anda. Mulailah Perbincangan, Temukan Inspirasi, dan Bergabung dengan Komunitas Petualang Destimate!',

  contact: {
    title: 'Informasi Kontak',
    desc: 'Bagikan Wisata Anda atau Sampaikan Pendapat Anda!',
    phone: '+62 812 3456 7890',
    email: 'destimate@gmail.com',
    address:
      'Kantor E2, Lantai 5, Khalifa Heights, Jalan Chaklala dekat dengan Committee Chowk, Rawalpindi',
  },
};

const FormInput = ({ type, placeholder, label }) => {
  return (
    <div className="flex items-center border-b-2 border-gray-300 py-1 md:max-w-[300px] lg:w-[300px] xl:w-[280px]">
      <input
        className="w-full appearance-none border-none bg-transparent px-0 py-1 leading-tight text-gray-700 focus:outline-none"
        type={type}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};

function ContactInfo({ contact }) {
  return (
    <div className="flex max-h-full w-full flex-col gap-4 rounded-2xl rounded-b-none rounded-bl-none bg-primary-100 p-7 text-left text-white md:max-h-[490px] md:max-w-[300px] md:rounded-r-none md:rounded-bl-2xl lg:max-w-[360px] xl:max-h-[430px]">
      <img src={Bubble1} alt="bubble" className="-ml-24 -mt-12 w-[180px]" />
      <h1 className="-mt-14 text-[33px] font-bold">{contact.title}</h1>
      <p className="max-w-[300px] text-sm md:text-xs xl:max-w-[250px]">{contact.desc}</p>

      <div className="mt-5 flex flex-col gap-4">
        <div className="flex gap-2">
          <PhoneIcon alt="phone" className="h-5 w-5" />
          <p className="max-w-[350px] text-sm md:max-w-[230px] md:text-xs">{contact.phone}</p>
        </div>
        <div className="flex gap-2">
          <MailIcon alt="email" className="h-5 w-5" />
          <p className="max-w-[350px] text-sm md:max-w-[230px] md:text-xs">{contact.email}</p>
        </div>
        <div className="flex gap-2">
          <MapPin alt="address" className="h-5 w-5" />
          <p className="max-w-[350px] text-sm md:max-w-[230px] md:text-xs">{contact.address}</p>
        </div>
      </div>
      <SosmedIcon />
    </div>
  );
}

function SosmedIcon() {
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
}

export const Contact = () => {
  return (
    <section id="kontak">
      <div className="my-6 p-7">
        <div className="mx-auto flex flex-col items-center gap-5 text-center">
          <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-3xl">
            {data.title}
          </h1>
          <h3 className="max-w-[500px] font-sans text-sm sm:text-lg md:text-base">{data.desc}</h3>
          <div className="mt-5 flex max-h-full max-w-full flex-col rounded-2xl bg-white shadow-[-13px_4px_53px_0px_rgba(0,0,0,0.25)] md:max-h-full md:w-[1000px] md:flex-row xl:max-h-[430px]">
            <ContactInfo contact={data.contact} />
            <form className="flex flex-col gap-1 px-10 py-12 md:gap-5">
              <div className="mb-5 flex flex-col justify-between gap-6 md:max-w-full md:flex-row md:gap-3 xl:max-w-full">
                <FormInput type="text" placeholder="Nama Depan" aria-label="First name" />
                <FormInput type="text" placeholder="Nama Belakang" aria-label="Last name" />
              </div>
              <div className="mb-5 flex flex-col justify-between gap-6 md:max-w-full md:flex-row md:gap-3 xl:max-w-full">
                <FormInput type="email" placeholder="Email" aria-label="Email" />
                <FormInput type="number" placeholder="No. Telephone" aria-label="Phone" />
              </div>
              <div className="my-4 border-b-2 border-gray-300 py-1 md:max-w-full xl:max-w-full">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full appearance-none border-none bg-transparent px-0 py-1 leading-tight text-gray-700 focus:outline-none"
                  type="text"
                  placeholder="Pesan Anda"
                ></textarea>
              </div>
              <div className="text-left">
                <button className="rounded-xl bg-primary-100 px-12 py-2 font-semibold text-white">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
