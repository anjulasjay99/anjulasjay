import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../assets/css/styles.module.css";

function Contact() {
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
                <Link to="/contact">Contact</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <img
              src={require("../assets/images/contact.jpg")}
              style={{ width: "100%", height: "350px", borderRadius: "20px" }}
            />
          </Col>
          <Col lg={6}>
            <h3>Contact Me</h3>
            <br></br>
            <p>
              <i class="fas fa-envelope"></i> anjulasjay@gmail.com
              <br></br>
              <br></br>
              <i class="fas fa-phone"></i> +94772665133
              <br></br>
              <br></br>
              <i class="fas fa-map-marker-alt"></i> 55/3B Pullayar Kovil Road,
              Matale, Sri Lanka.
              <br></br>
              <br></br>
              <i class="fab fa-linkedin"></i>{" "}
              <a
                href="https://www.linkedin.com/in/anjula-jayasinghe-0a8766219/"
                target="_blank"
              >
                /anjula-jayasinghe-0a8766219
              </a>
              <br></br>
              <br></br>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
