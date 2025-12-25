import React from "react";
import { Col, Row } from "react-bootstrap";

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,    
    DiJava,
    DiAngularSimple,
} from "react-icons/di";
import { GiPegasus, GiCubes } from "react-icons/gi";
import { SiCsharp } from 'react-icons/si';

import { FaVuejs } from "react-icons/fa6";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiCsharp />
                <h5>C#</h5>
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
                <DiAngularSimple />
                <h5>Angular JS</h5>
            </Col>            
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
                <h5>Python</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
                <h5>Java</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <GiCubes />
                <h5>VBA</h5>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <GiPegasus />
                <h5>Pega</h5>
            </Col>
        </Row>
    );
}

export default Techstack;
