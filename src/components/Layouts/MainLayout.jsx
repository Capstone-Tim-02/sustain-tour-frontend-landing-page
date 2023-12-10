import { Head } from '@/components/Head';

export const MainLayout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <div className="mx-auto flex max-w-7xl flex-col gap-5 pt-6">
        <div className=" px-5 lg:px-8">{children}</div>
      </div>
    </>
  );
};
