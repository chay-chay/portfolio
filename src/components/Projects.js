import React from "react";
import ReactPlayer from "react-player";
import "./project.css";
import data from "../data.json";

const Projects = () => {
  const { portfolio } = data;
 
  return (
    <div className="work">
      {portfolio.map((project) => {
        return (
          <div className="card project ">
            <img
              src="https://img.icons8.com/clouds/100/000000/weather-portal-.png"
              alt="img"
              className="image"
            />
            <h6>Project Name: {project.name}</h6>
            <h6>Client side: {project.client}</h6>
            <h6>Server side: {project.server}</h6>
            <h6>Description: {project.description}</h6>
            <a href={project.live} target="_blank" class="btn" rel="noreferrer">
              Live App
            </a>
            <a
              href={project.github}
              target="_blank"
              class="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <div className="video">
              <ReactPlayer url={project.youtube} width="100%" height="100%" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
