import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            id="Main"
            options={{
                strings: [
                    "Software Developer",
                    "Tech Enthusiast",
                    "Long-Time Gamer",
                    "Dog Person"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                skipAddStyles: true,
                
            }}
        />
    )}

export default Type;
