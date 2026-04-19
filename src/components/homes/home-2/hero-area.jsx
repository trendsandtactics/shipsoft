import Link from 'next/link'
import React from 'react'
import hero_bg from "@assets/img/hero/hero-2/background.png";

const HeroArea = () => {
  return (
    <section className="hero">

      {/* Gradient overlay for readability */}
      <div className="overlay"></div>

      <div className="container">
        <div className="row align-items-center full-height">

          {/* LEFT SPACE (ship visual already in bg) */}
          <div className="col-xl-6 col-lg-5"></div>

          {/* RIGHT CONTENT */}
          <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-2">
            <div className="content">

              {/* Tag */}
              <p className="tag">AI-Powered Platform</p>

              {/* Headline */}
              <h1 className="title">
                Smarter Freight Management with AI
                <span>Fully Automated ERP System</span>
              </h1>

              {/* Subtext */}
              <p className="subtitle">
                Manage shipments, tracking, billing, and analytics in one unified platform.
              </p>

              {/* Audience */}
              <p className="audience">
                Built for freight forwarders, logistics companies, and supply chain teams.
              </p>

              {/* CTA */}
              <div className="actions">
                <Link href="/contact" className="btn-primary">
                  Request Demo
                </Link>

                <Link href="/features" className="btn-secondary">
                  View Features
                </Link>
              </div>

              {/* Support text */}
              <p className="support">No credit card required</p>

              {/* Trust */}
              <div className="trust">
                <div>10,000+ shipments managed</div>
                <div>99.9% uptime</div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* STYLES */}
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

        .overlay {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.85) 50%,
            rgba(255,255,255,1) 100%
          );
        }

        .full-height {
          min-height: calc(100vh - 100px);
        }

        .content {
          position: relative;
          z-index: 2;
          max-width: 440px;
          margin-left: auto;
        }

        .tag {
          font-size: 13px;
          font-weight: 600;
          color: #2bb6c4;
          margin-bottom: 10px;
        }

        .title {
          font-size: clamp(30px, 3.5vw, 52px);
          font-weight: 700;
          line-height: 1.2;
          color: #0b1c2c;
          margin-bottom: 14px;
        }

        .title span {
          display: block;
          color: #2bb6c4;
        }

        .subtitle {
          font-size: 16px;
          color: #555;
          margin-bottom: 10px;
        }

        .audience {
          font-size: 14px;
          color: #777;
          margin-bottom: 20px;
        }

        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2bb6c4, #1e9fb0);
          color: #fff;
          padding: 14px 28px;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(43,182,196,0.3);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(43,182,196,0.4);
        }

        .btn-secondary {
          padding: 14px 26px;
          border-radius: 30px;
          border: 1px solid #ccc;
          color: #333;
          font-size: 14px;
        }

        .support {
          font-size: 12px;
          color: #888;
          margin-top: 10px;
        }

        .trust {
          display: flex;
          gap: 20px;
          margin-top: 18px;
          font-size: 13px;
          color: #444;
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

          .trust {
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
