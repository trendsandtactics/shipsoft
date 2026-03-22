import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Header from '../layout/headers/header';
import OfferingArea from '../components/homes/home-2/offer-area';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterContact from '../layout/footers/footer-contact';
import FooterThree from '../layout/footers/footer-3';

const Modules = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Modules"} />
            <Header />
            <main>
                <Breadcrumb top_title="Our Modules" page_title="Modules" />
                <OfferingArea />
            </main>
            <FooterContact />
            <FooterThree />
        </Wrapper>
    );
};

export default Modules;