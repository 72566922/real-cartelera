// src/services/BebidaService.js
import axios from 'axios';
<<<<<<< HEAD

const API_URL = 'http://localhost:8080/api/dulces';
=======
import { urlServer } from "./urlServer.js";

const API_URL = `${urlServer}/api/dulces`;
>>>>>>> 577ae14 (casi listo)

const DulceService = {
  getAllDulces: () => {
    return axios.get(API_URL);
  },

};

export default DulceService;
