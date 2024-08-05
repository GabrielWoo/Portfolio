import React from "react";
import Particle from "../Particle";
import ConstructionImg from "../../Assets/inProgress.jpg";
import GenZ from "../../Assets/GenZ.png"
import ProjectCard from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GenZ}
              isBlog={false}
              title="Gen Z Translator"
              description="Javascript converter to convert Javascript code into Gen Z slangs. Made with basic HTML, CSS and JS"
              ghLink="https://github.com/GabrielWoo/GenZTranslator"
              demoLink="https://gabrielwoo.github.io/GenZTranslator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ConstructionImg}
              isBlog={false}
              title="More to Come"
              description="Work in Progress."              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
