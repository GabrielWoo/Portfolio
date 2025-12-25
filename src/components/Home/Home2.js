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
                            I’m a Software Engineer who loves transforming ideas into
                            reliable, scalable products and also solving challenges whenever possible.
                            I take pride in turning ideas into reliable, scalable software and constantly push myself to learn new technologies.
                            Beyond coding, I enjoy collaborating, sharing knowledge, and tackling the next big challenge that comes my way.
                                <br />
                                <br />
                                I’m proficient in
                                <i>
                                    <b className="purple">
                                        {" "}
                                        Javascript and C#{" "}
                                    </b>
                                </i>
                                — and I enjoy learning new things
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