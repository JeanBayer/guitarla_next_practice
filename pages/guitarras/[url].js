import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitarra.module.css";

const Producto = ({ guitarra }) => {
  const { nombre, precio, descripcion, imagen } = guitarra;
  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={`${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`}
          alt={`Imagen guitarra ${nombre}`}
        ></Image>
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarrras?url=${url}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();
  console.log(guitarra);
  return {
    props: {
      guitarra: guitarra[0],
    },
  };
}

export default Producto;
