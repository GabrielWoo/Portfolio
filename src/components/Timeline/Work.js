import React from "react";
import Typewriter from "typewriter-effect";

function Work() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Eat();",
                    "Sleep();",
                    "Code();",
                    "Repeat();"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Work;