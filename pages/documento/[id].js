import Header from '../../components/Header';
import PanelDocumento from '../../components/PanelDocumento';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router'
import useObtenerArticulo from '../../hooks/articulosHooks';
import axios from 'axios';

const Doc = ( {articulo} ) => {
  return (
    <div>
      <Header />
      <PanelDocumento articulo={articulo} />
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data } = await axios.get("https://edu-repo.azurewebsites.net/api/articulos");
  //console.log(data);
  const paths = data.map(articulo => {
    return {
      params: { id: articulo.idArticulo.toString() }
    }
  });

  //console.log(paths);
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await axios.get(`https://edu-repo.azurewebsites.net/api/articulos/${id}`);
  //console.log(data);
  return {
    props: {
      articulo: data
    }
  }
}

export default Doc;
