// src/services/CategoriaService.js
import axios from 'axios';
<<<<<<< HEAD

const API_URL = 'http://localhost:8080/api/categorias';
=======
import { urlServer } from "./urlServer.js";

const API_URL = `${urlServer}/api/categorias`;
>>>>>>> 577ae14 (casi listo)

const CategoriaService = {
  getCategorias: async () => { // Cambiado de getAllCategorias a getCategorias
    const response = await axios.get(API_URL);
    return response.data; // Devuelve solo los datos
  },
};

export default CategoriaService;
