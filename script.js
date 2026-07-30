// Step 1: Select HTML elements using their unique IDs
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Step 2: Define what happens when the "Add Task" button is clicked
addBtn.addEventListener('click', function() {
    // Read user input and remove extra whitespace
    const taskText = taskInput.value.trim();

    // Input Validation: Don't allow empty tasks
    if (taskText === '') {
        alert('Please write a task first!');
        return;
    }

    // Step 3: Create new DOM elements programmatically
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Step 4: Attach a click event listener specifically to the new Delete button
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li); // Remove this item from the list
    });

    // Step 5: Assemble elements and add them to the page
    li.appendChild(deleteBtn);  // Put the delete button inside the <li>
    taskList.appendChild(li);   // Put the <li> inside the <ul>

    // Step 6: Clear the input box for the next task
    taskInput.value = '';
});
