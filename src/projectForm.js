import { appendProjects } from "./appendProjectsDOM";
import { appendToDo } from "./appendToDoDOM";

function createEmptyObjectForKey(key) {
  return `{"${key}": []}`;
}

function createProjectForm(projects, projectsToDo) {
  const createProjectForm = document.createElement("form");
  createProjectForm.setAttribute("action", "#");
  createProjectForm.setAttribute("method", "post");

  const projectTitleLabel = document.createElement("label");
  projectTitleLabel.textContent = "Title";
  projectTitleLabel.setAttribute("for", "title");
  createProjectForm.appendChild(projectTitleLabel);

  const projectTitleInput = document.createElement("input");
  projectTitleInput.setAttribute("id", "title");
  createProjectForm.appendChild(projectTitleInput);

  const submitProjectButton = document.createElement("button");
  submitProjectButton.textContent = "Submit Project";
  submitProjectButton.setAttribute("type", "submit");
  createProjectForm.appendChild(submitProjectButton);

  submitProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    projects.push(projectTitleInput.value);
    projectsToDo.push(
      JSON.parse(createEmptyObjectForKey(projectTitleInput.value)),
    );
    localStorage.setItem("projects", JSON.stringify(projects));
    projectTitleInput.value = "";
    console.log(projects);
    document.querySelector(".buttons-div").removeChild(createProjectForm);
    document.querySelector(".projects-div").textContent = "";

    appendProjects(projects, projectsToDo);
    appendToDo(projects, projectsToDo);
  });

  return createProjectForm;
}

export { createProjectForm };
