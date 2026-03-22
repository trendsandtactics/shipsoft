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
                <style jsx>{`
                    .address-scroll-wrapper { width: 100%; overflow: hidden; white-space: nowrap; position: relative; padding: 20px 0; }
                    .address-scroll-track { display: inline-flex; gap: 30px; animation: scroll-addresses 20s linear infinite; }
                    .address-scroll-track:hover { animation-play-state: paused; }
                    @keyframes scroll-addresses { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                    .address-card { min-width: 350px; white-space: normal; background: #f8fafc; padding: 25px 30px; border-radius: 12px; border: 1px solid #e2e8f0; display: flex; align-items: flex-start; gap: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
                    .address-info h4 { margin-top: 0; margin-bottom: 10px; font-size: 1.25rem; color: #0f172a; font-weight: 700; }
                    .address-info p { margin: 0; color: #475569; line-height: 1.6; }
                    .flag-wrapper { flex-shrink: 0; margin-top: 2px; }
                `}</style>
            </main>
            <FooterThree hideExtras={true} />
        </>
    );
};

export default Contact;