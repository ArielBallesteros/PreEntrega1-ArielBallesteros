import React , {useEffect ,useState} from "react";
import {useParams} from "react-router-dom";
import './itemListContainer.css';
import ItemList  from "../ItemList/ItemList";
import { stockProductos } from "../Data/stockProductos";



const ItemListContainer = ()=>{
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const promise = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve (id ? stockProductos.filter(item =>item.id === id): stockProductos);
            }, 1000)
        });
        promise.then((data)=>{
            setItems(data);
        })
    },[id]);

    return(
        <div className="container py-5">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer