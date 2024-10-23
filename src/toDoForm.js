import { appendToDo } from "./appendToDoDOM";
import { format } from "date-fns";


function ToDoListItem (title, description, dueDate, priority, notes, checked) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checked = checked;
}

ToDoListItem.prototype.toggleChecked = function () {
    if(this.checked == "no"){
        this.checked = "yes";
    }
    else {
        this.checked = "no";
    }
}

function createToDoForm (projects, projectsToDo) {
    const toDoForm = document.createElement("form");
    toDoForm.setAttribute("action", "#");
    toDoForm.setAttribute("method", "post");

    const toDoProjectTitleLabel = document.createElement("label");
    toDoProjectTitleLabel.textContent = "Project Title";
    toDoProjectTitleLabel.setAttribute("for", "title");
    toDoForm.appendChild(toDoProjectTitleLabel);

    const toDoProjectTitleInput = document.createElement("select");
    toDoProjectTitleInput.setAttribute("name", "title");
    toDoProjectTitleInput.setAttribute("id", "title");
    toDoForm.appendChild(toDoProjectTitleInput);

    toDoProjectTitleInput.textContent = "";
    projects.forEach((current, index) => {
        const toDoProjectTitleOption = document.createElement("option");
        toDoProjectTitleOption.setAttribute("value", `${current}`);
        toDoProjectTitleOption.setAttribute("id", `${index}`)
        toDoProjectTitleOption.textContent = `${current}`;
    
        toDoProjectTitleInput.appendChild(toDoProjectTitleOption);
    });

    const toDoTitleLabel = document.createElement("label");
    toDoTitleLabel.textContent = "To Do Title";
    toDoTitleLabel.setAttribute("for", "to_do_title");
    toDoForm.appendChild(toDoTitleLabel);

    const toDoTitleInput = document.createElement("input");
    toDoTitleInput.setAttribute("type", "text");
    toDoTitleInput.setAttribute("id", "to_do_title");
    toDoForm.appendChild(toDoTitleInput);

    const toDoDescriptionLabel = document.createElement("label");
    toDoDescriptionLabel.textContent = "To Do Description";
    toDoDescriptionLabel.setAttribute("for", "to_do_description");
    toDoForm.appendChild(toDoDescriptionLabel);

    const toDoDescriptionInput = document.createElement("input");
    toDoDescriptionInput.setAttribute("type", "text");
    toDoDescriptionInput.setAttribute("id", "to_do_description");
    toDoForm.appendChild(toDoDescriptionInput);

    const toDoDueDateLabel = document.createElement("label");
    toDoDueDateLabel.textContent = "To Do Due Date";
    toDoDueDateLabel.setAttribute("for", "to_do_due_date");
    toDoForm.appendChild(toDoDueDateLabel);

    const toDoDueDateInput = document.createElement("input");
    toDoDueDateInput.setAttribute("type", "date");
    toDoDueDateInput.setAttribute("id", "to_do_due_date");
    toDoDueDateInput.valueAsDate = new Date();
    toDoForm.appendChild(toDoDueDateInput);

    const toDoPriorityLabel = document.createElement("label");
    toDoPriorityLabel.textContent = "To Do Priority";
    toDoPriorityLabel.setAttribute("for", "to_do_priority");
    toDoForm.appendChild(toDoPriorityLabel);

    const toDoPriorityInput = document.createElement("select");
    toDoPriorityInput.setAttribute("name", "priority");
    toDoPriorityInput.setAttribute("id", "to_do_priority");
    toDoForm.appendChild(toDoPriorityInput);

    const highPriority = document.createElement("option");
    highPriority.setAttribute("value", "high");
    highPriority.textContent = "High";
    toDoPriorityInput.appendChild(highPriority); 

    const mediumPriority = document.createElement("option");
    mediumPriority.setAttribute("value", "medium");
    mediumPriority.textContent = "Medium";
    toDoPriorityInput.appendChild(mediumPriority); 

    const lowPriority = document.createElement("option");
    lowPriority.setAttribute("value", "low");
    lowPriority.textContent = "Low";
    toDoPriorityInput.appendChild(lowPriority); 

    const toDoNotesLabel = document.createElement("label");
    toDoNotesLabel.textContent = "To Do Notes";
    toDoNotesLabel.setAttribute("for", "to_do_notes");
    toDoForm.appendChild(toDoNotesLabel);

    const toDoNotesInput = document.createElement("textarea");
    toDoNotesInput.textContent = "Enter here your notes";
    toDoNotesInput.setAttribute("id", "to_do_notes");
    toDoForm.appendChild(toDoNotesInput);

    const toDoSubmitButton = document.createElement("button");
    toDoSubmitButton.textContent = "Submit To Do List";
    toDoForm.appendChild(toDoSubmitButton);

    toDoSubmitButton.addEventListener("click", (event) => {
        event.preventDefault(); 
        document.querySelector(".buttons-div").removeChild(toDoForm);
        document.querySelector(".project-button").disabled = false;

        
        let pushedObject = new ToDoListItem(toDoTitleInput.value, toDoDescriptionInput.value,
            format(toDoDueDateInput.value, "do,MMMM,yyyy"), toDoPriorityInput.value, toDoNotesInput.value, "no");

        let projectIndex = projects.indexOf(toDoProjectTitleInput.value);

        projectsToDo[projectIndex][`${toDoProjectTitleInput.value}`].push(pushedObject);

        localStorage.setItem("projectsToDo", JSON.stringify(projectsToDo));

        console.log("ptd", projectsToDo);   
        
        toDoTitleInput.value = "";
        toDoDescriptionInput.value = "";
        toDoDueDateInput.value = "";
        toDoPriorityInput.value = "";
        toDoNotesInput.value = "";
        
        appendToDo(projects, projectsToDo);
    });

    return toDoForm;
}

export {createToDoForm, ToDoListItem};