import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { useState, useEffect } from "react";
import {Home} from "./components/pages/Home/home"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/tienda"} element={<ItemListContainer />} />
        <Route path={"/item/id:"} element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
