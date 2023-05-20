import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useState, useEffect } from "react";
import Logo from "../assets/logo";
import { MdKeyboardArrowUp } from "react-icons/md";
import styled from 'styled-components';
import { BsCircleFill } from 'react-icons/bs';
import 'animate.css';

const Nav = styled.nav `
position: fixed;
z-index: 99;
width: 100%;
font-family: 'Plus Jakarta Sans', sans-serif;
font-weight: bold;
z-index: 1000;

background: var(--var-color-black);
`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <Nav className={navbarClasses.join(" ")}>
      <div className="wrapper">
        <div className="logo">
          <a href="#" className="animate__animated animate__fadeInDown">
            <Logo />
          </a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <div className="advanced for-desk">
            <a href="" className="animate__animated animate__fadeInDown">Hire Us <BsCircleFill/></a>
          </div>
          <label htmlFor="close-btn" className="btn close-btn">
            <TfiClose />
          </label>
          <li>
            <a href="#" className="animate__animated animate__fadeInDown">About</a>
          </li>
          <li>
            <a href="#" className="desktop-item drop-euthrM4" id="industry">
              Industries <MdKeyboardArrowUp />
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Industries
            </label>
            <ul className="drop-menu animate__animated animate__fadeInDown" id="dropdown">
              <li>
                <a href="#">Commerce</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Automotive</a>
              </li>
              <li>
                <a href="#">Financial</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="desktop-item  drop-euthrM4">
              Services <MdKeyboardArrowUp />
            </a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item animate__animated animate__fadeInDown">
              Services
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <header>Design Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Graphics</a>
                    </li>
                    <li>
                      <a href="#">Vectors</a>
                    </li>
                    <li>
                      <a href="#">Business cards</a>
                    </li>
                    <li>
                      <a href="#">Custom logo</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Email Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Personal Email</a>
                    </li>
                    <li>
                      <a href="#">Business Email</a>
                    </li>
                    <li>
                      <a href="#">Mobile Email</a>
                    </li>
                    <li>
                      <a href="#">Web Marketing</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Security services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Site Seal</a>
                    </li>
                    <li>
                      <a href="#">VPS Hosting</a>
                    </li>
                    <li>
                      <a href="#">Privacy Seal</a>
                    </li>
                    <li>
                      <a href="#">Website design</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="animate__animated animate__fadeInDown">Careers</a>
          </li>
        </ul>
        <div className="advanced for-mobile">
          <a href="" className="animate__animated animate__fadeInDown">Hire us <b><BsCircleFill className='svg_item_1' /><BsCircleFill className='svg_item_2' /><BsCircleFill className='svg_item_1' /></b></a>
        </div>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <CiMenuBurger />
        </label>
      </div>
    </Nav>
  );
}

// imagine shooting a man with your last bullet and he stands there  UNFAZED

//                                                    Andrew Tate
