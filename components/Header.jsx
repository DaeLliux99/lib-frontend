import styles from './Header.module.css'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.izquierda} >REPOFisi</div>
            <div className={styles.derecha} >
                <div className={styles.loginContainer}>
                    <button>INICIAR SESIÓN</button>
                    <button>REGISTRARSE</button>
                </div>
                <div className={styles.navegacion}>
                    <ul>
                        <li>PANEL PRINCIPAL</li>
                        <li>MIS DOCUMENTOS</li>
                        <li>ORGANIZACIONES</li>
                    </ul>
                </div>
            </div>
        </header>
     );
}
 
export default Header;