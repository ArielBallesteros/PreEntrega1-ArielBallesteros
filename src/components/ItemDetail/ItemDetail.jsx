import Item from "../Item/Item"
const ItemDetail = ({item})=>{
    return(
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.img}/>
                <h1>{item.nombre}</h1>
                <p>{item.desc}</p>
                <p><b>${item.precio}</b></p>

            </div>
        </div>
    )
}

export default ItemDetail