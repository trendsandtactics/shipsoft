import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import business_shape_1 from "@assets/img/business/shape-1.png";
import business_shape_2 from "@assets/img/business/shape-2.png";
import business_shape_3 from "@assets/img/business/shape-3.png";
import business_shape_4 from "@assets/img/business/shape-4.png";
import business_img_1 from "@assets/img/business/img-1.jpg";

import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import LineArrowSix from '@/src/svg/line-arrow-6';

const BusinessArea = () => {
  return (
    <>
      <section className="tp-business-area p-relative pt-110 pb-115">
        
        {/* Background Shapes */}
        <div className="tp-business-shape">
          <Image className="shape-1 d-none d-lg-block" src={business_shape_1} alt="shape" />
          <Image className="shape-2" src={business_shape_2} alt="shape" />
          <Image className="shape-3" src={business_shape_3} alt="shape" />
          <Image className="shape-4" src={business_shape_4} alt="shape" />
        </div>

        <div className="container">
          <div className="row align-items-center">

            {/* LEFT SIDE - ONLY ONE IMAGE */}
            <div className="col-lg-6">
              <div className="tp-business-thumb text-center">
                <Image src={business_img_1} alt="business" />
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="col-lg-6">
              <div className="tp-business-title-wrapper">
                
                <span className="tp-section-title__pre">
                  About <span className="title-pre-color">the Company</span>
                  <AngleArrow />
                </span>

                <h3 className="tp-section-title">
                  About Shipsoft Solutions
                  <span className="title-left-shape">
                    <LineArrowTwo />
                  </span>
                </h3>

                <p>
                  Shipsoft Solutions is a Singapore-based IT company specializing in cutting-edge software for logistics and supply chain management. 
                  Our mission is to deliver innovative, cost-effective digital solutions that empower businesses to optimize operations and drive growth. 
                  We support organizations that rely on technology today, as well as those transitioning toward a fully digital environment, helping them 
                  thrive in an increasingly competitive and fast-paced global market.
                </p>
              </div>

              <div className="tp-business-btn-area d-flex align-items-center mt-20">
                <Link className="tp-btn" href="/contact">
                  Reach out
                </Link>

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
      </section>
    </>
  );
};

export default BusinessArea;
