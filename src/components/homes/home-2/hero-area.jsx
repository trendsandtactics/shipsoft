import Link from 'next/link'
import React from 'react'
import hero_bg from "@assets/img/hero/hero-2/background.png";

const HeroArea = () => {
  return (
    <section
      className="tp-hero-2-area p-relative"
      style={{
        backgroundImage: `url(${hero_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        minHeight: "100vh",
        paddingTop: "clamp(70px, 10vw, 120px)",
      }}
    >
      <div className="tp-hero-2-wrapper">
        <div className="container">
          <div className="row justify-content-end"> {/* move to right */}
            
            <div className="col-xl-6 col-lg-7 col-md-10">
              
              <div
                className="tp-hero-2-content"
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "clamp(8px, 3vw, 20px)",
                  textAlign: "left",
                }}
              >
                
                <h1
                  className="tp-hero-2-title"
                  style={{
                    fontSize: "clamp(18px, 3.5vw, 56px)",
                    fontWeight: "700",
                    lineHeight: "1.25",
                    marginBottom: "14px",
                    color: "#0b1c2c",
                    textShadow: "0 2px 6px rgba(0,0,0,0.2)"
                  }}
                >
                  Automated, AI-Integrated <br />
                  <span style={{ color: "#2bb6c4" }}>
                    ERP Logistics Software
                  </span>
                </h1>

                <div className="tp-hero-2-btn">
                  <Link
                    href="/contact"
                    className="tp-btn"
                    style={{
                      padding: "8px 18px",
                      borderRadius: "30px",
                      fontSize: "clamp(11px, 2.2vw, 15px)",
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

      {/* Mobile adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .tp-hero-2-content {
            text-align: center;
            margin: 0 auto;
          }

          .tp-hero-2-title {
            font-size: 18px !important;
          }
        }

        @media (max-width: 480px) {
          .tp-hero-2-title {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroArea;
