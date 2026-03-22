import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Header from '../layout/headers/header';
import FooterContact from '../layout/footers/footer-contact';
import FooterThree from '../layout/footers/footer-3';

const featureData = [
  {
    title: 'Architecture & Technology',
    desc: 'Shipsoft uses the PHP Laravel Web Application Stack and Oracle as its data store – one of the most widely used relational database management systems. Built on a robust three-tier architecture comprising the UI, Web, and Data tiers, it ensures scalability, maintainability, and performance. Accessible through web browsers and smartphones, Shipsoft enables users to manage operations anytime, anywhere.',
  },
  {
    title: 'Cloud Application',
    desc: 'Shipsoft Solutions offers an on-demand, web-based model that reduces the need for heavy IT infrastructure. By handling maintenance, upgrades, data security, performance, support, and business continuity, it allows users to focus on core operations. The cost-effective pay-per-use subscription model lowers total ownership costs and makes advanced logistics management accessible to businesses of all sizes.',
  },
  {
    title: 'Modular Architecture',
    desc: 'Shipsoft Solutions features a modular design that enables businesses to select only the functionalities they need, tailored to their specific operational requirements. As needs evolve, additional modules can be integrated without disrupting existing workflows. The system is fully scalable and designed to grow with your business.',
  },
  {
    title: 'Scalable & Extensible',
    desc: 'Shipsoft is built on a highly scalable and extensible architecture designed to grow with your organization. Its flexible framework allows the system to adapt to changing industry demands with minimal disruption to existing functionalities, ensuring long-term reliability and smooth transitions.',
  },
  {
    title: 'Document Management',
    desc: 'Shipsoft allows users to scan, categorize, and securely store critical documents such as quotations, invoices, and other essential records directly against their corresponding shipment or client profile. This module supports the full shipment lifecycle, from booking through payment settlement, ensuring streamlined operations and easy access to important information.',
  },
  {
    title: 'Customer Services',
    desc: 'The software transforms supply chain management by providing partners with real-time access to critical information such as inventory levels, order status, and shipment tracking. This multi-channel accessibility fosters seamless communication and collaboration, enabling partners to interact efficiently and stay informed throughout the process.',
  },
];

const Features = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Features'} />
      <Header />

      <style jsx>{`
        .features-hero {
          background: #2cade3;
          color: #ffffff;
          padding-top: 180px;
          padding-bottom: 120px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          filter: blur(40px);
          pointer-events: none;
        }

        .hero-shape-one {
          width: 320px;
          height: 320px;
          top: -100px;
          left: -100px;
        }

        .hero-shape-two {
          width: 260px;
          height: 260px;
          bottom: -90px;
          right: -70px;
        }

        .hero-badge {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          color: #e0f2fe;
          font-size: 13px;
          display: block;
          margin-bottom: 14px;
        }

        .hero-title {
          color: #ffffff;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .hero-subtitle {
          color: #f8fafc;
          font-weight: 400;
          font-size: clamp(1.05rem, 2vw, 1.35rem);
          margin: 0;
        }

        .features-section {
          background: #f8fafc;
          padding: 100px 0 80px;
        }

        .section-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 55px;
        }

        .section-label {
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 1.8px;
          font-size: 13px;
          font-weight: 700;
          color: #2cade3;
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .section-desc {
          color: #64748b;
          font-size: 1.05rem;
          line-height: 1.8;
          margin: 0;
        }

        .feature-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 34px 30px;
          height: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #2cade3, #0ea5e9);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(13, 110, 253, 0.12);
          border-color: rgba(13, 110, 253, 0.25);
        }

        .feature-icon {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(44, 173, 227, 0.12);
          color: #0f172a;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 14px;
          color: #0f172a;
        }

        .feature-desc {
          color: #475569;
          line-height: 1.8;
          margin: 0;
          font-size: 1rem;
        }

        @media (max-width: 991px) {
          .features-hero {
            padding-top: 150px;
            padding-bottom: 90px;
          }

          .features-section {
            padding: 80px 0 60px;
          }

          .feature-card {
            padding: 28px 24px;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <main>
        <section className="features-hero">
          <div className="hero-shape hero-shape-one"></div>
          <div className="hero-shape hero-shape-two"></div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="hero-badge">Our Product</span>
                <h1 className="hero-title">ShipSoft Features</h1>
                <h3 className="hero-subtitle">
                  A complete ERP software for logistics industry
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <div className="section-head">
              <span className="section-label">Core Features</span>
              <h2 className="section-title">Built for modern logistics operations</h2>
              <p className="section-desc">
                Explore the essential capabilities that make ShipSoft a reliable,
                scalable, and efficient ERP solution for logistics and supply chain businesses.
              </p>
            </div>

            <div className="row">
              {featureData.map((feature, index) => (
                <div className="col-lg-6 col-md-6 mb-40" key={index}>
                  <div className="feature-card">
                    <div className="feature-icon">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-desc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterContact />
      <FooterThree />
    </Wrapper>
  );
};

export default Features;
