import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import HomeTwo from '../components/homes/home-2';

const Home = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Technix - Home" />
            <HomeTwo />
        </Wrapper>
    );
};

export default Home;