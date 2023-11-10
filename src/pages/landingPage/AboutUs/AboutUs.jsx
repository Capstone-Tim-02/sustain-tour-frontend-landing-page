import imageAboutUs from '@/assets/images/about-us-image.jpg';

export const AboutUs = () => {
  return (
    <section id="tentang-kami">
      <div className="mx-auto flex w-full flex-col gap-5 text-center md:gap-10">
        <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-3xl">
          Tentang Kami
        </h1>
        <div className="flex flex-col items-center justify-between gap-5 md:gap-10 lg:flex-row lg:gap-20 ">
          <div className="max-h-auto max-w-[700px] rounded-2xl">
            <img className="object-fill" src={imageAboutUs} alt="pantai-raja-ampat" />
          </div>
          <div className="flex h-auto flex-col  justify-center gap-3 ">
            <div className="">
              <div className="mb-3 flex justify-start gap-5 font-sans text-lg font-bold text-black md:text-xl">
                <h1 className="">01</h1>
                <h1 className="">Berkelanjutan</h1>
              </div>

              <p className="text-left font-sans text-xs font-normal text-black md:text-sm">
                Jelajahi dunia dengan hati yang berkelanjutan. Tiket wisata kami, langkah pertama
                menuju perjalanan bertanggung jawab.
              </p>
            </div>
            <div className="">
              <div className="mb-3 flex justify-start gap-5 font-sans text-lg font-bold text-black md:text-xl">
                <h1 className="">02</h1>
                <h1 className="">Destinasi</h1>
              </div>

              <p className="text-left font-sans text-xs font-normal text-black md:text-sm">
                Dapatkan pengalaman berwisata yang adil dan berbagi kebahagiaan dengan orang yang
                Anda cintai. Temukan destinasi impian Anda, nikmati, dan sebarkan kebahagiaan
                bersama aplikasi tiket wisata kami.
              </p>
            </div>
            <div className="">
              <div className="mb-3 flex justify-start gap-5 font-sans text-lg font-bold text-black md:text-xl">
                <h1 className="">03</h1>
                <h1 className="">Pengalaman</h1>
              </div>

              <p className="text-left font-sans text-xs font-normal text-black md:text-sm">
                Rasakan Petualangan Sepenuh Hati: Temukan pengalaman tak terlupakan di destinasi
                favorit Anda dengan aplikasi tiket wisata kami. Buat kenangan indah dalam setiap
                perjalanan Anda. Bergabunglah dalam petualangan sejati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
