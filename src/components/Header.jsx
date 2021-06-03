import React from "react";

import "../css/GlobalStyle.css";
import "../css/Header.css";

const Header = () => {
  return (
    <header>
      <div className="Profile">
        <figure className="Profile-image">
          <img src="./assets/img/profile-image.jpg" alt="Imagen de Perfil" />
        </figure>
      </div>
      <figure className="Logo">
        <img src="./assets/img/icon-kali-blue-medium.svg" alt="Logo Kali" />
      </figure>
      <nav>
        <input type="checkbox" id="menu" />
        <label for="menu"> Menu </label>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>YYYY</button>
          </li>
          <li>
            <button>XXXX</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
