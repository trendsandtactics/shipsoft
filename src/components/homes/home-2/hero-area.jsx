import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import hero_img from "@assets/img/hero/robot.png"; // your robot image
import hero_bg from "@assets/img/hero/hero-2/background.png";

const slider_data = ["Smart Logistics", "AI Automation", "Real-time Tracking"];

const HeroArea = () => {
  return (
    <section
      className="hero-area position-relative"
      style={{
        backgroundImage: `url(${hero_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <div className="hero-content">

              <h1 className="hero-title">
                AI-Powered <br />
                <span>Freight Management</span> <br />
                Platform
              </h1>

              <p className="hero-desc">
                Transform your logistics operations with an intelligent,
                all-in-one freight management platform powered by AI.
              </p>

              <div className="hero-buttons">
                <Link href="/contact" className="btn-primary">
                  Request Demo
                </Link>
                <Link href="/about" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center">
            <div className="hero-image">
              <Image src={hero_img} alt="AI Robot" priority />
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="hero-slider d-none d-md-block">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          autoplay={{ delay: 2500 }}
          loop
        >
          {slider_data.map((item, i) => (
            <SwiperSlide key={i}>
              <h3>{item}</h3>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-nav">
          <button className="prev-btn">Prev</button>
          <button className="next-btn">Next</button>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
