import React from "react";
import "../estilos/Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <ul className="projects-list">
        <li>
          <strong>Futbol King</strong> <span className="project-type">– Tienda online de fútbol (TFG)</span>
          <p>
            Desarrollo completo de una tienda online con JavaScript, HTML, CSS, Bootstrap y backend en Firebase.
          </p>
          <p>
            Proyecto enfocado en diseño responsive y experiencia de usuario.
          </p>
          <br />
          <p>
            Funcionalidades implementadas:
            <ul>
              <li>Carrito de compras y gestión de usuarios.</li>
              <li>Administración de productos, pedidos y stock.</li>
              <li>Autentificación y autorización de usuarios.</li>
              <li>Registro y login con Google y Facebook.</li>
              <li>Formulario de contacto real.</li>
              <li>Pedidos con recepción de email tanto al cliente como al administrador.</li>
              <li>Sistema de reseñas al finalizar la compra.</li>
              <li>Y más funcionalidades que desvelaremos una vez presentado el TFG.</li>
            </ul>
          </p>
          <span className="project-private">Repositorio privado en GitHub (por ahora)</span>
        </li>
        <li>
          <strong>Diseño web personalizado con Figma</strong>
          <p>
            Creación de prototipos y diseño visual para una web corporativa, aplicando principios de usabilidad y branding. Proyecto básico realizado en Figma.
          </p>
        </li>
        <li>
          <strong>OpenEMR para clínica privada</strong>
          <p>
            Instalación, personalización y modificación de <em>OpenEMR</em> (software médico de código abierto) para una clínica privada. Creación de roles, gestión de permisos, personalización de la interfaz y adaptación a las necesidades del cliente.
          </p>
          <a
            href="https://github.com/KenMastters/openemr-backup"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver repositorio OpenEMR en GitHub
          </a>
        </li>
        <li>
          <strong>Aplicación web para registro de tareas</strong>
          <p>
            Desarrollo de una aplicación web sencilla para la gestión y registro de tareas, con funcionalidades CRUD y almacenamiento en base de datos. Proyecto realizado como práctica de integración.
          </p>
          <a
            href="https://github.com/KenMastters/Registro-Diario"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver proyecto en GitHub
          </a>
        </li>
        <li>
          <strong>Currículum Interactivo</strong>
          <p>
            Aplicación web construida en React como portfolio online.
          </p>
          <a
            href="https://github.com/KenMastters/CurriReact/tree/main/curri"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver mis repositorios en GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
