import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import shape_1 from "@assets/img/hero/hero-2/1.png";
import shape_2 from "@assets/img/hero/hero-2/2.png";
import shape_3 from "@assets/img/hero/hero-2/3.png";  
import hero_bg from "@assets/img/hero/hero-2/background.png";

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
              <div className="tp-hero-2-content text-center pt-100 pb-120">
                
                <h3 className="tp-hero-2-title fadeUp">
                  AI-Powered <br />
                  <span>Freight Management</span> <br />
                  Platform
                </h3>

                {/* Buttons */}
                <div className="tp-hero-2-btn fadeUp" style={{ marginTop: "30px" }}>
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
    </section>
  );
};

export default HeroArea;
