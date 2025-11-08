import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiAzuredevops,
    SiAzurepipelines,
    SiAmazonaws,
    SiRedis,
    SiPostgresql
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa";


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
                <SiAmazonaws />
                <h5>AWS</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis />
                <h5>Redis</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
                <h5>SQL Workbench</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaGlobe />
                <h5>Cosmos DB</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <RiOpenaiFill />
                <h5>Chat GPT</h5>
            </Col>
        </Row>
    );
}

export default Toolstack;
