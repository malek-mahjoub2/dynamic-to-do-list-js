// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the "Add Task" button
    const addTaskButton = document.getElementById('add-task-btn');
    // Select the input field for new tasks
    const taskInputField = document.getElementById('task-input');
    // Select the unordered list that will display tasks
    const taskListElement = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the value from the input field
        const taskText = taskInputField.value.trim();

        // Check if the input is not empty
        if (taskText !== "") {
            // Create a new list item (li element)
            const taskListItem = document.createElement('li');
            taskListItem.textContent = taskText; // Set the text of the list item

            // Create a button for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove"; // Set button text
            removeButton.className = 'remove-btn'; // Assign a class for styling

            // Assign an onclick event to the remove button
            removeButton.onclick = () => {
                // Remove the list item from the task list
                taskListElement.removeChild(taskListItem);
            };

            // Append the remove button to the list item
            taskListItem.appendChild(removeButton);
            // Append the list item to the task list
            taskListElement.appendChild(taskListItem);
            // Clear the input field after adding the task
            taskInputField.value = '';
        } else {
            // Alert the user to enter a task if input is empty
            alert("Please enter a task.");
        }
    }

    // Attach an event listener to the Add Task button
    addTaskButton.addEventListener('click', addTask);

    // Allow pressing Enter to add a task
    taskInputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter is pressed
        }
    });
});
