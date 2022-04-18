import Busqueda from './Busqueda';
import Categorias from './Categorias';
import styles from './styles/PanelPrincipal.module.css'
import Resultados from './Resultados';

const PanelPrincipal = ({ particular, articulos }) => {
  return (
    <main className={styles.main}>
      <div className={styles.izquierda}>
        <Categorias />
      </div>
      <div className={styles.derecha}>
        {!particular && <Busqueda />}
        <Resultados articulos={articulos} />
      </div>
    </main>
  );
};
 
export default PanelPrincipal;
