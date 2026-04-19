import Link from 'next/link'
import React from 'react'
import hero_bg from "@assets/img/hero/hero-2/background.png";

const HeroArea = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center full-height">

          {/* LEFT EMPTY SPACE */}
          <div className="col-xl-6 col-lg-5"></div>

          {/* RIGHT CONTENT (~40%) */}
          <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-2">
            <div className="content">
              
              <h1 className="title">
                Automated, AI-Integrated
                <span>ERP Logistics Software</span>
              </h1>

              <Link className="tp-btn cta-custom" href="/contact">
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
          max-width: 420px;
          text-align: left;
          margin-left: auto;
        }

        .title {
          font-size: clamp(28px, 3.5vw, 54px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 18px;
          color: #0b1c2c;
        }

        .title span {
          display: block;
          color: #2bb6c4;
        }

        .cta-custom {
          margin-top: 12px;
          display: inline-block;
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
