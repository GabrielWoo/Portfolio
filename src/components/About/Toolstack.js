import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiAzuredevops,
    SiAzurepipelines,
} from "react-icons/si";

import {
    DiGit
} from "react-icons/di";
import { RiOpenaiFill } from "react-icons/ri";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
              <SiVisualstudiocode />
              <h5>Visual Studio Code</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <DiGit />
              <h5>Git</h5>
          </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiPostman />
              <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiAzuredevops />
              <h5>Azure Devops</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiAzurepipelines />
              <h5>Azure Pipelines</h5>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <RiOpenaiFill />
              <h5>Chat GPT</h5>
          </Col>
    </Row>
  );
}

export default Toolstack;
