import React, { useState, useEffect, useRef } from 'react';
import "../assets/css/style.css";
import img from "../assets/images/logo-dark.png";
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIcon = useRef(null);
  const fullMenu = useRef(null);
  const closeIcon = useRef(null);

  useEffect(() => {
    const openMenu = () => {
      gsap.to(fullMenu.current, {
        right: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.fromTo(
        fullMenu.current.querySelectorAll("h4"),
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.3, ease: "power2.out" }
      );
      gsap.to(closeIcon.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      setIsMenuOpen(true);
    };

    const closeMenu = () => {
      gsap.to(fullMenu.current, {
        right: '-100%',
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(closeIcon.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      setIsMenuOpen(false);
    };

    // Attach event listeners to menu and close icons
    if (menuIcon.current) {
      menuIcon.current.addEventListener("click", openMenu);
    }
    if (closeIcon.current) {
      closeIcon.current.addEventListener("click", closeMenu);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (menuIcon.current) {
        menuIcon.current.removeEventListener("click", openMenu);
      }
      if (closeIcon.current) {
        closeIcon.current.removeEventListener("click", closeMenu);
      }
    };
  }); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      <div className="nav">
        <div className="navContain">
          <div className="logo">
            <img src={img} alt="Shieldlink Logo" />
          </div>
          <div className="headii">
            <h2>Shieldlink</h2>
          </div>
        </div>
        {!isMenuOpen && (
          <i className="ri-menu-3-line" ref={menuIcon}></i>
        )}
      </div>

      <div className={`full ${isMenuOpen ? 'open' : 'close'}`} ref={fullMenu}>
        <h4><NavLink to='/'>Home</NavLink></h4>
        <h4><NavLink to='/about'>About</NavLink></h4>
        <h4><NavLink to='/contact'>Contact Us</NavLink></h4>
        <h4><NavLink to='/login'>Login</NavLink></h4>
        <i className="ri-close-line" ref={closeIcon}></i>
      </div>
    </>
  );
};

export default Navbar;
