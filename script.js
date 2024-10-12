// Get references to DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to load tasks from Local Storage
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Function to add a new task
function addTask(taskText, save = true) {
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
  removeButton.classList.add('remove-btn');
  removeButton.addEventListener('click', () => {
    li.remove();
    // Remove task from Local Storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const index = storedTasks.indexOf(taskText);
    if (index !== -1) {
      storedTasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  });

  // Append the remove button and list item to the task list
  li.appendChild(removeButton);
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';

  if (save) {
    // Save task to Local Storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
}

// Add event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Set up event listener for page load
document.addEventListener('DOMContentLoaded', () => {
  loadTasks(); // Load tasks from Local Storage on page load
});