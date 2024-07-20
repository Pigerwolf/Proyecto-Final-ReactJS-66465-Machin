  
  
  // Función para generar tarjetas de producto
  const renderProductCard = (Nombre, Valor) => {
    return (
    <div className="col-md-3">
      <div className="card">
        <img className="card-img-top img-fluid" src="https://img.freepik.com/vector-premium/rombos-interseccion-verde-azul-lila-ilustracion-vectorial-eps-10_797523-665.jpg" style={{ maxWidth: '70px', maxHeight: '70px' }} alt="Card image cap" />
          <p className="card-text"><a href="{./Productos}" className="text-dark">{Nombre}</a></p>
          <div className="btn-add">
            <button>Add</button>
          </div>
          <p className="card-cost">{Valor}</p>
        </div>
      </div>

  )
};

export default renderProductCard;