// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Trim whitespace from the input value
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText !== "") {
            // Create a new list item
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create a remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = () => {
                taskList.removeChild(listItem); // Remove the list item from the task list
            };

            // Append the remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the task input field
            taskInput.value = '';
        } else {
            // Alert the user to enter a task if input is empty
            alert("Please enter a task.");
        }
    }

    // Attach an event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter is pressed
        }
    });
});
