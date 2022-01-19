import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../assets/css/styles.module.css";
import Skills from "../components/Skills";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/projects");
  }
  return (
    <div>
      <Header></Header>
      <br></br>
      <Container>
        <Row>
          <Col>
            <center>
              <h1 className={styles.intro}>
                <span style={{ background: "white", padding: "0 10px" }}>
                  Who Am I?
                </span>
              </h1>
              <br></br>
              <p>
                <i>
                  I am Anjula Jayasinghe. I am an enthusiastic, hard-working
                  software developer from Sri Lanka. Currently I am following a
                  software engineering degree at Sri Lanka Institute of
                  Information Technology (SLIIT). I have completed the first two
                  years of my degree program so far and I have been able to
                  maintain a very good CGPA throughout the first two years. In
                  the last few years, I learned a lot of technologies and tools
                  and contributed to many software development projects.
                </i>
              </p>
            </center>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col lg={6}>
            <Image
              src={require("../assets/images/plans.jpg")}
              fluid={true}
              style={{ borderRadius: "20px" }}
            />
          </Col>
          <Col lg={6}>
            <h1 className={styles.intro}>
              <span style={{ background: "white", padding: "0 10px" }}>
                Education
              </span>
            </h1>
            <br></br>
            <p>
              <i>
                In 2005, I started schooling at Vijaya College, Matale. After
                the grade 5 scholarship exam, I started schooling at St. Thomas'
                College, Matale. From grade 10 to 13, I went to Government
                Science College, Matale and did my O/Ls and A/Ls there. I got 8
                As and 1 B for my O/Ls. After O/Ls, I decided to do my A/Ls in
                pyhsical science stream. I did my A/Ls in 2019 and got 3 credit
                passes. After that, in 2020, I decided to follow a software
                engineering degree at Sri Lanka Institute of Information
                Technology (SLIIT)
              </i>
            </p>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col lg={6}>
            <h1 className={styles.intro}>
              <span style={{ background: "white", padding: "0 10px" }}>
                My Projects
              </span>
            </h1>
            <br></br>
            <p>
              <i>
                Throughout the last two years, I have been able to contribute to
                many software development projects. Most of them were university
                projects. However, All those projects exposed me to many
                technologies and tools and helped me to improve my skills and
                expand my knowledge. You can view more details about my projects
                by clicking the button below.
              </i>
            </p>
            <button className={styles.btnPrimary} onClick={handleClick}>
              See My Projects
            </button>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <Image
              src={require("../assets/images/projects.jpg")}
              fluid={true}
              style={{ borderRadius: "20px" }}
            />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Skills></Skills>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col lg={6}>
            <Image
              src={require("../assets/images/jobs.jpg")}
              fluid={true}
              style={{ borderRadius: "20px" }}
            />
          </Col>
          <Col lg={6}>
            <h1 className={styles.intro}>
              <span style={{ background: "white", padding: "0 10px" }}>
                Open To Work
              </span>
            </h1>
            <br></br>
            <p>
              <i>
                I want to put my analyzing, designing, and programming skills
                into practice in order to improve my skills furthermore. Because
                of that, I am currently looking for a software engineering
                internship opportunity. If you are a recruiter, please contact
                me through my email or phone. You can also contact me through
                Linkedin.
              </i>
            </p>
            <button
              className={styles.btnSecondary}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/anjula-jayasinghe-0a8766219/"
                );
              }}
            >
              Visit My Linkedin Profile
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
