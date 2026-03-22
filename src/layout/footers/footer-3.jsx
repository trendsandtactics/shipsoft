import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headphone from "@assets/img/footer/headphone.png";
import footer_logo from "@assets/img/logo/shipsoftlogo.webp";
import user from "@assets/img/footer/user.png";
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks, { CopyRight } from '@/src/common/social-links';

const footer_content = { 
    contact_us: <> Contact us at <span>sales@shipsoft.co</span></>,
    mail: "sales@shipsoft.co",
    contact_text: "Streamline your logistics operations",
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

const FooterThree = () => {
    return (
        <>
            <footer className="tp-footer-area p-relative">
                <div className="tp-footer-bg" style={{backgroundImage: `url(/assets/img/footer/footer-bg.jpg)`}}></div>
                <div className="tp-footer-top-shape" style={{backgroundImage: `url(/assets/img/footer/footer-top-bg.png)`}}></div>
                
                <div className="container container-large">



                    <div className="tp-footer-main-area">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-1">
                                <div className="tp-footer-logo">
                                <Link href="/home-2"> <Image src={footer_logo} alt="ShipSoft" style={{maxWidth: '230px', height: 'auto'}} /></Link>
                                </div>
                                <div className="tp-footer-widget-content">
                                    <div className="tp-footer-info">
                                        <p>{info}</p>
                                        <div className="tp-footer-main-location">
                                            <a target='_blank' href={map}> <i className="fa-sharp fa-light fa-location-dot"></i> 
                                            {address}
                                            </a>
                                        </div>
                                        <div className="tp-footer-main-mail">
                                            <a href={`mailto:${mail_2}`}>
                                                <i className="fa-light fa-message-dots"></i>{mail_phone}</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-2">
                                <h3 className="tp-footer-widget-title">Quick Links</h3>
                                <div className="tp-footer-widget-content">
                                    <ul>
                                        {service_links.map((link, i) => <li key={i}><Link href={link.link}>{link.title}</Link></li>)} 
                                    </ul>
                                </div>
                                </div> 
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-3">
                                <h3 className="tp-footer-widget-title">Contact Info</h3>
                                <div className="tp-footer-widget-content">
                                    <div className="tp-footer-author d-flex">
                                        <div className="tp-footer-author-thumb">
                                            <Image src={user} alt="ShipSoft" />
                                        </div>
                                        <div className="tp-footer-author-content">
                                            <span>Chat With Expert <br /> Active Now</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-4">
                                <h3 className="tp-footer-widget-title">Newsletter</h3>
                                <div className="tp-footer-from">
                                    <div className="tp-footer-text-email p-relative">
                                        <input type="text" placeholder="Enter Email Address" />
                                        <span> 
                                            <EmailAeroplan />
                                        </span>
                                    </div>
                                    <div className="tp-footer-form-check">
                                        <input className="form-check-input" id="flexCheckChecked" type="checkbox" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            I agree to all your terms and policies
                                        </label>
                                </div>
                                <div className="tp-footer-widget-social">
                                    <SocialLinks /> 

                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner">
                                <p><CopyRight /> </p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner text-lg-end">
                                <Link href="#">Terms and conditions</Link>
                                <Link className="ml-50" href="#"> Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
        </>
    );
};

export default FooterThree;
