import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../assets/css/styles.module.css";

function Header() {
  return (
    <div>
      <Container
        style={{
          backgroundColor: "whitesmoke",
          paddingTop: "10px 10px 10px 10px",
        }}
      >
        <Row>
          <Col sm={6}>
            <div className={styles.headerDiv}>
              <div>
                <h1>
                  Hello,<br></br>
                  I'm Anjula
                </h1>
                <p>
                  <i>This is my portfolio web site.</i>
                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} className="d-none d-lg-block">
            <img
              src={require("../assets/images/hello.png")}
              style={{ weight: "500px", height: "500px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
