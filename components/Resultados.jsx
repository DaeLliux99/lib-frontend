import styles from './Resultados.module.css'
import CajaResultado from './CajaResultado';

const Resultados = () => {
    return ( 
        <div className={styles.resultados}>
            <p>RESULTADOS</p>

            <CajaResultado/>
            <CajaResultado/>
            <CajaResultado/>
        </div>
     );
}
 
export default Resultados;