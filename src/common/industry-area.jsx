import React, { useState } from 'react';
import Image from 'next/image';

import industry_shape_1 from "@assets/img/industry/shape-1.png";
import industry_shape_2 from "@assets/img/industry/shape-2.png";
import industry_shape_3 from "@assets/img/industry/shape-3.png";

const feature_data = [
{
icon: "fa-light fa-medal",
title: "Ultimate Guaranteed Operational Excellence",
description: "Shipsoft’s WMS is a comprehensive customizable software solution that offers total visibility"
},
{
icon: "fa-light fa-cubes",
title: "Modularly Built Application Package",
description: "The entire financial requirements of the enterprise can be managed with the module"
},
{
icon: "fa-light fa-truck",
title: "Logistics Management Software",
description: "Complete customer visibility with real-time tracking of shipment status and history"
},
{
icon: "fa-light fa-link",
title: "Complete Supply Chain Optimization",
description: "Shipsoft Solutions with its best-built freight management software are now pioneers"
},
{
icon: "fa-light fa-handshake",
title: "Seamlessly Integrate New Business Units",
description: "City Master Price, Zone Master Price City and Zone level Price can create and maintain"
}
]

const FeatureItem = ({ feature }) => {

const [isHover, setIsHover] = useState(false);

return (

<div className="col-lg-4 col-md-6 d-flex">

<div
className="tp-industry-item card mb-30 w-100"
style={{
background: '#2cade3',
transition: 'all 0.3s ease',
transform: isHover ? 'translateY(-10px)' : 'translateY(0)',
boxShadow: isHover ? '0 0 25px rgba(192,192,192,0.9)' : 'none',
border: 'none'
}}
onMouseEnter={() => setIsHover(true)}
onMouseLeave={() => setIsHover(false)}
>

<div className="card-body text-center p-4">

<div className="tp-industry-item-icon mb-3">
<i className={feature.icon} style={{ fontSize: '48px', color: 'white' }}></i>
</div>

<h4 style={{ color: 'white', marginBottom: '8px' }}>
{feature.title}
</h4>

<p style={{ color: 'white', marginBottom: 0 }}>
{feature.description}
</p>

</div>

</div>

</div>

)

}

const IndustryArea = ({ service }) => {

return (

<section className={`tp-industry-area p-relative ${service ? "pt-100" : "pb-70"}`} style={{backgroundColor: 'white'}}>

<div className="tp-industry-shape">
<Image className="shape-1" src={industry_shape_1} alt="theme-pure" />
<Image className="shape-2" src={industry_shape_2} alt="theme-pure" />
<Image className="shape-3" src={industry_shape_3} alt="theme-pure" />
</div>

<div className="container">

<div className="row justify-content-center">

<div className="col-lg-8 text-center">

<div className="tp-section-title-wrapper">

<h3
className="tp-section-title mt-35"
style={{
marginBottom: "5px"
}}
>
What we offer
</h3>

<p
style={{
marginTop: "0px",
marginBottom: "10px",
fontSize: "16px",
color: "#555"
}}
>
Exceptional quality and reliable results.
</p>

</div>

</div>

</div>

<div className="row pt-30">

{feature_data.map((feature, i) => (

<FeatureItem key={i} feature={feature} />

))}

</div>

</div>

</section>

);

};

export default IndustryArea;