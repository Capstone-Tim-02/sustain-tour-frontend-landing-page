import BackgroundComponent from '@/assets/images/background-component.png';
import { Footer } from '@/components/Footer';
import { MainLayout } from '@/components/Layouts';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';

import { AboutUs, AdvantageDestimate} from './AboutUs';
import { Contact } from './Contact';
import { CarbonEmision, DestinationUnmissed, Hero, TravelDreams } from './Home';

export const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundComponent})`,
    backgroundSize: '43%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
  };

  return (
    <>
        <div style={backgroundStyle} >
          <Navbar />

          <MainLayout title="Destimate">
              {/* Home */}
              <Hero />
              <CarbonEmision/>
              <DestinationUnmissed />
              <TravelDreams />

              {/* About Us */}
              <AboutUs />
              <AdvantageDestimate />

              {/* Contact */}
              <Contact />
          </MainLayout>
        </div>
              
      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </>
  );
};
