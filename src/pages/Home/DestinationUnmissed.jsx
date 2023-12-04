import DestimatePhone from '@/assets/images/Destimate-Phone.png';

export const DestinationUnmissed = () => {
  return (
    <section id="destination-unmissed">
      <div className="mx-auto pb-10 flex w-full flex-col-reverse items-center justify-center gap-3  sm:gap-10 md:flex-row">
        <div className="flex flex-col gap-5 lg:w-[50%]">
          <h1 className="text-left font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-3xl">
            Destinasi yang Tidak Boleh Anda Lewatkan
          </h1>
          <p className="text-left font-sans text-xs font-normal text-black  md:text-sm">
            Pilih Tujuan Impianmu dan Dapatkan Penawaran Terbaik! Hubungi Pakar Destimate Kami
            Sekarang untuk Petualangan yang Tak Terlupakan!
          </p>
        </div>
        <div className="flex w-2/4 items-center justify-center">
          <img className="rounded-lg" src={DestimatePhone} alt="destimate-phone" />
        </div>
      </div>
    </section>
  );
};


