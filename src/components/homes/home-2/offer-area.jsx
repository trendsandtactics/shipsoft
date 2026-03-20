import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AngleArrow from '@/src/svg/angle-arrow'; 
import LineArrowTwo from '@/src/svg/line-arrow-2';

import offer_shape_1 from "@assets/img/offering/shape.png";
import offer_shape_2 from "@assets/img/offering/shape-2.png";

import offering_img_1 from "@assets/img/feature/home-2/crm.webp";
import offering_img_2 from "@assets/img/feature/home-2/freight.webp";
import offering_img_3 from "@assets/img/feature/home-2/warehouse.webp";
import offering_img_4 from "@assets/img/feature/home-2/transport.webp";
import offering_img_5 from "@assets/img/feature/home-2/accounts.webp";
import offering_img_6 from "@assets/img/feature/home-2/distribution.webp";

const offering_data = [
    {
        id: 1,
        img: offering_img_1,
        title: <>Customer Relationship <br /> Management</>,
        description: "Complete customer visibility with real – time tracking of shipment status and history."
    },
    {
        id: 2,
        img: offering_img_2,
        title: <>Freight Management <br /> System</>,
        description: "Shipsoft Solutions with its best-built freight management software are now pioneers.",
        link: "/service-details"
    },
    {
        id: 3,
        img: offering_img_3,
        title: <>Warehouse Management <br /> System</>,
        description: "Shipsoft’s WMS is a comprehensive, customizable software solution that offers total visibility.",
        link: "/service-details"
    },
    {
        id: 4,
        img: offering_img_4,
        title: <>Transport Management <br /> System</>,
        description: "City Master Price, Zone Master Price City and Zone level Price can create and maintain.",
        link: "/service-details"
    },
    {
        id: 5,
        img: offering_img_5,
        title: <>Accounts Management <br /> System</>,
        description: "The entire financial requirements of the enterprise can be managed with the module.",
        link: "/service-details"
    },
    {
        id: 6,
        img: offering_img_6,
        title: <>Distribution Management <br /> System</>,
        description: "Designed to serve Dealer & Agency company access across web on light weight application.",
        link: "/service-details"
    },
    {
        id: 7,
        img: offering_img_1,
        title: <>e-Commerce</>,
        description: "This module enables our customers to operate their own dedicated ‘on-line’ shop connected to our wms, freight management, transport modules.",
        link: "/service-details"
    },
   
]

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
                            <Link href={item.link || "/service-details"}>Read Out More <i className="fa-solid fa-arrow-up-right"></i></Link>
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