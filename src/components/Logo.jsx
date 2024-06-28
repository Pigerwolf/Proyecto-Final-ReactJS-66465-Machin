import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    
    <div className="container mt-4" id="top-logo">
<img src="https://lh5.googleusercontent.com/-iGnbA-5Oijk/TYf3SEXttDI/AAAAAAAACEU/LL_D-6jwWo4/s1600/Escape+Key.jpg" alt='Logo de la Compañía' className='Logo-Principal'></img>
      <div className="row">
        <p className='p-dl-logo'>
          Easy
          Store
          Computer
        </p>
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