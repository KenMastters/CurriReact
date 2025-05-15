import React, { useState } from "react";
import "../estilos/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xzzryype", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setSuccessMessage(`¡Gracias por tu mensaje, ${name}!`);
        setName("");
        setMessage("");
        setErrorMessage("");
      } else {
        setErrorMessage("Hubo un problema al enviar el mensaje. Inténtalo más tarde.");
      }
    } catch (error) {
      setErrorMessage("Error de conexión. Intenta de nuevo.");
    }
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <p>
        Si buscas a alguien apasionado por el desarrollo web, con ganas de aprender y aportar en equipo,
        ¡no dudes en contactarme! Estoy disponible para entrevistas y abierto a nuevas oportunidades, en el 
        ámbito de la informática y el desarrollo web.
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
            name="name"
            required
            placeholder="Escribe tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Tu mensaje:</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Escribe tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
