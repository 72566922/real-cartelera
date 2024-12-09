import React from 'react'; // Importa React
import { FaWhatsapp } from 'react-icons/fa'; // Importa el ícono de WhatsApp desde react-icons
import './ayuda.css'; // Asegúrate de que el archivo CSS esté correctamente importado

const Ayuda = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="ayuda-row w-100 justify-content-center">
          {/* Contenedor de temas prioritarios */}
          <div className="col-12 col-md-9 mb-4 d-flex justify-content-center">
            <div className=" p-4">
              <h3 className="text-center mb-3">Temas prioritarios que tratamos:</h3>
              <div className="alert alert-info ayuda-alert" role="alert">
                <ul>
                  <li><strong>Fallo de la web o bugs:</strong> Si experimentas problemas técnicos con el sitio, por favor detállanos el error.</li>
                  <li><strong>Soporte en pedidos:</strong> Si tienes dudas sobre el estado de tu pedido, podemos ayudarte.</li>
                  <li><strong>Consultas generales:</strong> ¿Tienes preguntas sobre productos o servicios? ¡Estamos aquí para responder!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contenedor de contacto por WhatsApp */}
          <div className="col-12 col-md-9 mb-4 d-flex justify-content-center">
            <div className=" p-4">
              <h3 className="text-center mb-4">¡Estamos aquí para ayudarte!</h3>
              <p className="text-center mb-4">
                Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos a través de WhatsApp.
              </p>

              <div className="text-center">
                <a
                  href="https://wa.me/9393147440223" // Reemplaza con tu número de WhatsApp
                  className="btn btn-success btn-lg ayuda-btn-success"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={30} className="me-2" />
                  Contactar por WhatsApp
                </a>
              </div>

              <p className="text-center mt-3">
                <small>Estaremos encantados de asistirte.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ayuda;
