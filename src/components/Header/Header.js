import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src="/images/logo-no-background.png" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/restaurants">Restaurants</a>
          </li>
          <li>
            <a href="/parties">Parties</a>
          </li>
          <li>
            <a href="/weddings">Weddings</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
