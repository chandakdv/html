document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                taskInput.value = "";
            }
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
            li.remove();
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
});
