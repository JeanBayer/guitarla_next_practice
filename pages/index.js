import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pagina="Inicio">
      <h1 className="heading">Aprendiendo con Next</h1>
      <Link href="/nosotros">Ir a nosotros</Link>
    </Layout>
  );
}
