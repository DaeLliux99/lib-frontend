import styles from './Resultados.module.css'

const CajaResultado = () => {
    return ( 
        <div className={styles.cajaResultado}>
            <div>LOGO DE LA MATERIA</div>
            <div>
                <p>TITULO</p>
                <div>
                    <span>MATERIA</span>
                    <span>ORGANIZACIÓN</span>
                </div>
                <p>resumen</p>
                <p>año</p>
            </div>
        </div>
     );
}
 
export default CajaResultado;