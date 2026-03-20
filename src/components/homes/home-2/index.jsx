import React from "react";
import HeaderTwo from "@/src/layout/headers/header-2";
import HeroArea from "./hero-area";
import BrandArea from "./brand-area";
import OfferArea from "./offer-area";
import BusinessArea from "./business-area";
import TestimonialArea from "./testimonial-area";
import BlogArea from "./blog-area";
import CtaArea from "./cta-area";
import FooterTwo from "@/src/layout/footers/footer-2";

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroArea />
        <BusinessArea />
        <OfferArea />
        <TestimonialArea />
        <BrandArea />
        <BlogArea />
        <CtaArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeTwo;