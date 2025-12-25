import React from "react";
import { Col, Row } from "react-bootstrap";

import VSCodeLogo from '../../Assets/Icons/Tools/VSCode.svg';
import GitLogo from '../../Assets/Icons/Tools/Git.svg';
import KubernetesLogo from '../../Assets/Icons/Tools/Kubernetes.svg';
import DockerLogo from '../../Assets/Icons/Tools/Docker.svg';
import PostmanLogo from '../../Assets/Icons/Tools/Postman.svg';
import AzureDevOpsLogo from '../../Assets/Icons/Tools/AzureDevOps.svg';
import AzurePipelinesLogo from '../../Assets/Icons/Tools/AzurePipelines.svg';
import AWSLogo from '../../Assets/Icons/Tools/AWS.svg';
import RedisLogo from '../../Assets/Icons/Tools/Redis.svg';
import SQLLogo from '../../Assets/Icons/Tools/SQL.svg';
import CosmosDBLogo from '../../Assets/Icons/Tools/AzureCosmos.svg';
import ChatGPTLogo from '../../Assets/Icons/Tools/ChatGPT.svg';
import ChromeLogo from '../../Assets/Icons/Tools/Chrome.svg';
import IntelliJLogo from '../../Assets/Icons/Tools/IntelliJ.svg';
import PegaSystemsLogo from '../../Assets/Icons/Tools/Pega.svg';



function Toolstack() {
    var iconHeight = 20;
    var iconWidth = 20;
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <img src={VSCodeLogo} alt="VS Code Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Visual Studio Code</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={GitLogo} alt="Git Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Git</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={KubernetesLogo} alt="Kubernetes Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Kubernetes</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={DockerLogo} alt="Docker Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Docker</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={PostmanLogo} alt="Postman Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Postman</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={AzureDevOpsLogo} alt="AzureDevOps Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Azure Dev Ops</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={AzurePipelinesLogo} alt="Azure Pipelines Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Azure Pipelines</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={AWSLogo} alt="AWS Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">AWS</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={RedisLogo} alt="Redis Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Redis</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={SQLLogo} alt="SQL Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">SQL</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={CosmosDBLogo} alt="Azure Cosmos Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Cosmos DB</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={ChatGPTLogo} alt="ChatGPT Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">ChatGPT</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={IntelliJLogo} alt="IntelliJ Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">IntelliJ</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={ChromeLogo} alt="Chrome Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Chrome</div>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <img src={PegaSystemsLogo} alt="Pega Logo" width={iconWidth} height={iconHeight} />
                <div className="tech-icons-text">Pega Systems</div>
            </Col>

        </Row>
    );
}

export default Toolstack;
