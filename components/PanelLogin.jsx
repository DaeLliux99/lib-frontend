import styles from './styles/Login.module.css'
import Link from 'next/link'
import {  useState } from 'react';

const thisUserValues = {
    username : '',
    password : '',
    esPublicador: false
}

const thisNewUserValues = {
    nombres:'',
    apellidos:'',
    correo:'',
    edad:'',
    username : '',
    password : '',
    esPublicador: false
}

const urlBase = 'https://edu-repo.azurewebsites.net'

const PanelLogin = ({isLoginOrLogout}) => {

    const [userValues, setUserValues] = useState(thisUserValues);
    const [newUserValues, setNewUserValues] = useState(thisNewUserValues);
    const [esPublicador, setEsPublicador] = useState(false);

    const handleChange = (e) => {
        setUserValues(
            {
                ...userValues,
                [e.target.name]:e.target.value
            }
        )
        setNewUserValues(
            {
                ...newUserValues,
                [e.target.name]:e.target.value
            }
        )
    }

    const handleCheckbox = (e) => setUserValues({...userValues,[e.target.name]:e.target.checked})

    // función para validar la informacion de usuario y contraseña
    const validateUser = async() => {
        console.log(userValues)
        // await axios.post(url+'/api/login',{userValues})
        //     .then(datos => {
        //         setResults(datos.data)
        //         setLoader(true)
        //     })
        //     .catch(e=> console.log(e))
    }

    // función para registrar un nuevo usuario
    const validateNewUser = async() => {
        console.log(newUserValues)
    }

    const tituloStyle = {
        textAlign:'center',
        paddingBottom:'20px',
        fontWeight:'600'
    }

    return ( 
        <main className={styles.main}>
            <form action="">
                {/* si es el panel para sigin (login) o signup (nuevo registro)  */}
                {isLoginOrLogout ? (
                    <>
                        <div style={tituloStyle}>INICIAR SESIÓN</div>
                        <div className={styles.divInsideForm}>
                            <div className={styles.label}>
                                <span>USUARIO</span>
                                <input name='username' className={styles.input} type="text" value={userValues.username} onChange={handleChange}/>
                            </div>
                            <div className={styles.label}>
                                <span>CONTRASEÑA</span>
                                <input name='password' className={styles.input} type="password" value={userValues.password} onChange={handleChange}/>
                            </div>
                        </div>
                        <div>
                            <input name='esPublicador' type="checkbox" value="esPublicador" onChange={handleCheckbox}/>¿Es Publicador?
                        </div>
                        <div className={styles.label}>
                            {/* <Link href='/'> */}
                                <button onClick={(e) => {e.preventDefault(); validateUser()}}>LOGIN</button>
                            {/* </Link> */}
                        </div>
                        <div className={styles.footer}>
                            <p>¿Aún no tienes una cuenta?</p>
                            <Link href='/signup'>
                                <a href="">Registrarse</a>
                            </Link>                    
                        </div>
                    </>
                ) : (
                    <>
                        <p style={tituloStyle}>REGISTRE SUS DATOS</p>
                        <div className={styles.divInsideForm}>
                            <div className={styles.label}>
                                <span>NOMBRES</span>
                                <input name='nombres' className={styles.input} type="text" value={newUserValues.nombres} onChange={handleChange}/>
                            </div>
                            <div className={styles.label}>
                                <span>APELLIDOS</span>
                                <input name='apellidos' className={styles.input} type="text" value={newUserValues.apellidos} onChange={handleChange}/>
                            </div>
                            <div className={styles.label}>
                                <span>EDAD</span>
                                <input name='edad' className={styles.input} type="text" value={newUserValues.edad} onChange={handleChange}/>
                            </div>
                            <div className={styles.label}>
                                <span>CORREO</span>
                                <input name='correo' className={styles.input} type="email" value={newUserValues.correo} onChange={handleChange}/>
                            </div>
                            <div className={styles.label}>
                                <span>NOMBRE DE USUARIO</span>
                                <input name='username' className={styles.input} type="text" value={newUserValues.username} onChange={handleChange}/>
                            </div>
                            <div className={styles.label}>
                                <span>CONTRASEÑA</span>
                                <input name='password' className={styles.input} type="password" value={newUserValues.password} onChange={handleChange}/>
                            </div>
                            <div>
                                <input name='esPublicador' type="checkbox" value="esPublicador" onChange={handleCheckbox}/>¿Es Publicador?
                            </div>
                        </div>
                        <div className={styles.label}>
                            {/* <Link href='/'> */}
                            <button onClick={(e) => {e.preventDefault(); validateNewUser()}}>REGISTRAR</button>
                            {/* </Link> */}
                        </div>
                        <div className={styles.footer}>
                            <p>¿Ya  tienes una cuenta?</p>
                            <Link href='/login'>
                                <a href="">Iniciar Sesión</a>
                            </Link>                    
                        </div>
                    </>
                )}

            </form>
        </main>
     );
}
 
export default PanelLogin;