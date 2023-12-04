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

  return (
    <>
      <div style={backgroundStyle}>
        <Navbar />

        <MainLayout title="Destimate">
          {/* Home */}
          <Hero />
          <CarbonEmision />
          <DestinationUnmissed />
          <TravelDreams />

          {/* About Us */}
          <AboutUs />
          <RegisterNow />

          {/* Contact */}
          <Contact />
        </MainLayout>

        {/* Footer */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};
