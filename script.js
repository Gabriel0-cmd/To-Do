const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")

function createSpan(taskInputValue){
    const span = document.createElement('span');
    span.textContent = taskInputValue;
    span.addEventListener("cick", function(){
        span.classList.toggle('completed');
    
    })
    return span;
}

function createDeleteButton(li){
    const button = document.createElement('button');
    button.textContent = 'Excluir';
        button.addEventListener('click', function(){
        li.remove();
    })
    return button;
}

function addTask(){
    const li = document.createElement('li');
    const taskInputValue = taskInput.value;
    if (taskInputValue == ''){
        return
    }

    const span = createSpan(taskInputValue);
    const button = createDeleteButton(li);

    li.appendChild(span)
    li.appendChild(button)

    taskList.appendChild(li);
}

taskBtn.addEventListener("click", addTask)
const clearAllBtn = document.querySelector("#clearAllBtn");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");
const taskCounter = document.querySelector("#taskCounter");

function updateCounter(){
    const total = document.querySelectorAll("li").length;
    const done = document.querySelectorAll(".completed").length;
    taskCounter.textContent = `${done} de ${total} tarefas concluídas`;
}

taskInput.addEventListener("keypress", e => {
    if(e.key === "Enter") addTask();
});

clearAllBtn.onclick = () => {
    taskList.innerHTML = '';
    updateCounter();
};

clearCompletedBtn.onclick = () => {
    document.querySelectorAll(".completed")
    .forEach(t => t.parentElement.remove());
    updateCounter();
};

function createEditButton(span){
    const b = document.createElement('button');
    b.textContent = 'Editar';
    b.onclick = () => {
        const t = prompt("Editar:", span.textContent);
        if(t) span.textContent = t;
    };
    return b;
} 
taskInput.value = '';
updateCounter();

const editButton = createEditButton(span);
li.appendChild(editButton);
span.addEventListener("click", function(){
    
    span.classList.toggle('completed');
    updateCounter();
});