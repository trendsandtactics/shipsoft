import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Header from '../layout/headers/header';
import OfferingArea from '../components/homes/home-2/offering-area';
import FooterContact from '../layout/footers/footer-contact';
import FooterThree from '../layout/footers/footer-3';

const Modules = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Modules"} />
            <Header />
            <main style={{ paddingTop: '100px', paddingBottom: '60px' }}>
                <OfferingArea />
            </main>
            <FooterContact />
            <FooterThree />
        </Wrapper>
    );
};

export default Modules;