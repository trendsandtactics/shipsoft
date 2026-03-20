import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

const BrandArea = () => {

    const brandImages = Array.from({ length: 16 }, (_, i) => `/assets/${i + 1}.png`);

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        variableWidth: true,
    };

    return (
        <>
            <div className="tp-brand-2-area p-relative pb-80">
                <div
                    className="tp-brand-2-bg"
                    style={{ backgroundImage: `url(/assets/img/brand/home-2/shape-bg.png)` }}
                ></div>

                <div className="container">

                    {/* TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="tp-section-title-wrapper">
                                <h3 className="tp-section-title" style={{ marginBottom: "5px" }}>
                                    Trusted by leading innovators worldwide
                                </h3>

                                <p
                                    style={{
                                        marginTop: "0px",
                                        marginBottom: "10px",
                                        fontSize: "16px",
                                        color: "#555",
                                    }}
                                >
                                    Save your precious time and effort spent for finding a solution.{" "}
                                    <Link href="/contact" style={{ color: "#007bff", fontWeight: "500" }}>
                                        Contact us now
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* LOGO SLIDER */}
                    <div className="row" style={{ marginTop: "25px" }}>
                        <Slider {...settings}>
                            {brandImages.map((image, index) => (
                                <div key={index} style={{ width: "160px", padding: "0 10px" }}>
                                    <div className="tp-brand-2-item">
                                        <Image
                                            src={image}
                                            alt={`Brand Logo ${index + 1}`}
                                            width={160}
                                            height={60}
                                            className="img-fluid"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* BOTTOM TEXT */}
                    <div className="row justify-content-center pt-60">
                        <div className="col-lg-8">
                            <div className="tp-brand-2-trend text-center">
                                <p>
                                    <i className="fa-regular fa-arrow-right-long"></i>{" "}
                                    IMPROVE AND INNOVATE WITH THE
                                    <Link href="/portfolio"> TECH TRENDS</Link>{" "}
                                    <i className="fa-regular fa-arrow-left-long"></i>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BrandArea;