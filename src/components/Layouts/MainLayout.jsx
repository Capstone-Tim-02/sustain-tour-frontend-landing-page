import { Head } from '@/components/Head';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { ScrollToTop } from '../ScrollToTop';

export const MainLayout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />

      <Navbar />
      <div className="mx-auto flex max-w-7xl flex-col gap-5 overflow-hidden pt-6 xl:overflow-visible">
        <div className=" px-5 lg:px-8">{children}</div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
};
