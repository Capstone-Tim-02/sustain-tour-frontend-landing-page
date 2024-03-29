import ImageHandphone from '@/assets/images/Image-Handphone.png';

export const RegisterNow = () => {
  return (
    <section id="register-now">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-3 pt-5 sm:gap-10 md:mr-[3rem] md:flex-row md:pt-0">
        <div className="flex w-2/4 items-center justify-center">
          <img className="rounded-lg" src={ImageHandphone} alt="image-handphone" />
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-5 pr-5 md:w-2/4">
          <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-2xl">
            Daftarkan Wisatamu di Destimate: Petualanganmu, Pilihanmu!
          </h1>
          <p className="font-sans text-xs font-normal text-black sm:text-sm">
            Temukan Keindahan Tanpa Batas! Daftarkan Wisatamu di Destimate dan Mulailah Petualangan
            yang Tak Terlupakan. Bergabunglah Sekarang!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe89cB-W7M2Npsr-veJDuWuGIyT-R4my4v2tUJpjmGaFnLWjA/formResponse"
            target="_blank"
            className="rounded-md border-2 border-primary-100 p-3 font-sans text-xs font-semibold text-primary-100 duration-150 hover:border-primary-100 hover:bg-primary-100 hover:text-white md:px-10 md:text-sm"
            rel="noreferrer"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};
