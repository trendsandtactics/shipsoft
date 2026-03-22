import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import footer_logo from "@assets/img/logo/shipsoftlogo.webp";
import SocialLinks, { CopyRight } from "@/src/common/social-links";

const office_locations = [
  {
    flag: "🇸🇬",
    short: "SG",
    country: "Singapore",
    company: "SHIPSOFT SOLUTIONS PTE. LTD.",
    address: (
      <>
        100 TRAS ST <br />
        #16-01 <br />
        SINGAPORE 079027
      </>
    ),
    email: "sales@shipsoft.co",
    phone: "+65 86065455",
    info: <>The world’s first and largest digital market for crypto collectibles and non-fungible (NFTs). Buy</>,
    map: "https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1",
    address: <>100 TRAS ST, #16-01 <br /> SINGAPORE 079027</>,
    mail_2: "sales@shipsoft.co",
    mail_phone: <> sales@shipsoft.co <br /> +65 86065455</>,
    service_links: [
        {title: "Home", link: "/"},
        {title: "About us", link: "/about"},
        {title: "Features", link: "/features"},
        {title: "Modules", link: "/modules"},
        {title: "Info", link: "/info"},
        {title: "Contact us", link: "/contact"},
    ],
}
const {contact_us, mail, contact_text, phone, info, map, address, mail_2, mail_phone, service_links} = footer_content

const FooterTwo = () => {
  const [activeOffice, setActiveOffice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOffice((prev) => (prev + 1) % office_locations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentOffice = office_locations[activeOffice];

  return (
    <>
      <footer className="shipsoft-footer">
        <div className="footer-top-shape footer-top-shape-1"></div>
        <div className="footer-top-shape footer-top-shape-2"></div>

        <div className="container container-large">
          <div className="footer-main">
            <div className="row gy-5 align-items-start">
              {/* Left */}
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="footer-brand-col">
                  <div className="footer-logo-wrap">
                    <Link href="/">
                      <Image
                        src={footer_logo}
                        alt="ShipSoft"
                        style={{ maxWidth: "240px", height: "auto" }}
                      />
                    </Link>
                  </div>

                  <p className="footer-desc">{info}</p>

                  <div className="footer-social-card">
                    <div className="footer-social-head">
                      <span className="footer-social-dot"></span>
                      <h4>Follow & Connect</h4>
                    </div>
                    <p>Stay connected with our latest logistics and technology updates.</p>
                    <div className="footer-social-links">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle */}
              <div className="col-xl-3 col-lg-3 col-md-5">
                <div className="footer-links-col">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul className="footer-links-list">
                    {service_links.map((item, i) => (
                      <li key={i}>
                        <Link href={item.link}>
                          <span className="link-arrow">→</span>
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right */}
              <div className="col-xl-5 col-lg-5 col-md-7">
                <div className="footer-office-col">
                  <div className="footer-title-row">
                    <h3 className="footer-title">Global Offices</h3>
                    <div className="office-counter">
                      <span>{String(activeOffice + 1).padStart(2, "0")}</span>
                      <small> / {String(office_locations.length).padStart(2, "0")}</small>
                    </div>
                  </div>

                  <div className="office-card">
                    <div key={activeOffice} className="office-card-inner">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="office-flag">{currentOffice.flag}</span>
                          <span className="office-short">{currentOffice.short}</span>
                        </div>
                        <div className="office-country">{currentOffice.country}</div>
                      </div>

                      <h4 className="office-company">{currentOffice.company}</h4>

                      <div className="office-divider"></div>

                      <a
                        href={currentOffice.map}
                        target="_blank"
                        rel="noreferrer"
                        className="office-item"
                      >
                        <div className="icon-box">
                          <i className="fa-sharp fa-light fa-location-dot"></i>
                        </div>
                        <div className="office-text">{currentOffice.address}</div>
                      </a>

                      <div className="office-contact-row">
                        <a
                          href={`mailto:${currentOffice.email}`}
                          className="office-item small-item"
                        >
                          <div className="icon-box">
                            <i className="fa-light fa-envelope"></i>
                          </div>
                          <div className="office-text">{currentOffice.email}</div>
                        </a>

                        <a
                          href={`tel:${currentOffice.phone.replace(/\s+/g, "")}`}
                          className="office-item small-item"
                        >
                          <div className="icon-box">
                            <i className="fa-light fa-phone-volume"></i>
                          </div>
                          <div className="office-text">{currentOffice.phone}</div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="office-dots">
                    {office_locations.map((_, index) => (
                      <button
                        key={index}
                        className={`dot ${index === activeOffice ? "active" : ""}`}
                        onClick={() => setActiveOffice(index)}
                        aria-label={`Show office ${index + 1}`}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row align-items-center gy-3">
              <div className="col-lg-6">
                <p className="copyright-text">
                  <CopyRight />
                </p>
              </div>
              <div className="col-lg-6">
                <div className="footer-bottom-links">
                  <Link href="#">Terms and Conditions</Link>
                  <Link href="#">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .shipsoft-footer {
            position: relative;
            background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
            overflow: hidden;
            border-top: 1px solid #edf2f7;
          }

          .footer-top-shape {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            filter: blur(10px);
          }

          .footer-top-shape-1 {
            top: -120px;
            left: -100px;
            width: 260px;
            height: 260px;
            background: rgba(13, 110, 253, 0.08);
          }

          .footer-top-shape-2 {
            right: -120px;
            bottom: -140px;
            width: 340px;
            height: 340px;
            background: rgba(0, 163, 255, 0.08);
          }

          .footer-main {
            padding: 90px 0 55px;
            position: relative;
            z-index: 2;
          }

          .footer-logo-wrap {
            margin-bottom: 26px;
          }

          .footer-desc {
            font-size: 18px;
            line-height: 1.9;
            color: #5d6677;
            max-width: 390px;
            margin-bottom: 30px;
          }

          .footer-social-card {
            background: rgba(255, 255, 255, 0.82);
            border: 1px solid rgba(13, 110, 253, 0.1);
            border-radius: 24px;
            padding: 24px;
            backdrop-filter: blur(12px);
            box-shadow: 0 15px 45px rgba(10, 37, 64, 0.08);
            max-width: 430px;
          }

          .footer-social-head {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
          }

          .footer-social-head h4 {
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            color: #0f172a;
          }

          .footer-social-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #0d6efd;
            box-shadow: 0 0 18px rgba(13, 110, 253, 0.5);
          }

          .footer-social-card p {
            margin: 0 0 18px;
            color: #6b7280;
            line-height: 1.8;
            font-size: 15px;
          }

          .footer-title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 24px;
          }

          .footer-title {
            margin: 0 0 24px;
            font-size: 42px;
            line-height: 1.1;
            font-weight: 800;
            color: #0f172a;
            letter-spacing: -0.02em;
          }

          .footer-title-row .footer-title {
            margin-bottom: 0;
          }

          .office-counter {
            min-width: max-content;
            padding: 8px 14px;
            border-radius: 999px;
            background: #eff6ff;
            border: 1px solid #dbeafe;
            color: #0d6efd;
            font-weight: 700;
          }

          .office-counter span {
            font-size: 16px;
          }

          .office-counter small {
            font-size: 14px;
            color: #64748b;
          }

          .footer-links-list {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .footer-links-list li {
            margin-bottom: 18px;
          }

          .footer-links-list li a {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            font-size: 18px;
            font-weight: 500;
            color: #556070;
            transition: all 0.3s ease;
          }

          .footer-links-list li a:hover {
            color: #0d6efd;
            transform: translateX(6px);
          }

          .link-arrow {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: #eff6ff;
            color: #0d6efd;
            font-size: 13px;
            flex: 0 0 auto;
          }

          .office-card {
            position: relative;
            border-radius: 30px;
            background: linear-gradient(145deg, #ffffff 0%, #f4f8ff 100%);
            border: 1px solid rgba(13, 110, 253, 0.12);
            box-shadow: 0 25px 70px rgba(15, 23, 42, 0.10);
            padding: 34px;
            overflow: hidden;
          }

          .office-card::before {
            content: "";
            position: absolute;
            top: -70px;
            right: -40px;
            width: 220px;
            height: 220px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(13, 110, 253, 0.15) 0%, rgba(13, 110, 253, 0) 70%);
          }

          .office-card::after {
            content: "";
            position: absolute;
            bottom: -80px;
            left: -80px;
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 163, 255, 0.08) 0%, rgba(0, 163, 255, 0) 70%);
          }

          .office-card-inner {
            position: relative;
            z-index: 2;
            animation: officeFade 0.6s ease;
          }

          .office-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            margin-bottom: 22px;
            flex-wrap: wrap;
          }

          .office-chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            border-radius: 999px;
            background: linear-gradient(180deg, #eaf3ff 0%, #dcecff 100%);
            border: 1px solid #d9e9ff;
            color: #0d6efd;
            font-weight: 700;
            font-size: 14px;
          }

          .office-flag {
            font-size: 18px;
            line-height: 1;
          }

          .office-country {
            font-size: 16px;
            font-weight: 700;
            color: #1e293b;
          }

          .office-company {
            font-size: 34px;
            line-height: 1.2;
            font-weight: 800;
            color: #111827;
            margin-bottom: 22px;
            max-width: 90%;
          }

          .office-divider {
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, rgba(13,110,253,0.22), rgba(13,110,253,0));
            margin-bottom: 24px;
          }

          .office-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            text-decoration: none;
            color: #5a6474;
            transition: all 0.3s ease;
          }

          .office-item:hover {
            color: #0d6efd;
          }

          .office-item + .office-item {
            margin-top: 18px;
          }

          .icon-box {
            width: 44px;
            height: 44px;
            min-width: 44px;
            border-radius: 14px;
            background: #ffffff;
            border: 1px solid #e6eefb;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
          }

          .icon-box i {
            color: #0d6efd;
            font-size: 17px;
          }

          .office-text {
            font-size: 18px;
            line-height: 1.9;
            color: inherit;
          }

          .office-contact-row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 22px;
          }

          .small-item {
            padding: 0;
          }

          .office-dots {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 22px;
            padding-left: 8px;
          }

          .dot {
            width: 12px;
            height: 12px;
            border: none;
            border-radius: 50%;
            background: #cfd8e3;
            transition: all 0.3s ease;
            cursor: pointer;
            padding: 0;
          }

          .dot.active {
            width: 32px;
            border-radius: 999px;
            background: linear-gradient(90deg, #0d6efd 0%, #49a3ff 100%);
          }

          .footer-bottom {
            position: relative;
            z-index: 2;
            padding: 24px 0 28px;
            border-top: 1px solid #e7edf5;
          }

          .copyright-text {
            margin: 0;
            font-size: 16px;
            color: #667085;
          }

          .footer-bottom-links {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 30px;
            flex-wrap: wrap;
          }

          .footer-bottom-links a {
            color: #5d6677;
            text-decoration: none;
            font-weight: 500;
            transition: 0.3s ease;
          }

          .footer-bottom-links a:hover {
            color: #0d6efd;
          }

          @keyframes officeFade {
            0% {
              opacity: 0;
              transform: translateY(18px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 1199px) {
            .footer-title {
              font-size: 34px;
            }

            .office-company {
              font-size: 28px;
              max-width: 100%;
            }
          }

          @media (max-width: 991px) {
            .footer-main {
              padding: 70px 0 45px;
            }

            .footer-title {
              font-size: 30px;
            }

            .office-card {
              padding: 26px;
            }

            .office-company {
              font-size: 24px;
            }

            .footer-bottom-links {
              justify-content: flex-start;
            }
          }

          @media (max-width: 767px) {
            .footer-desc {
              font-size: 16px;
              line-height: 1.8;
            }

            .footer-title {
              font-size: 28px;
            }

            .office-company {
              font-size: 22px;
            }

            .office-text {
              font-size: 16px;
              line-height: 1.75;
            }

            .office-item {
              gap: 12px;
            }

            .icon-box {
              width: 40px;
              height: 40px;
              min-width: 40px;
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default FooterTwo;
