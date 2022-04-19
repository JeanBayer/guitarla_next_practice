import React from "react";
import Layout from "../components/Layout";

const Tienda = ({ guitarras }) => {
  return (
    <Layout pagina="Tienda Virtual">
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`;
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();
  return {
    props: {
      guitarras,
    },
  };
}

export default Tienda;
