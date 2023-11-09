import { Footer } from '@/components/Footer';
import { MainLayout } from '@/components/Layouts';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';

import { AboutUs, AdvantageDestimate } from './AboutUs';
import { Contact } from './Contact';
import { DestinationPopuler, Hero, TravelDreams } from './Home';

export const LandingPage = () => {
  return (
    <>
      <MainLayout title="Destimate">
        <div className="h-[1400px]">
          <Navbar />
          {/* Home */}
          <Hero />
          <DestinationPopuler />
          <TravelDreams />

          {/* About Us */}
          <AboutUs />
          <AdvantageDestimate />

          {/* Contact */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
      </MainLayout>
      <ScrollToTop />
    </>
  );
};
