import styles from './styles/Header.module.css'
import Image from 'next/image'

const HeaderLogin = () => {
  return (
    <header className={styles.header}>
      <div className={styles.izquierda}>
        <Image
            src="/images/logorepofisi.png"
            alt="Logo"
            width="200px"
            height="60px"
        />
      </div>
      <div className={styles.derecha}></div>
    </header>
  );
};
 
export default HeaderLogin;
