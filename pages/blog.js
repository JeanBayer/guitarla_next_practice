import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";

const Blog = ({ entradas, carritoLength }) => {
  return (
    <Layout pagina="Blog Virtual" carritoLength={carritoLength}>
      <main className="contenedor">
        <ListadoBlog entradas={entradas} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
