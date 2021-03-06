import React, { useContext } from "react";
import { Context } from "../Context";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavHeader() {
  const { darkmode, modechange } = useContext(Context);
  return (
    <div className="navbarcss">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={darkmode ? "light" : "dark"}
        variant={darkmode ? "light" : "dark"}
      >
        <Navbar.Brand>
          <i
            className={
              darkmode ? "fa fa-sun-o modetoggler" : "fa fa-moon-o modetoggler"
            }
            onClick={() => modechange()}
          ></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <Link to="/" className={darkmode ? "linkdark" : "linklight"}>
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/about" className={darkmode ? "linkdark" : "linklight"}>
                ABOUT
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link
                to="/projects"
                className={darkmode ? "linkdark" : "linklight"}
              >
                PROJECTS
              </Link>
            </Nav.Link>
            {/* <Nav.Link href="#"><Link to='/contact' className={darkmode?"linkdark":"linklight"}>CONTACT</Link></Nav.Link> */}
            <Nav.Link
              href="https://drive.google.com/u/0/uc?id=1riLZxU3V88_8AfO8Dwl7GmqB1EQvEekh&export=download"
              className={darkmode ? "linkdark" : "linklight"}
            >
              RESUME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavHeader;
