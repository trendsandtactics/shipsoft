import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import shape_1 from "@assets/img/hero/hero-2/1.png";
import shape_2 from "@assets/img/hero/hero-2/2.png";
import shape_3 from "@assets/img/hero/hero-2/3.png";  
import hero_bg from "@assets/img/hero/hero-2/background.png";

const setting = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".hero-button-next-1",
    prevEl: ".hero-button-prev-1",
  },
};

const slider_data = [
  "AI Automation",
  "Smart Logistics",
  "Real-time Visibility",
];

const HeroArea = () => {
  return (
    <section
      className="tp-hero-2-area p-relative"
      style={{ backgroundImage: `url(${hero_bg.src})`, backgroundSize: "cover" }}
    >
      <div className="tp-hero-2-wrapper p-relative">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-10 col-lg-11 col-md-12">
              
              {/* Shapes */}
              <div className="tp-hero-2-shape">
                <Image className="shape-1 d-none d-lg-block" src={shape_1} alt="shape" />
                <Image className="shape-2 d-none d-lg-block" src={shape_2} alt="shape" />
                <Image className="shape-3 d-none d-lg-block" src={shape_3} alt="shape" />
              </div>

              {/* Content */}
              <div className="tp-hero-2-content text-center pt-150 pb-120">
                
                <h3 className="tp-hero-2-title fadeUp">
                  AI-Powered <br />
                  <span>Freight Management</span> <br />
                  Platform
                </h3>

                {/* Description */}
                <p
                  className="fadeUp"
                  style={{
                    maxWidth: "700px",
                    margin: "20px auto",
                    fontSize: "18px",
                    lineHeight: "1.6",
                    color: "#555",
                  }}
                >
                  Transform your logistics operations with an intelligent, all-in-one freight management platform powered by AI.
                </p>

                {/* Buttons */}
                <div className="tp-hero-2-btn fadeUp">
                  <Link className="tp-btn mr-15" href="/contact">
                    Request Demo
                  </Link>
                  <Link className="tp-btn-border" href="/about">
                    Learn More
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="tp-hero-2-bottom p-relative d-none d-md-block">
        <Swiper {...setting} modules={[Navigation, Autoplay]} className="hero-active-2">
          {slider_data.map((item, i) => (
            <SwiperSlide key={i}>
              <h3 className="tp-hero-2-bottom-title">{item}</h3>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="tp-hero-2-nav d-none d-xl-block">
          <button type="button" className="hero-button-prev-1">Prev</button>
          <button type="button" className="hero-button-next-1">Next</button>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
