// src/services/SalaService.js
import axios from 'axios';
<<<<<<< HEAD

const API_URL = 'http://localhost:8080/api/salas';
=======
import { urlServer } from "./urlServer.js";

const API_URL = `${urlServer}/api/salas`;
>>>>>>> 577ae14 (casi listo)

const SalaService = {
    getAllSalas: () => {
        return axios.get(API_URL)
            .catch(error => {
                console.error("Error obteniendo salas:", error);
                throw error;
            });
    },
};

export default SalaService;
