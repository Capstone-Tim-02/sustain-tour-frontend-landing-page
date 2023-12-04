import { Route, Routes } from 'react-router-dom';

import { LandingPage } from '@/pages';
import { NotFound } from '@/pages/notFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
