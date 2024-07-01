import React from "react";

const ProductPage = () => {

  return (

    <div>
      <div className="container mt-5 mb-5" id="productPage">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <img src="https://th.bing.com/th/id/OIP.s3Tdnot7xnJa74S7yeCrEQHaHa?rs=1&pid=ImgDetMain" className="figure-img img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-7">
            <h5>Franela Adidas Azul</h5>
            <p className="text-muted">Franela</p>
            <div className="ratings">
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star text-primary"></i>
              <i className="far fa-star text-primary"></i>
            </div>
            <h5 className="pt-4">$179.00</h5>
            <p className="description text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="row">
              <div className="col-md-5">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"/>
                  <label className="form-check-label" htmlFor="inlineRadio1">S</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"/>
                  <label className="form-check-label" htmlFor="inlineRadio2">M</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"/>
                  <label className="form-check-label" htmlFor="inlineRadio2">L</label>
                </div>
              </div>
            </div>
            <div id="purchase-btn">
              <button type="button" className="btn btn-sm btn-primary"><a className="text-white" href=""> Comprar </a></button>
              &nbsp;
              <button type="button" className="btn btn-sm btn-light"><a className="text-black" href=""> <i className="fas fa-shopping-cart pr-2"></i>  Agregar al Carro </a> </button>
            </div>
          </div>
          <div className="container">

            <div className="tab-content w-100 pt-5" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h5>Descripción</h5>
                <p className="text-muted">Franela Adidas</p>
                <div className="ratings">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="far fa-star text-primary"></i>
                </div>
                <h5 className="pt-4">$179.00</h5>
                <p className="description text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h5>Adicional</h5>
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="row">Peso</th>
                      <td><i>0.3 kg</i> </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Dimensiones</th>
                      <td><i>50 × 60 cm</i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="review-rating float-right mt-5">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="far fa-star text-primary"></i>
                </div>
                <div className="ratings">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="far fa-star text-primary"></i>
                </div>
              </div>
            </div>
            <h4 className="text-center text-muted">Otros Usuarios también vieron:</h4>
            <div className="row" id="relatedProducts">
              <div className="col-md-3">
                <div className="overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" className="zoom-in figure-img img-fluid" />
                </div>
                <h5 className="text-center text-dark mt-3">Camisa Adidas Azul</h5>
                <p className="cost text-center text-dark mt-2">$179.00</p>
              </div>
              <div className="col-md-3">
                <div className="overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" className="zoom-in figure-img img-fluid" />
                </div>
                <h5 className="text-center text-dark mt-3">Hoodie Rojo</h5>
                <p className="cost text-center text-dark mt-2">$35.99</p>
              </div>
              <div className="col-md-3">
                <span className="badge badge-pill badge-primary" id="sale">Promoción</span>
                <div className="overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg" className="zoom-in figure-img img-fluid" />
                </div>
                <h5 className="text-center text-dark mt-3">Sweater Gris</h5>
                <p className="cost text-center text-danger mt-2">$21.99 <strike className="text-secondary"> $36.99 </strike></p>
              </div>
              <div className="col-md-3">
                <div className="overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg" className="zoom-in figure-img img-fluid" />
                </div>
                <h5 className="text-center text-dark mt-3">Chaqueta Negra</h5>
                <p className="cost text-center text-dark mt-2">$99.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductPage;