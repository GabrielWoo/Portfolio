import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Globe from "./Globe";

function About() {
    return (
        <Container fluid className="about-section">

            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={6}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            About <strong className="purple">Me</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        md={6}
                    >
                        <Globe />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <Toolstack />

            </Container>
            <Particle />
        </Container>
    );
}

export default About;
