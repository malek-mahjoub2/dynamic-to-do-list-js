// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the "Add Task" button and store it in a constant named addButton
    const addButton = document.getElementById('add-task-btn');
    // Select the input field for new tasks and store it in a constant named taskInput
    const taskInput = document.getElementById('task-input');
    // Select the unordered list that will display tasks and store it in a constant named taskList
    const taskList = document.getElementById('task-list');

    // Define a function named addTask
    function addTask() {
        // Retrieve and trim the value from the task input field
        let taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== "") {
            // Create a new li element
            const listItem = document.createElement('li');
            // Set its textContent to taskText
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            // Set its textContent to "Remove" and give it a class name of 'remove-btn'
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = () => {
                // Remove the li element from taskList
                taskList.removeChild(listItem);
            };

            // Append the remove button to the li element
            listItem.appendChild(removeButton);
            // Append the li element to taskList
            taskList.appendChild(listItem);
            // Clear the task input field
            taskInput.value = '';
        } else {
            // If taskText is empty, alert the user to enter a task
            alert("Please enter a task.");
        }
    }

    // Attach an event listener to addButton that calls addTask when the button is clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        // Check if event.key is equal to 'Enter'
        if (event.key === 'Enter') {
            // Call addTask when Enter is pressed
            addTask();
        }
    });
});
