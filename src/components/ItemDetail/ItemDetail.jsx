import { stockProductos } from "../Data/stockProductos"


const getAll = ()=>{
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            resolve(stockProductos);
        }, [500]);
    });
};

const get = (id) => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(stockProductos.find((elem) => elem.id.toString()=== id));
        },[500]);
    });
};

const add = (product) => {};

export const ItemDetail = {getAll, get ,add}
   