import React, {useState, useEffect}from "react";
import {useParams} from "react-router-dom";
import ItemDetail  from "../ItemDetail/ItemDetail";
import { stockProductos } from "../Data/stockProductos";


const ItemDetailContainer = () =>{
    const[item , setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const promise = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(stockProductos.find(item => item.id.toString === id));
            }, 1000);

        });

        promise.then ((data) =>{
            setItem(data);
        })
    },[id]);
    
    return(
        <div className="container">
            <ItemDetail item = {item}/>
        </div>
    )
}

export default ItemDetailContainer;