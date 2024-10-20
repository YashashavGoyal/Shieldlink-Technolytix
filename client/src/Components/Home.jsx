import React from 'react';
import "../assets/css/style.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
     <div className='main'>
        
          <div className="home-content">
            <h1>Empower Your <br /> <span>Security</span><br />with IOT Innovations</h1>
            <p>Utilize the Power of IOT for <br /> Advanced Security Solutions</p>
            <Link className="btn">
              Learn More
            </Link>
          </div>
        </div>
     
    </>
  );
}

export default Home;
