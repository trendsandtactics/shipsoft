import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Header from '../layout/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterContact from '../layout/footers/footer-contact';
import FooterThree from '../layout/footers/footer-3';

const Features = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Features"} />
            <Header />
            <style jsx>{`
                .feature-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 16px;
                    padding: 40px;
                    height: 100%;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
                }
                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(13, 110, 253, 0.12);
                    border-color: rgba(13, 110, 253, 0.3);
                }
                .feature-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1.25rem;
                    color: #0f172a;
                }
                .feature-desc {
                    color: #475569;
                    line-height: 1.7;
                    margin: 0;
                    font-size: 1rem;
                }
            `}</style>
            <main>
                <section className="features-hero" style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #0043b8 100%)', color: 'white', paddingTop: '180px', paddingBottom: '100px', textAlign: 'center' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', color: '#bfdbfe', fontSize: '14px', display: 'block', marginBottom: '15px' }}>Our product</span>
                                <h1 className="mb-20" style={{ color: '#ffffff', fontSize: '3rem', fontWeight: '800' }}>ShipSoft Features</h1>
                                <h3 style={{ color: '#f8fafc', fontWeight: '500', marginBottom: '40px', fontSize: '1.5rem' }}>A complete ERP software for logistics industry</h3>
                                
                                <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#e2e8f0' }}>
                                    <p className="mb-20">Shipsoft is a comprehensive web-based ERP solution tailored for the logistics industry, trusted by freight forwarders worldwide to streamline operations, gain actionable insights, and drive growth. Built on a modular architecture, Shipsoft allows businesses to choose and implement only the modules they need—ensuring flexibility and scalability.</p>
                                    <p>The platform includes integrated systems for Customer Relationship Management, Accounts, Freight, Transport, Warehouse, Distribution, and E-commerce. This modular design enables businesses to optimize key processes, improve efficiency, and boost sales and revenue—while adapting the system to fit their unique operational requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tp-features-area pt-100 pb-80" style={{ backgroundColor: '#f8fafc' }}>
                    <div className="container">
                        <div className="row">
                            {/* Architecture & Technology */}
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="feature-card">
                                    <h4 className="feature-title">Architecture & Technology</h4>
                                    <p className="feature-desc">Shipsoft uses the PHP Laravel Web Application Stack and Oracle as its data store – One of the most widely used Relational Database Management System (RDBMS). Shipsoft leverages a robust three-tier Architecture, comprising of the UI, Web and Data Tier – ensuring scalability, maintainability, and performance. Designed for accessibility and convenience, Shipsoft can be accessed seamlessly through web browsers and smartphones, enabling users to manage operations anytime, anywhere.</p>
                                </div>
                            </div>

                            {/* Cloud Application */}
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="feature-card">
                                    <h4 className="feature-title">Cloud Application</h4>
                                    <p className="feature-desc">Shipsoft Solutions offers an on-demand, web-based model that significantly reduces the need for heavy IT infrastructure. By handling key aspects such as maintenance, upgrades, data security, performance, support, and business continuity, we allow users to focus on their core operations. Our cost-effective, pay-per-use subscription model further lowers the total cost of ownership, making advanced logistics management both accessible and affordable for businesses of all sizes.</p>
                                </div>
                            </div>

                            {/* Modular Architecture */}
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="feature-card">
                                    <h4 className="feature-title">Modular Architecture</h4>
                                    <p className="feature-desc">Shipsoft Solutions features a modular design that enables businesses to select only the functionalities they need, tailored to their specific operational requirements. As their needs evolve, customers can easily integrate additional modules without disrupting existing workflows. The system is fully scalable and extensible, designed to grow with your business and adapt to the ever-changing demands of the logistics and supply chain industry.</p>
                                </div>
                            </div>

                            {/* Scalable & Extensible */}
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="feature-card">
                                    <h4 className="feature-title">Scalable & Extensible</h4>
                                    <p className="feature-desc">Shipsoft is built on a highly scalable and extensible architecture, designed to grow with your organization. Its flexible framework allows the system to evolve and adapt to shifting industry demands with minimal disruption to existing functionalities, ensuring long-term reliability and smooth transitions as your business requirements change.</p>
                                </div>
                            </div>

                            {/* Document Management */}
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="feature-card">
                                    <h4 className="feature-title">Document Management</h4>
                                    <p className="feature-desc">Efficient workflow relies on the ability to store and manage documents in digital form. Shipsoft allows users to scan, categorize, and securely store critical documents, such as quotations, invoices, and other essential records, directly against their corresponding shipment or client profile. This module is designed to support the full shipment lifecycle, from initial booking through to final payment settlement, ensuring streamlined operations and easy access to important information</p>
                                </div>
                            </div>

                            {/* Customer Services */}
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="feature-card">
                                    <h4 className="feature-title">Customer Services</h4>
                                    <p className="feature-desc">The software transforms supply chain management by providing partners with real-time access to critical information such as inventory levels, order status, and shipment tracking. This multi-channel accessibility fosters seamless communication and collaboration, enabling partners to interact with the company efficiently and stay informed throughout the entire process.</p>
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