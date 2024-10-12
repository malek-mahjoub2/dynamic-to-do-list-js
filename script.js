
document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
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

            // Add click event to remove the task
            removeButton.onclick = () => {
                taskList.removeChild(listItem);
            };

            // Append the button to the list item and the list item to the task list
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            // Alert the user to enter a task if input is empty
            alert("Please enter a task.");
        }
    }

    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
