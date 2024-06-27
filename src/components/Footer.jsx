import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className='footer-social' >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>Social</h2>
              <ul className='FooterList'>
                <li><Link to="#"><i className="fab fa-facebook"></i>ESC Facebook</Link></li>
                <li><Link to="#"><i className="fab fa-youtube"></i> ESC YouTube</Link></li>
                <li><Link to="#"><i className="fab fa-twitter"></i>ESC X</Link></li>
                <li><Link to="#"><i className="fab fa-instagram"></i>ESC_Instagram</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer pt-5 pb-5" id="footer">
        <div className="container">
          <span className="text-muted float-left"><p id="copyright">&copy; 2024 ESC-Electronics</p></span>
          <span className="float-right"> <p id="footerInfo"> info@ESC-Electronics.es | +34 663 424 447 | Calle España, Av. España 123 </p> </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;