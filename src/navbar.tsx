import { CiMenuBurger } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import NavBack from './assets/nav-back.svg';
import Logo from './assets/logo';

export default function Navbar() {
    return(
        <nav>
        <div className="wrapper">
          <div className="logo"><a href="#"><Logo/></a></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
          <div className='advanced for-desk'>
            <a href="">Log in</a>
            <a href="">Sign up</a>
          </div>
            <label htmlFor="close-btn" className="btn close-btn"><TfiClose/></label>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li>
              <a href="#" className="desktop-item">Industries</a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">Industries</label>
              <ul className="drop-menu">
                <li><a href="#">Retail</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Financial</a></li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop-item">Services</a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">Services</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={NavBack} alt="" />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Graphics</a></li>
                      <li><a href="#">Vectors</a></li>
                      <li><a href="#">Business cards</a></li>
                      <li><a href="#">Custom logo</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Personal Email</a></li>
                      <li><a href="#">Business Email</a></li>
                      <li><a href="#">Mobile Email</a></li>
                      <li><a href="#">Web Marketing</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li><a href="#">Site Seal</a></li>
                      <li><a href="#">VPS Hosting</a></li>
                      <li><a href="#">Privacy Seal</a></li>
                      <li><a href="#">Website design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#">Feedback</a></li>
          </ul>
          <div className='advanced for-mobile'>
            <a href="">Log in</a>
            <a href="">Sign up</a>
          </div>
          <label htmlFor="menu-btn" className="btn menu-btn"><CiMenuBurger/></label>
        </div>
      </nav>

    )
}

// imagine shooting a man with your last bullet and he stands there  UNFAZED

   //                                                    Andrew Tate                                                   
