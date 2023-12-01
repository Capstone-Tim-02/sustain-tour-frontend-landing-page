import React from 'react';
import { MailCheckIcon, XIcon } from 'lucide-react';

export const ModalSuccess = ({ onClick }) => {
  return (
    <div className="min-w-screen animated fadeIn faster fixed  inset-0  left-0 top-0 z-50 flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat outline-none focus:outline-none">
      <div className="absolute inset-0 z-0 bg-black opacity-80"></div>
      <div className="relative mx-auto my-auto w-full max-w-md rounded-xl bg-white p-5 shadow-lg ">
        <div>
          <div className="flex-auto justify-center p-5 text-center">
            <div className="flex items-center justify-center">
              <MailCheckIcon size={120} color="#059669" />
            </div>
            <h2 className="pt-4 text-xl font-bold ">Pesan anda telah berhasil terkirim</h2>
          </div>
          <div className=" text-center md:block">
            <div className="mb-2 w-full cursor-default rounded-lg border border-success-500 bg-success-800 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm md:mb-0">
              Terima Kasih
            </div>
          </div>
          <button
            className="absolute right-0 top-0 mr-5 mt-4 cursor-pointer rounded text-gray-400 transition duration-150 ease-in-out hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
            role="button"
            onClick={onClick}
          >
            <XIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ModalFailed = ({ onClick }) => {
  return (
    <div className="min-w-screen animated fadeIn faster fixed  inset-0  left-0 top-0 z-50 flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat outline-none focus:outline-none">
      <div className="absolute inset-0 z-0 bg-black opacity-80"></div>
      <div className="relative mx-auto my-auto w-full max-w-md rounded-xl bg-white p-5 shadow-lg ">
        <div>
          <div className="flex-auto justify-center p-5 text-center">
            <div className="flex items-center justify-center">
              <XIcon size={80} color="#E10E0E" />
            </div>
            <h2 className="pt-4 text-xl font-bold ">Gagal Mengirim pesan</h2>
          </div>
          <div className=" text-center md:block">
            <div className="mb-2 w-full cursor-default rounded-lg border border-red-500 bg-red-700 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm md:mb-0">
              Maaf
            </div>
          </div>
          <button
            className="absolute right-0 top-0 mr-5 mt-4 cursor-pointer rounded text-gray-400 transition duration-150 ease-in-out hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
            role="button"
            onClick={onClick}
          >
            <XIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
