import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <>
      <ul> 
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/modules">Modules</Link></li>
          <li><Link href="/info">Info</Link></li>
          <li><Link href="/contact">Contact us</Link></li>
      </ul>
    </>
  );
};

export default NavMenu;
