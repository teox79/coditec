import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";  // Percorso corretto per lo stile base
import "swiper/css/pagination";  // Stile per la paginazione
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Testimonial } from "../../context/AboutTypes";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, subtitle, testimonials }) => {

  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 2, spaceBetween: 20 },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img
                    src={`assets/img/testimonials/${testimonial.imgSrc}`}
                    className="testimonial-img"
                    alt={testimonial.name}
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.title}</h4>
                  <div className="stars">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.quote}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
