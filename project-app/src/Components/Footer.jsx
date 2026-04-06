import React from "react";
import "./Footer.css";
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
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>User policy</li>
              <li>Privacy policy</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Locations */}
          <div className="hide-mobile">
            <h3 className="section-title">Locations</h3>
            <ul className="link-list">
              <li>Sunny Side Club</li>
              <li>The Cocktail Club</li>
              <li>Fresh Press</li>
              <li>Suya Central</li>
              <li>Jollof & Co.</li>
              <li>The Night Train (TNT)</li>
              <li>Red Pepper</li>
              <li>Wrap City</li>
              <li>CH&W Asian</li>
              <li>Lagos Breakfast Club</li>
              <li>Quick Eats</li>
            </ul>
          </div>

          {/* Restaurants */}
          <div>
            <h3 className="section-title">Restaurants</h3>
            <ul className="link-list">
              <li>Wing Kings</li>
              <li>Frankie's</li>
              <li>Good Greens</li>
              <li>Quick Eats - Breakfast</li>
              <li>Sweet Treats</li>
              <li>New on FoodCourt</li>
              <li>Mama's Kitchen</li>
              <li>Mr. Eats</li>
              <li>Pop's Small Chops</li>
              <li>Big Plate</li>
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