import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import footer_logo from "@assets/img/logo/shipsoftlogo.webp";
import SocialLinks, { CopyRight } from '@/src/common/social-links';

const office_locations = [
  {
    flag: "🇸🇬",
    country: "Singapore",
    company: "SHIPSOFT SOLUTIONS PTE. LTD.",
    address: (
      <>
        100 TRAS ST <br />
        #16-01 <br />
        SINGAPORE 079027.
      </>
    ),
    email: "sales@shipsoft.co",
    phone: "+65 86065455",
    map: "https://www.google.com/maps/search/100+TRAS+ST+SINGAPORE+079027",
  },
  {
    flag: "🇦🇪",
    country: "UAE",
    company: "SHIPSOFT SOLUTIONS FZE",
    address: (
      <>
        SM- OFFICE- E1-1613B <br />
        AJMAN FREE ZONE <br />
        UNITES ARAB EMIRATES
      </>
    ),
    email: "sales@shipsoft.co",
    phone: "+971 43 704077",
    map: "https://www.google.com/maps/search/AJMAN+FREE+ZONE+UNITED+ARAB+EMIRATES",
  },
  {
    flag: "🇸🇦",
    country: "Saudi Arabia",
    company: "ShipSoft Company",
    address: (
      <>
        Room-302, 3rd Floor, 4073, <br />
        Prince Mohammed Bin Fahd Road <br />
        Al Mazruiyah Dist., Pin Code 32415-7135, <br />
        Kingdom of Saudi Arabia.
      </>
    ),
    email: "sales@shipsoft.co",
    phone: "+966 566492783",
    map: "https://www.google.com/maps/search/Prince+Mohammed+Bin+Fahd+Road+Al+Mazruiyah+Saudi+Arabia",
  },
];

const footer_content = {
  info: "Streamline your logistics operations with ShipSoft solutions designed for modern global businesses.",
  service_links: [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about" },
    { title: "Features", link: "/features" },
    { title: "Modules", link: "/modules" },
    { title: "Info", link: "/info" },
    { title: "Contact us", link: "/contact" },
  ],
};

const { info, service_links } = footer_content;

