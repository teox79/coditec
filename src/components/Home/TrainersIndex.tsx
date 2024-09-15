import React from "react";
import { Trainer } from "../../context/TrainerType";


// Dichiarazione delle props che accettano la lista dei trainers
interface TrainersIndexProps {
    trainers: Trainer[];
}

const TrainersIndex: React.FC<TrainersIndexProps> = ({ trainers }) => {

    return (
        <section id="trainers-index" className="section trainers-index">
            <div className="container">
                <div className="row">
                    {trainers.map((trainer, index) => (
                        <div
                            className="col-lg-4 col-md-6 d-flex"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                            key={index}
                        >
                            <div className="member">
                                <img src={`/assets/img/trainers/${trainer.imageUrl}`} className="img-fluid" alt={trainer.name} />
                                <div className="member-content">
                                    <h4>{trainer.name}</h4>
                                    <span>{trainer.role}</span>
                                    <p>{trainer.description}</p>
                                    {trainer.socialLinks && (
                                        <div className="social">
                                            {trainer.socialLinks?.twitter && (
                                                <a href={trainer.socialLinks?.twitter}><i className="bi bi-twitter-x"></i></a>
                                            )}
                                            {trainer.socialLinks?.facebook && (
                                                <a href={trainer.socialLinks?.facebook}><i className="bi bi-facebook"></i></a>
                                            )}
                                            {trainer.socialLinks?.instagram && (
                                                <a href={trainer.socialLinks?.instagram}><i className="bi bi-instagram"></i></a>
                                            )}
                                            {trainer.socialLinks?.linkedin && (
                                                <a href={trainer.socialLinks?.linkedin}><i className="bi bi-linkedin"></i></a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainersIndex;
