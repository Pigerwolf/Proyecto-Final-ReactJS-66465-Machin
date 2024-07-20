import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <div>
      <footer className='footer-father'>
        <div className="footer-child">
              <h2>Social</h2>
              <ul className='FooterList'>
               <div><li className='FooterListHov'><Link to="#"><i className="fab fa-facebook"></i>ESC Facebook</Link></li></div> 
               <div><li className='FooterListHov'><Link to="#"><i className="fab fa-youtube"></i> ESC YouTube</Link></li></div> 
               <div><li className='FooterListHov'><Link to="#"><i className="fab fa-twitter"></i>ESC X</Link></li></div> 
               <div><li className='FooterListHov'><Link to="#"><i className="fab fa-instagram"></i>ESC_Instagram</Link></li></div> 
              </ul>
        </div>

        <div className="text-container">
          <span><p id="copyright">&copy; 2024 ESC-Electronics</p></span>
          <span><p id="footerInfo"> info@ESC-Electronics.es | +34 663 424 447 | Calle España, Av. España 123 </p> </span>
        </div>
      </footer>
    </div>
  )
};

export default Footer