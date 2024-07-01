const productPage = () => {

  return (

    <div>

      <Header />

      <div class="container mt-5 mb-5" id="productPage">
        <div class="row">
          <div class="col-md-5">
            <div class="card">
              <img src="https://th.bing.com/th/id/OIP.s3Tdnot7xnJa74S7yeCrEQHaHa?rs=1&pid=ImgDetMain" class="figure-img img-fluid rounded" />

            </div>
          </div>

          <div class="col-md-7">
            <h5>Franela Adidas Azul</h5>
            <p class="text-muted">Franela</p>
            <div class="ratings">
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="fas fa-star text-primary"></i>
              <i class="far fa-star text-primary"></i>

            </div>
            <h5 class="pt-4">$179.00</h5>
            <p class="description text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <table class="table mt-2">

              <tbody>
                <tr>
                  <th scope="row">Producto</th>
                  <td>Adidas ID 404 Azul</td>
                </tr>
                <tr>
                  <th scope="row">Color</th>
                  <td>Azul</td>
                </tr>
                <tr>
                  <th scope="row">Entrega</th>
                  <td>Correos ES - Express</td>
                </tr>
              </tbody>
            </table>


            <div class="row">
              <div class="col-md-3">
                <div class="input-group">
                  <div class="input-group-prepend" onclick="add1()">
                    <span class="input-group-text"><i class="fas fa-plus"></i></span>
                  </div>

                  <input type="text" class="numberbox1 form-control" value="0" />
                  <div class="input-group-append" onclick="subtract1()">
                    <span class="input-group-text"><i class="fas fa-minus"></i></span>
                  </div>
                </div>
              </div>

              <div class="col-md-5">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">S</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">M</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                  <label class="form-check-label" for="inlineRadio2">L</label>
                </div>
              </div>

            </div>
            <div id="purchase-btn">
              <button type="button" class="btn btn-sm btn-primary"><a class="text-white" href=""> Comprar </a></button>
              &nbsp;
              <button type="button" class="btn btn-sm btn-light"><a class="text-black" href=""> <i class="fas fa-shopping-cart pr-2"></i>  Agregar al Carro </a> </button>
            </div>
          </div>
          <div class="container">
            <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">DESCRIPCION</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">INFORMACION</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">REVIEWS (1)</a>
              </li>
            </ul>
            <div class="tab-content w-100 pt-5" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h5>Descripcion</h5>
                <p class="text-muted">Franela Adidas</p>
                <div class="ratings">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="far fa-star text-primary"></i>

                </div>
                <h5 class="pt-4">$179.00</h5>
                <p class="description text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h5>Adicional</h5>

                <table class="table table-striped table-bordered">
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
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="review-rating float-right mt-5">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="far fa-star text-primary"></i>

                </div>
                <h5>1 review</h5>

                <div class="row">
                  <div class="col-md-6 mt-2">
                    <div class="row">
                      <div class="col-md-2">
                        <img src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="IMAGE LOADING" class="img-fluid" />
                      </div>
                      <div class="col-md-10">
                        <p class="mb-1"><strong> Verónica Smith </strong> – Ene. 28, 2020 </p>
                        <p>Nice one, love it!</p>
                      </div>
                    </div>
                  </div>

                </div>


                <h5 class="mt-3 pt-2">Da tu Review</h5>
                <p>Tu Email no será publicado.</p>
                <div class="ratings">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="far fa-star text-primary"></i>

                </div>
                <form class="mt-3" id="addreview">
                  <div class="form-group text-muted">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Tu Review"></textarea>
                  </div>
                  <div class="form-group text-muted">
                    <input type="text" class="form-control" placeholder="Name" />
                  </div>
                  <div class="form-group text-muted">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                  </div>

                  <div class="text-right">
                    <button type="submit" class="btn btn-primary">Agregar Review</button>
                  </div>
                </form>

              </div>
            </div>



            <h4 class="text-center text-muted">Otros Usuarios también vieron:</h4>

            <div class="row" id="relatedProducts">
              <div class="col-md-3">
                <div class="overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" class="zoom-in figure-img img-fluid" />
                </div>

                <h5 class="text-center text-dark mt-3">Camisa Adidas Azul</h5>
                <p class="cost text-center text-dark mt-2">$179.00</p>
              </div>
              <div class="col-md-3">
                <div class="overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" class="zoom-in figure-img img-fluid" />
                </div>

                <h5 class="text-center text-dark mt-3">Hoodie Rojo</h5>
                <p class="cost text-center text-dark mt-2">$35.99</p>
              </div>
              <div class="col-md-3">
                <span class="badge badge-pill badge-primary" id="sale">Promoción</span>
                <div class="overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg" class="zoom-in figure-img img-fluid" />
                </div>

                <h5 class="text-center text-dark mt-3">Sweater Gris</h5>
                <p class="cost text-center text-danger mt-2">$21.99 <strike class="text-secondary"> $36.99 </strike></p>
              </div>
              <div class="col-md-3">
                <div class="overlay">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg" class="zoom-in figure-img img-fluid" />
                </div>

                <h5 class="text-center text-dark mt-3">Chaqueta Negra</h5>
                <p class="cost text-center text-dark mt-2">$99.99</p>
              </div>
            </div>



          </div>



          <footer>

            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <h2>Social</h2>
                  <ul>
                    <li><a href=""><i class="fab fa-facebook"></i>ESC Facebook</a></li>
                    <li><a href=""><i class="fab fa-youtube"></i> ESC YouTube</a></li>
                    <li><a href=""><i class="fab fa-twitter"></i>ESC X</a></li>
                    <li><a href=""><i class="fab fa-instagram"></i>ESC_Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <footer class="footer pt-5 pb-5" id="footer">
            <div class="container">
              <span class="text-muted float-left"><p id="copyright">&copy; 2024 ESC-Electronics</p></span>
              <span class="float-right"> <p id="footerInfo"> info@ESC-Electronics.es | +34 663 424 447 | Calle España, Av. España 123 </p> </span>
            </div>
          </footer>

          <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header bg-dark">
                  <h5 class="modal-title text-light" id="exampleModalCenterTitle">Iniciar</h5>
                  <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body bg-light">
                  <form>
                    <div class="form-group">
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                      <small id="emailHelp" class="form-text text-danger">No compartiremos tu Email con nadie más!</small>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                      <label class="form-check-label" for="exampleCheck1">Mante iniciada la sesión</label>
                    </div>
                    <button type="submit" class="btn btn-secondary btn-sm text-light"><a href="../pages/profile.html" class="text-light">Inicio</a></button>
                    <a href="../pages/register.html" class="float-right text-muted">Aun no eres miembro?</a>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}; 