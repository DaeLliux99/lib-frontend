import styles from './Busqueda.module.css'

const Busqueda = () => {
    return ( 
        <div className={styles.busqueda}>
            <div className={styles.titulo}>(2) Ruffini</div>
            <form >
                <div className={styles.campo}>
                    <p>Buscar</p>
                    <input type="text" placeholder="Inserte texto" />
                </div>
                <div className={styles.campo}>
                    <p>Ordenar Por</p>
                    <input type="text" placeholder="Fecha cambiada" />
                </div>
                <div className={styles.campo}>
                    <p>Orden</p>
                    <input type="text" placeholder="Descendente" />
                </div>
                <div className={styles.campo}>
                    <button>CONSULTAR</button>
                </div>
            </form>
        </div>
     );
}
 
export default Busqueda;