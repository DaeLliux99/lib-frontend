import styles from './styles/Resultados.module.css'
import Link from 'next/link'
import Image from 'next/image'

const imagenesSegunIdMateria = {
    1:'materia-matematica.png',
    2:'materia-historia.png',
    3:'materia-lenguaje.png',
    4:'materia-quimica.png',
    5:'materia-fisica.png',
  }

const anhos = [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
const resultado = (a,b) => Math.floor(Math.random() * (b-a + 1)) + a;

const CajaResultado = ({value}) => {
    
    return ( 
        <Link href={`/documento/${value.idArticulo}`}>
            <div className={styles.cajaResultado}>
                <div className={styles.resultadoCabecera}> 
                    <span  className={styles.titulo}>{value.tema}</span><span>( {anhos[resultado(10,0)]} )</span>
                    <span className={styles.materia}>
                        <Image 
                            src={`/images/${imagenesSegunIdMateria[value.idMateria]}`}
                            alt="Logo"
                            width="45px"
                            height="45px"
                        />
                    </span>
                </div>
                <p  className={styles.resumen}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae facere maxime harum. 
                    Sunt ex quas maiores deserunt debitis voluptates commodi ad quaerat, praesentium magnam pariatur eos aut ipsam ut fugiat.
                </p>
                <div  className={styles.etiquetas}>
                    Para ver el artículo haga click <a href={value.enlace}>aquí</a>
                </div>
            </div>
        </Link>
     );
}
 
export default CajaResultado;
