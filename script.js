// Function to add a new task to the task list
function addTask() {
  // Get references to input elements and task list
  var taskInput = document.getElementById('taskInput');
  var taskCategory = document.getElementById('taskCategory');
  var taskList = document.getElementById('taskList');

  // Get the task text and category values from input elements
  var taskText = taskInput.value;
  var taskCategoryValue = taskCategory.value;

  // Check if the task text is not empty
  if (taskText.trim() !== '') {
    // Create a new list item element
    var listItem = document.createElement('li');
    listItem.classList.add('taskItem', taskCategoryValue);

    // Create a strong element to display the task category
    var strongElement = document.createElement('strong');
    strongElement.textContent = taskCategoryValue;

    // Create a text node for the task text
    var textNode = document.createTextNode(`: ${taskText}`);

    // Create an 'Edit' button with an image
    var editButton = document.createElement('button');
    var editImage = document.createElement('img');
    editImage.src = 'edit.png'; 
    editImage.alt = 'Edit';
    editImage.width = 22;  
    editImage.height = 22; 
    editButton.appendChild(editImage);
    editButton.classList.add('edit-button');

    // Add an onclick event to the 'Edit' button
    editButton.onclick = function() {
      // Prompt the user to edit the task text
      var newText = prompt('Edit task:', taskText);
      // Update the text node with the new text if the user didn't cancel
      if (newText !== null) {
        textNode.nodeValue = `: ${newText}`;
      }
    };

    // Create a 'Delete' button with an image
    var deleteButton = document.createElement('button');
    var deleteImage = document.createElement('img');
    deleteImage.src = 'delete.png';  
    deleteImage.alt = 'Delete';
    deleteImage.width = 22; 
    deleteImage.height = 22; 
    deleteButton.appendChild(deleteImage);
    deleteButton.classList.add('delete-button');

    // Add an onclick event to the 'Delete' button
    deleteButton.onclick = function() {
      // Confirm if the user wants to delete the task
      var confirmDelete = confirm('Are you sure you want to delete this task?');
      // Remove the list item if the user confirms
      if (confirmDelete) {
        listItem.remove();
      }
    };

    // Append elements to the list item
    listItem.appendChild(strongElement);
    listItem.appendChild(textNode);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input after adding the task
    taskInput.value = '';
  }
}
