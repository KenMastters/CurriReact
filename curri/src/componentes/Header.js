import React from "react";
import "../estilos/Header.css";
import fotoPerfil from "../imagenes/imagen1.jpg"; 

const Header = () => {
  return (
    <header className="header">
      <img src={fotoPerfil} alt="Foto de perfil" className="profile-pic" />
      <h1>Tu Nombre</h1>
      <h2>Desarrollador Web</h2>
    </header>
  );
};

export default Header;
