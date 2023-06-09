import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ProjectPage from '../pages/ProjectPage';
import ContactPage from '../pages/ContactPage';

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={ location } key={ location.pathname }>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/sobre" element={ <AboutPage /> } />
            <Route path="/projetos" element={ <ProjectPage /> } />
            <Route path="/contato" element={ <ContactPage /> } />
        </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
