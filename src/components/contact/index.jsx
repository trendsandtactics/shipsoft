import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import HeaderOne from '@/src/layout/headers/header';
import React from 'react';
import ContactArea from './contact-area';
import FooterThree from '@/src/layout/footers/footer-3';
import Image from 'next/image';

const Contact = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title="Contact Us"  page_title="Contact Us" />
                <ContactArea />
                
               

            </main>
            <FooterThree hideExtras={true} />
        </>
    );
};

export default Contact;
