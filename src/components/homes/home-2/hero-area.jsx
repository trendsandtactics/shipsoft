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
              
              {/* Shapes (hidden on small screens) */}
              <div className="tp-hero-2-shape hide-mobile">
                <Image className="shape-1" src={shape_1} alt="shape" />
                <Image className="shape-2" src={shape_2} alt="shape" />
                <Image className="shape-3" src={shape_3} alt="shape" />
              </div>

              {/* Content */}
              <div
                className="tp-hero-2-content text-center"
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxWidth: "800px",
                  margin: "0 auto",
                  padding: "clamp(8px, 3vw, 20px)",
                }}
              >
                
                <h1
                  className="tp-hero-2-title fadeUp"
                  style={{
                    fontSize: "clamp(18px, 3.8vw, 60px)", // tighter scaling
                    fontWeight: "700",
                    lineHeight: "1.25",
                    marginBottom: "14px",
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
                      padding: "9px 20px",
                      borderRadius: "30px",
                      fontSize: "clamp(11px, 2.3vw, 15px)",
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

      {/* Responsive tweaks */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hide-mobile {
            display: none !important; /* remove floating icons */
          }

          .tp-hero-2-title {
            font-size: 20px !important;
            line-height: 1.3;
          }

          .tp-hero-2-content {
            max-width: 92%;
          }
        }

        @media (max-width: 480px) {
          .tp-hero-2-title {
            font-size: 18px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroArea;
