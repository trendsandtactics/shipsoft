import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import business_img_1 from "@assets/img/business/img-1.jpg";

const AboutPage = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-blue-50">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            About Platform
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Empowering Freight Forwarding with{" "}
            <span className="text-blue-600">AI & Innovation</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Fresa Technologies helps forwarders work faster, smarter, and more efficiently using AI-driven automation.
          </p>

          {/* CTA FIRST (better conversion) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-2">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

            <span className="text-gray-700 font-medium text-lg">
              +971 43 704077
            </span>
          </div>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5 mt-6">
            
            <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition group">
              <h4 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600">
                Automate Repetitive Tasks
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                Let AI handle routine operations so your team can focus on core business tasks.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition group">
              <h4 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600">
                Reduce Errors
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                Ensure accuracy across shipments, documents, and compliance using AI validation.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition group">
              <h4 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600">
                Smarter Insights
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                Convert logistics data into actionable insights for better decision-making.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition group">
              <h4 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600">
                Drive Business Growth
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                Scale faster with automation and eliminate time-consuming manual work.
              </p>
            </div>

          </div>

          {/* SUPPORT TEXT LAST */}
          <p className="text-gray-500 leading-relaxed mt-4">
            Designed for modern logistics businesses, our platform helps you stay competitive in a fast-paced global market.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group order-1 lg:order-2">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={business_img_1}
              alt="Logistics Technology"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
