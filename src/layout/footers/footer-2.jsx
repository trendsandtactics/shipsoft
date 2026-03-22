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
        UNITED ARAB EMIRATES
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentOffice = office_locations[activeOffice];

  return (
    <>
      <footer
        className="tp-footer-area p-relative"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container container-large">
          <div className="tp-footer-main-area pt-80 pb-50">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                <div className="tp-footer-widget tp-footer-col-1">
                  <div className="tp-footer-logo mb-25">
                    <Link href="/home-2">
                      <Image
                        src={footer_logo}
                        alt="ShipSoft"
                        style={{ maxWidth: '230px', height: 'auto' }}
                      />
                    </Link>
                  </div>

                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-info">
                      <p
                        style={{
                          color: "#5f6168",
                          fontSize: "16px",
                          lineHeight: "28px",
                          marginBottom: "25px",
                        }}
                      >
                        {info}
                      </p>

                      <div
                        className="office-slider-box"
                        style={{
                          background: "#f8f9fc",
                          border: "1px solid #e8e8ee",
                          borderRadius: "16px",
                          padding: "24px 20px",
                          minHeight: "260px",
                          transition: "all 0.4s ease",
                        }}
                      >
                        <div
                          key={activeOffice}
                          style={{
                            animation: "fadeSlide 0.6s ease",
                          }}
                        >
                          <h4
                            style={{
                              fontSize: "22px",
                              fontWeight: "700",
                              color: "#111827",
                              marginBottom: "8px",
                            }}
                          >
                            {currentOffice.flag} {currentOffice.country}
                          </h4>

                          <h5
                            style={{
                              fontSize: "15px",
                              fontWeight: "600",
                              color: "#0d6efd",
                              marginBottom: "16px",
                              lineHeight: "24px",
                            }}
                          >
                            {currentOffice.company}
                          </h5>

                          <div
                            style={{
                              color: "#5f6168",
                              fontSize: "15px",
                              lineHeight: "26px",
                              marginBottom: "16px",
                            }}
                          >
                            <a
                              href={currentOffice.map}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                color: "#5f6168",
                                textDecoration: "none",
                              }}
                            >
                              <i
                                className="fa-sharp fa-light fa-location-dot"
                                style={{ marginRight: "8px", color: "#0d6efd" }}
                              ></i>
                              {currentOffice.address}
                            </a>
                          </div>

                          <div
                            style={{
                              color: "#5f6168",
                              fontSize: "15px",
                              lineHeight: "26px",
                            }}
                          >
                            <a
                              href={`mailto:${currentOffice.email}`}
                              style={{
                                display: "block",
                                color: "#5f6168",
                                textDecoration: "none",
                                marginBottom: "6px",
                              }}
                            >
                              <i
                                className="fa-light fa-message-dots"
                                style={{ marginRight: "8px", color: "#0d6efd" }}
                              ></i>
                              {currentOffice.email}
                            </a>

                            <a
                              href={`tel:${currentOffice.phone.replace(/\s+/g, '')}`}
                              style={{
                                display: "block",
                                color: "#5f6168",
                                textDecoration: "none",
                              }}
                            >
                              <i
                                className="fa-light fa-phone-volume"
                                style={{ marginRight: "8px", color: "#0d6efd" }}
                              ></i>
                              {currentOffice.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          marginTop: "18px",
                        }}
                      >
                        {office_locations.map((_, index) => (
                          <span
                            key={index}
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor:
                                index === activeOffice ? "#0d6efd" : "#d1d5db",
                              transition: "all 0.3s ease",
                              display: "inline-block",
                            }}
                          ></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                <div className="tp-footer-widget tp-footer-col-2">
                  <h3
                    className="tp-footer-widget-title"
                    style={{
                      color: "#111827",
                      marginBottom: "25px",
                    }}
                  >
                    Quick Links
                  </h3>
                  <div className="tp-footer-widget-content">
                    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                      {service_links.map((link, i) => (
                        <li key={i} style={{ marginBottom: "14px" }}>
                          <Link
                            href={link.link}
                            style={{
                              color: "#5f6168",
                              textDecoration: "none",
                              fontSize: "16px",
                              transition: "0.3s",
                            }}
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-12 mb-40">
                <div className="tp-footer-widget tp-footer-col-4">
                  <h3
                    className="tp-footer-widget-title"
                    style={{
                      color: "#111827",
                      marginBottom: "25px",
                    }}
                  >
                    Follow Us
                  </h3>
                  <div className="tp-footer-widget-social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tp-footer-copyright-area p-relative pt-25 pb-25"
            style={{ borderTop: "1px solid #e5e7eb" }}
          >
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner">
                  <p style={{ color: "#5f6168", margin: 0 }}>
                    <CopyRight />
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner text-lg-end">
                  <Link
                    href="#"
                    style={{
                      color: "#5f6168",
                      textDecoration: "none",
                      marginRight: "30px",
                    }}
                  >
                    Terms and conditions
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: "#5f6168",
                      textDecoration: "none",
                    }}
                  >
                    Privacy policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateY(12px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default FooterTwo;
