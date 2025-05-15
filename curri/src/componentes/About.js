import React from "react";
import "../estilos/About.css";

const About = () => {
  return (
    <section className="about">
      <h2>Sobre mí</h2>
      <p>
        Soy un desarrollador web junior en formación, actualmente cursando la FCT del ciclo formativo de
        Desarrollo de Aplicaciones Web en Comenius IDI. Estoy desarrollando mi proyecto final, una tienda de
        fútbol online llamada <strong>Futbol King</strong>, enfocada en la experiencia de usuario y el diseño
        responsive. Busco una oportunidad laboral donde pueda seguir aprendiendo, creciendo profesionalmente,
        y aportar desde el primer día con mis conocimientos en tecnologías como JavaScript, React, PHP, y más.
      </p>
      <ul className="about-skills">
        <li>✔️ Proactivo y con gran capacidad de aprendizaje</li>
        <li>✔️ Enfoque en el trabajo en equipo y la comunicación</li>
        <li>✔️ Apasionado por la tecnología y la innovación</li>
      </ul>
    </section>
  );
};

export default About;
