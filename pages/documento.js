import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import Header from '../components/Header';
import PanelPrincipal from '../components/PanelPrincipal';
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
