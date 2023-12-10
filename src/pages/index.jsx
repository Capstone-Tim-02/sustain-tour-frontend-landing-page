import BackgroundContactImage from '@/assets/images/ImagesContact/Background-Contact-Image.png';
import { BackgroundImage } from '@/assets/images/ImagesHero';
import { Footer } from '@/components/Footer';
import { MainLayout } from '@/components/Layouts';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';

import { AboutUs, RegisterNow } from './AboutUs';
import { Contact } from './Contact';
import { CarbonEmision, DestinationUnmissed, Hero, TravelDreams } from './Home';

export const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: '43%',
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
    <>
      <div style={backgroundStyle} className='overflow-x-hidden'>
        <Navbar />

        <MainLayout title="Destimate">
          {/* Home */}
          <Hero />
          <CarbonEmision />
          <DestinationUnmissed />
          <TravelDreams />

          {/* About Us */}
          <AboutUs />

          <div style={backgroundAbouteUsStyle} className='mr-[-2rem] lg:mr-[-4rem]'>
            <RegisterNow />
          
          

            {/* Contact */}
            <Contact />
          </div>
        </MainLayout>

        {/* Footer */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};
