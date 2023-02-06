import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    ItemDetail.get(id).then((data) => setItem(data));
  }, [id]);

  return (
   <div>
    <ItemDetail/>
   </div>
  );
};

export default ItemDetailContainer;
