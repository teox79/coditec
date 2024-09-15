import React from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';
import AboutSection from '../components/Common/About';
import CountsSection from '../components/Common/Counts';
import Testimonials from '../components/About/Testimonials';

const About: React.FC = () => {

    const { state } = useAppContext();

    const { about: aboutData, home: homeData } = state;

    const breadcrumbs = [{ label: 'Home', url: '/' }, { label: 'Chi Siamo', url: '' }]

    return (
        <main className="main">
            <PageTitle description={aboutData.description || ''} title={aboutData.title || ''} breadcrumbs={breadcrumbs} />
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
            {aboutData.testimonial?.testimonials && (
                <Testimonials
                    title={aboutData.testimonial?.title || ''}
                    subtitle={aboutData.testimonial.subtitle || ''}
                    testimonials={aboutData.testimonial.testimonials}
                />
            )}
        </main>
    );
}

export default About;