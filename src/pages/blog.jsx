import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Header from "../layout/headers/header";
import FooterContact from "../layout/footers/footer-contact";
import FooterThree from "../layout/footers/footer-2";
import Link from 'next/link';
import { blogs } from '../data/blog-content';

const Blog = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ShipSoft - Blog"} />
      <Header />
      <style jsx>{`
          .blog-card {
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 16px;
              padding: 40px;
              height: 100%;
              transition: all 0.3s ease;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
              display: flex;
              flex-direction: column;
          }
          .blog-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 40px rgba(13, 110, 253, 0.12);
              border-color: rgba(13, 110, 253, 0.3);
          }
          .blog-title {
              font-size: 1.5rem;
              font-weight: 700;
              margin-bottom: 1.25rem;
              color: #0f172a;
              line-height: 1.4;
          }
          .blog-title a {
              color: inherit;
              text-decoration: none;
              transition: color 0.3s ease;
          }
          .blog-title a:hover {
              color: #0d6efd;
          }
          .blog-desc {
              color: #475569;
              line-height: 1.7;
              margin-bottom: 2rem;
              font-size: 1rem;
              flex-grow: 1;
          }
          .read-more-btn {
              display: inline-block;
              color: #0d6efd;
              font-weight: 600;
              text-decoration: none;
              transition: all 0.3s ease;
              align-self: flex-start;
          }
          .read-more-btn:hover {
              color: #0b5ed7;
              transform: translateX(5px);
          }
      `}</style>
      <main>
          <section className="blog-hero" style={{ backgroundColor: '#2CADE3', color: 'white', paddingTop: '180px', paddingBottom: '100px', textAlign: 'center' }}>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-10">
                          <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', color: '#bfdbfe', fontSize: '14px', display: 'block', marginBottom: '15px' }}>Insights & Updates</span>
                          <h1 className="mb-20" style={{ color: '#ffffff', fontSize: '3rem', fontWeight: '800' }}>Our Blog</h1>
                          <p style={{ color: '#e2e8f0', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                              Stay up to date with the latest logistics trends, supply chain strategies, and how Shipsoft solutions are transforming the industry.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
         
      </main>
      <FooterContact />
      <FooterThree />
    </Wrapper>
  );
};

export default Blog;
