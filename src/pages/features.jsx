import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Header from '../layout/headers/header';
import FooterContact from '../layout/footers/footer-contact';
import FooterThree from '../layout/footers/footer-3';

const featureData = [
  {
    title: 'Architecture & Technology',
    icon: '⚙️',
    desc: 'Shipsoft uses the PHP Laravel Web Application Stack and Oracle as its data store—one of the most widely used relational database management systems. Built on a robust three-tier architecture with UI, Web, and Data layers, it ensures scalability, maintainability, and performance. Accessible via web browsers and smartphones, Shipsoft enables seamless operations anytime, anywhere.',
  },
  {
    title: 'Cloud Application',
    icon: '☁️',
    desc: 'Shipsoft offers an on-demand, web-based solution that reduces the need for heavy IT infrastructure. Maintenance, upgrades, security, performance, support, and business continuity are all managed efficiently, helping users stay focused on core operations. Its pay-per-use subscription model lowers total ownership costs and makes advanced logistics management affordable.',
  },
  {
    title: 'Modular Architecture',
    icon: '🧩',
    desc: 'Shipsoft features a modular design that allows businesses to choose only the functionalities they need. As operations grow, additional modules can be integrated smoothly without disrupting existing workflows. This flexibility helps organizations adapt to evolving logistics and supply chain requirements with ease.',
  },
  {
    title: 'Scalable & Extensible',
    icon: '📈',
    desc: 'Shipsoft is designed to scale with your organization. Its flexible and extensible framework supports long-term growth, enabling the system to adapt to changing industry demands with minimal disruption and maximum reliability.',
  },
  {
    title: 'Document Management',
    icon: '📂',
    desc: 'Shipsoft allows users to scan, categorize, and securely store important documents such as quotations, invoices, and operational records against shipments or client profiles. This supports the full shipment lifecycle, from booking to payment settlement, while improving accessibility and operational efficiency.',
  },
  {
    title: 'Customer Services',
    icon: '🤝',
    desc: 'The platform strengthens supply chain collaboration by providing real-time access to critical information such as inventory, order status, and shipment tracking. With multi-channel accessibility, partners stay informed, connected, and aligned throughout the process.',
  },
];

const stats = [
  { value: '24/7', label: 'Cloud Access' },
  { value: '100%', label: 'Web-Based Workflow' },
  { value: 'Multi', label: 'Business Modules' },
  { value: 'Smart', label: 'Logistics Automation' },
];

