import styles from "./styles/Login.module.css";
import Link from 'next/link'
import {  useState, useEffect } from 'react';
import { useSignUp } from "../hooks/loginHook";

const tituloStyle = {
  textAlign: "center",
  paddingBottom: "20px",
  fontWeight: "600",
};
const thisNewUserValues = {
    nombres:'',
    apellidos:'',
    correo:'',
    edad:'',
    contraseña : '',
}

const PanelSignUp = () => {
  const [newUserValues, setNewUserValues] = useState(thisNewUserValues);
  const handleChange = (e) => {
    setNewUserValues({
      ...newUserValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) =>
    setNewUserValues({ ...userValues, [e.target.name]: e.target.checked });

  const { signupUser, loggeado } = useSignUp(newUserValues);
  return (
    <main className={styles.main}>
      <form action="">
        <p style={tituloStyle}>REGISTRE SUS DATOS</p>
        <div className={styles.divInsideForm}>
          <div className={styles.label}>
            <span>NOMBRES</span>
            <input
              name="nombres"
              className={styles.input}
              type="text"
              value={newUserValues.nombres}
              onChange={handleChange}
            />
          </div>
          <div className={styles.label}>
            <span>APELLIDOS</span>
            <input
              name="apellidos"
              className={styles.input}
              type="text"
              value={newUserValues.apellidos}
              onChange={handleChange}
            />
          </div>
          <div className={styles.label}>
            <span>EDAD</span>
            <input
              name="edad"
              className={styles.input}
              type="text"
              value={newUserValues.edad}
              onChange={handleChange}
            />
          </div>
          <div className={styles.label}>
            <span>CORREO</span>
            <input
              name="correo"
              className={styles.input}
              type="email"
              value={newUserValues.correo}
              onChange={handleChange}
            />
          </div>
          <div className={styles.label}>
            <span>CONTRASEÑA</span>
            <input
              name="contraseña"
              className={styles.input}
              type="password"
              value={newUserValues.contraseña}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.label}>
          {/* <Link href='/'> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              signupUser();
            }}
          >
            REGISTRAR
          </button>
          {/* </Link> */}
        </div>
        <div className={styles.footer}>
          <p>¿Ya tienes una cuenta?</p>
          <Link href="/login">
            <a href="">Iniciar Sesión</a>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default PanelSignUp;
