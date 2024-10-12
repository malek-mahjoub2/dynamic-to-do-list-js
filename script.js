// Select DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving again
}

// Function to add a new task
function addTask(taskText = null, save = true) {
    // If taskText is null, get it from the input field
    if (taskText === null) {
        taskText = taskInput.value.trim();
    }

    // Check if the task text is empty
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn'); // Add the "remove-btn" class

    // Assign click event to the remove button
    removeButton.addEventListener('click', () => {
        li.remove();
        removeTaskFromLocalStorage(taskText); // Remove the task from Local Storage
    });

    // Append the remove button and list item to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';

    // Save the task to Local Storage if specified
    if (save) {
        saveTaskToLocalStorage(taskText);
    }
}

// Function to save a task to Local Storage
function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

// Function to remove a task from Local Storage
function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

// Add event listeners
addButton.addEventListener('click', () => addTask());
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Load tasks when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTasks(); // Load existing tasks from Local Storage
});
