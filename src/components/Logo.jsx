import React from 'react';
import logo from '../components/Logo.png'; 
import './Logo.css';

const Logo = () => {
  return (
    
    <div className="container mt-4" id="top-logo">
<img src={<Logo/>} alt='Logo de la Compañía'></img>
      <div className="row">
        <div className="col-md-7" id="searchbar">
          <div className="input-group mt-3">
            <input type="text" className="form-control" placeholder="Buscar..." aria-label="Search" aria-describedby="button-addon2" />
            <div className="input-group-append">
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};  

export default Logo;