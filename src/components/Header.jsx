import React from "react";
import Menu from "./Menu";

import "../css/GlobalStyle.css";
import "../css/Header.css";

const Header = () => {
  return (
    <header>
      <div className="Profile">
        <figure className="Profile-image">
          <img src="./assets/img/profile-image-100px.jpg" alt="Imagen de Perfil" />
        </figure>
      </div>
      <figure className="Logo">
        <img src="./assets/img/icon-kali-blue-medium.svg" alt="Logo Kali" />
      </figure>
      <div className="Menu">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
