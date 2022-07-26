import React from "react";
import funcs from '../animations/TextAnimation';
import wcgl from "../assets/images/project0.png";
import tb from "../assets/images/project1.png";
import wd from "../assets/images/project2.png";
import ds from "../assets/images/project3.png";
import ctg from "../assets/images/project4.png";
import tpg from "../assets/images/project5.png";
import './Portfolio.css';

const projects = [
  {
    id: 0,
    title: "What's Cooking Good Looking?",
    image: wcgl,
    description: "Sign up, login, search for recipes at your will and save them onto your recipe book!",
    repo: "https://github.com/mariyasetko/Whats-Cooking-Good-Looking",
    live: "https://arcane-caverns-47920.herokuapp.com/",
  },
  {
    id: 1,
    title: "The Developer's Tech Blog",
    image: tb,
    description: "Create your own account and start writing up a tech blog, and interact with others by commenting!",
    repo: "https://github.com/tonybs03/Tech-Blog-MVC",
    live: "https://warm-lake-11930.herokuapp.com/",
  },
  {
    id: 2,
    title: "A Simple Weather Dashboard",
    image: wd,
    description: "View weather information based on cities of your choice, and save them for you ease of access!",
    repo: "https://github.com/tonybs03/Weather-Dashboard",
    live: "https://tonybs03.github.io/Weather-Dashboard/",
  },
  {
    id: 3,
    title: "A Simple Weekday Scheduler",
    image: ds,
    description: "Allows you to schedule your day, and it changes color to let you know easily which tasks are still left to do!",
    repo: "https://github.com/tonybs03/Weekday-Scheduler",
    live: "https://tonybs03.github.io/Weekday-Scheduler/",
  },
  {
    id: 4,
    title: "CareToGo Platform",
    image: ctg,
    description: "The healthcare platform that connects nurses and psws with patients at the comfort of patients' home!",
    repo: "https://github.com/CareToGo/Care-To-Go-App",
    live: "https://www.caretogo.ca/",
  },
  {
    id: 5,
    title: "Team Profiles Generator",
    image: tpg,
    description: "Allows you to trade pokemon and create a team. I did the design and front end!",
    repo: "https://github.com/tonybs03/Team-Profile-Generator",
    live: "https://www.loom.com/share/2c03c635bced4526aa279d3ea1bfe3e2",
  }
];

function Portfolio() {
  return (
    <div class="portfoliomain">
      <div class="portfoliobody">
        <div class="portfoliotitle">
          <funcs.TextAnimationP />
        </div>
        <hr />
        <div class="allprojects" >
          {projects.map((project) => (
            <div class="singleproject">
              <div class="projectcard">
                <div class="projectimage">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={project.image} alt="placeholder" />
                  </a>
                </div>
                <hr />
                <div class="projectcontent">
                  <div class="projecttitle">
                    <h1 key={project.id}>
                      {project.title}
                    </h1>
                  </div>
                  <hr />
                  <div class="projectdescription">
                    {project.description}
                  </div>
                  <hr />
                  <div class="links">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <button class="projectbtn">See the Repo!</button>
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <button class="projectbtn">See the Site!</button>
                    </a>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
