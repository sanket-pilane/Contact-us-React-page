import React from "react";
import style from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={`${style.navigation} container`}>
      <img src="/images/brand_logo.png" alt="Nike" />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contanct</li>
      </ul>
    </nav>
  );
}

export default Navigation;
