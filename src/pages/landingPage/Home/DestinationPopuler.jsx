import imageBromo from '@/assets/images/destinasi-bromo.png';
import imageGiliTerawang from '@/assets/images/destinasi-gili-terawang.png';
import imageRajaAmpat from '@/assets/images/destinasi-raja-ampat.png';
import { CardDestinasi } from '@/components/Elements/Card';

const contents = [
  {
    image: imageGiliTerawang,
    location: 'Lombok, Indonesia',
    destination: 'Gili Terawang',
    description: `Jangan Lewatkan Petualangan Gili Trawangan! Mari Rasakan Keindahan Pulau Ini, Nikmati Pantai Putihnya, dan Saksikan Keajaiban Bawah Lautnya. Segera Rekam Kenangan Tak Terlupakan Anda di Gili Trawangan!`
  },
  {
    image: imageBromo,
    location: 'Jawa Timur, Indonesia',
    destination: 'Bromo',
    description: `Jelajahi Keindahan Gunung Berapi, Saksikan Keajaiban Matahari Terbit, dan Temukan Petualangan yang Menggetarkan. Rekam Kenangan Tak Terlupakan di Tengah Alam Liar Bromo. Bergabunglah dan Mulailah Petualangan Hidup Anda!`
  },
  {
    image: imageRajaAmpat,
    location: 'Papua, Indonesia',
    destination: 'Raja Ampat',
    description: `Saatnya Mengeksplorasi Keajaiban Bawah Laut Raja Ampat! Rasakan Kehidupan Laut yang Ajaib, Terumbu Karang Megah, dan Pantai Berpasir Putih. Jelajahi Surga Tropis yang Tak Tertandingi di Raja Ampat. Bergabunglah dalam Petualangan yang akan Mengubah Cara Anda Melihat Dunia!`
  }
]

export const DestinationPopuler = () => {
  return (
    <section id="destination-populer">
      <div className="mx-auto flex w-full flex-col text-center gap-6 my-5">
        <h1 className="font-sans text-xl font-bold text-primary-100 sm:text-2xl lg:text-3xl">
          Jelajahi Destinasi Paling Populer
        </h1>
        <h2 className="font-sans text-sm font-normal text-greyDestimate-100 max-w-lg self-center">
          Temukan keajaiban dunia di destinasi paling dicari. Mulai petualanganmu sekarang dan raih kenangan abadi!
        </h2>

        <div className='flex flex-col justify-center items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          {contents.map((content) => (
            <CardDestinasi
              key={content.destination}
              image={content.image}
              description={content.description}
              destination={content.destination}
              location={content.location}/>
          ))}
        </div>
      </div>
    </section>
  );
};
