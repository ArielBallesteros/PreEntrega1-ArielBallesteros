import React from "react";
import "./cartWidget.css";

export function CartWidget() {
  return (
    <>
      <img src="./img/cart-icon.png" width="50" className="navbarimg" />
      <p className="p">0</p>
    </>
  );
}
