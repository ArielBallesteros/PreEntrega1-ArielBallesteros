import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id}>
      <div className="row">
        <div className="col">
          <div className="card mb-3">
            <img
              className="card-img-top mt-2"
              src={item.img}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">Precio: ${item.precio}</p>
              <p className="card-text">Descripcion: {item.desc}</p>
              <p className="card-text">Cantidad: {item.cantidad}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
