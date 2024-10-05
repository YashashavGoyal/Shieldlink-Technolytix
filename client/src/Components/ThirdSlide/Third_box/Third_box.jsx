import React from 'react';
import './Third_box.css';
import Third_Intro from '../Advantages/ThirdIntro/Third_Intro';
import Advantage from '../Advantages/Advantage_Content/Advan_One/Avantage';
import { faShieldAlt, faSatelliteDish, faBolt } from '@fortawesome/free-solid-svg-icons';

function Third_box() {
  return (
    <div className="third_box">
      <Third_Intro />
      <div className="third-content">
        <Advantage icon={faSatelliteDish} title="Advanced RF Tracking" description="Real-time monitoring and detection of unauthorized RF activities for proactive security." />
        <Advantage icon={faBolt} title="Innovative Antenna" description="Leveraging advanced antenna technology to safeguard critical data in an increasingly connected world." />
        <Advantage icon={faShieldAlt} title="Proactive Threat Detection" description="Our security applications ensure comprehensive protection tailored to diverse environments." />
      </div>
    </div>
  );
}

export default Third_box;
