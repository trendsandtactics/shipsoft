import Link from 'next/link'
import React from 'react'
import hero_bg from "@assets/img/hero/hero-2/shipsoft3.png";

const HeroArea = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        
        <div className="content">
          <h1 className="title">
            Automated,
            <span>AI-Integrated</span>
            <span className="highlight">ERP Logistics Software</span>
          </h1>

          <Link className="tp-btn cta-custom" href="/contact">
            Request Demo
          </Link>
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

        /* KEY FIX: FLEX RIGHT ALIGN */
        .hero-inner {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        .content {
          max-width: 480px;
          width: 100%;
          padding-right: clamp(20px, 5vw, 80px); /* responsive spacing */
        }

        .title {
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 20px;
          color: #0b1c2c;
        }

        .title span {
          display: block;
        }

        .highlight {
          color: #2bb6c4;
        }

        .cta-custom {
          margin-top: 18px;
          display: inline-block;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .hero {
            background-position: center;
          }

          .hero-inner {
            justify-content: center;
          }

          .content {
            text-align: center;
            padding-right: 0;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero {
            align-items: flex-end;
            padding-bottom: 40px;
          }

          .title {
            font-size: 24px;
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
