import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';
import { offering_data } from '@/src/data/offering-data';

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const service = offering_data.find((item) => item.id === Number(id));

  if (!service) {
    return (
      <>
        <Header />
        <div className="container pt-120 pb-120 text-center">
            <h2>Loading...</h2>
        </div>
        <FooterContact />
        <FooterThree />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Breadcrumb top_title="Service Details" page_title="Service Details" />
        
        <div className="container pt-120 pb-120">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="service-details-thumb mb-40">
                <Image src={service.img} alt="theme-pure" width={200} height={200} style={{ objectFit: 'contain' }} />
              </div>
              <h2 className="tp-section-title mb-30">{service.title}</h2>
              <p className="text-muted" style={{ fontSize: '18px' }}>{service.description}</p>
            </div>
          </div>
        </div>
      </main>
      <FooterContact />
      <FooterThree />
    </>
  );
};

export default ServiceDetails;