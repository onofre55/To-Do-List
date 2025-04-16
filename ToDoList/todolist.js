//Getting HTML elements

const inputUser = document.querySelector("#input");
const addButton = document.querySelector("#add-button");
const listContainer = document.querySelector("#list-container");

const addTask = () => {

    const taskText = inputUser.value.trim();

    if(!taskText) {
        
        alert("Please enter a task.");

    } else {

    //Creating new task 

    let newTask = document.createElement("li");
    newTask.innerText = taskText;

    let trashCan = document.createElement("i");
    trashCan.classList.add("fa-solid", "fa-trash-can-arrow-up");

    //Appending new task and icon to the to-do list

    newTask.appendChild(trashCan);
    listContainer.appendChild(newTask);

    //Clearing input field

    inputUser.value = ""; 
    saveData();

    }

}

addButton.addEventListener("click", addTask);

const saveData = () => {

    localStorage.setItem("data", listContainer.innerHTML);

}

//Check, uncheck and remove task

listContainer.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.closest("I")) {

        e.target.closest("li").remove();
        saveData();

    }
});

//Load saved tasks from local storage 

const loadTasks = () => {

    listContainer.innerHTML = localStorage.getItem("data");

}

loadTasks();
