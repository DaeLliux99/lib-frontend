import styles from './styles/Header.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/loginHook';

const Header = () => {
  const { user, auth, handleLogout } = useAuth();
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.izquierda}>REPOFisi</div>
      </Link>
      <div className={styles.derecha}>
        {auth ? (
          <>
            <div>Bienvenido {user.nombres}</div>
            <div className={styles.loginContainer}>
              <button onClick={handleLogout}>CERRAR SESION</button>
            </div>
          </>
        ) : (
          <div className={styles.loginContainer}>
            <Link href="/login">
              <button>INICIAR SESIÓN</button>
            </Link>
            <Link href="/signup">
              <button>REGISTRARSE</button>
            </Link>
          </div>
        )}
        <div className={styles.navegacion}>
          <ul>
            <li>PANEL PRINCIPAL</li>
            {auth && (user.esPub ? <li>MIS ARTICULOS</li> : <li>MIS FAVORITOS</li>)}
            <li>ORGANIZACIONES</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
