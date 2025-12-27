import React from "react";
import { Col, Row } from "react-bootstrap";
import CSharpLogo from '../../Assets/Icons/Languages/CSharp.svg';
import NodeJsLogo from '../../Assets/Icons/Languages/NodeJS.svg';
import ReactLogo from '../../Assets/Icons/Languages/ReactJS.svg';
import VueLogo from '../../Assets/Icons/Languages/VueJS.svg';
import AngularLogo from '../../Assets/Icons/Languages/AngularJS.svg';
import PythonLogo from '../../Assets/Icons/Languages/Python.svg';
import JavaLogo from '../../Assets/Icons/Languages/Java.svg';
import VBALogo from '../../Assets/Icons/Languages/VBA.svg';

function Techstack() {
    var iconHeight = 20;
    var iconWidth = 20;

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <img src={CSharpLogo} alt="C#" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">C++</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={NodeJsLogo} alt="NodeJs" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Node Js</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={ReactLogo} alt="ReactJs" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">React Js</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={VueLogo} alt="VueJs" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Vue Js</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={AngularLogo} alt="AngularJs" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Angular Js</div>
            </Col>
            
            <Col xs={4} md={2} className="tech-icons">
                <img src={PythonLogo} alt="Python" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Python</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={JavaLogo} alt="Java" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Java</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={VBALogo} alt="VBA" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">VBA</div>
            </Col>
            
        </Row>
    );
}

export default Techstack;
