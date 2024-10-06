import React from "react";
import heroBg from '/assets/img/hero-bg.jpg';
import { Link } from "react-router-dom";
import { LinkType } from "../../context/Type";

interface HeroProps {
    title?: string;
    description?: string;
    links?: LinkType[];
}

const Hero: React.FC<HeroProps> = ({ title = 'title', description = 'description', links }) => {
    return (
        <section id="hero" className="hero section dark-background">
            <img src={heroBg} alt="Background" data-aos="fade-in" />

            <div className="container">
                <h2 data-aos="fade-up" data-aos-delay="100">
                    {title}
                </h2>
                <p data-aos="fade-up" data-aos-delay="200">
                    {description}
                </p>
                {links?.map((link) => (
                    <div className="d-flex" data-aos="fade-up" data-aos-delay="300" key={link.url}>
                        <Link className="btn-get-started" to={link.url} target={link.target || '_self'}>
                            {link.label}
                        </Link>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Hero;
