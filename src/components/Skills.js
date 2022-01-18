import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../assets/css/styles.module.css";

function Skills() {
  return (
    <div>
      <>
        <div className={styles.skillsDiv}>
          <Container>
            <Row>
              <Col>
                <center>
                  <h1>I'm Familiar With</h1>
                </center>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={styles.skillsFlex}>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/java.png")}
                      style={{ width: "100px", height: "100px" }}
                      title="Java"
                    />
                  </div>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/js.png")}
                      style={{ width: "70px", height: "70px" }}
                      title="JavaScript"
                    />
                  </div>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/react.png")}
                      style={{ width: "150px", height: "50px" }}
                      title="ReactJS"
                    />
                  </div>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/node.png")}
                      style={{ width: "120px", height: "70px" }}
                      title="Node.js"
                    />
                  </div>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/mongo.png")}
                      style={{ width: "160px", height: "50px" }}
                      title="MongoDB"
                    />
                  </div>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/sql.png")}
                      style={{ width: "130px", height: "60px" }}
                      title="SQL"
                    />
                  </div>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/android.png")}
                      style={{ width: "70px", height: "70px" }}
                      title="Android Native App Development"
                    />
                  </div>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/python.png")}
                      style={{ width: "130px", height: "70px" }}
                      title="Python"
                    />
                  </div>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/bootstrap.png")}
                      style={{ width: "110px", height: "110px" }}
                      title="Bootstrap"
                    />
                  </div>
                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/php.png")}
                      style={{ width: "110px", height: "70px" }}
                      title="PHP"
                    />
                  </div>

                  <div className={styles.skillCont}>
                    <img
                      src={require("../assets/images/git.png")}
                      style={{ width: "110px", height: "50px" }}
                      title="Git"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    </div>
  );
}

export default Skills;
