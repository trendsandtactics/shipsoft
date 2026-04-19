import Link from 'next/link'
import React from 'react'
import hero_bg from "@assets/img/hero/hero-2/shipsoft3.png";

const HeroArea = () => {
  return (
    <section className="hero">
      
      {/* RIGHT FIXED CONTENT */}
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

      <style jsx>{`
        .hero {
          position: relative;
          background-image: url(${hero_bg.src});
          background-size: cover;
          background-position: left center;
          min-height: 100vh;
          padding-top: 100px;
        }

        /* RIGHT CORNER POSITIONING */
        .content {
          position: absolute;
          top: 50%;
          right: 80px;
          transform: translateY(-50%);
          max-width: 420px;
          width: 100%;
          text-align: left;
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

        .highlight {
          color: #2bb6c4;
        }

        .cta-custom {
          margin-top: 16px;
          display: inline-block;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .content {
            right: 40px;
            max-width: 360px;
          }

          .title {
            font-size: 28px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .content {
            position: static;
            transform: none;
            margin: 0 auto;
            padding: 0 16px;
            text-align: center;
          }

          .hero {
            display: flex;
            align-items: flex-end;
            padding-bottom: 40px;
          }

          .title {
            font-size: 22px;
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
