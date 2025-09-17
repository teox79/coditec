import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// Lazy loading per tutte le pagine
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Courses = React.lazy(() => import('../pages/Courses'));
const Trainers = React.lazy(() => import('../pages/Trainers'));
const Events = React.lazy(() => import('../pages/Events'));
const Gallery = React.lazy(() => import('../pages/Gallery'));
const Contact = React.lazy(() => import('../pages/Contact'));
const CourseDetail = React.lazy(() => import('../pages/CourseDetail'));

// Componente di loading
const PageLoader: React.FC = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

const AppRoutes: React.FC = () => {
    return (
        <ScrollToTop>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/mentors" element={<Trainers />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/course/:id" element={<CourseDetail />} />
                </Routes>
            </Suspense>
        </ScrollToTop>
    );
};

export default AppRoutes;
