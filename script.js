// Get references to DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

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
  removeButton.className = 'remove-btn';
  removeButton.addEventListener('click', () => {
    li.remove();
  });

  // Append the remove button and list item to the task list
  li.appendChild(removeButton);
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Add event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Call addTask on page load (optional)
window.addEventListener('DOMContentLoaded', addTask);