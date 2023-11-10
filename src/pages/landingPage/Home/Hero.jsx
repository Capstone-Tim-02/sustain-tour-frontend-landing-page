export const Hero = () => {
  return (
    <section id="hero">
      <div
        className="h-[300px] rounded-lg
        bg-[url('@/assets/images/hero-image.png')] 
        bg-cover 
        text-white 
        sm:h-[370px] md:h-[440px] lg:h-[570px]"
      >
        <div
          className="ml-[10px] pt-[80px] 
          sm:ml-[29px] sm:pt-[85px] 
          md:ml-[34px] md:pt-[98px] 
          lg:ml-[44px] lg:pt-[127px] "
        >
          <div
            className="TittleHero text-[20px] font-bold leading-6 
          sm:text-[29px] sm:leading-7 
          md:text-[33px] md:leading-[38px] 
          lg:text-[44px] lg:leading-[50px]"
          >
            <h1>JELAJAHI KECANTIKAN ALAMI</h1>
            <h1>DAN KEHIDUPAN LIAR</h1>
          </div>
          <div
            className="DescriptionHero mt-[15px] text-[9px] leading-3 
            sm:mt-[21px] sm:text-[12px] sm:leading-3
            md:mt-[25px] md:text-[14px] md:leading-4
            lg:mt-[32px] lg:text-[18px] lg:leading-5"
          >
            <p>Taklukkan keindahan alam tersembunyi dan rasakan sensasi petualangan</p>
            <p>tak terlupakan bersama tim ahli kami! Jangan lewatkan kesempatan ini,</p>
            <p>segera gabung dalam petualangan melalui aplikasi Destimate!</p>
          </div>
          <button
            className="mt-[20px] rounded-lg bg-[#2D68F8] px-6 py-2 text-[9px]  
          sm:mt-[21px] sm:px-[33px] sm:py-[8px] sm:text-[12px]
          md:mt-[25px] md:px-[38px] md:py-[9px] md:text-[14px]
          lg:mt-[32px] lg:px-[50px] lg:py-[12px] lg:text-[18px]
           "
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};
