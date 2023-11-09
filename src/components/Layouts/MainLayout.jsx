import { Head } from '@/components/Head';

export const MainLayout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <div className="mx-auto max-w-7xl p-5 lg:px-8">{children}</div>
    </>
  );
};
