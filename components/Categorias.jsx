import { useState, useEffect } from 'react'
import styles from './styles/Categorias.module.css'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

const url = 'https://edu-repo.azurewebsites.net'
const imagenesSegunIdMateria = {
  1:'materia-matematica.png',
  2:'materia-historia.png',
  3:'materia-lenguaje.png',
  4:'materia-quimica.png',
  5:'materia-fisica.png',
}

const Categorias = () => {
  const [materias, setMaterias] = useState([]);
  const [loader, setLoader] = useState(false);

  const [mostrarItemNivel, setMostrarItemNivel] = useState(false);
  const [mostrarItemMaterias, setMostrarItemMaterias] = useState(false);
  const [mostrarItemEtiquetas, setMostrarItemEtiquetas] = useState(false);

  useEffect(() => {
    getMaterias();
  }, []);

  const getMaterias = async () => {
    await axios
      .get(url + "/api/materias")
      .then((datos) => {
        setMaterias(datos.data);
        setLoader(true);
        console.log(datos);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.categorias}>
      <div className={styles.item}>
        <div             
          className={styles.categoria}
          onClick={() => setMostrarItemNivel(!mostrarItemNivel)}>
          <span>NIVEL</span>
          <span>
            <Image 
              // src="/images/logorepofisi.png"
              src='/images/right.png'
              alt="Logo"
              width="16px"
              height="16px"
            />
          </span>
        </div>
        <ul
          className={styles.subCategorias}
          style={{ display: `${mostrarItemNivel ? "block" : "none"}` }}
        >
          <li>Primaria</li>
          <li>Secundaria</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div             
          className={styles.categoria}
          onClick={() => setMostrarItemMaterias(!mostrarItemMaterias)}>
          <span>MATERIAS</span>
          <span>
            <Image 
              // src="/images/logorepofisi.png"
              src='/images/right.png'
              alt="Logo"
              width="16px"
              height="16px"
            />
          </span>
        </div>        
        <ul
          className={styles.subCategorias}
          style={{ display: `${mostrarItemMaterias ? "block" : "none"}` }}
        >
          {materias ? (
            materias.map((el, index) => (
              <Link href={`?materia=${el.idMateria}`} key={index}>
                <li className={styles.liMaterias} key={index}>
                <span>{el.nombre}</span>
                <span>
                  <Image 
                    // src="/images/logorepofisi.png"
                    src={`/images/${imagenesSegunIdMateria[el.idMateria]}`}
                    alt="Logo"
                    width="24px"
                    height="24px"
                  />
                </span>
                </li>
              </Link>
            ))
          ) : (
            <div>Cargando ... </div>
          )}
        </ul>
      </div>
      {/* <div className={styles.item}>
        <div             
          className={styles.categoria}
          onClick={() => setMostrarItemEtiquetas(!mostrarItemEtiquetas)}>
          <span>ETIQUETAS</span>
          <span>
            <Image 
              // src="/images/logorepofisi.png"
              src='/images/right.png'
              alt="Logo"
              width="16px"
              height="16px"
            />
          </span>
        </div>   
        <ul
          className={styles.subCategorias}
          style={{ display: `${mostrarItemEtiquetas ? "block" : "none"}` }}
        >
          <li>Corrupción</li>
          <li>Responsabilidad</li>
          <li>Reglas</li>
        </ul>
      </div> */}
    </div>
  );
};
 
export default Categorias;
