import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";

const Carrito = ({ carrito }) => {
  const [productos, setProductos] = useState([]);
  return (
    <Layout pagina="Carrito de compras">
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div>1</div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default Carrito;
