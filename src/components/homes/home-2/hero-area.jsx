import Link from 'next/link'
import React from 'react'
import hero_bg from "@assets/img/hero/hero-2/background.png";

const HeroArea = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="container">
        <div className="row align-items-center hero-row">

          {/* LEFT SPACE (image already in bg) */}
          <div className="col-xl-6 col-lg-6"></div>

          {/* RIGHT CONTENT */}
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="content">

              <h1 className="title">
                Automated, AI-Integrated
                <span>ERP Logistics Software</span>
              </h1>

              <p className="subtitle">
                Streamline operations, automate workflows, and manage logistics with intelligent ERP solutions.
              </p>

              <div className="actions">
                <Link href="/contact" className="btn-primary">
                  Request Demo
                </Link>
                <Link href="/features" className="btn-secondary">
                  Explore Features
                </Link>
              </div>

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
          display: flex;
          align-items: center;
        }

        .overlay {
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.9) 60%,
            rgba(255,255,255,1) 100%
          );
        }

        .hero-row {
          width: 100%;
        }

        .content {
          position: relative;
          z-index: 2;
          max-width: 520px;
        }

        .title {
          font-size: clamp(32px, 3.5vw, 56px);
          font-weight: 700;
          line-height: 1.2;
          color: #0b1c2c;
          margin-bottom: 16px;
        }

        .title span {
          display: block;
          color: #2bb6c4;
        }

        .subtitle {
          font-size: 16px;
          color: #555;
          margin-bottom: 24px;
        }

        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #2bb6c4;
          color: #fff;
          padding: 12px 24px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
        }

        .btn-secondary {
          border: 1px solid #ccc;
          padding: 12px 24px;
          border-radius: 30px;
          font-size: 14px;
          color: #333;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .overlay {
            width: 100%;
            background: rgba(255,255,255,0.9);
          }

          .content {
            text-align: center;
            margin: 0 auto;
          }

          .actions {
            justify-content: center;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .title {
            font-size: 26px;
          }

          .subtitle {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 22px;
          }
        }

      `}</style>
    </section>
  );
};

export default HeroArea;
