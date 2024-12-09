import React, { useState } from 'react'; // Importa React y el hook useState
import axios from 'axios'; // Importa axios para hacer peticiones HTTP
<<<<<<< HEAD
import { Link } from 'react-router-dom'; // Importa el componente Link para navegación
import { useAuth } from './AuthContext'; // Importa el hook personalizado useAuth para manejar la autenticación

const Login = () => {
  // Obtiene la función login del contexto de autenticación
  const { login } = useAuth(); 

  // Definir los estados para el correo electrónico, la contraseña y los mensajes de error y éxito
=======
import { Link, useNavigate } from 'react-router-dom'; // Importa el componente Link para navegación y useNavigate
import { useAuth } from './AuthContext'; // Importa el hook personalizado useAuth para manejar la autenticación
import { urlServer } from "../../service/urlServer.js";

const Login = () => {
  const { login } = useAuth();  // Obtiene la función login del contexto de autenticación
  const navigate = useNavigate();  // Obtiene la función para navegar

>>>>>>> 577ae14 (casi listo)
  const [gmail, setGmail] = useState(''); // Estado para el correo electrónico
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensaje de error
  const [successMessage, setSuccessMessage] = useState(''); // Estado para mensaje de éxito

<<<<<<< HEAD
  // Función que se ejecuta al enviar el formulario de inicio de sesión
=======
>>>>>>> 577ae14 (casi listo)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario (recarga de página)

    try {
<<<<<<< HEAD
      // Realiza una solicitud POST al servidor para verificar las credenciales
      const response = await axios.post('http://localhost:8080/api/usuarios/login', {
        gmail, // Envía el correo electrónico
        password, // Envía la contraseña
      });

      // Si la respuesta es exitosa (status 200)
      if (response.status === 200) {
        // Llama a la función login del contexto para almacenar los datos del usuario
        login(response.data.id, response.data.gmail);

        // Limpia los campos de correo electrónico y contraseña
        setGmail('');
        setPassword('');

        // Muestra el mensaje de éxito
        setSuccessMessage('¡Inicio de sesión exitoso!');
        setErrorMessage(''); // Limpia el mensaje de error
      }
    } catch (error) {
      // Si hay un error en la solicitud (credenciales incorrectas)
=======
      const response = await axios.post(`${urlServer}/api/usuarios/login`, {
        gmail,
        password,
      });

      if (response.status === 200) {
        login(response.data.id, response.data.gmail); // Llama a la función login del contexto
        setGmail('');
        setPassword('');
        setSuccessMessage('¡Inicio de sesión exitoso!');
        setErrorMessage(''); // Limpia el mensaje de error

        // Redirige al usuario a la página principal después del inicio de sesión
        navigate('/'); 
      }
    } catch (error) {
>>>>>>> 577ae14 (casi listo)
      setSuccessMessage(''); // Limpia el mensaje de éxito
      setErrorMessage('Error en el inicio de sesión. Verifique sus credenciales.'); // Muestra el mensaje de error
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
<<<<<<< HEAD
      {/* El contenedor que usa clases de Bootstrap para centrar el contenido */}
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        {/* Tarjeta de inicio de sesión */}
        <h2 className="text-center mb-4">Iniciar sesión</h2> {/* Título */}
        
        <form onSubmit={handleSubmit}> {/* Formulario que llama a handleSubmit al enviarlo */}
          <div className="mb-3"> {/* Campo de correo electrónico */}
            <label className="form-label">Gmail:</label> {/* Etiqueta para el correo */}
            <input
              type="email"
              className="form-control"
              value={gmail} // El valor del campo de correo electrónico es el estado 'gmail'
              onChange={(e) => setGmail(e.target.value)} // Actualiza el estado 'gmail' cuando cambia el valor
              required // Requiere que el campo no esté vacío
            />
          </div>
          <div className="mb-3"> {/* Campo de contraseña */}
            <label className="form-label">Contraseña:</label> {/* Etiqueta para la contraseña */}
            <input
              type="password"
              className="form-control"
              value={password} // El valor del campo de contraseña es el estado 'password'
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado 'password' cuando cambia el valor
              required // Requiere que el campo no esté vacío
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button> {/* Botón para enviar el formulario */}
        </form>
        
        <p className="text-center mt-3">
          {/* Enlace para redirigir a la página de registro */}
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
        
        {/* Muestra el mensaje de error si existe */}
        {errorMessage && <p className="text-danger mt-3 text-center">{errorMessage}</p>}
        
        {/* Muestra el mensaje de éxito si existe */}
=======
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Gmail:</label>
            <input
              type="email"
              className="form-control"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>
        
        <p className="text-center mt-3">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
        
        {errorMessage && <p className="text-danger mt-3 text-center">{errorMessage}</p>}
>>>>>>> 577ae14 (casi listo)
        {successMessage && <p className="text-success mt-3 text-center">{successMessage}</p>}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Login; // Exporta el componente Login para ser usado en otras partes de la aplicación
=======
export default Login;
>>>>>>> 577ae14 (casi listo)
