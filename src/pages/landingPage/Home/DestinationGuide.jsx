import { appstore, iphone13, playstore } from "@/assets/images"

export const DestinationGuide = () => {
  return (
    <div className="flex bg-[url('@/assets/images/footer.png')] bg-cover bg-center overflow-hidden bg-no-repeat lg:px-52 pt-5 md:px-20">
        <img src={iphone13} alt="iphone" className="hidden h-72 w-48 transform translate-y-11 sm:block"/>
        <div className="ml-16 transform translate-y-9 text-left">
            <h1 className="mb-4 text-3xl font-semibold text-white max-w-xs sm:max-w-none">Panduan perjalanan sempurna dalam genggaman!</h1>
            <p className="text-white max-w-xs sm:max-w-none">Rencanakan liburan impianmu dengan mudah! Dapatkan diskon eksklusif<br/>dan pilihan 
                istimewa dengan aplikasi tiket wisata. Pesan cepat tanpa<br/>antrian, pastikan perjalananmu terjamin!
            </p>
            <div className="flex mt-6 h-10 justify-center sm:justify-start mb-20">
                <img src={playstore} alt="playstore" />
                <img src={appstore} alt="playstore" className="ml-8" />
            </div>
        </div>
    </div>
  )
}
