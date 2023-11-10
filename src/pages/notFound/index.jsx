import notFoundImage from '@/assets/not-found/not-found-image.png';
import { MainLayout } from '@/components/Layouts';
import { Navbar } from '@/components/Navbar';
import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <MainLayout>
      <Navbar />
      <div className="flex flex-wrap-reverse items-center gap-5 rounded-lg bg-[#E1E1E1]/[40%] p-10 md:flex-nowrap">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 font-sans">
            <h1 className="text-xl font-bold md:text-3xl ">Ooops...</h1>
            <h2 className="text-sm font-medium md:text-base">
              Maaf, halaman yang Anda cari tidak dapat ditemukan.
            </h2>
            <p className="font-sans text-xs font-light md:text-sm">
              Ups! Sepertinya Anda tersesat di hutan yang belum dijelajahi. Kami tengah melakukan
              perbaikan. Kembali ke beranda Destimate atau mulai petualangan baru.
            </p>
          </div>
            <Link
              to="/"
              className="w-32 rounded-md bg-primary-80 p-3 font-sans flex items-center justify-center text-sm font-normal text-white hover:bg-primary-40"
            >
              <span>Kembali</span>
              <ChevronRightIcon className="h-5 w-5" />
            </Link>
        </div>
        <div className="h-auto max-w-[500px]">
          <img src={notFoundImage} alt="" />
        </div>
      </div>
    </MainLayout>
  );
};
