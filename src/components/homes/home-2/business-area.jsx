import React from 'react';
import Image from 'next/image';

import  business_shape_1 from "@assets/img/business/shape-1.png";
import  business_shape_2 from "@assets/img/business/shape-2.png";
import  business_shape_3 from "@assets/img/business/shape-3.png";
import  business_shape_4 from "@assets/img/business/shape-4.png" ;
import  business_img_1 from "@assets/img/business/img-1.jpg" ;
import  business_img_2 from "@assets/img/business/img-2.png" ;
import  business_img_3 from "@assets/img/business/img-3.png" ;
import  business_user from "@assets/img/business/user.png" ;

import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import CodeIcon from '@/src/svg/code-icon';
import TechIcon from '@/src/svg/tech-icon';
import Link from 'next/link';
import LineArrowSix from '@/src/svg/line-arrow-6';

const BusinessArea = () => {
    return (
        <>
            <section className="tp-business-area p-relative pt-110 pb-115">
            <div className="tp-business-shape">
               <Image className="shape-1 d-none d-lg-block" src={business_shape_1} alt="theme-pure" />
               <Image className="shape-2" src={business_shape_2} alt="theme-pure" />
               <Image className="shape-3" src={business_shape_3} alt="theme-pure" />
               <Image className="shape-4" src={business_shape_4} alt="theme-pure" />
            </div>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="tp-business-thumb-wrapper p-relative">
                        <div className="tp-business-thumb text-center">
                           <Image src={business_img_1} alt="theme-pure" />
                        </div>
                        <div className="circle-animation business-4">
                           <span className="tp-circle-1"></span>
                        </div>
                        <div className="circle-animation business-3">
                           <span className="tp-circle-2"></span>
                        </div>
                        <div className="circle-animation business-2">
                           <span className="tp-circle-3"></span>
                        </div>
                        <div className="tp-business-thumb-shape">
                           <Image className="shape-1" src={business_img_2} alt="theme-pure" />
                           <Image className="shape-2" src={business_img_3} alt="theme-pure" />
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="tp-business-title-wrapper">
                        <span className="tp-section-title__pre">
                           About <span className="title-pre-color">the Company</span> 
                           <AngleArrow />
                        </span>
                        <h3 className="tp-section-title">About Shipsoft Solutions
                           <span className="title-left-shape"> 
                              <LineArrowTwo />
                           </span>
                        </h3>
                        <p>Shipsoft Solutions is a Singapore-based IT company specializing in cutting-edge software for logistics and supply chain management. Our mission is to deliver innovative, cost-effective digital solution that empower businesses to optimize operations and drive growth. We support organizations that rely on technology today, as well as those transitioning toward a fully digital environment, helping them thrive in an increasingly competitive and fast-paced global market.</p>
                     </div>
                     <div className="row">
                        <div className="tp-business-btn-area d-flex align-items-center mt-20">
                           <Link className="tp-btn" href="/contact">Reach out</Link>
                        
                           <i>
                              +971 43 704077
                              <span> 
                                 <LineArrowSix /> 
                              </span>
                           </i>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default BusinessArea;