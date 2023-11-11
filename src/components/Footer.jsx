import footerlogo from '/logo-2.png'

export const Footer = () => {
  return (
    <footer>
      <div className="flex bg-black px-12 py-7">
        <div className="w-8">
          <img src={footerlogo} alt="destimate-logo"/>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col gap-2 text-white ml-5 lg:-ml-24 md:ml-5">
              <div className='font-bold text-xl'>
                <h1>Destimate</h1>
              </div>
              <div className="mt-2 font-normal flex flex-col text-xs mb-5 gap-2 sm:mb-0 sm:gap-1">
                <p>+62 81367840275</p>
                <p>destimate@gmail.com</p>
                <p>Kantor E2, Lantai 5, Khalifa Heights, Jalan Chaklala dekat dengan Committee Chowk, Rawalpindi</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-white text-sm ml-5 sm:mr-10 md:mr-5">
              <p>Beranda</p>
              <p>Tentang Kami</p>
              <p>Kontak</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-black px-12 py-3 pb-6 text-white">
        <span className='border border-white'/>
        <div className="mt-3 text-sm">
          <p>&copy; 2023 Destimate. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};