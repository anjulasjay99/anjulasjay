import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
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
          <Col sm={6} className="d-none d-sm-block">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Image src={require("../assets/images/hello.png")} fluid={true} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
