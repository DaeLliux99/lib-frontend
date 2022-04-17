import styles from './styles/Header.module.css'
import Link from 'next/link'
import { useState } from 'react';

const Header = () => {
    const [auth, setAuth] = useState(false)

    return ( 
        <header className={styles.header}>
            <Link href='/'>
                <div className={styles.izquierda} >REPOFisi</div>
            </Link>
            <div className={styles.derecha} >
                {auth ? ( <div>Bienvenido</div>) : (                
                    <div className={styles.loginContainer}>
                        <Link href='/login'>
                            <button>INICIAR SESIÓN</button>
                        </Link>
                        <Link  href='/signup'>
                            <button>REGISTRARSE</button>
                        </Link>                    
                    </div>)
                }
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