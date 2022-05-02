import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Carrito.module.css";

const Carrito = ({ carrito }) => {
  return (
    <Layout pagina="Carrito de compras">
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.lenght === 0
            ? "No hay productos en el carrito"
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={500}
                      src={process.env.NEXT_PUBLIC_API_URL + producto.imagen}
                      alt={producto.nombre}
                    />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <p className={styles.cantidad}>
                      Cantidad: {producto.cantidad}
                    </p>
                    <p className={styles.precio}>
                      $ <span>{producto.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default Carrito;
