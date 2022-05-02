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
      alert("Producto actualizado");
    } else {
      setCarrito([...carrito, producto]);
      alert("Producto agregado");
    }
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id !== id);
    setCarrito(carritoActualizado);
  };

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      carritoLength={carrito.length}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
    />
  );
}

export default MyApp;
