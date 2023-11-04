import { Spinner } from '@/components/Elements';
import { MainLayout } from '@/components/Layouts';

export const LandingPage = () => {
  return (
    <MainLayout title="Destimate">
      <div className="flex flex-col items-center justify-center text-2xl">
        <h1 className="font-heading">Landing Page</h1>
        <p className="text-primary-60 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam assumenda blanditiis
          natus placeat iusto ad?
        </p>
        <Spinner />
      </div>
    </MainLayout>
  );
};
