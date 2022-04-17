import {useState, useEffect} from "react";
import axios from "axios"

const useObtenerArticulo = (idArticulo) => {
	const url = "https://edu-repo.azurewebsites.net"
	const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
	const obtenerArticulo = () => {
    axios
      .get(`${url}/api/articulos/${idArticulo}`)
      .then((res) => {
        console.log("Paso por aqui");
        setArticulo(res.data);
        setCargando(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Estoy en error");
        console.error(err);
      });
  };
	useEffect(() => {
    if (idArticulo !== undefined) {
      obtenerArticulo();
    }
  }, [idArticulo]);

  return {articulo, cargando};
}

export default useObtenerArticulo;
