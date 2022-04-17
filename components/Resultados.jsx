import styles from './styles/Resultados.module.css'
import CajaResultado from './CajaResultado';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://edu-repo.azurewebsites.net'

const Resultados = () => {

    const [loader, setLoader] = useState(false)
    const [results, setResults] = useState([])

    useEffect(() => {
        getResults()
    }, [])
    
    const getResults = async() => {
        await axios.get(url+'/api/articulos')
            .then(datos => {
                setResults(datos.data)
                setLoader(true)
            })
            .catch(e=> console.log(e))
    }

    return ( 
        <div className={styles.resultados}>
            <p>RESULTADOS</p>

            { loader ? results.map((e,idx) => (<CajaResultado key={idx} value={e}/>)) : <div>Cargando...</div>}
        </div>
     );
}
 
export default Resultados;