import { useState, useEffect } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    if (carritoLS.length !== 0) {
      setCarrito(carritoLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const existeProducto = (id) => {
    return carrito.some((productoAgregado) => productoAgregado.id === id);
  };

  const actualizarCarrito = (producto) => {
    return carrito.map((productoAgregado) => {
      if (productoAgregado.id === producto.id) {
        productoAgregado.cantidad = producto.cantidad;
      }
      return productoAgregado;
    });
  };

  const agregarCarrito = (producto) => {
    if (existeProducto(producto.id)) {
      setCarrito(actualizarCarrito(producto));
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
    />
  );
}

export default MyApp;
