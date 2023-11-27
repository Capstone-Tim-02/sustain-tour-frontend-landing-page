import React from 'react';
import footerlogo from '/logo-2.png';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = {
  title: 'Destimate',
  desc: 'Temukan Dunia dengan Destimate - Membuat Setiap Langkah Perjalanan Anda Lebih Berarti.',

  jelajah: {
    title: 'Jelajahi',
    item1: 'Beranda',
    item2: 'Tentang Kami',
    item3: 'Kontak',
  },

  contact: {
    title: 'Kontak Kami',
    item1: '+62 81367840275',
    item2: 'destimate@gmail.com',
    item3:
      'Kantor E2, Lantai 5, Khalifa Heights, Jalan Chaklala dekat dengan Committee Chowk, Rawalpindi',
  },
};

function SosmedIcon() {
  return (
    <div className="ml-5 flex flex-row-reverse sm:flex-col-reverse md:ml-0">
      <div className="flex flex-row items-end gap-3 text-sm text-white sm:ml-auto xl:gap-5">
        <Link to={'https://www.facebook.com/'} className="cursor-auto">
          <FacebookIcon className="h-7 w-7 rounded-full bg-primary-60 p-1 xl:h-8 xl:w-8" />
        </Link>
        <Link to={'https://www.youtube.com/'} className="cursor-auto">
          <YoutubeIcon className="h-7 w-7 rounded-full bg-primary-60  p-1 xl:h-8 xl:w-8" />
        </Link>
        <Link to={'https://www.twitter.com/'} className="cursor-auto">
          <TwitterIcon className="h-7 w-7 rounded-full bg-primary-60  p-1 xl:h-8 xl:w-8" />
        </Link>
        <Link to={'https://www.instagram.com/'} className="cursor-auto">
          <InstagramIcon className="h-7 w-7 rounded-full bg-primary-60  p-1 xl:h-8 xl:w-8" />
        </Link>
      </div>
    </div>
  );
}

export const Footer = () => {
  return (
    <footer className="mt-24 bg-primary-100">
      <div className="w-full max-w-screen-2xl lg:py-3">
        <div className="flex px-12 pb-3 pt-7">
          <div className="w-8">
            <img src={footerlogo} alt="destimate-logo" />
          </div>
          <div className="container w-full">
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="mb-3 ml-5 flex flex-col gap-2 border-b text-white sm:border-0 md:ml-5 ">
                <div className="text-xl font-bold">
                  <h1>{data.title}</h1>
                </div>
                <div className="mb-5 mt-3 flex flex-col text-sm font-normal sm:mb-0 sm:max-w-[230px] xl:max-w-[330px]">
                  <p>{data.desc}</p>
                </div>
              </div>
              <div className="mb-3 ml-5 flex flex-col gap-2 border-b pb-3 text-white sm:border-0 md:ml-0">
                <div className="text-sm font-bold">
                  <h2>{data.jelajah.title}</h2>
                </div>
                <div className="flex flex-col gap-3 text-sm text-white sm:ml-auto md:mr-5">
                  {Object.values(data.jelajah)
                    .slice(1)
                    .map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                </div>
              </div>
              <div className="mb-3 ml-5 flex flex-col gap-2 text-white md:ml-0">
                <div className="text-sm font-bold">
                  <h2>{data.contact.title}</h2>
                </div>
                <div className="flex max-w-[400px] flex-col gap-3 text-sm text-white sm:ml-auto md:mr-5">
                  {Object.values(data.contact)
                    .slice(1)
                    .map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                </div>
              </div>
              <SosmedIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-12 py-2 pb-6 text-white">
          <span className="border border-white" />
          <div className="mt-3 text-sm">
            <p>Copyright &copy; 2023 Destimate. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
