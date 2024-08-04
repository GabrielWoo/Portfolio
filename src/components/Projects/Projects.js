import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ConstructionImg from "../../Assets/inProgress.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
              <p style={{ color: "white" }}>
                  This is a <span className="purple">work in progress</span>. Check back again.
              </p>

              <img src={ConstructionImg} alt="In-Progress" className="img-fluid" width="500" height="600" />
        
      </Container>
    </Container>
  );
}

export default Projects;
