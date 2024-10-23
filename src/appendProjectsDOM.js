function appendProjects (projects, projectsToDo) {

    projects.forEach((current, index) => {
        const encapsulatingContainer = document.createElement("div");
        encapsulatingContainer.classList.add("encap");
        
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title-div");
        titleDiv.style.height = "100px";
        titleDiv.style.width = "500px";
        titleDiv.style.borderStyle = "solid";
        titleDiv.style.borderColor = "purple";
        encapsulatingContainer.appendChild(titleDiv);
        
        const singleProjectDivTitle = document.createElement("div");
        singleProjectDivTitle.classList.add("single-project-title");
        
        const singleProjectHeading = document.createElement("h1");
        singleProjectHeading.classList.add("single-heading");
        singleProjectHeading.textContent = `${current}`;

        const title = document.createElement("div");
        const description = document.createElement("div");
        const dueDate = document.createElement("div");
        const priority = document.createElement("div");
        const notes = document.createElement("div");
        const checked = document.createElement("div");
        const button = document.createElement("div");

        title.textContent = "Title";
        description.textContent = "Description";
        dueDate.textContent = "Due Date";
        priority.textContent = "Priority";
        notes.textContent = "Notes";
        checked.textContent = "Checked";
        button.textContent = "Remove";


        singleProjectDivTitle.appendChild(singleProjectHeading);
        singleProjectDivTitle.appendChild(title);
        singleProjectDivTitle.appendChild(description);
        singleProjectDivTitle.appendChild(dueDate);
        singleProjectDivTitle.appendChild(priority);
        singleProjectDivTitle.appendChild(notes);
        singleProjectDivTitle.appendChild(checked);
        singleProjectDivTitle.appendChild(button);

        titleDiv.appendChild(singleProjectDivTitle);
        
        const singleProjectContent = document.createElement("div");
        singleProjectContent.classList.add(`${current}`);
        singleProjectContent.classList.add("to-do-content");
        singleProjectContent.style.height = "350px";
        singleProjectContent.style.width = "500px";
        singleProjectContent.style.borderStyle = "solid";
        singleProjectContent.style.borderColor = "gray";
        encapsulatingContainer.appendChild(singleProjectContent);
        
        const removeProjectButton = document.createElement("button");
        removeProjectButton.textContent = "Remove Project";
        removeProjectButton.classList.add("remove-project-button");
        removeProjectButton.classList.add(`${current}-1`);
        removeProjectButton.style.height = "50px";
        removeProjectButton.style.width = "500px";
        encapsulatingContainer.appendChild(removeProjectButton);

        document.querySelector(".projects-div").appendChild(encapsulatingContainer);
        const disableDefault = document.querySelector(".Default-1");
        disableDefault.disabled = true;

        removeProjectButton.addEventListener("click", () => {
            console.log("before", projects);
            projects.splice(index, 1);
            projectsToDo.splice(index, 1);
            localStorage.setItem("projects", JSON.stringify(projects));
            localStorage.setItem("projectsToDo", JSON.stringify(projectsToDo));
            document.querySelector(".projects-div").removeChild(encapsulatingContainer);
            console.log("after", projects);
        }); 
    });
}


export {appendProjects};