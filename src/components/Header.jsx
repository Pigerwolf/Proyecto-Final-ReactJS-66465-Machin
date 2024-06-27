import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="top-header bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-2">
            <h6>
              <i className="fas fa-phone-alt mr-1"></i>+34 663 424 447
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;