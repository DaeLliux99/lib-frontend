import styles from './styles/Busqueda.module.css'
import { useState } from 'react';

const Busqueda = () => {

    const [busqueda, setBusqueda] = useState("");
    const [tituloBusqueda, setTituloBusqueda] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTituloBusqueda(busqueda)
        console.log(busqueda)
    }

    return ( 
        <div className={styles.busqueda}>
            <div className={styles.titulo}>{ busqueda ? tituloBusqueda : 'Todos los resultados' }</div>
            <form onSubmit={handleSubmit}>
                <div className={styles.campo}>
                    <p>Buscar</p>
                    <input 
                    type="text" 
                    placeholder="Inserte texto"
                    onChange={(e)=>{setBusqueda(e.target.value)}}
                     />
                </div>
                <div className={styles.campo}>
                    <p>Ordenar Por</p>
                    <div className={styles.campoBotones}>
                        <button>ASC</button>
                        <button>DESC</button>
                    </div>
                </div>
                <div className={styles.campo}>
                    <button type="submit" className={styles.btnConsultar}>CONSULTAR</button>
                </div>
            </form>
        </div>
     );
}
 
export default Busqueda;