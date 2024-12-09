import axios from 'axios';
<<<<<<< HEAD

const API_URL = 'https://72566922.github.io/real-cartelera/api/usuarios';
=======
import { urlServer } from "./urlServer.js";

const API_URL = `${urlServer}/api/usuarios`;
>>>>>>> 577ae14 (casi listo)

const UserService = {
    getAllUsers: () => {
        return axios.get(API_URL);
    },  
};

export default UserService;
