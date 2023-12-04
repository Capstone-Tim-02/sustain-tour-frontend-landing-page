import FleksibilitasIcon from '@/assets/images/AboutPage/icon-1.png';
import DiskonIcon from '@/assets/images/AboutPage/icon-2.png';
import KemudahanIcon from '@/assets/images/AboutPage/icon-3.png';
import DestpopIcon from '@/assets/images/AboutPage/icon-4.png';
import SpeakerIcon from '@/assets/images/AboutPage/speaker-icon.png';

const data = [
  {
    icon: SpeakerIcon,
    title: 'Tentang Kami',
    description:
      'Jelajahi dunia dengan Destimate dan rasakan sensasi petualangan tanpa batas. Kami siap menghadapi tantangan, apakah Anda siap?',
  },
  {
    icon: FleksibilitasIcon,
    bgColor: '#F1E8FF',
    title: 'Fleksibilitas',
    description:
      'Dengan aplikasi tiket wisata, pilih destinasi dan atraksi sesuai preferensi Anda dengan mudah.',
  },
  {
    icon: DiskonIcon,
    title: 'Diskon Eksklusif',
    bgColor: '#FFF2F2',
    description:
      'Temukan diskon eksklusif & paket istimewa! Hemat biaya, nikmati liburan Anda dengan gembira.',
  },
  {
    icon: KemudahanIcon,
    bgColor: '#E2F3FF',
    title: 'Kemudahan',
    description:
      'Dengan aplikasi tiket wisata, pesan cepat tanpa antrian dan pastikan perencanaan Anda terjamin.',
  },
  {
    icon: DestpopIcon,
    bgColor: '#FFE7FB',
    title: 'Destinasi Populer',
    description:
      'Temukan Pesona Tersembunyi Destinasi Populer dengan Panduan Ahli yang Menjanjikan Petualangan Unik Anda!',
  },
];

const CardAbout = ({ icon, title, desc, bgColor }) => {
  return (
    <div className="flex max-w-[430px] border-b-2 pb-4 md:border-none md:pb-0">
      <div
        className="mx-6 mt-7 flex h-20 w-[155px] items-center rounded-xl p-4 md:mt-2 md:w-32"
        style={{ backgroundColor: bgColor }}
      >
        <img src={icon} alt="Icon" />
      </div>
      <div className="ml-2 mt-4 text-start md:mt-0">
        <h1 className="text-base md:text-xl font-medium">{title}</h1>
        <p className="mt-3 text-xs sm:text-sm md:mt-5">{desc}</p>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <section id="tentang-kami">
      <div className="md:-mx-18 -mx-5 mb-[180px] max-h-[600px] bg-primary-60 p-7 px-0 md:max-h-[430px] xl:-mx-[66px]">
        <div className="mx-auto flex flex-col items-center gap-3 text-center">
          <div className="w-16 rounded-full bg-white p-3">
            <img src={data[0].icon} alt="Icon" />
          </div>
          <h1 className="font-sans text-xl font-bold text-white sm:text-2xl lg:text-3xl">
            {data[0].title}
          </h1>
          <h3 className="max-w-[500px] font-sans text-xs sm:text-sm text-white md:max-w-[600px] md:text-base">
            {data[0].description}
          </h3>
          <div className="rounded-xl bg-white shadow-[-13px_4px_53px_0px_rgba(0,0,0,0.30)] ">
            <div className="gap-3 p-4 md:flex md:p-8">
              {
                <CardAbout
                  icon={data[1].icon}
                  title={data[1].title}
                  desc={data[1].description}
                  bgColor={data[1].bgColor}
                />
              }
              <div className="w-0.5 md:h-48 xl:bg-gray-200"></div>
              {
                <CardAbout
                  icon={data[2].icon}
                  title={data[2].title}
                  desc={data[2].description}
                  bgColor={data[2].bgColor}
                />
              }
            </div>
            <div className="-mt-8 h-0.5 border-none text-center md:mx-32 md:-mt-20 md:bg-gray-200"></div>
            <div className="gap-3 p-4 md:flex md:p-8">
              {
                <CardAbout
                  icon={data[3].icon}
                  title={data[3].title}
                  desc={data[3].description}
                  bgColor={data[3].bgColor}
                />
              }
              <div className="w-0.5 xl:bg-gray-200"></div>
              {
                <CardAbout
                  icon={data[4].icon}
                  title={data[4].title}
                  desc={data[4].description}
                  bgColor={data[4].bgColor}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
