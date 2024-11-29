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

        <div className="d-flex gap-3" data-aos="fade-up" data-aos-delay="300">
          {links?.map((link) => (
            <Link className="btn-get-started" to={link.url} target={link.target || '_self'} key={link.url}>
              {link.label}
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Hero;
