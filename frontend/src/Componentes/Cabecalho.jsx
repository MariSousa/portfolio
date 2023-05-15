import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

//logotipo
import Logo from "../assets/logo-roxo.png";

//react router
import { Link } from "react-router-dom";

//css
import "./css/cabecalho.css";

//links
import Home from "./Home";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="cabecalho__navbar">
        <Container className="navbar__container">
          {/* Logotipo */}
          <Navbar.Brand href="#home" className="container__navbrand">
            <Link to="/" className="navbrand__link">
              <img
                src={Logo}
                alt="Logotipo do portfólio - fundo roxo com as letras M S"
                className="link__logotipo"
              />
            </Link>
          </Navbar.Brand>

          {/* Menu hamburguer */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="container__menuMobile"
          />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="container__collapse"
          >
            {/* Menu Links */}
            <Nav className="me-auto collapse__links">
              <Nav.Link>
                <Link to="/sobremim" className="links__item">
                  Sobre mim
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/projetos" className="links__item">
                  Projetos
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/contato" className="links__item">
                  Contato
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Cabecalho;
