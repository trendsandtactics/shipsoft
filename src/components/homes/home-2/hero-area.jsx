import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

import shape_1 from "@assets/img/hero/hero-2/1.png";
import shape_2 from "@assets/img/hero/hero-2/2.png";
import shape_3 from "@assets/img/hero/hero-2/3.png";  
import hero_bg from "@assets/img/hero/hero-2/background.png";

const HeroArea = () => {
  return (
    <section
      className="tp-hero-2-area p-relative d-flex align-items-center"
      style={{
        backgroundImage: `url(${hero_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="tp-hero-2-wrapper w-100">
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
              <div className="tp-hero-2-content text-center">
                
                <h1
                  className="tp-hero-2-title fadeUp"
                  style={{
                    fontSize: "clamp(32px, 5vw, 64px)",
                    fontWeight: "700",
                    lineHeight: "1.2",
                    marginBottom: "30px",
                  }}
                >
                  AI-Powered <br />
                  <span style={{ color: "#2bb6c4" }}>
                    Freight Management
                  </span> <br />
                  Platform
                </h1>

                {/* Button */}
                <div className="tp-hero-2-btn fadeUp">
                  <Link
                    href="/contact"
                    className="tp-btn"
                    style={{
                      padding: "14px 32px",
                      fontSize: "16px",
                      borderRadius: "30px",
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

      {/* Optional Overlay for better contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255,255,255,0.6)",
          zIndex: 0,
        }}
      ></div>
    </section>
  );
};

export default HeroArea;
