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

  const actualizarCantidad = (productoAgregado) => {
    const carritoActualizado = carrito.map((producto) => {
      if (producto.id === productoAgregado.id) {
        producto.cantidad = productoAgregado.cantidad;
      }
      return producto;
    });
    setCarrito(carritoActualizado);
  };

  const agregarCarrito = (producto) => {
    if (existeProducto(producto.id)) {
      actualizarCantidad(producto);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
    />
  );
}

export default MyApp;
