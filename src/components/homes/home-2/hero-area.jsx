import Link from 'next/link'
import React from 'react'
import hero_bg from "@assets/img/hero/hero-2/background.png";

const HeroArea = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center justify-content-end full-height">

          {/* RIGHT CONTENT */}
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="content">
              
              <h1 className="title">
                Automated, AI-Integrated
                <span>ERP Logistics Software</span>
              </h1>

              <Link href="/contact" className="cta-btn">
                Request Demo
              </Link>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hero {
          background-image: url(${hero_bg.src});
          background-size: cover;
          background-position: left center;
          min-height: 100vh;
          padding-top: 100px;
          display: flex;
          align-items: center;
        }

        .full-height {
          min-height: calc(100vh - 100px);
        }

        .content {
          max-width: 520px;
          text-align: left;
        }

        .title {
          font-size: clamp(28px, 3.5vw, 56px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #0b1c2c;
        }

        .title span {
          display: block;
          color: #2bb6c4;
        }

        /* CTA BUTTON */
        .cta-btn {
          display: inline-block;
          margin-top: 10px;
          padding: 12px 26px;
          background: linear-gradient(135deg, #2bb6c4, #1e9fb0);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          border-radius: 30px;
          box-shadow: 0 8px 20px rgba(43, 182, 196, 0.3);
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(43, 182, 196, 0.4);
          background: linear-gradient(135deg, #1e9fb0, #178a99);
        }

        .cta-btn:active {
          transform: translateY(0);
          box-shadow: 0 6px 14px rgba(43, 182, 196, 0.25);
        }

        /* TABLET */
        @media (max-width: 992px) {
          .content {
            text-align: center;
            margin: 0 auto;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero {
            padding-top: 80px;
          }

          .title {
            font-size: 24px;
            line-height: 1.3;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 20px;
          }
        }

      `}</style>
    </section>
  );
};

export default HeroArea;
