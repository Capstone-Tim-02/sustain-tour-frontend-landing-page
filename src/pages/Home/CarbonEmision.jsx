import ImageCarbonEmision from '@/assets/images/carbon-emission.jpg';

export const CarbonEmision = () => {
  return (
    <section id="carbon-emission">
      <div className="flex flex-col items-center justify-between gap-5 pb-10 md:flex-row md:gap-10 lg:mb-5 lg:mt-20">
        <div className="h-auto max-w-[40%] md:max-w-[35%] ">
          <img className="rounded-lg" src={ImageCarbonEmision} alt="" />
        </div>
        <div className="flex flex-col gap-5 lg:w-[50%]">
          <h1 className="text-left font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-3xl">
            Petualangan Tanpa Batas, Jejak Karbon Terbatas!
          </h1>
          <p className="text-left font-sans text-xs font-normal text-black md:text-sm">
            Jadilah Bagian dari Perubahan Positif! Bersama Destimate, setiap petualanganmu adalah
            langkah kecil untuk mengurangi jejak karbon, menjaga keindahan alam, dan menciptakan
            masa depan perjalanan yang ramah lingkungan.
          </p>
        </div>
      </div>
    </section>
  );
};
