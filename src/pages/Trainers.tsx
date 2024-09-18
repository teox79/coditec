import React from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';


const Trainers: React.FC = () => {

    const { state } = useAppContext();
    const { trainer: trainerData } = state;
    const breadcrumbs = [{ label: 'Home', url: '/' }, { label: 'Mentors', url: '' }]

    return (
        <main className="main">
            <PageTitle description={trainerData.description || ''} title={trainerData.title || ''} breadcrumbs={breadcrumbs} />
            <section id="mentors" className="section trainers">
                <div className="container">
                    <div className="row gy-5">
                        {trainerData.trainers.map((trainer, index) => (
                            <div key={trainer.id} className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                                <div className="member-img">
                                    <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/img/trainers/${trainer.imageUrl}`} className="img-fluid" alt={trainer.name} />
                                    {trainer.socialLinks && (
                                        <div className="social">
                                            {trainer.socialLinks?.twitter && <a href={trainer.socialLinks.twitter}><i className="bi bi-twitter"></i></a>}
                                            {trainer.socialLinks?.facebook && <a href={trainer.socialLinks.facebook}><i className="bi bi-facebook"></i></a>}
                                            {trainer.socialLinks?.instagram && <a href={trainer.socialLinks.instagram}><i className="bi bi-instagram"></i></a>}
                                            {trainer.socialLinks?.linkedin && <a href={trainer.socialLinks.linkedin}><i className="bi bi-linkedin"></i></a>}
                                        </div>
                                    )}
                                </div>
                                <div className="member-info text-center">
                                    <h4>{trainer.name}</h4>
                                    <span>{trainer.role}</span>
                                    <p>{trainer.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Trainers;