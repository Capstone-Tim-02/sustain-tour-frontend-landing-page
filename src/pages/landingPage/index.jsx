import { Footer } from '@/components/Footer';
import { MainLayout } from '@/components/Layouts';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';

import { PanduanDestinasi } from './Home/PanduanDestinasi';
import { AboutUs, AdvantageDestimate } from './AboutUs';
import { Contact } from './Contact';
import { CarbonEmision, DestinationPopuler, Hero, TravelDreams } from './Home';

export const LandingPage = () => {
  return (
    <>
      <MainLayout title="Destimate">
        <Navbar />
        {/* Home */}
        <Hero />
        <CarbonEmision/>
        <DestinationPopuler />
        <TravelDreams />

        {/* About Us */}
        <AboutUs />
        <AdvantageDestimate />

        {/* Contact */}
        <Contact />

      </MainLayout>
      <PanduanDestinasi/>
      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </>
  );
};
