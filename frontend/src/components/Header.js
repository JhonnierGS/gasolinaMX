import React from "react";
import "../style/gas.css";
import gasStation from "../images/gasStation.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHandHoldingUsd,
  faHome,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ titulo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const hideShow = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="header-menu">
      <Link to="/" className="station-menu">
        <figure className="station-menu">
          <img src={gasStation} alt="ico"></img>
          <h3>Gasolina MX</h3>
        </figure>
      </Link>
      <a className="icon-menu-burguer" href="#" onClick={hideShow}>
        {" "}
        <FontAwesomeIcon icon={faBars} />
      </a>
      <div className={`burguer-menu ${isVisible ? "is-active" : ""}`}>
        <ul>
          <li>
            <Link to="/">
              <span className="home">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link to="/FindStation">
              <span className="find">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              Find Station
            </Link>
          </li>
          <li>
            <Link to="/topStation">
              <span className="top">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
              </span>
              Top Station
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
