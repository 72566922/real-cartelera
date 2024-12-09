import React, { useState, useEffect } from "react";

function CarruselPelicula({ items, tipo }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [items.length]);

  if (!Array.isArray(items) || items.length === 0) {
    return <p>No hay elementos disponibles.</p>;
  }

  return (
    <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            <div
              className={`card ${tipo === "pelicula" ? "mx-auto" : ""}`}
              style={{ width: "18rem" }}
            >
              <img
                src={item.imagenUrl}
                className="card-img-top"
                alt={item.nombre}
                style={{
                  height: "400px",   // Altura fija como antes
                  objectFit: "cover", // Recorte automático
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{item.nombre}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarruselPelicula;
