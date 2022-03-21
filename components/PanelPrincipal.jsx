import Busqueda from './Busqueda';
import Categorias from './Categorias';
import styles from './PanelPrincipal.module.css'
import Resultados from './Resultados';

const PanelPrincipal = () => {
    return ( 
        <main className={styles.main}>
            <div className={styles.izquierda}>
                <Categorias/>
            </div>
            <div className={styles.derecha}>
                <Busqueda/>
                <Resultados/>
            </div>
        </main>
     );
}
 
export default PanelPrincipal;