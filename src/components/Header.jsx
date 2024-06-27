import React from 'react';
import './Header.css';
import Logo from "./Logo"

const Header = () => {
  return (

    <div className="Logotype">
            <Logo/>
      <div className="container top-header bg-primary">
        <div className="row">
          <div className="col-md-5 mt-2">
            <h4>
              <i className="fas fa-phone-alt mr-1"></i>+34 663 424 447
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;