const FooterTwo = () => {
  const [activeOffice, setActiveOffice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOffice((prev) => (prev + 1) % office_locations.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentOffice = office_locations[activeOffice];

  return (
    <>
      <footer className="tp-footer-area footer-rich-wrap">
        <div className="container container-large">
          <div className="tp-footer-main-area pt-90 pb-60">
            <div className="row align-items-start">
              
              {/* Left Section */}
              <div className="col-xl-4 col-lg-4 col-md-12 mb-40">
                <div className="tp-footer-widget">
                  <div className="tp-footer-logo mb-25">
                    <Link href="/">
                      <Image
                        src={footer_logo}
                        alt="ShipSoft"
                        style={{ maxWidth: '240px', height: 'auto' }}
                      />
                    </Link>
                  </div>

                  <p className="footer-desc">{info}</p>

                  <div className="footer-social-box">
                    <h4 className="footer-mini-title">Connect With Us</h4>
                    <div className="tp-footer-widget-social">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Section */}
              <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                <div className="tp-footer-widget">
                  <h3 className="tp-footer-widget-title rich-title">Quick Links</h3>
                  <div className="tp-footer-widget-content">
                    <ul className="footer-links-list">
                      {service_links.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Section - Address Slider */}
              <div className="col-xl-5 col-lg-5 col-md-6 mb-40">
                <div className="tp-footer-widget">
                  <h3 className="tp-footer-widget-title rich-title">Global Offices</h3>

                  <div className="office-card-slider">
                    <div key={activeOffice} className="office-card-inner">
                      <div className="office-badge">
                        <span className="office-flag">{currentOffice.flag}</span>
                        <span className="office-country">{currentOffice.country}</span>
                      </div>

                      <h4 className="office-company">{currentOffice.company}</h4>

                      <a
                        href={currentOffice.map}
                        target="_blank"
                        rel="noreferrer"
                        className="office-line office-address"
                      >
                        <i className="fa-sharp fa-light fa-location-dot"></i>
                        <span>{currentOffice.address}</span>
                      </a>

                      <a
                        href={`mailto:${currentOffice.email}`}
                        className="office-line"
                      >
                        <i className="fa-light fa-envelope"></i>
                        <span>{currentOffice.email}</span>
                      </a>

                      <a
                        href={`tel:${currentOffice.phone.replace(/\s+/g, '')}`}
                        className="office-line"
                      >
                        <i className="fa-light fa-phone-volume"></i>
                        <span>{currentOffice.phone}</span>
                      </a>
                    </div>
                  </div>

                  <div className="office-dots">
                    {office_locations.map((_, index) => (
                      <span
                        key={index}
                        className={index === activeOffice ? "dot active" : "dot"}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-footer-copyright-area footer-bottom-bar pt-25 pb-25">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner">
                  <p className="copyright-text">
                    <CopyRight />
                  </p>
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner text-lg-end footer-policy-links">
                  <Link href="#">Terms and conditions</Link>
                  <Link href="#">Privacy policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .footer-rich-wrap {
            background: #ffffff;
            position: relative;
            overflow: hidden;
            border-top: 1px solid #eef2f7;
          }

          .footer-rich-wrap::before {
            content: "";
            position: absolute;
            top: -120px;
            right: -120px;
            width: 320px;
            height: 320px;
            background: radial-gradient(circle, rgba(13,110,253,0.08) 0%, rgba(13,110,253,0) 70%);
            border-radius: 50%;
          }

          .footer-rich-wrap::after {
            content: "";
            position: absolute;
            bottom: -120px;
            left: -120px;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(0,191,165,0.08) 0%, rgba(0,191,165,0) 70%);
            border-radius: 50%;
          }

          .footer-desc {
            color: #5f6168;
            font-size: 17px;
            line-height: 30px;
            margin-bottom: 28px;
            max-width: 380px;
          }

          .footer-social-box {
            background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
            border: 1px solid #e8eef7;
            border-radius: 18px;
            padding: 22px 24px;
            box-shadow: 0 10px 30px rgba(20, 52, 105, 0.06);
          }

          .footer-mini-title {
            font-size: 18px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 16px;
          }

          .rich-title {
            color: #111827;
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 24px;
          }

          .footer-links-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-links-list li {
            margin-bottom: 16px;
          }

          .footer-links-list li a {
            color: #5f6168;
            text-decoration: none;
            font-size: 17px;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
          }

          .footer-links-list li a:hover {
            color: #0d6efd;
            transform: translateX(5px);
          }

          .office-card-slider {
            background: linear-gradient(180deg, #ffffff 0%, #f5f8fc 100%);
            border: 1px solid #e6edf6;
            border-radius: 24px;
            padding: 28px;
            min-height: 320px;
            box-shadow: 0 16px 45px rgba(15, 23, 42, 0.08);
            position: relative;
            overflow: hidden;
          }

          .office-card-slider::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 120px;
            height: 120px;
            background: radial-gradient(circle, rgba(13,110,253,0.12) 0%, rgba(13,110,253,0) 70%);
          }

          .office-card-inner {
            animation: fadeSlide 0.6s ease;
            position: relative;
            z-index: 2;
          }

          .office-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #eef5ff;
            color: #0d6efd;
            padding: 10px 16px;
            border-radius: 999px;
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 18px;
          }

          .office-flag {
            font-size: 18px;
            line-height: 1;
          }

          .office-country {
            line-height: 1;
          }

          .office-company {
            font-size: 22px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 20px;
            line-height: 1.4;
          }

          .office-line {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            color: #5f6168;
            text-decoration: none;
            font-size: 16px;
            line-height: 29px;
            margin-bottom: 14px;
            transition: all 0.3s ease;
          }

          .office-line i {
            color: #0d6efd;
            font-size: 17px;
            margin-top: 6px;
            min-width: 18px;
          }

          .office-line:hover {
            color: #0d6efd;
          }

          .office-address span {
            display: inline-block;
          }

          .office-dots {
            display: flex;
            gap: 10px;
            margin-top: 18px;
            padding-left: 6px;
          }

          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #d2d8e2;
            transition: all 0.3s ease;
          }

          .dot.active {
            background: #0d6efd;
            transform: scale(1.15);
          }

          .footer-bottom-bar {
            border-top: 1px solid #e9edf3;
            position: relative;
            z-index: 2;
          }

          .copyright-text {
            margin: 0;
            color: #5f6168;
          }

          .footer-policy-links {
            display: flex;
            justify-content: flex-end;
            gap: 28px;
            flex-wrap: wrap;
          }

          .footer-policy-links a {
            color: #5f6168;
            text-decoration: none;
            transition: 0.3s;
          }

          .footer-policy-links a:hover {
            color: #0d6efd;
          }

          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateY(18px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 991px) {
            .rich-title {
              font-size: 26px;
            }

            .office-card-slider {
              min-height: auto;
            }

            .footer-policy-links {
              justify-content: flex-start;
              margin-top: 15px;
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default FooterTwo;
