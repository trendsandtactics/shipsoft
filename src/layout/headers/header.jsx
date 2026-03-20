import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import useSticky from '@/src/hooks/use-sticky';

import logo_img from "@assets/img/logo/shipsoftlogo.webp";
import logo_shape from "@assets/img/hero/hero-2/logo-shape.png";
import SearchPopup from '@/src/modals/search-popup';
import Sidebar from '@/src/modals/sidebar';

const HeaderOne = () => {
   const {sticky}  =  useSticky()
   const [searchOpen, setSearchOpen] = useState(false)
   const [sidebarOpen, setSidebarOpen] = useState(false)


    return (
        <>
            <Head>
               <title>ShipSoft - ERP Software for Logistics Industry</title>
               <meta name="description" content="Shipsoft is a comprehensive web-based ERP solution tailored for the logistics industry, trusted by freight forwarders worldwide." />
               <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="tp-header-2-area tp-header-height p-relative">
               <div className="tp-header-2-top tp-header-2-space d-none d-xl-block">
                  <div className="container-fluid">
                     <div className="row align-items-center">
                        <div className="col-xl-4">
                           <div className="tp-header-2-top-info">
                              <p><a href="mailto:sales@shipsoft.co"><i className="fa-solid fa-envelope"></i> sales@shipsoft.co</a></p>
                           </div>
                        </div>
                        <div className="col-xl-8">
                           <div className="tp-header-2-top-right d-flex justify-content-end align-items-center">
                              <div className="header-location">
                                 <a href="tel:+6586065455"><span style={{fontSize: '20px', marginRight: '5px'}}>🇸🇬</span> +65 86065455</a>
                              </div>
                              <div className="header-location">
                                 <a href="tel:+97143704077"><span style={{fontSize: '20px', marginRight: '5px'}}>🇦🇪</span> +971 43 704077</a>
                              </div>
                              <div className="header-location">
                                 <a href="tel:+966566492783"><span style={{fontSize: '20px', marginRight: '5px'}}>🇸🇦</span> +966 566492783</a>
                              </div>
                              <div className="header-social d-xxl-block d-none">
                                 <a href="https://www.facebook.com/shipsoft.co"><i className="fa-brands fa-facebook-f"></i></a>
                                 <a href="https://x.com/Shipsoft_"><i className="fa-brands fa-twitter"></i></a>
                                 <a href="https://www.instagram.com/shipsoft_1/"><i className="fa-brands fa-instagram"></i></a>
                                 <a href="https://www.youtube.com/@shipsoft7931"><i className="fa-brands fa-youtube"></i></a>
                                 <a href="https://www.linkedin.com/company/shipsoft-solutions"><i className="fa-brands fa-linkedin-in"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="header-sticky" className={`tp-header-2-bottom header__sticky p-relative ${sticky && "tp-header-sticky"}`}>
                  <div className="tp-header-2-bottom-inner p-relative" style={{backgroundImage : `url(/assets/img/hero/hero-2/header-bg.png)`}}>
                     <div className="container-fluid gx-0">
                        <div className="row gx-0 align-items-center">
                           <div className="col-xxl-2 col-xl-2 col-lg-10 col-md-6">
                           <div className="tp-header-2-main-left d-flex align-items-center justify-content-xl-center justify-content-xxl-end p-relative">
                              <div className="tp-header-2-logo">
                                 <Link href="/">
                                    <Image src={logo_img} alt="ShipSoft" style={{maxWidth: '230px', height: 'auto'}} />
                                 </Link>
                              </div>
                           </div>
                           </div>
                           <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                              <div className="tp-main-menu-2-area d-flex align-items-center">
                                 <div className="tp-main-menu">
                                    <nav id="tp-mobile-menu">
                                       <ul>
                                          <li><Link href="/">Home</Link></li>
                                          <li><Link href="/about">About us</Link></li>
                                          <li><Link href="/features">Features</Link></li>
                                          <li><Link href="/modules">Modules</Link></li>
                                          <li><Link href="/info">Info</Link></li>
                                          <li><Link href="/contact">Contact us</Link></li>
                                       </ul>
                                    </nav>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-6">
                              <div className="tp-header-2-right d-none d-xxl-block">
                                 <div className="tp-header-2-main-right d-flex align-items-center justify-content-xxl-end">
                                    <div className="tp-header-2-btn">
                                       <Link href="/contact">Get a Quote <i className="fa-regular fa-angle-right"></i></Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="tp-header-2-mobile-menu d-flex justify-content-end d-block d-xxl-none">
                                 <div className="tp-header-2-hamburger-btn offcanvas-open-btn"  
                                 onClick={() => setSidebarOpen(true)}
                                    style={{backgroundImage: `url(/assets/img/icon/header-hamburger-shape.png)`}}>
                                    <button className="hamburger-btn">
                                       <span>
                                          <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M0 1.13163C0 0.506972 0.499692 0 1.11538 0H20.4487C21.0644 0 21.5641 0.506972 21.5641 1.13163C21.5641 1.7563 21.0644 2.26327 20.4487 2.26327H1.11538C0.499692 2.26327 0 1.7563 0 1.13163ZM27.8846 10.5619H1.11538C0.499692 10.5619 0 11.0689 0 11.6935C0 12.3182 0.499692 12.8252 1.11538 12.8252H27.8846C28.5003 12.8252 29 12.3182 29 11.6935C29 11.0689 28.5003 10.5619 27.8846 10.5619ZM14.5 21.1238H1.11538C0.499692 21.1238 0 21.6308 0 22.2555C0 22.8801 0.499692 23.3871 1.11538 23.3871H14.5C15.1157 23.3871 15.6154 22.8801 15.6154 22.2555C15.6154 21.6308 15.1157 21.1238 14.5 21.1238Z" fill="currentColor"></path>
                                          </svg>
                                       </span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
 

        </>
    );
};

export default HeaderOne;