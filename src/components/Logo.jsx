import React from 'react';
import logo from '../components/Logo.png'; 
import './Logo.css';

const Logo = () => {
  return (
    <div className="container mt-4" id="top-logo">
      <div className="row">
        <div className="col-md-2" style={{ right: '5%' }}>
          <nav className="navbar navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src={logo} style={{ maxWidth: '70px', maxHeight: '70px' }} alt="Logo" />
            </a>
          </nav>
        </div>
        <div className="col-md-7" id="searchbar">
          <div className="input-group mt-3">
            <input type="text" className="form-control" placeholder="Buscar..." aria-label="Search" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" id="button-addon2">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2" id="icons">
          <div style={{ cursor: 'pointer' }} className="circle float-right" title="Ingreso y Registro">
            <i className="fas fa-user text-primary"></i>
          </div>
          <a href="#">
            <div className="circle float-right mr-2">
              <i className="fas fa-shopping-cart text-primary"></i>
              <sup>
                <span className="badge badge-danger" style={{ width: '23px' }}>2</span>
              </sup>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logo;