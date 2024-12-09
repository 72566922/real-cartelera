import axios from 'axios';
<<<<<<< HEAD

const API_URL = 'http://localhost:8080/api/boletos'; // Reemplaza con la URL de tu servidor
=======
import { urlServer } from "./urlServer.js";

const API_URL = `${urlServer}/api/boletos`; // Reemplaza con la URL de tu servidor
>>>>>>> 577ae14 (casi listo)

const registrarBoleto = async (boleto) => {
    const response = await axios.post(API_URL, boleto);
    return response.data;
};

export default {
    registrarBoleto,
};
