import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from '../pages/Home';
import About from '../pages/About';
import Courses from '../pages/Courses';
import Trainers from '../pages/Trainers';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import CourseDetail from '../pages/CourseDetail';

const AppRoutes: React.FC = () => {
    return (
        <ScrollToTop>
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
        </ScrollToTop>
    );
};

export default AppRoutes;
