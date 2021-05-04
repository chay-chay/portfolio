import React from "react";
import ReactPlayer from "react-player";
import "./project.css";

const Projects = () => {
  return (
    <div className="work">
      <div className="card project">
        <h6>Project Name: Bite Bank</h6>
        <h6>Client side: React, Redux, and Thunk</h6>
        <h6>Server side: Ruby on Rails</h6>
        <h6>
          Description: Bite Bank is a media storage platform dedicated to the
          culinary arts. It allows for quick reference to cooking videos of
          interest by keeping a record of those you would like to flag and
          return to in the future. Easily searchable by name, category, and
          ethnicity…Bite Bank is a useful tool for any chef!
        </h6>
        <a href="https://bite-bank.netlify.app/" target="_blank" class="btn">
          Live App
        </a>
        <a
          href="https://github.com/chay-chay/bite-bank-client"
          target="_blank"
          class="btn"
        >
          Github
        </a>
        <div style={{ width: "auto", height: "20rem" }}>
          <ReactPlayer
            url="https://youtu.be/mVHMsb0lXLw"
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div className="card project">
        <h6>Project Name: Pair It Up!</h6>
        <h6>Client side: Javascript</h6>
        <h6>Server side: Ruby on Rails</h6>
        <h6>
          Description: Pair It Up! is a matching game where players compete to
          see if they can make matches in the fewest number of moves. When all the cards are flipped, the
          game is over. The player has the option of recording their score. If
          their score is in the top ten, it will be shown on the board at the
          end of the game.{" "}
        </h6>
        <a href="https://pair-it-up.netlify.app/" target="_blank" class="btn">
          Live App
        </a>
        <a href="https://youtu.be/M26lT_x6ADs" target="_blank" class="btn">
          Github
        </a>
        <div style={{ width: "auto", height: "20rem" }}>
          <ReactPlayer
            url="https://youtu.be/M26lT_x6ADs"
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div className="card project last-card">
        <h6>Project Name: Cafe Verdict</h6>
        <h6>Client side: Ruby on Rails</h6>
        <h6>Server side: Ruby on Rails</h6>
        <h6>
          Description: Cafe Verdict is an application that allows users to rate
          cafes base upon their experiences and perceptions of cafes they have
          visited. Before you check out or give reviews, you have to sign up and
          login to access the program.
        </h6>
        <a
          href="https://cafe-verdict.herokuapp.com/"
          target="_blank"
          class="btn"
        >
          Live App
        </a>
        <a
          href="https://github.com/chay-chay/cafe-review-rails-project"
          target="_blank"
          class="btn"
        >
          Github
        </a>
        <div style={{ width: "auto", height: "20rem" }}>
          <ReactPlayer
            url="https://youtu.be/2RUtH5Ifw24"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
