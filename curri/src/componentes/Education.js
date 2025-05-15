import React from "react";
import "../estilos/Education.css";

const Education = () => {
  return (
    <section className="education">
      <h2>Educación</h2>
      <ul className="education-list">
        <li>
          <strong>Desarrollo de Aplicaciones Web</strong><br />
          <span className="education-center">IES Francisco de Goya</span> <span className="education-date">2023 - Actualidad (en FCT)</span>
        </li>
        <li>
          <strong>Prueba de acceso a ciclos de grado superior</strong><br />
          <span className="education-center">IES Miguel de Cervantes</span> <span className="education-date">2023</span>
        </li>
        <li>
          <strong>Mecanizado por corte y conformado</strong><br />
          <span className="education-center">FREEM</span> <span className="education-date">2018 - 2019</span>
        </li>
        <li>
          <strong>Graduado en ESO</strong><br />
          <span className="education-center">Colegio Marco</span> <span className="education-date">2000 - 2004</span>
        </li>
      </ul>
    </section>
  );
};

export default Education;
