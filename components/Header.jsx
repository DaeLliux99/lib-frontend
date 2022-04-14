import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
    
    return ( 
        <header className={styles.header}>
            <Link href='/'>
                <div className={styles.izquierda} >REPOFisi</div>
            </Link>
            <div className={styles.derecha} >
                <div className={styles.loginContainer}>
                    <Link href='/login'>
                        <button>INICIAR SESIÓN</button>
                    </Link>
                    <Link  href='/signup'>
                        <button>REGISTRARSE</button>
                    </Link>                    
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