const Features = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Features'} />
      <Header />

      <style jsx>{`
        .features-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 28%),
            radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.28), transparent 30%),
            linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #0f172a 100%);
          padding: 190px 0 120px;
          color: #fff;
        }

        .hero-shape-one,
        .hero-shape-two,
        .hero-shape-three {
          position: absolute;
          border-radius: 999px;
          filter: blur(40px);
          opacity: 0.35;
          pointer-events: none;
        }

        .hero-shape-one {
          width: 260px;
          height: 260px;
          background: #7dd3fc;
          top: 40px;
          left: -40px;
        }

        .hero-shape-two {
          width: 320px;
          height: 320px;
          background: #38bdf8;
          bottom: -80px;
          right: -40px;
        }

        .hero-shape-three {
          width: 220px;
          height: 220px;
          background: #93c5fd;
          top: 80px;
          right: 20%;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(12px);
          color: #e0f2fe;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .hero-title {
          font-size: clamp(2.3rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.08;
          margin-bottom: 18px;
          color: #ffffff;
        }

        .hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.45rem);
          font-weight: 500;
          color: #e0f2fe;
          margin-bottom: 28px;
        }

        .hero-text {
          max-width: 900px;
          margin: 0 auto;
          color: rgba(255,255,255,0.88);
          font-size: 1.05rem;
          line-height: 1.9;
        }

        .hero-panel {
          position: relative;
          z-index: 2;
        }

        .hero-mini-cards {
          margin-top: 55px;
        }

        .mini-card {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 18px;
          padding: 20px 18px;
          text-align: left;
          backdrop-filter: blur(14px);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
          height: 100%;
        }

        .mini-card h5 {
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .mini-card p {
          margin: 0;
          color: rgba(255,255,255,0.82);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .stats-wrap {
          margin-top: -52px;
          position: relative;
          z-index: 5;
        }

        .stats-box {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
          padding: 26px 12px;
          border: 1px solid rgba(148, 163, 184, 0.14);
        }

        .stat-item {
          text-align: center;
          padding: 14px 10px;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(90deg, #0ea5e9, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.95rem;
          color: #475569;
          font-weight: 600;
        }

        .features-section {
          background:
            radial-gradient(circle at top right, rgba(14,165,233,0.07), transparent 25%),
            #f8fbff;
          padding: 110px 0 90px;
        }

        .section-head {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .section-label {
          display: inline-block;
          color: #0ea5e9;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.6px;
          margin-bottom: 14px;
        }

        .section-title {
          color: #0f172a;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: 16px;
        }

        .section-desc {
          color: #64748b;
          font-size: 1.05rem;
          line-height: 1.8;
          margin: 0;
        }

        .feature-card {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 34px 30px;
          height: 100%;
          transition: all 0.35s ease;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.04);
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #0ea5e9, #2563eb);
        }

        .feature-card::after {
          content: '';
          position: absolute;
          width: 150px;
          height: 150px;
          right: -50px;
          top: -50px;
          background: radial-gradient(circle, rgba(14,165,233,0.12), transparent 70%);
          border-radius: 50%;
          transition: all 0.35s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: rgba(37, 99, 235, 0.22);
          box-shadow: 0 25px 60px rgba(37, 99, 235, 0.14);
        }

        .feature-card:hover::after {
          transform: scale(1.2);
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 22px;
          background: linear-gradient(135deg, rgba(14,165,233,0.12), rgba(37,99,235,0.14));
          border: 1px solid rgba(14,165,233,0.15);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
        }

        .feature-title {
          font-size: 1.45rem;
          font-weight: 800;
          margin-bottom: 16px;
          color: #0f172a;
        }

        .feature-desc {
          color: #475569;
          line-height: 1.8;
          margin: 0;
          font-size: 1rem;
        }

        .cta-strip {
          margin-top: 30px;
          padding: 28px 30px;
          border-radius: 24px;
          background: linear-gradient(135deg, #0f172a, #0b4d79);
          color: white;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.14);
        }

        .cta-strip h4 {
          margin: 0 0 10px;
          font-size: 1.6rem;
          font-weight: 800;
          color: #fff;
        }

        .cta-strip p {
          margin: 0;
          color: rgba(255,255,255,0.8);
          line-height: 1.8;
        }

        .cta-btn {
          display: inline-block;
          margin-top: 18px;
          padding: 14px 24px;
          border-radius: 999px;
          background: linear-gradient(90deg, #38bdf8, #2563eb);
          color: white;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(56, 189, 248, 0.25);
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          color: white;
        }

        @media (max-width: 991px) {
          .features-hero {
            padding: 150px 0 90px;
          }

          .feature-card {
            padding: 28px 24px;
          }

          .stats-wrap {
            margin-top: -30px;
          }
        }
      `}</style>

      <main>
        <section className="features-hero">
          <div className="hero-shape-one"></div>
          <div className="hero-shape-two"></div>
          <div className="hero-shape-three"></div>

          <div className="container hero-panel">
            <div className="row justify-content-center text-center">
              <div className="col-xl-10 col-lg-11">
                <span className="hero-badge">Our Product</span>

                <h1 className="hero-title">Powerful Features Built for Modern Logistics</h1>

                <h3 className="hero-subtitle">
                  A complete ERP software for the logistics industry
                </h3>

                <div className="hero-text">
                  <p className="mb-20">
                    Shipsoft is a comprehensive web-based ERP solution tailored for the
                    logistics industry, trusted by freight forwarders worldwide to
                    streamline operations, gain actionable insights, and drive growth.
                    Built on a modular architecture, Shipsoft allows businesses to
                    choose and implement only the modules they need—ensuring flexibility
                    and scalability.
                  </p>
                  <p>
                    The platform includes integrated systems for Customer Relationship
                    Management, Accounts, Freight, Transport, Warehouse, Distribution,
                    and E-commerce. This modular design enables businesses to optimize
                    key processes, improve efficiency, and boost sales and revenue while
                    adapting the system to fit their unique operational requirements.
                  </p>
                </div>

                <div className="row hero-mini-cards">
                  <div className="col-md-4 mb-20">
                    <div className="mini-card">
                      <h5>Smart ERP Ecosystem</h5>
                      <p>Connected modules for every stage of logistics operations.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-20">
                    <div className="mini-card">
                      <h5>Cloud Ready</h5>
                      <p>Access your business systems securely from anywhere.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-20">
                    <div className="mini-card">
                      <h5>Built to Scale</h5>
                      <p>Flexible architecture that grows with your organization.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-wrap">
          <div className="container">
            <div className="stats-box">
              <div className="row">
                {stats.map((item, index) => (
                  <div className="col-lg-3 col-md-6 col-6" key={index}>
                    <div className="stat-item">
                      <div className="stat-value">{item.value}</div>
                      <div className="stat-label">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <div className="section-head">
              <span className="section-label">Core Benefits</span>
              <h2 className="section-title">Designed to make logistics faster, smarter, and easier</h2>
              <p className="section-desc">
                Explore the key capabilities that help logistics businesses digitize
                workflows, improve visibility, reduce operational friction, and scale
                efficiently in a competitive market.
              </p>
            </div>

            <div className="row">
              {featureData.map((feature, index) => (
                <div className="col-lg-6 col-md-6 mb-30" key={index}>
                  <div className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-desc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-strip">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h4>Ready to streamline your logistics operations?</h4>
                  <p>
                    Shipsoft helps businesses simplify workflows, increase visibility,
                    and manage complex logistics processes through one powerful
                    cloud-based ERP platform.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end mt-20 mt-lg-0">
                  <a href="/contact" className="cta-btn">
                    Get in Touch
                  </a>
                </div>
              </div>
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
