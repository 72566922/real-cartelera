import axios from 'axios';
<<<<<<< HEAD

const API_URL = 'http://localhost:8080/api/usuarios';
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
