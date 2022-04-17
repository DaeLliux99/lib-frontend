import { useState, useEffect } from 'react'
import styles from './styles/Categorias.module.css'
import axios from 'axios'

const url = 'https://edu-repo.azurewebsites.net'

const Categorias = () => {

    const [materias, setMaterias] = useState([])
    const [loader, setLoader] = useState(false)

    const [mostrarItemNivel, setMostrarItemNivel] = useState(false)
    const [mostrarItemMaterias, setMostrarItemMaterias] = useState(false)
    const [mostrarItemEtiquetas, setMostrarItemEtiquetas] = useState(false)

    useEffect(() => {
        getMaterias()
    }, [])
    
    const getMaterias = async() => {
        await axios.get(url+'/api/materias')
            .then(datos => {
                setMaterias(datos.data)
                setLoader(true)
                console.log(datos)
            })
            .catch(e=> console.log(e))
    }

    return ( 
        <div className={styles.categorias}>
            <div className={styles.item}>
                <div>
                    <p className={styles.categoria} onClick={() => setMostrarItemNivel(!mostrarItemNivel) }>NIVEL</p>
                </div>
                <ul className={styles.subCategorias } style={{display:`${mostrarItemNivel ? 'block' : 'none'}`}}>
                    <li>Primaria</li>
                    <li>Secundaria</li>
                </ul>
            </div>
            <div className={styles.item}>
                <p className={styles.categoria} onClick={() => setMostrarItemMaterias(!mostrarItemMaterias) }>MATERIAS</p>
                <ul className={styles.subCategorias} style={{display:`${mostrarItemMaterias ? 'block' : 'none'}`}}>
                    {materias ? materias.map((el,index) => (<li className={styles.liMaterias} key={index}>{el.nombre}</li>)): <div>Cargando ... </div>}
                </ul>
            </div>
            <div className={styles.item}>
                <p className={styles.categoria} onClick={() => setMostrarItemEtiquetas(!mostrarItemEtiquetas) }>ETIQUETAS</p>
                <ul className={styles.subCategorias} style={{display:`${mostrarItemEtiquetas ? 'block' : 'none'}`}}>
                    <li>Corrupción</li>
                    <li>Responsabilidad</li>
                    <li>Reglas</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Categorias;