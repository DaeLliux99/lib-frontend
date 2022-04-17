import styles from "./styles/Login.module.css";
import Link from 'next/link'
import {  useState, useEffect } from 'react';
import { useLogin } from "../hooks/loginHook";

const thisUserValues = {
    correo : '',
    contraseña : '',
    esPublicador: false
}

const urlBase = "https://edu-repo.azurewebsites.net";

const PanelLogin = () => {
  const [userValues, setUserValues] = useState(thisUserValues);
  
  const { logUser, loggeado } = useLogin(userValues);

  const handleChange = (e) => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) =>
    setUserValues({ ...userValues, [e.target.name]: e.target.checked });
  
  const tituloStyle = {
    textAlign: "center",
    paddingBottom: "20px",
    fontWeight: "600",
  };

  return (
    <main className={styles.main}>
      <form action="">
        <>
          <div style={tituloStyle}>INICIAR SESIÓN</div>
          <div className={styles.divInsideForm}>
            <div className={styles.label}>
              <span>CORREO</span>
              <input
                name="correo"
                className={styles.input}
                type="text"
                value={userValues.correo}
                onChange={handleChange}
              />
            </div>
            <div className={styles.label}>
              <span>CONTRASEÑA</span>
              <input
                name="contraseña"
                className={styles.input}
                type="password"
                value={userValues.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <input
              name="esPublicador"
              type="checkbox"
              value="esPublicador"
              onChange={handleCheckbox}
            />
            ¿Es Publicador?
          </div>
          <div className={styles.label}>
            {/* <Link href='/'> */}
            <button
              onClick={(e) => {
                e.preventDefault();
                logUser();
              }}
            >
              LOGIN
            </button>
            {/* </Link> */}
          </div>
          <div className={styles.footer}>
            <p>¿Aún no tienes una cuenta?</p>
            <Link href="/signup">
              <a href="">Registrarse</a>
            </Link>
          </div>
        </>
      </form>
    </main>
  );
};
 
export default PanelLogin;
