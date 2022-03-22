import styles from './Footer.module.css'

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.izquierda}>
                <p>REPOFisi</p>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    amet itaque autem sed? Eius ea, fugit ratione quod quasi non enim facilis maiores dolorum?
                </span>
            </div>
            <div className={styles.derecha}>
                <p>¿Quiénes somos?</p>
                <div>2020</div>
                <div>FISI - UNMSM</div>
            </div>
        </footer>
     );
}
 
export default Footer;