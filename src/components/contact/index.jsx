import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import HeaderOne from '@/src/layout/headers/header';
import React from 'react';
import ContactArea from './contact-area';
import FooterThree from '@/src/layout/footers/footer-3';
import Image from 'next/image';

const Contact = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title="Contact Us"  page_title="Contact Us" />
                <ContactArea />
                
                <section className="pt-60 pb-60" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
                    <div className="address-scroll-wrapper">
                        <div className="address-scroll-track">
                            {/* First Set */}
                            <div className="address-card">
                                <div className="flag-wrapper">
                                    <Image src="/singapore.webp" alt="Singapore" width={40} height={28} style={{ borderRadius: '4px', objectFit: 'cover' }} />
                                </div>
                                <div className="address-info">
                                    <h4>Singapore</h4>
                                    <p>100 TRAS ST, #16-01<br/>SINGAPORE 079027<br/>+65 86065455</p>
                                </div>
                            </div>
                            <div className="address-card">
                                <div className="flag-wrapper">
                                    <Image src="/united-arab-emirates.webp" alt="United Arab Emirates" width={40} height={28} style={{ borderRadius: '4px', objectFit: 'cover' }} />
                                </div>
                                <div className="address-info">
                                    <h4>United Arab Emirates</h4>
                                    <p>Dubai, UAE<br/>+971 43 704077</p>
                                </div>
                            </div>
                            <div className="address-card">
                                <div className="flag-wrapper">
                                    <Image src="/saudi-arabia.webp" alt="Saudi Arabia" width={40} height={28} style={{ borderRadius: '4px', objectFit: 'cover' }} />
                                </div>
                                <div className="address-info">
                                    <h4>Saudi Arabia</h4>
                                    <p>Riyadh, KSA<br/>+966 566492783</p>
                                </div>
                            </div>

                            {/* Duplicated Set for Seamless Looping */}
                            <div className="address-card">
                                <div className="flag-wrapper">
                                    <Image src="/singapore.webp" alt="Singapore" width={40} height={28} style={{ borderRadius: '4px', objectFit: 'cover' }} />
                                </div>
                                <div className="address-info">
                                    <h4>Singapore</h4>
                                    <p>100 TRAS ST, #16-01<br/>SINGAPORE 079027<br/>+65 86065455</p>
                                </div>
                            </div>
                            <div className="address-card">
                                <div className="flag-wrapper">
                                    <Image src="/united-arab-emirates.webp" alt="United Arab Emirates" width={40} height={28} style={{ borderRadius: '4px', objectFit: 'cover' }} />
                                </div>
                                <div className="address-info">
                                    <h4>United Arab Emirates</h4>
                                    <p>Dubai, UAE<br/>+971 43 704077</p>
                                </div>
                            </div>
                            <div className="address-card">
                                <div className="flag-wrapper">
                                    <Image src="/saudi-arabia.webp" alt="Saudi Arabia" width={40} height={28} style={{ borderRadius: '4px', objectFit: 'cover' }} />
                                </div>
                                <div className="address-info">
                                    <h4>Saudi Arabia</h4>
                                    <p>Riyadh, KSA<br/>+966 566492783</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <FooterThree hideExtras={true} />
        </>
    );
};

export default Contact;
