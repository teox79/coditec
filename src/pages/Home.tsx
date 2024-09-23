import React from 'react';
import CountsSection from '../components/Common/Counts';
import WhyUsSection from '../components/Home/WhyUs';
import FeaturesSection from '../components/Home/Features';
import CoursesSection from '../components/Common/Courses';
import TrainersIndexSection from '../components/Home/TrainersIndex';
import HeroSection from '../components/Home/Hero';
import AboutSection from '../components/Common/About';
import { useAppContext } from '../context/AppContext';
import { getCoursesByDateOrYear, getRandomTrainers } from '../utils/utils';

const Home: React.FC = () => {

    const { state } = useAppContext();

    const { home: homeData, course: courseData, trainer: trainerData } = state;
    const today = new Date();
    const nextCourses = getCoursesByDateOrYear(courseData.courses || [], 3, today);
    const trainers = getRandomTrainers(trainerData.trainers || [], 3);

    console.log("nextCourses :", nextCourses)

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
            {trainers && (
                <TrainersIndexSection trainers={trainers} />
            )}
        </main>
    );
}

export default Home;