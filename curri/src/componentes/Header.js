import React from "react";
import "../estilos/Header.css";
import fotoPerfil from "../imagenes/imagen1.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={fotoPerfil} alt="Foto de perfil" className="profile-pic" />
        <div>
          <h1>David Muñoz Marín</h1>
          <h2>Desarrollador Web Junior</h2>
          <p className="header-summary">
            Apasionado por la tecnología, el aprendizaje continuo y el desarrollo de soluciones web modernas. Busco aportar valor y crecer profesionalmente en equipos innovadores.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
