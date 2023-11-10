import ImageCarbonEmision from '@/assets/images/image-carbon-emision.jpg';

export const CarbonEmision = () => {
  return (
    <section id="destination-populer">
      <div className="flex flex-col gap-5 my-14 md:flex-row md:gap-10 justify-center items-center">
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
