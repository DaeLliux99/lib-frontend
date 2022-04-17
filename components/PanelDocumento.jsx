import styles from './styles/PanelDocumento.module.css'
import Image from 'next/image'
import { useState } from 'react';

const PanelDocumento = ({ articulo }) => {
  const [esFavorito, setEsFavorito] = useState(false);
  //console.log(value);
  return (
    <main className={styles.main}>
      <p>...</p>

      <div className={styles.contenido}>
        <div className={styles.izquierda}>
          <div className={styles.descarga}>
            <button>Descargar</button>
          </div>
          <div className={styles.organizacion}>
            <a href="#">Ministerio de educación</a>
          </div>
          <div className={styles.compartir}>
            <p className={styles.compartirEn}>Compartir en</p>
            <div>
              <p className={styles.itemCompartir}>Twitter</p>
              <p className={styles.itemCompartir}>Facebook</p>
              <p className={styles.itemCompartir}>Whatsapp</p>
            </div>
          </div>
        </div>

        <div className={styles.derecha}>
          <div className={styles.seccionTitulo}>
            <span className={styles.tituloDocumento}>{articulo.tema}</span>
            <span className={styles.favorito}>
              <Image
                className={styles.favoritoLogo}
                src={
                  esFavorito
                    ? "/images/favorito.png"
                    : "/images/no-favorito.png"
                }
                alt="Logo"
                width="24px"
                height="24px"
                onClick={() => setEsFavorito(!esFavorito)}
              />
            </span>
          </div>
          <hr />
          <div className={styles.contenidoDocumento}>
            <div className={styles.materia}>
              <img src="" alt="" />
              <p>{articulo.materia.nombre}</p>
            </div>
            <div className={styles.seccionResumen}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              provident voluptatibus nostrum tempore reiciendis porro laudantium
              perferendis iure ea, possimus nemo mollitia cumque commodi sunt
              culpa itaque. Labore, voluptatibus sunt.
            </div>
            <div className={styles.seccionDescarga}>
              <p>Documentos</p>
              <div>
                <button className={styles.boton}>Previsualizar</button>
                <button className={styles.boton}>Descargar</button>
              </div>
            </div>
            <div className={styles.seccionInformacion}>
              <p>Información</p>
              <table>
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Título</td>
                    <td>{articulo.tema}</td>
                  </tr>
                  <tr>
                    <td>Autor</td>
                    <td>{articulo.publicador.nombre}</td>
                  </tr>
                  <tr>
                    <td>Fecha de publicación</td>
                    <td>20/03/2018</td>
                  </tr>
                  <tr>
                    <td>Nivel</td>
                    <td>{articulo.materia.nivel}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
 
export default PanelDocumento;
