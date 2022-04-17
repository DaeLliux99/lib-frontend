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

export const getServerSideProps = async (context) => {
  //console.log(context.query.tema);
  const tema = context.query.tema;
  let filtro = "";
  if (tema) {
    filtro = `/filtro/${tema}`;
  }
  const { data } = await axios.get(
    `https://edu-repo.azurewebsites.net/api/articulos${filtro}`
  );
  //console.log(data);
  return {
    props: {
      articulos: data,
    },
  };
};

export default Home;
