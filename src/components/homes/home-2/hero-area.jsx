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
        paddingTop: "clamp(80px, 10vw, 120px)",
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
                  padding: "clamp(10px, 3vw, 20px)",
                }}
              >
                
                <h1
                  className="tp-hero-2-title fadeUp"
                  style={{
                    fontSize: "clamp(20px, 4vw, 60px)", // responsive text
                    fontWeight: "700",
                    lineHeight: "1.2",
                    marginBottom: "16px",
                    color: "#0b1c2c",
                    textShadow: "0 2px 8px rgba(0,0,0,0.2)"
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
                      padding: "10px 22px",
                      borderRadius: "30px",
                      fontSize: "clamp(12px, 2.5vw, 15px)", // responsive button
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

      {/* Extra mobile optimization */}
      <style jsx>{`
        @media (max-width: 768px) {
          .tp-hero-2-title {
            font-size: 22px !important;
            line-height: 1.3;
          }

          .tp-hero-2-content {
            max-width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroArea;
