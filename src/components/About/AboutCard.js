import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Gabriel Woo </span>
                        from <span className="purple">Singapore,🇸🇬</span>
                        <br />
                        I'm currently employed as a Software Developer at Accenture.
                        <br />
                        I have a degree in Computer Science from Singapore Institute of Technology / University of Glassgow.
                        <br />
                        <br />
                        Apart from coding, here are some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Watching Shows
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Solving Puzzles
                        </li>
                    </ul>


                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
