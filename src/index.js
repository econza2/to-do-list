import "./styles.css";

import { createProjectForm } from "./projectForm";
import { createToDoForm } from "./toDoForm";
import { appendProjects } from "./appendProjectsDOM";
import { appendToDo } from "./appendToDoDOM";

let projects = ["Default"];
let projectsToDo = [{ Default: [] }];

const body = document.querySelector("body");

//Appending to DOM
const projectDiv = document.createElement("div");
projectDiv.classList.add("projects-div");
projectDiv.style.height = "500px";
projectDiv.style.width = "1000px";
body.appendChild(projectDiv);

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttons-div");
buttonsDiv.style.height = "500px";
buttonsDiv.style.width = "500px";
buttonsDiv.style.borderStyle = "solid";
buttonsDiv.style.borderColor = "green";
buttonsDiv.style.margin = "50px";
body.appendChild(buttonsDiv);

//Project Form Manipulation
const createProjectButton = document.createElement("button");
createProjectButton.classList.add("project-button");
createProjectButton.textContent = "Create Project";
buttonsDiv.appendChild(createProjectButton);

createProjectButton.addEventListener("click", () => {
  buttonsDiv.textContent = "";
  buttonsDiv.appendChild(createProjectButton);
  buttonsDiv.appendChild(createToDoButton);
  buttonsDiv.appendChild(createProjectForm(projects, projectsToDo));
});

//To Do Form Manipulation
const createToDoButton = document.createElement("button");
createToDoButton.textContent = "Create To Do List";
buttonsDiv.appendChild(createToDoButton);

createToDoButton.addEventListener("click", () => {
  buttonsDiv.textContent = "";
  buttonsDiv.appendChild(createProjectButton);
  buttonsDiv.appendChild(createToDoButton);
  buttonsDiv.appendChild(createToDoForm(projects, projectsToDo));
  createProjectButton.disabled = true;
});

//Document Load Event
window.addEventListener("load", () => {
  let projectsToDoArray = JSON.parse(localStorage.getItem("projectsToDo"));
  let projectsArray = JSON.parse(localStorage.getItem("projects"));

  if (!projectsToDoArray) {
    projects = projects;
    projectsToDo = projectsToDo;

    appendProjects(projects, projectsToDo);
  } else if (projectsToDoArray.length > 0) {
    projects = projectsArray;
    projectsToDo = projectsToDoArray;

    appendProjects(projectsArray, projectsToDoArray);
    appendToDo(projectsArray, projectsToDoArray);
  }
});
