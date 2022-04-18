import Header from '../../components/Header';
import PanelPrincipal from '../../components/PanelPrincipal';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useAuth } from '../../hooks/loginHook';
import { useGetFavoritos } from '../../hooks/favoritosHooks';

const Home = () => {
  const { user, auth } = useAuth();
  const { articulos } = useGetFavoritos(user.token);
  return (
    <div className="home">
      <Header />
      {auth &&
        (articulos ? (
          <PanelPrincipal particular={true} articulos={articulos} />
        ) : (
          <div>No hay favoritos</div>
        ))}
      <Footer />
    </div>
  );
}

export default Home;
