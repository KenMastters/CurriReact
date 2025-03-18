import React, { useState } from "react";
import "../estilos/Contact.css";

const Contact = () => {
  // Estados para manejar los campos del formulario y el mensaje de éxito
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Maneja el cambio en el campo de nombre
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Maneja el cambio en el campo de mensaje
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir la recarga de la página
    setSuccessMessage(`¡Gracias por tu mensaje, ${name}!`);
    setName(""); // Limpiar el campo de nombre
    setMessage(""); // Limpiar el campo de mensaje
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>

      {/* Enlace de correo */}
      <p>Correo: 
        <a href="mailto:kenmastrs@gmail.com">kenmastrs@gmail.com</a>
      </p>

      {/* Enlace de LinkedIn */}
      <p>LinkedIn: 
        <a
          href="https://www.linkedin.com/in/david-muñoz-marin-b3a94b1b4"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>

      {/* Formulario de contacto */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tu nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Escribe tu nombre"
          />
        </div>

        <div>
          <label htmlFor="message">Tu mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
            placeholder="Escribe tu mensaje"
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {/* Mensaje de éxito */}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
};

export default Contact;
