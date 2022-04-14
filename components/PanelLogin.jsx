import styles from './Login.module.css'
import Link from 'next/link'

const PanelLogin = () => {

    const tituloStyle = {
        textAlign:'center',
        paddingBottom:'20px',
        fontWeight:'600'
    }

    return ( 
        <main className={styles.main}>
            <form action="">
                <div style={tituloStyle}>INICIAR SESIÓN</div>
                <div className={styles.label}>
                    <p>USUARIO</p>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.label}>
                    <p>CONTRASEÑA</p>
                    <input className={styles.input} type="password" />
                </div>
                <div className={styles.label}>
                    <Link href='/'>
                        <button>LOGIN</button>
                    </Link>
                </div>
                <div className={styles.footer}>
                    <p>¿Aún no tienes una cuenta?</p>
                    <Link href='/signup'>
                        <a href="">Registrarse</a>
                    </Link>                    
                </div>
            </form>
        </main>
     );
}
 
export default PanelLogin;