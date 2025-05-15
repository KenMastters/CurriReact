import React, { useState } from "react";
import "../estilos/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`¡Gracias por tu mensaje, ${name}!`);
    setName("");
    setMessage("");
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <p>
        Si buscas a alguien apasionado por el desarrollo web, con ganas de aprender y aportar en equipo,
        ¡no dudes en contactarme! Estoy disponible para entrevistas y abierto a nuevas oportunidades, en el 
        ambito de la informática y el desarrollo web.
      </p>
      <ul className="contact-list">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:kenmastrs@gmail.com">kenmastrs@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/david-muñoz-marin-b3a94b1b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            David Muñoz Marín
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/KenMastters"
            target="_blank"
            rel="noopener noreferrer"
          >
            KenMastters
          </a>
        </li>
        <li>
          <strong>Ubicación:</strong> <span className="contact-highlight">España</span>
        </li>
      </ul>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Envíame un mensaje directo</h3>
        <div className="form-group">
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
        <div className="form-group">
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
        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
