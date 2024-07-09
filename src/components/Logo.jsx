import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    
    <div className="container mt-4" id="top-logo">

<Link to="/"><img src="https://lh5.googleusercontent.com/-iGnbA-5Oijk/TYf3SEXttDI/AAAAAAAACEU/LL_D-6jwWo4/s1600/Escape+Key.jpg" alt='Logo de la Compañía' className='Logo-Principal'></img></Link>

      <div className="row">
        <p className='p-dl-logo'>
          Easy
          Store
          Computer
        </p>
      </div>
    </div>
  );
};  

export default Logo;