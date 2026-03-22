import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/src/layout/headers/header';
import Link from 'next/link';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';
import { offering_data } from '@/src/data/offering-data';
import { CheckCircle, ChevronRight, LayoutGrid } from 'lucide-react';

const updated_services_content = [
  {
    match: "Customer Relationship Management",
    img: "/crm.png",
    description: `Our CRM module is purpose-built to help businesses drive profitability by streamlining customer interactions and internal workflows. With a focus on improving efficiency, personalization, and data-driven decision-making, this powerful tool supports every stage of the customer lifecycle.`,
    content: `By consolidating all customer-related data and interactions in one centralized system, the CRM module empowers your team to better understand and serve your clients. It strengthens customer engagement, boosts retention, and supports long-term business growth through smarter, more strategic relationship management.\n\nEmpower yourself to manage all your company’s relationships with customers and potential customers through technology.`,
    features: [
      { title: "Streamlined Sales Workflows", description: "Automate and simplify your sales process—from lead generation to deal closure. The CRM module enables your sales team to manage prospects, track activities, and gain real-time insights into sales performance, freeing them to focus on building relationships and closing deals." },
      { title: "Centralized Marketing Contact Management", description: "Effortlessly manage and segment your marketing database. Organize contacts, personalize outreach, and ensure consistent, targeted communication with both potential and existing customers for more effective campaigns." },
      { title: "Quotation Management", description: "Quickly generate, send, and track professional quotations. The system ensures accuracy and consistency, helping to speed up response times, enhance customer satisfaction, and shorten the sales cycle." },
      { title: "Smart Pricing Optimization", description: "Use historical data, market insights, and customer trends to set and adjust pricing strategies. The CRM helps you stay competitive while maximizing profit margins." },
      { title: "Automated Administrative Functions", description: "Reduce administrative overhead with built-in tools for managing invoices, contracts, and customer support. These features help ensure operational efficiency and improved documentation." },
      { title: "Pricing Management", description: "Tariff Maintenance, Master Rates, Origin Charges, Destination Charges, Freight Charges, and more..." },
      { title: "Reporting & Analytics", description: "Consolidated dashboard, performance reports, sales performance reports, enhanced analytics, visual presentations, and much more." },
      { title: "Sales Activities", description: "Customer Creation, Sales Lead assign, Sales Call, Meeting Schedule Creation, Making Quotation, Quotation Reports, Making Bookings using Quotation" },
      { title: "Support & Help", description: "Customer Feedback, Customer Enquiry, Internal Flash News Option" },
      { title: "Sales", description: "Customer Contact and sales territory management" },
      { title: "Pricing", description: "Pricing and Quotation modules" }
    ]
  },
  {
    match: "Freight Management",
    img: "/freight.png",
    description: `Shipsoft Solutions is a leading logistics technology provider, delivering innovative freight management software built to simplify and optimize freight forwarding. Designed with logistics professionals in mind, our user-friendly platform replaces manual processes with automated workflows—enhancing accuracy, speed, and overall efficiency.\n\nShipsoft empowers freight forwarders to digitize their operations, improve productivity, and reduce delays and errors. Its flexible architecture supports seamless integration with partners, vendors, and customers, enabling real-time collaboration and communication across the global supply chain.`,
    content: `With real-time access to data and shipment status, businesses gain agility, transparency, and control—allowing them to respond faster to market changes and customer needs. More than just software, Shipsoft Solutions is a strategic partner in building a smarter, more connected, and future-ready logistics ecosystem.\n\nThis connectivity ensures that all stakeholders are synchronized, facilitating smooth communication and collaboration. Consequently, freight forwarders can conduct their business from anywhere, enhancing their ability to respond swiftly to market changes and customer demands. This capability not only strengthens business relationships but also enhances customer satisfaction by providing real-time updates and transparency throughout the shipping process. In essence, Shipsoft Solutions has not only equipped freight forwarders with the tools to thrive in a digital age but has also set a new standard for efficiency and connectivity in the logistics sector, paving the way for a more integrated and responsive supply chain ecosystem.\n\nA comprehensive freight management system which provide total control and visibility of shipments at all times to customers.`,
    features: [
      { title: "Ship Schedule", description: "Sailing Schedule – Import Sailing Schedule." },
      { title: "Air/Sea Booking", description: "Air & Sea Bookings (Import & Export)." },
      { title: "Manage Bookings", description: "Merge & Split Booking option." },
      { title: "Consolidation", description: "Air & Sea Consolidation (Import/Export)." },
      { title: "Submit Shipping Instructions", description: "SI (Shipping Instruction) Submission (Buying / Selling / Quotation)." },
      { title: "CFS Services", description: "CFS Operations." },
      { title: "Shipment Replication", description: "Copy Consolidation Shipment from other Company or Branches, provided using same shipsoft software." },
      { title: "Consolidation Reports", description: "Consolidation Shipment Reports." },
      { title: "EDI Integration", description: "EDI from Agents." },
      { title: "Freight Forwarding Dashboard", description: "Dashboards- Freight Forwarding Dashboard." },
      { title: "Print e-Bill of Lading", description: "E-BL – Print on their Location, come with stamp and signature." },
      { title: "Book & Track Online", description: "On-line booking – customer can book online and auto email to CS, and booking personal" },
      { title: "Shipment Tracking Portal", description: "Portal with total visibility of milestones – API integration with clients’- Customer portal, able to see and view all shipment and status. Partner portal" },
      { title: "Request & Compare Quotes", description: "Submit RFQ and view valid quotes and trans-shipment tariff, destination agents, landing charges." },
      { title: "Nomination Management", description: "View nomination, update status." },
      { title: "Document Attachment", description: "Clip documents and images which is not required to be sent on email, as it get updated into our systems. Customer portal" },
      { title: "Digital Documents", description: "e-booking, ESI submission, e d/o, e-b/l." },
      { title: "Shipment Tracking", description: "Shipment status and tracking." },
      { title: "Document Library", description: "Documents visibility online." },
      { title: "Personalized View", description: "Customized dash board." },
      { title: "Activity Stream", description: "Customized interface of various activities, milestone updates and menu based email notification." }
    ]
  },
  {
    match: "Warehouse Management",
    img: "/warehouse.png",
    description: `Shipsoft’s WMS is a robust, customizable solution that delivers full visibility and control over your warehouse operations. Designed to streamline processes from receiving to shipping, it helps businesses boost efficiency, accuracy, and productivity.`,
    content: `Shipsoft’s WMS is more than an inventory tool—it’s an integrated solution that enhances every aspect of warehouse management. With real-time visibility, process optimization, and smart integration, it empowers businesses to reduce costs, increase efficiency, and stay ahead in a competitive market.\n\nOur WMS is capable of interface with clients and suppliers which helps to streamline processes and improve productivity and save time and money.\n\nIn today’s dynamic economy, connected consumers wants flexibility and visibility ever changing environment. Businesses need the ability to respond quickly to customers request based on live information available from our software/portal. Our cloud-based warehouse management system prepares you for tomorrow’s supply chain, today.`,
    features: [
      { title: "Total Inventory Visibility", description: "Our integrated warehouse management system offers real-time tracking of inventory levels, locations, and movements." },
      { title: "Optimized Warehouse Operations", description: "Covers all core functions—receiving, put-away, picking, packing, and shipping—for smooth and efficient workflows." },
      { title: "Labor & Space Efficiency", description: "Analyses operational patterns to maximize workforce output, space utilization, and equipment ROI." },
      { title: "ERP Integration", description: "Seamlessly integrates with existing ERP systems for unified data management and smarter decision-making." },
      { title: "Customizable & Flexible", description: "Tailored to your unique business needs with the ability to evolve as your operations grow or change." },
      { title: "Advanced Analytics", description: "Provides actionable insights through detailed reports and dashboards for continuous performance improvement." },
      { title: "Scalable & Future-Ready", description: "Built to grow with your business—supporting expansion, new products, and evolving logistics strategies." },
      { title: "Secure Access", description: "High-level security settings." },
      { title: "Multi-User/Location Access", description: "Multi-user access from anywhere for 3PL & 4PL." },
      { title: "Real-Time Inventory Visibility", description: "Online stock enquiry through web." },
      { title: "Customized Invoicing", description: "Commercial Invoice to Customers on customer format" },
      { title: "B2B Integration", description: "B2B integration with Customer and EDI facility." },
      { title: "Business Intelligence Tools", description: "Dash Board, Management Information System, Report and Finance Reports." },
      { title: "Web-Based Tracking", description: "Order tracking and delivery milestones updates available on web." },
      { title: "Global Management", description: "Multi-company, branches , Multi locations, including from overseas branch office." },
      { title: "Customizable Financial Module", description: "Integrated with Financial module (customized module, based on client inputs)." },
      { title: "Mobile Warehouse Operations", description: "Mobile device & scanner access for put-away, pick and cycle count with Barcode. Link to scanner to the system, direct and live update of stock, in and out." },
      { title: "Online Order Management", description: "Online Order Placing, Status checking, Status alert (password protected), re-order cycle set up-online tracking." },
      { title: "Order Tracking & Delivery Updates", description: "Online tracking of product after order placing track dispatch date, mode, delivery date etc." },
      { title: "Import & Finance Integration", description: "Import & Finance module integrated with WMS (Warehouse Management System) & EDI to generate ASN (Advance Shipping Note)." },
      { title: "Customer Order Portal", description: "App based customer interface – PO (Purchase Order) & Sales order management with WMS (Warehouse Management System) & Finance systems." },
      { title: "Seamless Data Integration", description: "Online Scanning & auto inventory updating & System integration and tailor made reports based on customer requirements & Data synchronization through EDI with customer system." },
      { title: "Multi-Warehouse Management", description: "Our system is capable to handle multiple DCs (document) with a centralized inventory control. It can be enabled to generate auto pick list from the nearest DC based on various pre-set conditions allowed & set by customer." }
    ]
  },
  {
    match: "Transport Management",
    img: "/transport.png",
    description: `Shipsoft’s Transport Management System (TMS) is a vital solution for modern logistics, designed to plan, execute, and monitor the movement of goods with maximum efficiency. Using advanced algorithms and real-time data, the system optimizes routing, consolidates shipments, and manages carriers—reducing costs while improving delivery speed and reliability.`,
    content: `With seamless integration into existing logistics and enterprise systems, Shipsoft’s TMS ensures smooth data exchange across the supply chain. This empowers stakeholders with real-time insights and enables faster, more informed decision-making.\n\nMoreover, the Transport Management System enhances visibility and control over the entire transportation process. Companies can monitor shipments in real-time, track performance metrics, and generate detailed reports on various aspects of their transportation operations. This level of insight allows businesses to identify inefficiencies, mitigate risks, and continuously improve their logistics strategies. Additionally, a robust transport management system supports compliance with regulatory requirements and industry standards, ensuring that all transportation activities are conducted legally and ethically. In essence, a TMS is not just a tool for managing transportation; it is a strategic asset that drives operational excellence, cost savings, and customer satisfaction in the logistics industry.\n\nThe module is designed to meet all the requirements for processing shipments.`,
    features: [
      { title: "Cities & Zones", description: "City Master & Zone Master." },
      { title: "Domestic Pricing", description: "City Master Price, Zone Master Price – City and Zone level Price can create and maintain for Domestic Transportation." },
      { title: "Port/Place Pricing", description: "Transport Master Price – Pickup and Delivery price can create and maintain for Load/Unload port to Pickup/Delivery Place." },
      { title: "LTL/FTL Quotes", description: "Domestic Quotation – Domestic Transport Quotation can create and send Quote to customer based on Pickup and Delivery place along with Cargo details (LTL/FTL)." },
      { title: "Separate Quotes", description: "Pickup Quotation & Delivery Quotation – Separate Quotation can create and maintain for Pickup and Delivery based on Customer request." },
      { title: "Track Shipments", description: "Request quotes, view cargo details, create jobs, track shipment status, attach documents, and capture driver and truck signatures - all within the Transportation Management screen." }
    ]
  },
  {
    match: "Accounts Management",
    img: "/account.png",
    description: `An Accounts Management System (AMS) is a critical tool for ensuring the financial stability, accuracy, and transparency of any organization. It streamlines and automates core accounting functions—such as general ledger, accounts payable and receivable, and financial reporting—providing real-time insights into the company’s financial health. By automating routine tasks like invoice processing, account reconciliation, and report generation, the AMS reduces errors and allows finance teams to focus on strategic planning and analysis.`,
    content: `The system enhances decision-making by delivering accurate, timely financial data to stakeholders, while also supporting regulatory compliance through detailed record-keeping and audit trails. It enables businesses to monitor cash flow, track transactions, and enforce financial controls with ease. With a centralized platform, the AMS promotes better collaboration across departments and ensures standardized financial processes throughout the organization.\n\nModern accounts management software also features intuitive, user-friendly interfaces and customizable dashboards, allowing businesses to tailor financial reports to their specific needs. This adaptability makes it easier to manage complex financial operations while maintaining full control and visibility.\n\nIn essence, an AMS is more than just an accounting tool—it’s a strategic asset that supports efficient financial management, strengthens compliance, and drives sustainable growth in a competitive business environment.\n\nDesigned to serve dealers and agencies, provides a single platform for suppliers, agencies, and customers, features automatic email alerts and notifications, along with email-based approvals.`,
    features: [
      { title: "Accessible Anywhere", description: "Web based application access from anywhere through Phone, I-Pad etc." },
      { title: "Streamlined Sales", description: "Easy to make Sales Planning, Sales Call feedback and call scheduling." },
      { title: "Self-Service Ordering", description: "Customer can directly place the order using Login ID and password." },
      { title: "Inventory Management", description: "On Line inventory visibility, Re-Order Cycle Alert, Performance history." },
      { title: "Seamless Approvals", description: "Approvals through On-Line and Email." },
      { title: "Automated Alerts", description: "Auto alert notification for confirmation and approvals." },
      { title: "Price Control", description: "Minimum selling price mechanism to control the price." },
      { title: "Insights", description: "Customized Reports to provide to provide better visibility and control for the management." },
      { title: "Automated Workflow", description: "Integrates Sales Order Process, once order is placed, it automatically notify concern department to prepare Delivery Note, Schedule Transport and prepare Invoices." }
    ]
  },
  {
    match: "Distribution Management",
    img: "/distribute.png",
    description: `A Distribution Management System (DMS) is essential for streamlining the movement of goods from manufacturers to customers. By integrating with warehouse and transport management systems, it ensures seamless coordination across the supply chain. With real-time inventory visibility, businesses can maintain optimal stock levels, reduce holding costs, and avoid shortages or overstocking.`,
    content: `The DMS automates order processing, picking, packing, and shipping—minimizing errors and speeding up deliveries. This leads to improved accuracy, faster fulfilment, and greater customer satisfaction. It also offers robust tracking and reporting tools, enabling data-driven decisions that enhance efficiency and reduce costs.\n\nIn today’s competitive market, a DMS is more than a logistics tool—it’s a strategic solution that empowers businesses to adapt, scale, and deliver superior service.\n\nDesigned to serve dealers and agencies, provides a single platform for suppliers, agencies, and customers, features automatic email alerts and notifications, along with email-based approvals.`,
    features: [
      { title: "Accessible Anywhere", description: "Web based application access from anywhere through Phone, I-Pad etc." },
      { title: "Streamlined Sales", description: "Easy to make Sales Planning, Sales Call feedback and call scheduling." },
      { title: "Self-Service Ordering", description: "Customer can directly place the order using Login ID and password." },
      { title: "Inventory Management", description: "On Line inventory visibility, Re-Order Cycle Alert, Performance history." },
      { title: "Seamless Approvals", description: "Approvals through On-Line and Email." },
      { title: "Automated Alerts", description: "Auto alert notification for confirmation and approvals." },
      { title: "Price Control", description: "Minimum selling price mechanism to control the price." },
      { title: "Insights", description: "Customized Reports to provide to provide better visibility and control for the management." },
      { title: "Automated Workflow", description: "Integrates Sales Order Process, once order is placed, it automatically notify concern department to prepare Delivery Note, Schedule Transport and prepare Invoices." }
    ]
  },
  {
    match: "E-Commerce",
    img: "/E-commerec.png",
    description: `Complete e-commerce logistics solutions designed to handle the high-volume, fast-paced demands of online retail.`,
    content: `Our E-commerce fulfillment module helps you seamlessly connect your online store with warehouse and shipping operations, ensuring quick and accurate order processing.\n\nAutomate inventory updates, tracking, and customer notifications, ensuring that your customers get the best possible experience when purchasing from you.`,
    features: [
      { title: "Order Synchronization", description: "Automatically import orders from your webstore for immediate processing." },
      { title: "Inventory Tracking", description: "Real-time stock updates to prevent overselling." },
      { title: "Last-Mile Delivery", description: "Integration with major couriers for fast, reliable last-mile delivery." }
    ]
  }
];

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const rawService = offering_data.find((item) => item.slug === id);
  let service = rawService;
  
  if (rawService) {
    const override = updated_services_content.find(uc => rawService.slug?.toLowerCase().includes(uc.match.toLowerCase().replace(/\s+/g, '-')));
    if (override) {
      service = { ...rawService, description: override.description, content: override.content, features: override.features };
      if (override.img) service.img = override.img;
    }
  }

  if (!service) {
    return (
      <>
        <Header />
        <div className="container pt-120 pb-120 text-center">
            <h2>Loading...</h2>
        </div>
        <FooterContact />
        <FooterThree />
      </>
    );
  }

  return (
    <>
      <Header />
      <style jsx>{`
        .tp-feature-card {
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        .tp-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(13, 110, 253, 0.12);
          border-color: rgba(13, 110, 253, 0.3);
        }
        .icon-wrapper {
          transition: all 0.3s ease;
        }
        .tp-feature-card:hover .icon-wrapper {
          background-color: #0d6efd !important;
          color: #ffffff !important;
        }
        .tp-service-widget-item {
          background: #ffffff;
          padding: 30px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        .tp-service-widget-tab ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .tp-service-widget-tab ul li a {
          padding: 16px 24px;
          border-radius: 12px;
          transition: all 0.3s ease;
          margin-bottom: 8px;
          display: block;
          color: #475569;
          font-weight: 600;
          background: #f8fafc;
          text-decoration: none;
        }
        .tp-service-widget-tab ul li a:hover,
        .tp-service-widget-tab ul li a.active {
          background: #0d6efd;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.2);
        }
      `}</style>
      <main>
        <div className="container pt-120 pb-120">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-service-widget" style={{ position: 'sticky', top: '120px' }}>
                <div className="tp-service-widget-item mb-40">
                  <div className="tp-service-widget-tab">
                    <ul>
                      {offering_data.map((item, i) => (
                        <li key={i}>
                          <Link className={item.slug === id ? "active" : ""} href={`/${item.slug}`}>
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                              <span>{item.title}</span>
                              <ChevronRight size={18} strokeWidth={2.5} />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-details-thumb mb-50" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(13, 110, 253, 0.08)', position: 'relative', width: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(145deg, #ffffff 0%, #f0f7ff 100%)', border: '1px solid rgba(13, 110, 253, 0.1)' }}>
                <Image src={service.img} alt={service.title} fill style={{ objectFit: 'cover', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.1))' }} />
              </div>
              <div className="service-details-content">
                <h2 className="tp-section-title mb-30" style={{ color: '#0f172a', fontWeight: '800', fontSize: '2.5rem', letterSpacing: '-0.5px' }}>{service.title}</h2>
                <p className="text-muted text-start mb-40" style={{ fontSize: '1.25rem', whiteSpace: 'pre-wrap', fontWeight: '500', lineHeight: '1.8', color: '#475569' }}>{service.description}</p>
                
                <div className="mt-20 text-start" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  <p style={{ whiteSpace: 'pre-wrap', color: '#334155' }}>{service.content}</p>
                  
                  {service.features && service.features.length > 0 && (
                    <div className="mt-60 pt-40" style={{ borderTop: '1px solid #e2e8f0' }}>
                      <h3 className="mb-40" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#0f172a', fontWeight: '700', fontSize: '2rem' }}>
                        <LayoutGrid size={32} color="#0d6efd" /> Core Features
                      </h3>
                      <div className="row g-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="col-lg-6">
                            <div className="p-4 h-100 tp-feature-card">
                              <div className="icon-wrapper mb-4" style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: 'rgba(13, 110, 253, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d6efd' }}>
                                <CheckCircle size={28} strokeWidth={2} />
                              </div>
                              <h4 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: '#1e293b' }}>{feature.title}</h4>
                              <p style={{ fontSize: '1rem', margin: 0, whiteSpace: 'pre-wrap', color: '#64748b', lineHeight: '1.6' }}>{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterContact />
      <FooterThree />
    </>
  );
};

export default ServiceDetails;

