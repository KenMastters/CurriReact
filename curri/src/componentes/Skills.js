import React from "react";
import "../estilos/Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <div className="skills-container">
        <div>
          <h3>Habilidades técnicas</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React</li>
            <li>PHP y MySQL</li>
            <li>Bootstrap</li>
            <li>Firebase</li>
            <li>Figma (diseño de interfaces)</li>
            <li>Git y GitHub</li>
            <li>Instalación y administración de software</li>
            <li>Conocimientos básicos de Apache, Docker y Nginx</li>
          </ul>
        </div>
        <div>
          <h3>Habilidades personales</h3>
          <ul>
            <li>Trabajo en equipo</li>
            <li>Comunicación</li>
            <li>Resolución de problemas</li>
            <li>Proactividad y aprendizaje continuo</li>
            <li>Compromiso e interés</li>
            <li>Soporte técnico</li>
            <li>Uso eficiente del tiempo</li>
            <li>Manejo de la IA para optimización y creatividad</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
