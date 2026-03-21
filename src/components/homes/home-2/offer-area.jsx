import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AngleArrow from '@/src/svg/angle-arrow'; 
import LineArrowTwo from '@/src/svg/line-arrow-2';

import offer_shape_1 from "@assets/img/offering/shape.png";
import offer_shape_2 from "@assets/img/offering/shape-2.png";
import { offering_data } from '@/src/data/offering-data';

const OfferArea = () => {
    return (
        <>
           <section className="tp-offer-area p-relative pt-120 pb-90" style={{backgroundImage: `url(/assets/img/offering/bg.png)`}}>
            <div className="tp-offer-overlay"></div>
            <div className="tp-offer-shape">
               <Image className="shape-1 d-none d-xl-block" src={offer_shape_1} alt="theme-pure" />
               <Image className="shape-2" src={offer_shape_2} alt="theme-pure" />
            </div>
            <div className="container">

               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="tp-feature-title-wrapper">
                     
                        <h3 className="tp-section-title">What we do
                           <span className="title-left-shape"> 
                              <LineArrowTwo />
                           </span>
                        </h3>
                        <p>We offer a wide range of services. Shipsoft provides the best logistics Software solutions which comprise of every single aspect and operational elements involved in logistics, which include:</p>
                     </div>
                  </div>
                  
               </div>
               <div className="row">
                {offering_data.map((item, i) => 
                    <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                        <div className="tp-offer-wrapper text-center mb-30">
                        <h3 className="offer-title">{item.title}</h3>
                        <div className="tp-offer-wrapper-thumb">
                            <Image src={item.img} alt="theme-pure" width={50} height={50} style={{ objectFit: 'contain' }} />
                        </div>
                        <p>{item.description}</p>
                        <div className="tp-offer-wrapper-btn">
                            <Link href={`/service-details/${item.slug}`}>Read Out More <i className="fa-solid fa-arrow-up-right"></i></Link>
                        </div>
                        </div>
                    </div>
                )} 

                  <div className="col-lg-12">
                     
                  </div>
               </div>
            </div>
          </section> 
        </>
    );
};

export default OfferArea;