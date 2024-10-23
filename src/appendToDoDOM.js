function appendToDo (projects, projectsToDo) {
    for (let i = 0; i < projects.length; i++){
        document.querySelector(`.${projects[i]}`).textContent = "";
    }
    
    projectsToDo.forEach((current, index) => {
        current[`${projects[index]}`].forEach((currentTwo, indexTwo) => {
            const containingDiv = document.querySelector(`.${projects[index]}`);
            
            const insideProjectTitle = document.createElement("div");
            const insideProjectDescription = document.createElement("div");
            const insideProjectDueDate = document.createElement("div");
            const insideProjectPriority = document.createElement("div");
            const insideProjectNotes = document.createElement("div");
            const insideProjectChecked = document.createElement("button");
            insideProjectChecked.classList.add("checked-button");
            const insideProjectButton = document.createElement("button");
            insideProjectButton.textContent = "Remove";

            insideProjectChecked.addEventListener("click", () => {
                if(insideProjectChecked.textContent == "no"){
                    insideProjectChecked.textContent = "yes";
                }
                else {
                    insideProjectChecked.textContent = "no";
                }
                currentTwo.toggleChecked();
            });


            insideProjectButton.addEventListener("click", () => {
                containingDiv.removeChild(insideProjectTitle);
                containingDiv.removeChild(insideProjectDescription);
                containingDiv.removeChild(insideProjectDueDate);
                containingDiv.removeChild(insideProjectPriority);
                containingDiv.removeChild(insideProjectNotes);
                containingDiv.removeChild(insideProjectChecked);
                containingDiv.removeChild(insideProjectButton);
                current[`${projects[index]}`].splice(indexTwo, 1);
                localStorage.setItem("projectsToDo", JSON.stringify(projectsToDo));
            });

            insideProjectTitle.textContent = currentTwo["title"];
            insideProjectDescription.textContent = currentTwo["description"];
            insideProjectDueDate.textContent = currentTwo["dueDate"];
            insideProjectPriority.textContent = currentTwo["priority"];
            insideProjectNotes.textContent = currentTwo["notes"];
            insideProjectChecked.textContent = currentTwo["checked"];



            if(insideProjectPriority.textContent == "high"){
                insideProjectTitle.style.backgroundColor = "red";
                insideProjectDescription.style.backgroundColor = "red";
                insideProjectDueDate.style.backgroundColor = "red";
                insideProjectPriority.style.backgroundColor = "red";
                insideProjectNotes.style.backgroundColor = "red";
                insideProjectChecked.style.backgroundColor = "red";
                insideProjectButton.style.backgroundColor = "red";
            }
            else if (insideProjectPriority.textContent == "medium"){
                insideProjectTitle.style.backgroundColor = "yellow";
                insideProjectDescription.style.backgroundColor = "yellow";
                insideProjectDueDate.style.backgroundColor = "yellow";
                insideProjectPriority.style.backgroundColor = "yellow";
                insideProjectNotes.style.backgroundColor = "yellow";
                insideProjectChecked.style.backgroundColor = "yellow";
                insideProjectButton.style.backgroundColor = "yellow";
            }
            else if (insideProjectPriority.textContent == "low"){
                insideProjectTitle.style.backgroundColor = "green";
                insideProjectDescription.style.backgroundColor = "green";
                insideProjectDueDate.style.backgroundColor = "green";
                insideProjectPriority.style.backgroundColor = "green";
                insideProjectNotes.style.backgroundColor = "green";
                insideProjectChecked.style.backgroundColor = "green";
                insideProjectButton.style.backgroundColor = "green"; 
            }
            else {
                insideProjectTitle.style.backgroundColor = "white";
                insideProjectDescription.style.backgroundColor = "white";
                insideProjectDueDate.style.backgroundColor = "white";
                insideProjectPriority.style.backgroundColor = "white";
                insideProjectNotes.style.backgroundColor = "white";
                insideProjectChecked.style.backgroundColor = "white";
                insideProjectButton.style.backgroundColor = "white";
            }
            
            containingDiv.appendChild(insideProjectTitle);
            containingDiv.appendChild(insideProjectDescription);
            containingDiv.appendChild(insideProjectDueDate);
            containingDiv.appendChild(insideProjectPriority);
            containingDiv.appendChild(insideProjectNotes);
            containingDiv.appendChild(insideProjectChecked);
            containingDiv.appendChild(insideProjectButton);
        });
    });
}


export {appendToDo}