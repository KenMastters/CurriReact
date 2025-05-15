import React from "react";
import "../estilos/Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experiencia</h2>
      <ul className="experience-list">
        <li>
          <strong>Prácticas FCT - Comenius IDI</strong> <span className="exp-date">2025</span><br />
          <span className="exp-role">Desarrollador Web Junior</span>
          <p>
            Adaptación de software médico <em>OpenEMR</em> para una clínica privada, realizando modificaciones de interfaz y funcionalidad con tecnologías web (HTML, CSS, PHP).
          </p>
          <p>
            Diseño de interfaces de usuario con Figma para mejorar la experiencia y usabilidad.
          </p>
          <p>
            Instalación y testeo de aplicaciones como ERPNext, asegurando su correcto funcionamiento en entorno real.
          </p>
          <p>
            Desarrollo de una aplicación básica para la gestión de tareas, incluyendo instalación en servidor con Apache y MySQL.
          </p>
          <p>
            Implementación de funcionalidades como la generación de documentos PDF utilizando la biblioteca TCPDF.
          </p>
          <p>
            Aprendiendo a utilizar herramientas de control de versiones como Git y GitHub para la gestión de proyectos.
          </p>
           <p>
            Participación en reuniones de equipo para la planificación y seguimiento de proyectos, mejorando mis habilidades de comunicación y trabajo en equipo.
          </p>
           <p>
            Aprendiendo todo lo relacionado con la administración de sistemas Linux, incluyendo la instalación y configuración de servidores web y bases de datos.
          </p>
           <p>
            Manejo de la IA de forma eficiente para la creación de contenido, optimización de procesos, documentación y generación de ideas.
          </p>
          <p>
            En definitiva, una experiencia enriquecedora que me ha permitido aplicar mis conocimientos teóricos en un entorno real y adquirir nuevas habilidades en el desarrollo web y la administración de sistemas.
          </p>       
        </li>
        <li>
          <strong>Tornero Fresador</strong> <span className="exp-date">2019 - 2023</span><br />
          <span className="exp-role">Fabricación Mecánica de piezas a medida</span>
        </li>
        <li>
          <strong>Crupier en mesas de juego</strong> <span className="exp-date">2006 - 2018</span><br />
          <span className="exp-role">Crupier profesional en casino</span>
        </li>
        <li>
          <strong>Dependiente</strong> <span className="exp-date">2004 - 2006</span><br />
          <span className="exp-role">Atención al cliente en Toys "R" Us</span>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
