import React from "react";
import Particle from "../Particle";
import GenZ from "../../Assets/GenZ_1.jpg";
import Kanban from "../../Assets/Kanban.jpg"
import ProjectCard from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import lofiGirl from "../../Assets/lofi-girl.gif";
import covid from "../../Assets/covid.gif"

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
                            imgPath={Kanban}
                            isBlog={false}
                            title="Personal Kanban"
                            description="An interactive kanban site to host all my TODOs. Built using HTML and d3.js"
                            ghLink="https://github.com/GabrielWoo/ideationBoard"
                            demoLink="https://gabrielwoo.github.io/ideationBoard/"
                        />
                    </Col>

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
                            imgPath={lofiGirl}
                            isBlog={false}
                            title="Cozy Corner"
                            description="My quiet refuge where I retreat whenever I need to focus. Made with basic HTML, CSS and JS"
                            ghLink="https://github.com/GabrielWoo/CozyCorner"
                            demoLink="https://gabrielwoo.github.io/CozyCorner/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={covid}
                            isBlog={false}
                            title="Covid Dashboard (2020 - 2022)"
                            description="A COVID dashboard meant to show how the different countries handled the pandemic from 2020 - 2022"
                            ghLink="https://github.com/GabrielBeepBoop/CSC3007-project-codes"
                            demoLink="https://gabrielbeepboop.github.io/CSC3007-project-codes/"
                        />
                    </Col>

                    

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={laptopImg}
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
