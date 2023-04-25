import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onLoginClick })=> {
 
  return (
    <header>
      <img src="/images/logo-no-background.png" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            
          <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
          
            <Link to="/parties">Parties</Link>
          </li>
          <li>
            <a href="/weddings">Weddings</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {/* <li>
            <button onClick={onLoginClick}>Login</button>
          </li> */}
          <li>
            <button className="user-icon" onClick={onLoginClick}>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
