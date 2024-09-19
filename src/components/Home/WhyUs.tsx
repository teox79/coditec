import React from "react";
import { AboutProps } from "../../context/HomeType";

const WhyUs: React.FC<AboutProps> = ({ title, description, points }) => {
    return (
        <section id="why-us" className="section why-us">
            <div className="container">
                <div className="row gy-4">
                    {/* Why Box */}
                    <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="why-box d-flex flex-column align-items-center">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <div className="text-center">
                                <a href="#/about" className="more-btn">
                                    <span>Scopri di più</span> <i className="bi bi-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* End Why Box */}

                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
                            {points.map((point, index) => (
                                <div className="col-xl-4" key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                                    <div className="icon-box d-flex flex-column align-items-center">
                                        <i className={`bi bi-${point.icon || "clipboard-data"}`}></i>
                                        <h4>{point.title}</h4>
                                        <p>{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
