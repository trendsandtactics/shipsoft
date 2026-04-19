import Link from 'next/link'
import React from 'react'
import hero_bg from "@assets/img/hero/hero-2/background.png";

const HeroArea = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero_bg.src})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-end full-height">

          {/* RIGHT CONTENT */}
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="content">
              
              <h1 className="title">
                Automated, AI-Integrated
                <span>ERP Logistics Software</span>
              </h1>

              <Link href="/contact" className="btn">
                Request Demo
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .hero {
          background-size: cover;
          background-position: left center;
          min-height: 100vh;
          padding-top: 100px;
        }

        .full-height {
          min-height: calc(100vh - 100px);
        }

        .content {
          text-align: left;
          max-width: 520px;
        }

        .title {
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #0b1c2c;
          font-size: clamp(22px, 3vw, 54px);
        }

        .title span {
          display: block;
          color: #2bb6c4;
        }

        .btn {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 30px;
          font-size: 14px;
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
            font-size: 20px;
            line-height: 1.3;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroArea;
