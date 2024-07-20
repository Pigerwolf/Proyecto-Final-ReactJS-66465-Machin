import renderProductCard from '../utils/newCards';
import { Link } from 'react-router-dom';


const Main = () => {

  return (
    <div>
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item img-fluid">
              <img className="d-block w-100" src="https://media.newyorker.com/photos/5b465113da42df0b560981d3/16:9/w_1280,c_limit/180723_r32444_rd.jpg" alt="Third slide" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-4" id="border-line">
          <div className="col-md-4">
            <div className="box">
              <i className="fas fa-truck fa-2x mb-3 mt-4 text-primary"></i>
              <h5>Delivery</h5>
              <p>Velocidad Standar 7-8 días para que llegue tu producto.</p>
              <p className="card-cost">€10.00</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <i className="fas fa-truck fa-2x mb-3 mt-4 text-primary"></i>
              <h5>Fast Delivery</h5>
              <p>Velovidad Fast 3-4 días para que llegue tu producto.</p>
              <p className="card-cost">€15.00</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <i className="fas fa-truck fa-2x mb-3 mt-4 text-primary"></i>
              <h5>Delivery Express</h5>
              <p>Velocidad Express! 1-2 días para que llegue tu producto.</p>
              <p className="card-cost">€20.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container cardItem" id="products">
        <h2>Lo Popular:</h2>
        <div className="card-container">
          {renderProductCard("Un producto ESC-Electronics", "€179.00")}
          {renderProductCard("Producto de la ostia!", "€280.00")}
          {renderProductCard("Un producto de producto", "€56.00")}
          {renderProductCard("Un producto buenísimo", "€179.00")}
        </div>
      </div>

      <div className="container cardItem" id="newarrive">
        <h2>Lo nuevo:</h2>
        <div className="card-container">
          {renderProductCard("Algun producto", "€179.00")}
          {renderProductCard("Algun otro producto", "€280.00")}
          {renderProductCard("Algun gran producto", "€56.00")}
          {renderProductCard("Solo otro producto", "€179.00")}
        </div>
      </div>

      <div className="container cardItem" id="recommend">
        <div id="heading">
          <h2>Lo Recomendado:</h2>
          <div>
          <Link to="/Catalogo">
          <button type="button" className="btn btn-outline-primary" id="float" >Ver todo</button>
          </Link>
        </div>
        </div>
        <div className="card-container">
          {renderProductCard("Otro gran producto", "€179.00")}
          {renderProductCard("Algun producto ingenioso", "€280.00")}
          {renderProductCard("Un gran producto llamativo", "€56.00")}
          {renderProductCard("Un producto espectacular", "€179.00")}
        </div>
      </div>
    </div>
  );
};

export default Main;