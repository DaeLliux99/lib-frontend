import styles from './styles/Resultados.module.css'
import Link from 'next/link'

const CajaResultado = ({value}) => {
    return ( 
        <Link href={`/documento/${value.idArticulo}`}>
        <div className={styles.cajaResultado}>
            <div>LOGO</div>
            <div  className={styles.datos}>
                <p  className={styles.titulo}>{value.tema}</p>
                <div  className={styles.etiquetas}>
                    <span className={styles.materia}>{value.idMateria}</span>
                    <p className={styles.organizacion}>{value.enlace}</p>
                </div>
                <p  className={styles.resumen}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae facere maxime harum. 
                    Sunt ex quas maiores deserunt debitis voluptates commodi ad quaerat, praesentium magnam pariatur eos aut ipsam ut fugiat.</p>
                <p className={styles.anho}>2018</p>
            </div>
        </div>
        </Link>
     );
}
 
export default CajaResultado;
