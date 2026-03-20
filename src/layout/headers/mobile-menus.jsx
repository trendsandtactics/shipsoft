import React, { useState } from "react";
import Link from "next/link";

const MobileMenus = () => {
  return (
    <>
      <nav className="mean-nav">
        <ul>
           <li><Link href="/">Home</Link></li>
           <li><Link href="/about">About us</Link></li>
           <li><Link href="/features">Features</Link></li>
           <li><Link href="/modules">Modules</Link></li>
           <li><Link href="/info">Info</Link></li>
           <li><Link href="/contact">Contact us</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
