import React from "react";
import { AboutProps } from "../../context/HomeType";

const About: React.FC<AboutProps> = ({ title, subtitle, description, points }) => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="row gy-4">
                    {/* Immagine About */}
                    <div
                        className="col-lg-6 order-1 order-lg-2"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <img src="assets/img/about/about.jpg" className="img-fluid img-rounded" alt="About Us" />
                    </div>

                    {/* Contenuto About */}
                    <div
                        className="col-lg-6 order-2 order-lg-1 content"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3>{title}</h3>
                        <p className="fst-italic">{subtitle}</p>
                        <p>{description}</p>
                        <ul>
                            {points.map((point, index) => (
                                <li key={index}>
                                    <i className="bi bi-check-circle"></i>
                                    <span>{point.description}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
