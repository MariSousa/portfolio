import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

//icones
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Face4RoundedIcon from "@mui/icons-material/Face4Rounded";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";

//css
import styles from "../Componentes/css/cabecalho.module.css";

//logotipo
import Logo from "../assets/logo.png";

//react router
import { NavLink, useLocation, useMatch, useNavigate } from "react-router-dom";

//links
import useMedia from "../Hooks/useMedia";

const Cabecalho = () => {
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className={`${styles.cabecalho} container`}>
      <a href="#conteudoprincipal" className="skip__link">
        Pular para o conteúdo principal?
      </a>
      <div className={styles.logotipo}>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      {/* Navbar */}
      <div className={styles.nav__flex}>
        {mobile && (
          <buton
            aria-label="Menu"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></buton>
        )}

        {/* <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <NavLink to="/" end>
            <HomeRoundedIcon />
            {mobile && "Início"}
          </NavLink>
          <NavLink to="/sobremim">
            <Face4RoundedIcon />
            {mobile && "Sobre Mim"}
          </NavLink>
          <NavLink to="/projetos">
            <LaptopChromebookRoundedIcon />
            {mobile && "Projetos"}
          </NavLink>
          <NavLink to="/contato">
            <ContactPageRoundedIcon />
            {mobile && "Contato"}
          </NavLink>
        </nav> */}
      </div>
    </header>
  );
};

export default Cabecalho;
