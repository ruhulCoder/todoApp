const userInfo = localStorage.getItem("user");
const userName = JSON.parse(userInfo);
document.querySelector("h1").innerHTML = `Hello, ${userName.signUpName}`

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const tasks = document.getElementById("taskTableBody");

let taskEdit = null; // Keeps track of the task row being edited

// Add task
addTask.addEventListener("click", () => {
  const taskText = taskInput.value.trim()
  if(!taskText){
    alert("Please fill the task.");
    return
  };

  if (taskEdit) {
    // Update the existing task
    updateTask(taskText);
  } else {
    // Add a new task
    addTaskTable(taskText);
  }

  resetInput(); // Clear the input and reset state
});

// Function to add task to table
function addTaskTable(taskText) {
  const row = document.createElement("tr");

  // Task Column
  const taskCell = document.createElement("td");
  taskCell.textContent = taskText;

  // Edit Button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "editButton";
  editButton.addEventListener("click", () => editTask(row, taskCell));

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteButton";
  deleteButton.addEventListener("click", () => deleteTask(row));

  // Actions Column
  const actionsCell = document.createElement("td");
  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);

  // Append cells to the row
  row.appendChild(taskCell);
  row.appendChild(actionsCell);

  // Append row to the table body
  tasks.appendChild(row);
};

// Function to edit a task
function editTask(row, taskCell) {
  taskInput.value = taskCell.textContent; // Populate the input with the task text
  addTask.textContent = "Update"; // Change button text to "Update"
  taskEdit = { row, taskCell }; // Save the row and cell being edited
};

// Function to update a task
function updateTask(taskText) {
  taskEdit.taskCell.textContent = taskText; // Update the task cell
  resetInput(); // Reset the input and state
};

// Function to delete a task
function deleteTask(row) {
  if (confirm("Are you sure you want to delete this task?")) {
    row.remove();
  };
};

// Function to reset the input and state
function resetInput() {
  taskInput.value = ""; // Clear the input field
  addTask.textContent = "Add"; // Reset button text to "Add"
  taskEdit = null; // Clear the task being edited
};

// Logout
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  alert("LogOut Successfully");
  window.location.href = "loginSignPage.html";
});
