import Link from 'next/link'
import React from 'react'
import hero_bg from "@assets/img/hero/hero-2/shipsoft3.png";

const HeroArea = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center full-height">

          {/* LEFT EMPTY SPACE */}
          <div className="col-xl-6 col-lg-5"></div>

          {/* RIGHT CONTENT */}
          <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-2">
            <div className="content">
              
              <h1 className="title">
                Automated,
                <span className="line-break">AI-Integrated</span>
                <span className="highlight">ERP Logistics Software</span>
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
          position: relative;
          background-image: url(${hero_bg.src});
          background-size: cover;
          background-position: left center;
          min-height: 100vh;
          padding-top: 100px;
          display: flex;
          align-items: center;
        }

        /* Gradient overlay for readability */
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0.85) 0%,
            rgba(255,255,255,0.6) 40%,
            rgba(255,255,255,0.2) 70%,
            transparent 100%
          );
          z-index: 1;
        }

        .full-height {
          min-height: calc(100vh - 100px);
        }

        .content {
          max-width: 420px;
          width: 100%;
          text-align: left;
          margin-left: auto;
          position: relative;
          z-index: 2;
        }

        .title {
          font-size: clamp(28px, 3.5vw, 54px);
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 18px;
          color: #0b1c2c;
        }

        .title span {
          display: block;
        }

        .line-break {
          display: block;
        }

        /* Accent color only for last line */
        .highlight {
          color: #2bb6c4;
        }

        .cta-custom {
          margin-top: 16px;
          display: inline-block;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .hero {
            background-position: center;
          }

          .content {
            text-align: center;
            margin: 0 auto;
            padding: 0 20px;
          }

          .title {
            font-size: 28px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero {
            padding-top: 80px;
            align-items: flex-end;
          }

          .content {
            max-width: 100%;
            padding: 0 16px;
          }

          .title {
            font-size: 22px;
            line-height: 1.4;
          }
        }

        /* SMALL MOBILE */
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
