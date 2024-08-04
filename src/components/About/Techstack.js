import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,    
    DiJava,
} from "react-icons/di";
import { GiPegasus } from "react-icons/gi";

import { FaVuejs } from "react-icons/fa6";
import {
    SiRedis,
    SiPostgresql,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
                <h5>C++</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
                <h5>JavaScript</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
                <h5>Node JS</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
                <h5>React JS</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaVuejs />
                <h5>Vue JS</h5>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <GiPegasus />
                <h5>Pega</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis />
                <h5>Redis</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
                <h5>Postgres SQL</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
                <h5>Python</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
                <h5>Java</h5>
            </Col>
        </Row>
    );
}

export default Techstack;
