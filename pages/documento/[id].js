import Header from '../../components/Header';
import PanelDocumento from '../../components/PanelDocumento';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router'
import useObtenerArticulo from '../../hooks/articulosHooks';

const Doc = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { articulo, cargando } = useObtenerArticulo(id);
  console.log(cargando)
  return (
    <div className="home">
      {!cargando ? (
        <div>
          <Header />
          <PanelDocumento articulo={articulo} />
          <Footer />
        </div>
      ) : (
        <div>Cargando</div>
      )}
    </div>
  );
};

export default Doc;
