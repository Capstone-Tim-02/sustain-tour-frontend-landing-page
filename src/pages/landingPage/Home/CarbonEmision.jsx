import ImageCarbonEmision from '@/assets/images/carbon-emission-image.jpg';

export const CarbonEmision = () => {
  return (
    <section id="carbon-emission">
      <div className="my-14 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
        <div className="h-auto max-w-[500px] ">
          <img className="rounded-lg" src={ImageCarbonEmision} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-3xl">
            Reduksi Emisi Karbon bersama Destimate
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
