import styles from './styles/Header.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/loginHook';
import Image from 'next/image'

const Header = () => {
  const { user, auth, handleLogout } = useAuth();
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.izquierda}>
          <Image
            src="/images/logorepofisi.png"
            alt="Logo"
            width="200px"
            height="60px"
          />
        </div>
      </Link>
      <div className={styles.derecha}>
        {auth ? (
          <>
            <div className={styles.loginContainer}>
              <span className={styles.username}>Bienvenido {user.nombres}</span>
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
            <Link href="/">
              <li>PANEL PRINCIPAL</li>
            </Link>
            {auth &&
              (user.esPub ? (
                <Link href="/">
                  <li>MIS ARTICULOS</li>{" "}
                </Link>
              ) : (
                <Link href="/">
                  <li>MIS FAVORITOS</li>
                </Link>
              ))}
            <Link href="/">
              <li>ORGANIZACIONES</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
