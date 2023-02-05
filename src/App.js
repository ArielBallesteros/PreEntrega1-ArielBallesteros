import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { useState, useEffect } from "react";

function App() {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [contadorProd, setContadorProd] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/id:"} element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
