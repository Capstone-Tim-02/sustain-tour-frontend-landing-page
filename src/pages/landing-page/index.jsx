import BackgroundContactImage from '@/assets/images/ImagesContact/Background-Contact-Image.png';
import { BackgroundImage } from '@/assets/images/ImagesHero';
import { MainLayout } from '@/components/Layouts';

import {
  AboutUs,
  CarbonEmission,
  Contact,
  DestinationUnmissed,
  Hero,
  RegisterNow,
  TravelDreams,
} from './section';

export const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: '47%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
  };

  const backgroundAbouteUsStyle = {
    backgroundImage: `url(${BackgroundContactImage})`,
    backgroundSize: '27%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top 20rem right',
  };

  return (
    <MainLayout title="Destimate">
      <div
        style={backgroundStyle}
        className="mr-[-2rem] mt-[-100px] pr-[2rem] pt-[100px] lg:mr-[-65px] lg:mt-[-158px] lg:pr-[65px] lg:pt-[158px]"
      >
        <Hero />
      </div>

      <CarbonEmission />
      <DestinationUnmissed />
      <TravelDreams />
      <AboutUs />

      <div
        style={backgroundAbouteUsStyle}
        className="mr-[-2rem] pr-[2rem] lg:mr-[-4rem] lg:pr-[4rem] "
      >
        <RegisterNow />
        <Contact />
      </div>
    </MainLayout>
  );
};
