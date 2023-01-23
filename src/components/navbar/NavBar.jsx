import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
  return (
    <div>
      <nav
        className="navbar bg-dark  navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar" href="">
            <img src="./img/ragnar.png" width="90" className="navbarimg"></img>
            <p className="p">Ragnar Tattoo</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="linknav dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <p className="p"> Tienda </p>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="">
                      Cremas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="">
                      Tintas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="">
                      Todos los productos
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="linknav">
                <Link className="linknav" href="">
                  <p className="p"> Ubicacion </p>
                </Link>
              </li>
              <li className="linknav">
                <Link className="linknav" href="">
                  <p className="p"> Contacto </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="linknav" href="">
                  <CartWidget />
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscador"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                BUSCAR
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
