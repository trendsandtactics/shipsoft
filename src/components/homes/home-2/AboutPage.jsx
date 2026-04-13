import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import business_img_1 from "@assets/img/business/img-1.jpg";

const AboutPage = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative group">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={business_img_1}
              alt="Fresa Technologies"
              className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6">
          
          {/* TITLE */}
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              About Platform
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
              Empowering Freight Forwarding with{" "}
              <span className="text-blue-600">AI & Innovation</span>
            </h2>

            <p className="text-gray-600 mt-4">
              <strong>Fresa Technologies</strong> helps forwarders work faster, smarter, 
              and more efficiently using AI-driven automation.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

            <span className="text-gray-700 font-medium">
              +971 43 704077
            </span>
          </div>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-4 mt-4">

            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-gray-900">
                Automate Repetitive Tasks
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Let AI handle routine operations so your team can focus on core business tasks.
              </p>
            </div>

            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-gray-900">
                Reduce Errors
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Ensure accuracy across shipments, documents, and compliance using AI validation.
              </p>
            </div>

            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-gray-900">
                Smarter Insights
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Convert logistics data into actionable insights for better decision-making.
              </p>
            </div>

            <div className="p-5 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-gray-900">
                Drive Business Growth
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Scale faster with automation and eliminate manual work.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;
