import { Head } from '@/components/Head';

export const MainLayout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <div className='flex flex-col gap-5 pt-6'>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
      </div>
    </>
  );
};
