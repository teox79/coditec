import React from 'react';
import CountsSection from '../components/Common/Counts';
import WhyUsSection from '../components/Home/WhyUs';
import FeaturesSection from '../components/Home/Features';
import CoursesSection from '../components/Common/Courses';
import TrainersIndexSection from '../components/Home/TrainersIndex';
import HeroSection from '../components/Home/Hero';
import AboutSection from '../components/Common/About';
import { useAppContext } from '../context/AppContext';
import { getCoursesByDateOrYear, getFutureEvents, getRandomTrainers } from '../utils/utils';
import EventsSection from '../components/Home/Events';

const Home: React.FC = () => {

    const { state } = useAppContext();

    const { home: homeData, course: courseData, trainer: trainerData, ui: uiData, event: eventData } = state;
    const today = new Date();
    const nextCourses = getCoursesByDateOrYear(courseData.courses || [], today, 'asc', 3);
    const trainers = getRandomTrainers(trainerData.trainers || [], 3);
    const futureEvents = getFutureEvents(eventData.events || []).slice(0, 2);

    return (
        <main className="main">
            <HeroSection title={homeData.title} description={homeData.description} link={homeData.link} />
            {homeData.organization && (
                <AboutSection
                    title={homeData.organization?.title}
                    subtitle={homeData.organization?.subtitle}
                    description={homeData.organization?.description}
                    points={homeData.organization?.points}
                />
            )}
            {homeData.statistics && (
                <CountsSection statistics={homeData.statistics} />
            )}
            {homeData.whyUs && (
                <WhyUsSection
                    title={homeData.whyUs.title}
                    description={homeData.whyUs.description}
                    points={homeData.whyUs.points}
                />
            )}
            {homeData.features && (
                <FeaturesSection features={homeData.features} />
            )}
            {homeData.course && (
                /* Vengono visualizzati solo i prossimi 3 corsi */
                <CoursesSection
                    title={homeData.course?.title}
                    subtitle={homeData.course?.subtitle}
                    courses={nextCourses} />
            )}
            {trainers && uiData.homeUi?.showTrainersSection && (
                <TrainersIndexSection trainers={trainers} />
            )}
            <EventsSection futureEvents={futureEvents} />

        </main>
    );
}

export default Home;