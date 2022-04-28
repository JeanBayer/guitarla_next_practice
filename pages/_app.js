import { useState } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    if (
      carrito.some((productoAgregado) => productoAgregado.id === producto.id)
    ) {
      const carritoActualizado = carrito.map((productoAgregado) => {
        if (productoAgregado.id === producto.id) {
          productoAgregado.cantidad = producto.cantidad;
        }
        return productoAgregado;
      });
      setCarrito(carritoActualizado);
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
