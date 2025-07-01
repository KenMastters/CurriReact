import React from "react";
import "../estilos/About.css";

const About = () => {
  return (
    <section className="about">
      <h2>Sobre mí</h2>
      <p>
      Soy un desarrollador web junior titulado en Desarrollo de Aplicaciones Web por Comenius IDI.
        He completado mi formación, incluyendo la FCT, y he desarrollado un proyecto final consistente en una tienda de fútbol online llamada Futbol King, enfocada en la experiencia de usuario y el diseño responsive.
        Busco mi primera oportunidad laboral en el sector, en una empresa que valore el crecimiento continuo y el compromiso. 
        Estoy especialmente interesado en seguir aprendiendo y profundizando en tecnologías como JavaScript, React, PHP, y otras que el entorno profesional requiera. 
        Tengo una fuerte motivación, capacidad de adaptación y muchas ganas de aportar desde el primer día..
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
