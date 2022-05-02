import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = ({ carritoLength }) => {
  return (
    <Layout pagina="Nosotros" carritoLength={carritoLength}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen de Nosotros"
          />
          <div>
            <p>
              Sed magna in esse. Diam consetetur justo ipsum tempor sit invidunt
              takimata. Nonumy nonumy suscipit voluptua ut magna magna diam diam
              hendrerit stet est rebum. Feugait sit ullamcorper eos ut dolor
              praesent tempor feugait vel ea dignissim labore eum labore eirmod
              eum. Suscipit sanctus molestie dolor soluta. Zzril in voluptua.
              Feugait ipsum laoreet accusam magna aliquyam consetetur ipsum
              lorem eos sit sanctus clita ipsum. Eos sed lorem hendrerit
              ullamcorper vero sit amet dolor et no kasd eum ut ut facilisis et.
              Ipsum autem te gubergren quod takimata sadipscing amet et sea et
              ea duis tempor blandit et sed lorem amet. In dignissim no lorem at
              iusto eos. Diam amet dolore sit cum magna diam ut lorem.
            </p>
            <p>
              Sed magna in esse. Diam consetetur justo ipsum tempor sit invidunt
              takimata. Nonumy nonumy suscipit voluptua ut magna magna diam diam
              hendrerit stet est rebum. Feugait sit ullamcorper eos ut dolor
              praesent tempor feugait vel ea dignissim labore eum labore eirmod
              eum. Suscipit sanctus molestie dolor soluta. Zzril in voluptua.
              Feugait ipsum laoreet accusam magna aliquyam consetetur ipsum
              lorem eos sit sanctus clita ipsum. Eos sed lorem hendrerit
              ullamcorper vero sit amet dolor et no kasd eum ut ut facilisis et.
              Ipsum autem te gubergren quod takimata sadipscing amet et sea et
              ea duis tempor blandit et sed lorem amet. In dignissim no lorem at
              iusto eos. Diam amet dolore sit cum magna diam ut lorem.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
