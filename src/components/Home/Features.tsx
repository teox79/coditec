import React from "react";
import { Feature } from "../../context/HomeType";
import { useAppContext } from "../../context/AppContext";


interface FeaturesProps {
    features: Feature[];
}


const Features: React.FC<FeaturesProps> = ({ features }) => {
    const { state } = useAppContext();
    const { ui: ui } = state;

    return (
        <section id="features" className="features section">
            <div className="container">
                <div className="row gy-4">
                    {features.map((feature, index) => (
                        <div
                            className="col-lg-3 col-md-4"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                            key={index}
                        >
                            <div className="features-item">
                                <img src={`${ui.globalUi.baseUrl}assets/img/features/${feature.icon}`} alt={feature.title} height="32" />
                                <h3>
                                    {feature.url ? (
                                        <a href={feature.url} className="stretched-link" target="_blank">
                                            {feature.title}
                                        </a>
                                    ) : (
                                        <div className="stretched-link">
                                            {feature.title}
                                        </div>
                                    )}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
