let currentTab = 'today';

function openTab(evt, tabName) {
    let contents = document.getElementsByClassName("tab-content");
    for (let content of contents) content.style.display = "none";

    let buttons = document.getElementsByClassName("tab-btn");
    for (let btn of buttons) btn.classList.remove("active");

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
    currentTab = tabName;
}

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');
    
    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    const listId = currentTab + "-list";
    const list = document.getElementById(listId);

    const li = document.createElement('li');
    
    // Create the HTML structure for the task + date + delete button
    li.innerHTML = `
        <input type="checkbox" onclick="toggleTask(this)">
        <div class="task-info">
            <span class="task-text">${taskInput.value}</span>
            <small class="task-date">${dateInput.value ? 'Due: ' + dateInput.value : 'No date set'}</small>
        </div>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    list.appendChild(li);

    // Clear the inputs
    taskInput.value = "";
    dateInput.value = "";
}

function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling.querySelector('.task-text');
    if (checkbox.checked) {
        taskText.classList.add('completed');
    } else {
        taskText.classList.remove('completed');
    }
}

function deleteTask(btn) {
    btn.parentElement.remove();
}