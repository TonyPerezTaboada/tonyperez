import React, { useState } from "react";
import "../css/GlobalStyle.css";
import "../css/Menu.css";

const Menu = () => {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    setActive(!active);
  }

  return (
    <>
      <div
        className={`Hamburger${active ? "-active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="_layer -top"></div>
        <div className="_layer -mid"></div>
        <div className="_layer -bottom"></div>
      </div>
      <nav className={`Main-menu${active ? "-active" : ""}`}>
        <ul>
          <li>
            <button type="button" onClick={toggleMenu}>Opcion 1</button>
          </li>
          <li>
            <button type="button" onClick={toggleMenu}>Opcion 2</button>
          </li>
          <li>
            <button type="button" onClick={toggleMenu}>Opcion 3</button>
          </li>
          <li>
            <button type="button" onClick={toggleMenu}>Opcion 4</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
