function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskCategory = document.getElementById('taskCategory');
    var taskList = document.getElementById('taskList');

    var taskText = taskInput.value;
    var taskCategoryValue = taskCategory.value;

    if (taskText.trim() !== '') {
      var listItem = document.createElement('li');
      listItem.className = 'taskItem';
      
      listItem.innerHTML = `<strong>${taskCategoryValue}</strong>: ${taskText}`;

      taskList.appendChild(listItem);

      taskInput.value = '';
    }
}
