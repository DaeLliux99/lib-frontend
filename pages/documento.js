import Header from '../components/Header';
import Footer from '../components/Footer';
import PanelDocumento from '../components/PanelDocumento';

const bandera = true;

const Home = () => (
  <div className="home">
      <Header/>
        <PanelDocumento/>
      <Footer/>
  </div>
);

export default Home;
