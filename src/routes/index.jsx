import { Route, Routes } from 'react-router-dom';

import { LandingPage } from '@/pages/landing-page';
import { NotFound } from '@/pages/not-found';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
