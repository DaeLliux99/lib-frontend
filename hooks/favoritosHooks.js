import {useState, useEffect} from "react";
import axios from "axios"

export const useGetFavorito = (idArticulo, token) => {
	const url = "https://edu-repo.azurewebsites.net"
	const [favorito , setFavorito] = useState(null);
  const [cargando, setCargando] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
	const getFavorito = () => {
    console.log(config);
    axios
      .get(`${url}/api/favoritos/consulta/?idArticulo=${idArticulo}`, config)
      .then((res) => {
        console.log("Paso por aqui");
        setFavorito(res.data);
        setCargando(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Estoy en error");
        console.error(err);
      });
  };
	useEffect(() => {
    if (token !== undefined) {
      getFavorito();
    }
  }, [token]);

  return {favorito, cargando};
}

export const useGetFavoritos = ( token ) => {
	const url = "https://edu-repo.azurewebsites.net"
	const [favoritos, setFavoritos] = useState(null);
  const [articulos, setArticulos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
	const getFavoritos = () => {
    axios
      .get(`${url}/api/favoritos/porUsuario/`, config)
      .then((res) => {
        console.log("Paso por aqui");
        setFavoritos(res.data);
        setCargando(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Estoy en error");
        console.error(err);
      });
  };
	useEffect(() => {
    if (token !== undefined) {
      getFavoritos();
    }
  }, [token]);
  useEffect(() => {
    if (favoritos) {
      setArticulos(favoritos.map((fav) => fav.articulo));
      console.log(favoritos);
    }
  }, [favoritos]);

  return {favoritos, articulos, cargando};
}

export const useAddFavorito = (idArticulo, token) => {
	const url = "https://edu-repo.azurewebsites.net"
	const [favorito , setFavorito] = useState(null);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const newFavorito = {
    idArticulo
  }
	const addFavorito = () => {
    console.log(config);
    axios
      .post(`${url}/api/favoritos/add`, newFavorito, config)
      .then((res) => {
        console.log("Paso por aqui");
        setFavorito(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Estoy en error");
        console.error(err);
      });
  };

  return {favorito, addFavorito};
}

export const useDeleteFavorito = (idArticulo, token) => {
	const url = "https://edu-repo.azurewebsites.net"
	const [favorito , setFavorito] = useState(null);
  //const [cargando, setCargando] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
	const deleteFavorito = () => {
    console.log(config);
    axios
      .delete(`${url}/api/favoritos/delete/?idArticulo=${idArticulo}`, config)
      .then((res) => {
        console.log("Paso por aqui");
        setFavorito(res.data);
        //setCargando(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Estoy en error");
        console.error(err);
      });
  };

  return {favorito, deleteFavorito};
}

