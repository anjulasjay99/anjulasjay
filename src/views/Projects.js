import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../assets/css/styles.module.css";

function Projects() {
  return (
    <div>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/projects">Projects</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Wonder Lanka Tours Web Application (MERN Stack)</h3>
            <p>
              <i>Client-Based Project</i>
              <br></br>
              Type : Web Application<br></br>
              Technologies : ReactJS, Node.js, ExpressJS, MongoDB, Bootstrap,
              React Bootstrap, JavaScript, HTML, CSS
              <br></br>Git repository (Front-end) :{" "}
              <a
                href="https://github.com/IT20206864/WonderLanka"
                target="_blank"
              >
                <i>Click here</i>
              </a>
              <br></br>Git repository (Back-end) :{" "}
              <a
                href="https://github.com/IT20206864/WonderLanka_Backend"
                target="_blank"
              >
                <i>Click here</i>
              </a>
            </p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h3>RecycloWaste Application (Android/ Java)</h3>
            <p>
              <i>University Project</i>
              <br></br>
              Type : Mobile Application<br></br>
              Technologies : Java, Firebase
              <br></br> Git repository :{" "}
              <a
                href="https://github.com/IT20206864/RecycloWaste_Project"
                target="_blank"
              >
                <i>Click here</i>
              </a>
            </p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h3>Laundry Management System (Jsp, Java Servlet, MySQL)</h3>
            <p>
              <i>University Project</i>
              <br></br>
              Type : Web Application<br></br>
              Technologies : Java, MySQL, Bootstrap, JavaScript, HTML, CSS
              <br></br> Git repository :{" "}
              <a href="https://github.com/anjulasjay/LMS" target="_blank">
                <i>Click here</i>
              </a>
            </p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h3>Life Insurance Management System (PHP, MySQL)</h3>
            <p>
              <i>University Projects</i>
              <br></br>
              Type : Web Application<br></br>
              Technologies : PHP, MySQL, JavaScript, HTML, CSS
              <br></br>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
