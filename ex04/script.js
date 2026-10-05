let taskCount = 0;

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCount");

function updateCounter() {
    taskCounter.textContent = taskCount;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create the list item
    const taskItem = document.createElement("li");

    // Create task text
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");

    // Mark task as completed
    taskTextElement.addEventListener("click", function () {
        taskTextElement.classList.toggle("completed");
    });

    // Delete task
    deleteButton.addEventListener("click", function () {
        taskItem.remove();

        taskCount--;
        updateCounter();
    });

    // Add elements to the list item
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    // Add task to the task list
    taskList.appendChild(taskItem);

    // Update counter
    taskCount++;
    updateCounter();

    // Clear input
    taskInput.value = "";
}

// Add task with button
addButton.addEventListener("click", addTask);

// Add task with Enter key
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
