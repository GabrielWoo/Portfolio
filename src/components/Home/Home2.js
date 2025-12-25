import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg2 from "../../Assets/avatar2.jpg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Let me <span className="purple"> introduce </span> myself
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I am decent at it, I think... 🤷‍♂️
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple"> C# and Javascript.</b>
                            </i>
                            <br />
                            <br />
                            I enjoy building interesting &nbsp;
                            <i>
                                <b className="purple">applications / tools </b> and
                                also solving {" "}
                                <span className="purple">
                                    challenges
                                </span>
                            </i>
                            <br />
                            <br />
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg2} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>Connect with <div className="purple">ME</div> </h1>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/GabrielWoo"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/gabrielwoo1/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
