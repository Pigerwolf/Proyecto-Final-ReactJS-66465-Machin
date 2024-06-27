  // Función para generar tarjetas de producto
  const renderProductCard = (title, price) => {
    return (
    <div className="col-md-3">
      <div className="card">
        <img className="card-img-top img-fluid" src="https://img.freepik.com/vector-premium/rombos-interseccion-verde-azul-lila-ilustracion-vectorial-eps-10_797523-665.jpg" style={{ maxWidth: '70px', maxHeight: '70px' }} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text"><a href="../pages/inner-productpage.html" className="text-dark">{title}</a></p>
          <div className="ratings">
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-secondary"></i>
            <label className="text-secondary ml-3">34 reviews</label>
          </div>
          <p className="card-cost">{price}</p>
        </div>
      </div>
    </div>
  )
};

export default renderProductCard;