import { Footer } from '@/components/Footer';
import { MainLayout } from '@/components/Layouts';
import { Navbar } from '@/components/Navbar';
import { ScrollToTop } from '@/components/ScrollToTop';

import { AboutUs, RegisterNow } from './AboutUs';
import { Contact } from './Contact';
import { CarbonEmision, DestinationPopuler, Hero, TravelDreams } from './Home';

export const LandingPage = () => {
  return (
    <>
      <MainLayout title="Destimate">
        <Navbar />
        {/* Home */}
        <Hero />
        <CarbonEmision />
        <DestinationPopuler />
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
    </>
  );
};
