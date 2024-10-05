import React from 'react';
import device from "../../assets/images/Prototype.webp";
import Rishabh from "../../assets/images/Rishabh_Bhaiya.webp";
import Vikas from "../../assets/images/Sujal_Bhaiya.webp";
import Mayank from "../../assets/images/Mayank_Bhaiya.webp";
import Sujal from "../../assets/images/Vikas_Bhaiya.webp";

import './About.css';
import Footer from '../Footer/Footer';

const About = () => {
  return (<>
    <div className="about-container">
      {/* Wave SVG */}
      <div className="about-wave">
        <h1>About Us</h1>
        <svg id="wave" style={{ transform: 'rotate(180deg)', transition: '0.3s' }} viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(42.62, 143.464, 246.263, 1)" offset="0%" />
              <stop stopColor="rgba(51.823, 24.365, 121.04, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path style={{ transform: 'translate(0, 0px)', opacity: 1 }} fill="url(#sw-gradient-0)" d="M0,112L48,98.7C96,85,192,59,288,61.3C384,64,480,96,576,112C672,128,768,128,864,117.3C960,107,1056,85,1152,77.3C1248,69,1344,75,1440,66.7C1536,59,1632,37,1728,42.7C1824,48,1920,80,2016,98.7C2112,117,2208,123,2304,109.3C2400,96,2496,64,2592,53.3C2688,43,2784,53,2880,66.7C2976,80,3072,96,3168,96C3264,96,3360,80,3456,77.3C3552,75,3648,85,3744,93.3C3840,101,3936,107,4032,101.3C4128,96,4224,80,4320,72C4416,64,4512,64,4608,66.7C4704,69,4800,75,4896,82.7C4992,91,5088,101,5184,88C5280,75,5376,37,5472,29.3C5568,21,5664,43,5760,56C5856,69,5952,75,6048,66.7C6144,59,6240,37,6336,37.3C6432,37,6528,59,6624,72C6720,85,6816,91,6864,93.3L6912,96L6912,160L6864,160C6816,160,6720,160,6624,160C6528,160,6432,160,6336,160C6240,160,6144,160,6048,160C5952,160,5856,160,5760,160C5664,160,5568,160,5472,160C5376,160,5280,160,5184,160C5088,160,4992,160,4896,160C4800,160,4704,160,4608,160C4512,160,4416,160,4320,160C4224,160,4128,160,4032,160C3936,160,3840,160,3744,160C3648,160,3552,160,3456,160C3360,160,3264,160,3168,160C3072,160,2976,160,2880,160C2784,160,2688,160,2592,160C2496,160,2400,160,2304,160C2208,160,2112,160,2016,160C1920,160,1824,160,1728,160C1632,160,1536,160,1440,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" />
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(0, 21.248, 173.406, 1)" offset="0%" />
              <stop stopColor="rgba(11, 131.829, 255, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path style={{ transform: 'translate(0, 50px)', opacity: 0.9 }} fill="url(#sw-gradient-1)" d="M0,128L48,112C96,96,192,64,288,42.7C384,21,480,11,576,5.3C672,0,768,0,864,2.7C960,5,1056,11,1152,29.3C1248,48,1344,80,1440,98.7C1536,117,1632,123,1728,112C1824,101,1920,75,2016,66.7C2112,59,2208,69,2304,74.7C2400,80,2496,80,2592,72C2688,64,2784,48,2880,58.7C2976,69,3072,107,3168,109.3C3264,112,3360,80,3456,61.3C3552,43,3648,37,3744,34.7C3840,32,3936,32,4032,45.3C4128,59,4224,85,4320,85.3C4416,85,4512,59,4608,61.3C4704,64,4800,96,4896,112C4992,128,5088,128,5184,128C5280,128,5376,128,5472,112C5568,96,5664,64,5760,58.7C5856,53,5952,75,6048,72C6144,69,6240,43,6336,42.7C6432,43,6528,69,6624,74.7C6720,80,6816,64,6864,56L6912,48L6912,160L6864,160C6816,160,6720,160,6624,160C6528,160,6432,160,6336,160C6240,160,6144,160,6048,160C5952,160,5856,160,5760,160C5664,160,5568,160,5472,160C5376,160,5280,160,5184,160C5088,160,4992,160,4896,160C4800,160,4704,160,4608,160C4512,160,4416,160,4320,160C4224,160,4128,160,4032,160C3936,160,3840,160,3744,160C3648,160,3552,160,3456,160C3360,160,3264,160,3168,160C3072,160,2976,160,2880,160C2784,160,2688,160,2592,160C2496,160,2400,160,2304,160C2208,160,2112,160,2016,160C1920,160,1824,160,1728,160C1632,160,1536,160,1440,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" />
        </svg>

      </div>

      {/* Technology Card */}
      <div className="about-card technology-card">
        <div className="About_CONTENT">
          <div className="left">
            <h2>Our Technology</h2>
            <p>
              Shieldlink Technolytix was born out of a national-level government competition on Cyber security, where our team emerged victorious. This pivotal moment led to the evolution of our project into a groundbreaking startup. Our journey is defined by innovation, expertise, and a relentless drive to revolutionize IOT security. We stand apart with our unwavering commitment to safeguarding the digital landscape.
            </p>
          </div></div>
        <div className="right">
          <div className="image-box">
            <img src={device} alt="Device" />
          </div>
        </div>
      </div>

      {/* Owners Card */}
      <div className="about-card owners-card">
        <div className="About_HEADING"><h1>Our Team</h1></div>

        <div className="owners">
          <div className="owner">
            <img src={Rishabh} alt="Owner 1" />
            <div>
              <p>Rishabh Dangi</p>
              <span>Founder & CEO</span>
            </div>
          </div>
          <div className="owner">
            <img src={Sujal} alt="Owner 2" />
            <div>
              <p>Vikas Sahu</p>
              <span>CTO</span>
            </div>
          </div>
          <div className="owner">
            <img src={Vikas} alt="Owner 3" />
            <div>
              <p>Sujal Soni</p>
              <span>Founder & CEO</span>
            </div>
          </div>
          <div className="owner">
            <img src={Mayank} alt="Owner 4" />
            <div>
              <p>Mayank Paliwal</p>
              <span>Business Development Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default About;
