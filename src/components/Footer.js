import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../assets/css/styles.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <br></br>
      <br></br>
      <>
        <div className={styles.footerDiv}>
          <Container>
            <Row>
              <Col>
                <img
                  src={require("../assets/images/logo.png")}
                  style={{ width: "25px", height: "25px" }}
                  alt="Github"
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Link to="/home">Home</Link>
                <br></br>
                <Link to="/projects">Projects</Link>
                <br></br>
                <a href="https://github.com/anjulasjay99" target="_blank">
                  Github
                </a>
                <br></br>
                <a
                  href="https://www.linkedin.com/in/anjula-jayasinghe-0a8766219/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <br></br>
              </Col>
              <Col>
                <Link to="/contact">Contact</Link>
                <br></br>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <>
                  Developed by <i>Anjula Jayasinghe</i>
                </>
              </Col>
            </Row>
            <br></br>
          </Container>
        </div>
      </>
    </div>
  );
}

export default Footer;
