import React from "react";
import "./about.css"


const About = () => {
    return(
        <div id="about">
            <h1 style={{ padding: 20, textAlign: "center" }}>About</h1>
            <div className="about-me">
                <p>Full stack software developer originally from Thailand with a passion to learn new technologies. Experienced in JavaScript and Ruby-based programming with a background in International Business Management. Strong problem-solving and organizational skills useful in any multidisciplinary setting. Effective in a team atmosphere with thoughtful attention to communication.</p>
                <div className="my-app">
                <img src="https://img.icons8.com/nolan/64/html-5.png" alt="html" className="app-pic" />
                <img src="https://img.icons8.com/nolan/64/css-filetype.png" alt="css" className="app-pic" />
                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="css" className="app-pic" />
                <img src="https://img.icons8.com/nolan/64/js.png" alt="js" className="app-pic" />
                <img src="https://img.icons8.com/nolan/64/json.png" alt="json" className="app-pic" />
                <img src="https://img.icons8.com/nolan/64/react-native.png" alt="react" className="app-pic" />
                
                </div>
            </div>
            
        </div>
    )
}

export default About