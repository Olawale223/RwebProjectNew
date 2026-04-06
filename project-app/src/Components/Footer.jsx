import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import x from '../Assets/FoodCourt/x.png';
import ig from '../Assets/FoodCourt/ig.png';
import wa from '../Assets/FoodCourt/wa.png';
import fa from '../Assets/FoodCourt/fa.png';
import li from '../Assets/FoodCourt/li.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo and Contact Section */}
          <div className="hide-mobile">
            <div className="logo">FOODCOURT</div>
            <div className="contact-section">
              <h3 className="section-title">Contact</h3>
              <div className="contact-info">
                <p>hello@getfoodcourt.com</p>
                <p>+234 1888 8577</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="section-title">Company</h3>
            <ul className="link-list">
              <li><Link to="/about">AboutFC</Link></li>
              <li><Link to="/faqs">Contact us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/faqs">User policy</Link></li>
              <li><Link to="/faqs">Privacy policy</Link></li>
              <li><Link to="/faqs">Terms</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="hide-mobile">
            <h3 className="section-title">Locations</h3>
            <ul className="link-list">
              <li><Link to="/Product">Sunny Side Club</Link></li>
              <li><Link to="/Product">The Cocktail Club</Link></li>
              <li><Link to="/Product">Fresh Press</Link></li>
              <li><Link to="/Product">Suya Central</Link></li>
              <li><Link to="/Product">Jollof & Co.</Link></li>
              <li><Link to="/Product">The Night Train (TNT)</Link></li>
              <li><Link to="/Product">Red Pepper</Link></li>
              <li><Link to="/Product">Wrap City</Link></li>
              <li><Link to="/Product">CH&W Asian</Link></li>
              <li><Link to="/Product">Lagos Breakfast Club</Link></li>
              <li><Link to="/Product">Quick Eats</Link></li>
            </ul>
          </div>

          {/* Restaurants */}
          <div>
            <h3 className="section-title">Restaurants</h3>
            <ul className="link-list">
              <li><Link to="/resturant">Wing Kings</Link></li>
              <li><Link to="/resturant">Frankie's</Link></li>
              <li><Link to="/resturant">Good Greens</Link></li>
              <li><Link to="/resturant">Quick Eats - Breakfast</Link></li>
              <li><Link to="/resturant">Sweet Treats</Link></li>
              <li><Link to="/resturant">New on FoodCourt</Link></li>
              <li><Link to="/resturant">Mama's Kitchen</Link></li>
              <li><Link to="/resturant">Mr. Eats</Link></li>
              <li><Link to="/resturant">Pop's Small Chops</Link></li>
              <li><Link to="/resturant">Big Plate</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="section-title">Follow us</h3>
            <div className="social-links">
              <div className="social-icon"><img src={x} alt="Social Icon" /></div>
              <div className="social-icon"><img src={ig} alt="Instagram" /></div>
              <div className="social-icon"><img src={wa} alt="WhatsApp" /></div>
              <div className="social-icon"><img src={fa} alt="Facebook" /></div>
              <div className="social-icon"><img src={li} alt="LinkedIn" /></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">© 2025 CoKitchen Workspace Limited. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;