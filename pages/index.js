import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import Header from '../components/Header';
import PanelPrincipal from '../components/PanelPrincipal';
import Footer from '../components/Footer';

const Home = () => (
  <div className="home">
    <Header/>
    <PanelPrincipal/>
    <Footer/>
  </div>
);

export default Home;
