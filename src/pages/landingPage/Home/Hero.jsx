import HeroPhoto from "@/assets/HeroPhoto.png"

export const Hero = () => {
  return (
    <section id="hero">
      <div className="bg-cover h-[300px]
        sm:h-[370px] 
        md:h-[440px] 
        lg:h-[570px] 
        text-white rounded bg-[url('@/assets/HeroPhoto.png')]" 
        >
        <div className="ml-[10px] pt-[80px] 
          sm:ml-[29px] sm:pt-[85px] 
          md:ml-[34px] md:pt-[98px] 
          lg:ml-[44px] lg:pt-[127px] ">
          <div className="TittleHero font-bold text-[20px] leading-6 
          sm:text-[29px] sm:leading-7 
          md:text-[33px] md:leading-[38px] 
          lg:text-[44px] lg:leading-[50px]">
            <h1>JELAJAHI KECANTIKAN ALAMI</h1>
            <h1>DAN KEHIDUPAN LIAR</h1>
          </div>
          <div className="DescriptionHero text-[9px] mt-[15px] leading-3 
            sm:leading-3 sm:text-[12px] sm:mt-[21px]
            md:leading-4 md:text-[14px] md:mt-[25px]
            lg:leading-5 lg:text-[18px] lg:mt-[32px]">
            <p>Taklukkan keindahan alam tersembunyi dan rasakan sensasi petualangan</p>
            <p >tak terlupakan bersama tim ahli kami! Jangan lewatkan kesempatan ini,</p>
            <p>segera gabung dalam petualangan melalui aplikasi Destimate!</p>
          </div>
          <button class="bg-[#2D68F8] rounded-lg mt-[20px] text-[9px] py-2 px-6  
          sm:mt-[21px] sm:px-[33px] sm:py-[8px] sm:text-[12px]
          md:mt-[25px] md:px-[38px] md:py-[9px] md:text-[14px]
          lg:mt-[32px] lg:px-[50px] lg:py-[12px] lg:text-[18px]
           ">Daftar Sekarang</button>
        </div>
      </div>
    </section>
  );
};
