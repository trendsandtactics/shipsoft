import React from 'react';
import Link from 'next/link';

const ContactArea = () => {
    return (
        <>
            <section className="tp-contact-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrapper mb-55 text-center">
                                <span className="tp-section-title__pre">Get in touch with us</span>
                                <h3 className="tp-section-title">We'd love to hear from you!</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="tp-contact-info-box mb-30 text-center" style={{height: '100%', padding: '40px 20px', border: '1px solid #eaeaea', borderRadius: '10px'}}>
                                <div className="tp-contact-info-icon mb-20">
                                   <span style={{fontSize: '30px'}}>🇸🇬</span>
                                </div>
                                <h4 className="tp-contact-info-title" style={{fontSize: '20px', marginBottom: '15px'}}>Singapore</h4>
                                <div className="tp-contact-info-content">
                                    <p style={{marginBottom: '5px'}}><strong>SHIPSOFT SOLUTIONS PTE. LTD.</strong></p>
                                    <p>100 TRAS ST<br/>#16-01<br/>SINGAPORE 079027.</p>
                                    <p className="mt-15"><a href="mailto:sales@shipsoft.co">sales@shipsoft.co</a></p>
                                    <p><a href="tel:+6586065455">+65 86065455</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="tp-contact-info-box mb-30 text-center" style={{height: '100%', padding: '40px 20px', border: '1px solid #eaeaea', borderRadius: '10px'}}>
                                <div className="tp-contact-info-icon mb-20">
                                    <span style={{fontSize: '30px'}}>🇦🇪</span>
                                </div>
                                <h4 className="tp-contact-info-title" style={{fontSize: '20px', marginBottom: '15px'}}>UAE</h4>
                                <div className="tp-contact-info-content">
                                    <p style={{marginBottom: '5px'}}><strong>SHIPSOFT SOLUTIONS FZE</strong></p>
                                    <p>SM- OFFICE- E1-1613B<br/>AJMAN FREE ZONE<br/>UNITED ARAB EMIRATES</p>
                                    <p className="mt-15"><a href="mailto:sales@shipsoft.co">sales@shipsoft.co</a></p>
                                    <p><a href="tel:+97143704077">+971 43 704077</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="tp-contact-info-box mb-30 text-center" style={{height: '100%', padding: '40px 20px', border: '1px solid #eaeaea', borderRadius: '10px'}}>
                                <div className="tp-contact-info-icon mb-20">
                                    <span style={{fontSize: '30px'}}>🇸🇦</span>
                                </div>
                                <h4 className="tp-contact-info-title" style={{fontSize: '20px', marginBottom: '15px'}}>Saudi Arabia</h4>
                                <div className="tp-contact-info-content">
                                    <p style={{marginBottom: '5px'}}><strong>ShipSoft Company</strong></p>
                                    <p>Room-302, 3rd Floor, 4073,<br/>Prince Mohammed Bin Fahd Road<br/>Al Mazruiyah Dist., Pin Code 32415-7135,<br/>Kingdom of Saudi Arabia.</p>
                                    <p className="mt-15"><a href="mailto:sales@shipsoft.co">sales@shipsoft.co</a></p>
                                    <p><a href="tel:+966566492783">+966 566492783</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mt-50">
                         <div className="col-lg-12">
                            <div className="tp-contact-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="tp-contact-input mb-20">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tp-contact-input mb-20">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tp-contact-input mb-20">
                                                <input type="text" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="tp-contact-input mb-20">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="tp-contact-input mb-20">
                                                <textarea placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="tp-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;