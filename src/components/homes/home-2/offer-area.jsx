import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LineArrowTwo from '@/src/svg/line-arrow-2';

import offer_shape_1 from "@assets/img/offering/shape.png";
import offer_shape_2 from "@assets/img/offering/shape-2.png";

const OfferArea = () => {
  return (
    <>
      <section
        className="tp-offer-area p-relative pt-120 pb-90"
        style={{ backgroundImage: `url(/assets/img/offering/bg.png)` }}
      >
        <div className="tp-offer-overlay"></div>

        <div className="tp-offer-shape">
          <Image className="shape-1 d-none d-xl-block" src={offer_shape_1} alt="shape" />
          <Image className="shape-2" src={offer_shape_2} alt="shape" />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="tp-feature-title-wrapper">

                <h3 className="tp-section-title">
                  What we do
                  <span className="title-left-shape">
                    <LineArrowTwo />
                  </span>
                </h3>

                <p>
                  One platform to manage, optimize, and scale your logistics operations.
                  Shipping powers the world’s trade, yet many companies still battle with fragmented workflows and outdated systems.
                  That’s what Shipsoft wanted to do — be a logistics ERP and supply chain management platform designed to solve these types of problems.
                </p>

                <p>
                  It brings all your operations together in one system integrating processes, and providing real-time visibility
                  so your business can run smarter and more efficiently.
                </p>

              </div>
            </div>
          </div>

          <div className="row">

            {/* CRM */}
            <div className="col-lg-4 col-md-6">
              <div className="tp-offer-wrapper text-center mb-30">
                <h3 className="offer-title">Customer Relationship Management</h3>
                <p>
                  ShipSoft's CRM centralizes customer interactions, lead generation, and shipment histories,
                  helping logistics teams resolve issues swiftly and build stronger, long-term client relationships.
                </p>
              </div>
            </div>

            {/* Freight */}
            <div className="col-lg-4 col-md-6">
              <div className="tp-offer-wrapper text-center mb-30">
                <h3 className="offer-title">Freight Management System</h3>
                <p>
                  ShipSoft simplifies freight operations from booking to delivery,
                  ensuring every shipment arrives on time.
                </p>
              </div>
            </div>

            {/* Warehouse */}
            <div className="col-lg-4 col-md-6">
              <div className="tp-offer-wrapper text-center mb-30">
                <h3 className="offer-title">Warehouse Management System</h3>
                <p>
                  Keeps your warehouse running smoothly — from stock intake to dispatch,
                  every item in its right place.
                </p>
              </div>
            </div>

            {/* Accounts */}
            <div className="col-lg-4 col-md-6">
              <div className="tp-offer-wrapper text-center mb-30">
                <h3 className="offer-title">Accounts Management System</h3>
                <p>
                  ShipSoft powers your financial operations globally tracking invoices,
                  payments, and expenses with complete accuracy and confidence.
                </p>
              </div>
            </div>

            {/* Distribution */}
            <div className="col-lg-4 col-md-6">
              <div className="tp-offer-wrapper text-center mb-30">
                <h3 className="offer-title">Distribution Management System</h3>
                <p>
                  ShipSoft drives your distribution network globally — managing orders,
                  deliveries, and supply flow with speed and total precision.
                </p>
              </div>
            </div>

            {/* E-commerce */}
            <div className="col-lg-4 col-md-6">
              <div className="tp-offer-wrapper text-center mb-30">
                <h3 className="offer-title">e-Commerce</h3>
                <p>
                  ShipSoft connects your online business to the world — handling orders,
                  shipments, and returns with effortless speed and reliability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default OfferArea;
