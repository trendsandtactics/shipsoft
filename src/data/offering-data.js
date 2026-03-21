import React from 'react';
import offering_img_1 from "@assets/img/feature/home-2/crm.webp";
import offering_img_2 from "@assets/img/feature/home-2/freight.webp";
import offering_img_3 from "@assets/img/feature/home-2/warehouse.webp";
import offering_img_4 from "@assets/img/feature/home-2/transport.webp";
import offering_img_5 from "@assets/img/feature/home-2/accounts.webp";
import offering_img_6 from "@assets/img/feature/home-2/distribution.webp";

export const offering_data = [
    {
        id: 1,
        slug: "customer-relationship-management",
        img: offering_img_1,
        title: <>Customer Relationship <br /> Management</>,
        description: "Complete customer visibility with real – time tracking of shipment status and history.",
        content: "Our Customer Relationship Management (CRM) system is tailored specifically for the logistics industry. It provides a centralized platform to track all customer interactions, monitor shipment statuses in real-time, and manage historical data. By offering full visibility into your supply chain operations, our CRM helps you build stronger customer relationships, improve service levels, and drive long-term business growth."
    },
    {
        id: 2,
        slug: "freight-management-system",
        img: offering_img_2,
        title: <>Freight Management <br /> System</>,
        description: "Shipsoft Solutions with its best-built freight management software are now pioneers.",
        content: "The Freight Management System empowers businesses to manage end-to-end freight operations efficiently. From quotation and booking to execution and invoicing, this software handles complex freight forwarding scenarios. It streamlines your workflows, minimizes manual data entry, and helps reduce operational costs while ensuring seamless communication across your network."
    },
    {
        id: 3,
        slug: "warehouse-management-system",
        img: offering_img_3,
        title: <>Warehouse Management <br /> System</>,
        description: "Shipsoft’s WMS is a comprehensive, customizable software solution that offers total visibility.",
        content: "Our Warehouse Management System (WMS) provides total visibility into inventory, space utilization, and warehouse productivity. It optimizes receiving, put-away, picking, and shipping processes. With advanced barcode scanning and automation support, it ensures inventory accuracy and significantly boosts the speed of your order fulfillment operations."
    },
    {
        id: 4,
        slug: "transport-management-system",
        img: offering_img_4,
        title: <>Transport Management <br /> System</>,
        description: "City Master Price, Zone Master Price City and Zone level Price can create and maintain.",
        content: "The Transport Management System (TMS) enables you to create and maintain complex pricing structures at the city and zone levels. It optimizes route planning, vehicle dispatching, and driver management. By maximizing fleet utilization and minimizing fuel consumption, our TMS provides a cost-effective solution for all your transportation needs."
    },
    {
        id: 5,
        slug: "accounts-management-system",
        img: offering_img_5,
        title: <>Accounts Management <br /> System</>,
        description: "The entire financial requirements of the enterprise can be managed with the module.",
        content: "Our Accounts Management System seamlessly integrates your operational data with your financial requirements. It automates billing, tracks payables and receivables, and generates comprehensive financial reports. This ensures your enterprise maintains accurate ledgers, improves cash flow, and stays compliant with regional accounting standards."
    },
    {
        id: 6,
        slug: "distribution-management-system",
        img: offering_img_6,
        title: <>Distribution Management <br /> System</>,
        description: "Designed to serve Dealer & Agency company access across web on light weight application.",
        content: "The Distribution Management System is designed to serve dealer and agency networks through a lightweight web application. It simplifies the distribution of goods, tracks secondary sales, and provides real-time insights into field operations. This ensures that your products reach the right markets efficiently without overstocking or stockouts."
    },
    {
        id: 7,
        slug: "e-commerce",
        img: offering_img_1,
        title: <>e-Commerce</>,
        description: "This module enables our customers to operate their own dedicated ‘on-line’ shop connected to our wms, freight management, transport modules.",
        content: "The e-Commerce module connects your online storefront directly to our WMS, Freight, and Transport modules. This end-to-end integration ensures that whenever an online order is placed, inventory is automatically updated, packing is initiated, and delivery is scheduled seamlessly—providing your customers with an exceptional buying experience."
    },
]