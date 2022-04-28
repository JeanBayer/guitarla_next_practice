import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Header.module.css";

const Header = ({ guitarra }) => {
  console.log({ guitarra });
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/img/logo.svg"
                width={400}
                height={100}
                alt="Imagen de logo"
              ></Image>
            </a>
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
        {guitarra && (
          <div>
            <h1>Modelo {guitarra.nombre}</h1>
            <p>{guitarra.descripcion}</p>
            <p>${guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a>
                Ver Producto
              </a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
