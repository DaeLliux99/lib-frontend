import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
//import Cookies from "universal-cookie/es6";

const url = "https://edu-repo.azurewebsites.net"

export const useLogin = (usuarioParam) => {
  const router = useRouter();
  const [loggeado, setLoggeado] = useState(false);
	//const cookies = new Cookies();

	const logUser = async () => {
    await axios
      .post(`${url}/api/login`, usuarioParam)
      .then((res) => {
        const { data } = res;
        /*cookies.set("nombres", data.nombres);
        cookies.set("token", data.token);
        cookies.set("esPub", data.esPub);
        cookies.set("correo", data.correo);*/
        window.localStorage.setItem('loggedUser', JSON.stringify(data));
        setLoggeado(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    if (loggeado) {
      router.push("/");
    }
  }, [loggeado]);

  return {logUser, loggeado}
}

export const useSignUp = (usuarioParam) => {
  const [user, setUser] = useState({
    correo: '',
    contraseña: '',
    esPublicador: ''
  });
  const { logUser, loggeado } = useLogin(user);
  const [ guardado, setGuardado ] = useState(false);

	const signupUser = async () => {
    await axios
      .post(`${url}/api/usuarios/add`, usuarioParam)
      .then((res) => {
        const { data } = res;
        if (data) {
          setUser({
            correo: usuarioParam.correo,
            contraseña: usuarioParam.contraseña,
            esPublicador: false,
          });
          setGuardado(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(()=>{
    if (guardado) {
      logUser();
    }
  }, [user]);

  return {signupUser, loggeado}
}

export const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({
    correo: '',
    contraseña: '',
    esPub: false
  });
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      setUser(JSON.parse(loggedUserJSON));
      setAuth(true);
    }
  }, [auth]);

  const handleLogout = () => {
    setAuth(false);
    setUser(null);
    window.localStorage.removeItem("loggedUser");
  };

  return { user, auth, handleLogout }
};
