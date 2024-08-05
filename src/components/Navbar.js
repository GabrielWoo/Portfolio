import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiFillSignal
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>

                {/*Logo */}
                <Navbar.Brand className="d-flex">
                    GW
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>

                    {/*Home */}
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="Portfolio/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>

                        {/*About */}
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="Portfolio/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>

                        {/*Project */}
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="Portfolio/project"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        {/*Work Experience */}
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="Portfolio/timeline"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiFillSignal  
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Timeline
                            </Nav.Link>
                        </Nav.Item>

                        {/*Resume */}
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="Portfolio/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
