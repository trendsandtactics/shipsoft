import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

import shape_1 from "@assets/img/hero/hero-2/1.png";
import shape_2 from "@assets/img/hero/hero-2/2.png";
import shape_3 from "@assets/img/hero/hero-2/3.png";  
import hero_bg from "@assets/img/hero/hero-2/shipsoft2.png";

const HeroArea = () => {
  return (
    <section
      className="tp-hero-2-area p-relative"
      style={{
        backgroundImage: `url(${hero_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        minHeight: "100vh",
        paddingTop: "120px",
      }}
    >
      <div className="tp-hero-2-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 col-md-12">
              
              {/* Shapes */}
              <div className="tp-hero-2-shape">
                <Image className="shape-1 d-none d-lg-block" src={shape_1} alt="shape" />
                <Image className="shape-2 d-none d-lg-block" src={shape_2} alt="shape" />
                <Image className="shape-3 d-none d-lg-block" src={shape_3} alt="shape" />
              </div>

              {/* Content */}
              <div
                className="tp-hero-2-content text-center"
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxWidth: "800px",
                  margin: "0 auto",
                  padding: "20px",
                  // removed white background
                }}
              >
                
                <h1
                  className="tp-hero-2-title fadeUp"
                  style={{
                    fontSize: "clamp(28px, 5vw, 60px)",
                    fontWeight: "700",
                    lineHeight: "1.2",
                    marginBottom: "20px",
                    color: "#0b1c2c"
                  }}
                >
                  Automated, AI-Integrated <br />
                  <span style={{ color: "#2bb6c4" }}>
                    ERP Logistics Software
                  </span>
                </h1>

                {/* Button */}
                <div className="tp-hero-2-btn fadeUp">
                  <Link
                    href="/contact"
                    className="tp-btn"
                    style={{
                      padding: "12px 28px",
                      borderRadius: "30px",
                      fontSize: "15px",
                    }}
                  >
                    Request Demo
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
