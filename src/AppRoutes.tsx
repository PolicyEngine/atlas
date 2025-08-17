import { Routes, Route, Navigate } from 'react-router-dom';
import Overview from './components/Overview';
import Demo from './components/Demo';
import Partners from './components/Partners';
import PBIFApplication from './components/PBIFApplication';
import ENGINEApplication from './components/ENGINEApplication';
import CivicTechEngagement from './components/CivicTechEngagement';
import BlogPost from './components/BlogPost';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/community" element={<CivicTechEngagement />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/application" element={<PBIFApplication />} />
      <Route path="/engine" element={<ENGINEApplication />} />
      <Route path="/blog" element={<BlogPost />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
