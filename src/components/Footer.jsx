import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h2>Social</h2>
              <ul className='FooterList'>
                <li className='FooterListHov'><Link to="#"><i className="fab fa-facebook"></i>ESC Facebook</Link></li>
                <li className='FooterListHov'><Link to="#"><i className="fab fa-youtube"></i> ESC YouTube</Link></li>
                <li className='FooterListHov'><Link to="#"><i className="fab fa-twitter"></i>ESC X</Link></li>
                <li className='FooterListHov'><Link to="#"><i className="fab fa-instagram"></i>ESC_Instagram</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container">
          <span class="text-muted float-left"><p id="copyright">&copy; 2024 ESC-Electronics</p></span>
          <span class="float-right"> <p id="footerInfo"> info@ESC-Electronics.es | +34 663 424 447 | Calle España, Av. España 123 </p> </span>
        </div>
      </footer>
    </div>
  )
};

export default Footer