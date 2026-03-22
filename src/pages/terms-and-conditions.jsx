import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Header from '../layout/headers/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterContact from '../layout/footers/footer-contact';
import FooterThree from '../layout/footers/footer-3';

const TermsAndConditions = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Terms and Conditions"} />
            <Header />
            <main>
                <Breadcrumb top_title="Legal" page_title="Terms and Conditions" />
                
                <section className="terms-area pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10" style={{ color: '#475569', lineHeight: '1.8', fontSize: '16px' }}>
                                
                                <p className="mb-40">Welcome to the Shipsoft Solutions Pte Ltd. website (hereinafter referred to as the ‘Website’). Please review these terms of use carefully before engaging with the Website. Your access and utilization of the Website are governed by these terms of use (hereinafter referred to as the ‘Terms of Use’). By accessing or using the Website, you agree to be legally bound by these Terms of Use, representing both yourself and the entity you are authorized to act on behalf of (hereinafter referred to as ‘you’ or ‘your’). If you do not accept all the Terms of Use, refrain from accessing or utilizing the Website.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>User Eligibility</h3>
                                <p className="mb-40">Shipsoft provides the Website and makes it available exclusively to entities and individuals who have attained the legal age of majority and possess the legal capacity to enter into binding agreements under the applicable law in Singapore. If you do not meet these criteria, you are not authorized to use the Website.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Scope of Terms of Use</h3>
                                <p className="mb-40">These Terms of Use govern your utilization of the Website and all associated applications, software, and services collectively referred to as “Services.” This excludes Services covered by a separate agreement. Specific terms or agreements may apply to certain Services or items provided to you through the Website, known as “Service Agreements.” Any such Service Agreements will either accompany the relevant Services or be accessible via an associated hyperlink.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Modifications</h3>
                                <p className="mb-40">Shipsoft retains the right to modify these Terms of Use at any time. Your continued use of the Website following any changes indicates your acceptance of such modifications. Shipsoft holds the authority to alter, supplement, delete, or update any aspect of the Website without notice. Additionally, Shipsoft may adjust or introduce fees for products and services offered through the Website at its sole discretion. General practices and restrictions regarding other Shipsoft products and services may be established or modified by Shipsoft at any time, based on its sole discretion.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Shipsoft Privacy Notice</h3>
                                <p className="mb-40">Concerning any individual whose personal information is provided by you to Shipsoft, you affirm to Shipsoft that you have obtained all necessary consents for the processing of such personal information as envisaged by the Services.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>License and Ownership</h3>
                                <p className="mb-20">The exclusive intellectual property rights (“Intellectual Property“) associated with the Website and its contents (the “Content“) belong solely to Shipsoft, its affiliates, or third parties. These rights are protected by Intellectual Property and other laws in Singapore and worldwide. Various elements of the Website are also safeguarded by trade name, trade secret, unfair competition, and other laws, prohibiting copying or imitation, either in whole or in part. All customized graphics, icons, and other items on the Website, referred to as trademarks, service marks, or trade names (“Marks“), are the property of Shipsoft, its affiliates, or entities granting Shipsoft the right and license to use these Marks. Unauthorized use or interference with these Marks is strictly prohibited without the express written consent of Shipsoft. Unless expressly authorized by these Terms of Use, you may not copy, reproduce, modify, amend, lease, loan, sell, create derivative works from, upload, transmit, or distribute the Intellectual Property of the Website without Shipsoft’s prior written permission or that of an appropriate third party.</p>
                                <p className="mb-40">Shipsoft grants you a limited, personal, non-transferable, non-sublicensable, and revocable license to access and use the Website, Content, and Services (“Shipsoft Systems”) only as presented by Shipsoft and only as expressly permitted by Shipsoft. Apart from this limited license, Shipsoft does not transfer any interest in the Shipsoft Systems, information, or data available via the Shipsoft Systems (the “Information“), Content, Services, Website, or any other Shipsoft property by allowing you to access the Website. With the exception of legal requirements or as expressly provided herein, none of the Content and/or Information may be reverse-engineered, modified, amended, reproduced, republished, translated into any language or computer language, retransmitted in any form or by any means, resold, or redistributed without the prior written consent of Shipsoft. Unauthorized actions such as making, selling, offering for sale, modifying, amending, reproducing, displaying, publicly performing, importing, distributing, retransmitting, or otherwise using the Content are strictly prohibited unless expressly permitted by Shipsoft.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Restrictions on Website Use</h3>
                                <p className="mb-20">In addition to the limitations outlined in these Terms of Use, you agree to the following:</p>
                                <ul className="mb-40" style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                    <li className="mb-10">You must not conceal the origin of information transmitted through the Website.</li>
                                    <li className="mb-10">You shall refrain from placing false or misleading information on the Website.</li>
                                    <li className="mb-10">Usage or access of any service, information, application, or software available via the Website is restricted to methods expressly permitted by Shipsoft.</li>
                                    <li className="mb-10">Uploading information to the Website containing viruses, Trojan horses, worms, time bombs, or other computer programming routines intended to damage, interfere with, intercept, or expropriate any system, the Website, or Information, or that infringes on the Intellectual Property rights of others, is strictly prohibited.</li>
                                    <li className="mb-10">Specific sections of the Website are exclusive to Shipsoft customers.</li>
                                    <li className="mb-10">Using or accessing the Website, Shipsoft Systems, or Services in a manner that, in Shipsoft’s judgment, adversely affects performance or function, or interferes with authorized parties’ access to the Shipsoft Systems, Services, or the Website, is not allowed.</li>
                                    <li className="mb-10">Framing or employing framing techniques to enclose any portion or aspect of the Content or Information without the express written consent of Shipsoft is prohibited.</li>
                                </ul>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Outbound Links</h3>
                                <p className="mb-40">The Website may contain links to third-party websites and resources (“Linked Sites“). These links are provided for your convenience and do not signify Shipsoft’s endorsement of their content. Shipsoft does not guarantee the accuracy, reliability, performance, or quality of any content, software, service, or application found on Linked Sites. Shipsoft is not responsible for the availability of Linked Sites or their content and activities. Access to Linked Sites is at your own risk and is governed by the terms, conditions, and privacy policies of those sites.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Inbound Links</h3>
                                <p className="mb-20">Linking to any page of the Website other than https://www.shipsoft.co/ through a plain text link is strictly prohibited without a separate linkage agreement with Shipsoft. Websites or other entities linking to https://www.shipsoft.co/ or any of its pages are prohibited from:</p>
                                <ul className="mb-40" style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                    <li className="mb-10">Duplicating Content.</li>
                                    <li className="mb-10">Using a frame or border around the Content.</li>
                                    <li className="mb-10">Implying endorsement by Shipsoft or its affiliates.</li>
                                    <li className="mb-10">Misrepresenting any facts about the relationship with Shipsoft or its affiliates.</li>
                                    <li className="mb-10">Providing false information about Shipsoft products or services.</li>
                                    <li className="mb-10">Using any logo or mark of Shipsoft or its affiliates without express written permission from Shipsoft.</li>
                                </ul>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Termination</h3>
                                <p className="mb-20">Shipsoft reserves the right to terminate or suspend your use of the Website, Shipsoft Systems, Information, Services, and Content at its sole discretion, without notice or reason. Even if others continue to have access, Shipsoft may suspend or terminate your access at any time. Upon termination or suspension, you must:</p>
                                <ul className="mb-20" style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                    <li className="mb-10">Immediately stop using the Website.</li>
                                    <li className="mb-10">Destroy any copies of the Content you have made.</li>
                                    <li className="mb-10">Continuing to access the Website, Shipsoft Systems, Information, or Services after termination, suspension, or discontinuation will be considered trespassing.</li>
                                </ul>
                                <p className="mb-40">Shipsoft is not liable to you or any third party for terminating or suspending your access to the Website, Shipsoft Systems, Information, and/or Services.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Disclaimer of Warranties</h3>
                                <p className="mb-40">Shipsoft makes no promises regarding the results you may achieve by using the website, Shipsoft systems, services, information, or content. You use these elements at your own risk, and they are provided “as is.” To the fullest extent permitted by law, Shipsoft, along with its licensors and suppliers, disclaims all warranties, whether express, implied, statutory, or otherwise. This includes, but is not limited to, warranties of merchantability, non-infringement, and fitness for a particular purpose. Shipsoft and its affiliates, licensors, and suppliers do not guarantee the accuracy, completeness, security, or timeliness of the content, information, or services provided on the website or Shipsoft systems. No information obtained from the website creates any warranty that is not expressly stated in these Terms of Use.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Limitation of Liability</h3>
                                <p className="mb-40">To the extent permitted by law, Shipsoft, its affiliates, licensors, suppliers, or any third parties mentioned on the website are not liable for any incidental, direct, indirect, exemplary, punitive, and/or consequential damages, lost profits, or damages resulting from lost data or business interruption caused by the use or inability to use the Website, Shipsoft Systems, information, services, or content. This limitation applies regardless of the legal theory on which the claim is based, whether warranty, contract, tort, delict, or any other, and even if Shipsoft has been advised of the possibility of such damages. To the extent allowed by law, the remedies provided to you in these Terms of Use are exclusive and limited to those expressly stated herein.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Compliance with Laws, Including Export Control</h3>
                                <p className="mb-20">You agree to use the Shipsoft website in full compliance with all applicable laws, regulations, and rules. Your actions should not, as determined solely by Shipsoft, harm Shipsoft’s goodwill or reputation. Additionally, you must not engage in any activities that could cause Shipsoft to violate any relevant laws, rules, or regulations applicable to Shipsoft.</p>
                                <p className="mb-40">Shipsoft operates from Singapore and manages the export of products and information. You agree to comply with all applicable restrictions and refrain from exporting or re-exporting any content (including software or services) to countries or individuals prohibited under Singapore or other relevant export control laws or regulations. By accessing and downloading any content (including software or services) or information, you confirm that you are not located in a country where such export is prohibited and are not a person or entity to whom such export is restricted. You are solely responsible for complying with the laws of your local jurisdiction and any other applicable laws concerning the import, export, or re-export of the content (including software or services).</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Governing Law and Jurisdiction</h3>
                                <p className="mb-40">To the maximum extent permitted by law, these Terms of Use are governed by the internal laws of Singapore, and the courts in Singapore shall have sole and exclusive jurisdiction over any disputes arising from or related to these Terms of Use.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>General</h3>
                                <p className="mb-40">You may not transfer these Terms of Use or any of your rights, interests, or obligations under these Terms of Use. If any provision of these Terms of Use is found invalid by a court of competent jurisdiction, the invalidity of that provision shall not affect the validity of the remaining provisions, which shall remain in full force and effect. No waiver of any of these Terms of Use shall be considered a continuing waiver of that term or condition or any other term or condition. You may retain a written copy of these Terms of Use by printing them for your records, waiving any other requirement for these Terms of Use to be evidenced by a written document.</p>

                                <h3 className="mb-20" style={{ color: '#0f172a' }}>Contact Us</h3>
                                <p className="mb-20">If you have any questions, concerns, or feedback regarding our services, you can reach out to us through the following contact options:</p>
                                <ul className="mb-20" style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                    <li className="mb-10"><strong>Customer Support:</strong> <a href="mailto:sales@shipsoft.sg">sales@shipsoft.sg</a></li>
                                    <li className="mb-10"><strong>Phone No:</strong> +65 86065455</li>
                                </ul>
                                <p className="mb-40">We strive to respond to all inquiries promptly and provide you with the assistance you need. Thank you for choosing Shipsoft.</p>
                                
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

export default TermsAndConditions;