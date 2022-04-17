import Header from '../components/Header';
import PanelPrincipal from '../components/PanelPrincipal';
import Footer from '../components/Footer';
import axios from 'axios';

const Home = ({ articulos }) => (
  <div className="home">
    <Header />
    <PanelPrincipal articulos={articulos} />
    <Footer />
  </div>
);

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    `https://edu-repo.azurewebsites.net/api/articulos`
  );
  //console.log(data);
  return {
    props: {
      articulos: data,
    },
  };
};

export default Home;
