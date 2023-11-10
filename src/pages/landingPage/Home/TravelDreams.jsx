import imageTravelDreams from '@/assets/images/travel-dreams.jpg';

export const TravelDreams = () => {
  return (
    <section id="travel-dreams">
      <div className="mx-auto my-14 flex w-full flex-col gap-6 text-center">
        <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-3xl">
          Raih Impian Perjalanan Anda
        </h1>
        <h2 className="max-w-md self-center font-sans text-sm font-normal text-greyDestimate-100">
          Mulai Petualangan Ajaib, Temukan Destinasi Inspiratif, Raih Impian Perjalanan Anda!
        </h2>

        <div className="mt-4 flex h-auto flex-col items-center">
          <img className="rounded-lg md:max-w-[750px]" src={imageTravelDreams} alt="" />
        </div>

        <div className="mt-[-65px] flex flex-row justify-center space-x-2 self-center md:mt-[-75px] md:flex-row md:space-x-3 md:space-y-0">
          <div className="pointer-events-none h-[70px] w-[90px] rounded-lg bg-primary-80 shadow-xl md:h-[100px] md:w-[135px]">
            <div className="mt-[15%] font-sans text-base font-semibold text-white md:text-xl">
              1k+
            </div>
            <div className="font-sans text-xs font-medium text-white md:text-lg">Pengguna</div>
          </div>
          <div className="pointer-events-none h-[70px] w-[90px] rounded-lg bg-primary-80 shadow-xl md:h-[100px] md:w-[135px]">
            <div className="mt-[15%] font-sans text-base font-semibold text-white md:text-xl">
              2+
            </div>
            <div className="font-sans text-xs font-medium text-white md:text-lg">Pengalaman</div>
          </div>
          <div className="pointer-events-none h-[70px] w-[90px] rounded-lg bg-primary-80 shadow-xl md:h-[100px] md:w-[135px]">
            <div className="mt-[15%] font-sans text-base font-semibold text-white md:text-xl">
              100+
            </div>
            <div className="font-sans text-xs font-medium text-white md:text-lg">Destinasi</div>
          </div>
        </div>
      </div>
    </section>
  );
};
