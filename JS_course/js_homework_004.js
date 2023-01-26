const input = document.getElementById('todo-input');
const searchBtn = document.getElementById('add-btn');

const tasks = document.getElementsByClassName('list-containter')[0];

const handleDelete = (e) => {
    console.log("Delete called");
    const taskToDelete = e.target.parentElement;
    taskToDelete.remove();
    console.log("Task deleted");
}

const handleChecked = (e) => {
    console.log("Check called");
    
    const taskLabel = document.querySelector('label[for="' + e.target.id + '"]');

    if (e.target.checked) {        
        taskLabel.classList.add('strikethrough');       
    } else {
        taskLabel.classList.remove('strikethrough');  
    }
    
    
}

const handleAdd = (e) => {

    const nbrOfChildElements = tasks.childElementCount;
    console.log('Total tasks: ' + nbrOfChildElements);

    const newTask = document.createElement('div');
    newTask.className = 'task';

    const taskLabel = document.createElement('label');
    taskLabel.htmlFor = (nbrOfChildElements + 1) + "chkBox";
    taskLabel.innerText = ' ' + input.value;
    

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.name = (nbrOfChildElements + 1) + "chkBox";
    taskCheckbox.value = input.value;
    taskCheckbox.id = (nbrOfChildElements + 1) + "chkBox";
    taskCheckbox.addEventListener('change', handleChecked);

    const taskDelBtn = document.createElement('button');
    taskDelBtn.innerText = 'X';
    taskDelBtn.addEventListener('click', handleDelete);

    newTask.append(taskCheckbox);
    newTask.append(taskLabel);
    newTask.append(taskDelBtn);

    tasks.append(newTask);
}

const handleInputKey = (e) => {
    if (e.key === 'Enter') {
        handleAdd();
    }
}

searchBtn.addEventListener('click', handleAdd);
input.addEventListener('keyup', handleInputKey);