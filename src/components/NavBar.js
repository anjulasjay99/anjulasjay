import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../assets/css/styles.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={require("../assets/images/logo.png")}
                style={{ width: "25px", height: "25px" }}
                title="Hello, I'm Anjula"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.navlink}>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link className={styles.navlink}>
                <Link to="/projects">Projects</Link>
              </Nav.Link>
              <Nav.Link className={styles.navlink}>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="https://github.com/anjulasjay99" target="_blank">
                <img
                  src={require("../assets/images/github.png")}
                  style={{ width: "25px", height: "25px" }}
                  title="Github"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
