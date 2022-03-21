import styles from './Categorias.module.css'
//import right from './images/right.png'

const Categorias = () => {
    return ( 
        <div className={styles.categorias}>
            <div className={styles.item}>
                <div className={styles.categoria}>
                    <p className={styles.categoria}>NIVEL</p>
                    {/* <img src={right} alt="categoria" /> */}
                </div>
                <ul clasname={styles.subCategorias}>
                    <li>Primaria</li>
                    <li>Secundaria</li>
                </ul>
            </div>
            <div className={styles.item}>
                <p className={styles.categoria}>MATERIAS</p>
                <ul clasname={styles.subCategorias}>
                    <li>Matemáticas</li>
                    <li>Comunicación</li>
                    <li>Ciencias</li>
                    <li>Historia</li>
                </ul>
            </div>
            <div className={styles.item}>
                <p className={styles.categoria}>ETIQUETAS</p>
                <ul clasname={styles.subCategorias}>
                    <li>Corrupción</li>
                    <li>Responsabilidad</li>
                    <li>Reglas</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Categorias;