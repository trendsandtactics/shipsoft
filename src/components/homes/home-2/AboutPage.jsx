import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import business_img_1 from "@assets/img/business/img-1.jpg";

const AboutPage = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE SECTION */}
        <div className="relative w-full">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={business_img_1}
              alt="About Shipsoft"
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Decorative gradient */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
        </div>

        {/* CONTENT SECTION */}
        <div className="flex flex-col gap-6">
          
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            About Company
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            About Shipsoft Solutions
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Shipsoft Solutions is a Singapore-based IT company specializing in cutting-edge software for logistics and supply chain management. 
            Our mission is to deliver innovative, cost-effective digital solutions that empower businesses to optimize operations and drive growth.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We support organizations that rely on technology today, as well as those transitioning toward a fully digital environment, helping them 
            thrive in an increasingly competitive and fast-paced global market.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800">Smart Logistics</h4>
              <p className="text-sm text-gray-500">AI-driven solutions</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800">Global Reach</h4>
              <p className="text-sm text-gray-500">Worldwide support</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800">Automation</h4>
              <p className="text-sm text-gray-500">Process optimization</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800">Secure Systems</h4>
              <p className="text-sm text-gray-500">Reliable & scalable</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6 mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Reach Out
            </Link>

            <span className="text-gray-700 font-medium">
              +971 43 704077
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;
