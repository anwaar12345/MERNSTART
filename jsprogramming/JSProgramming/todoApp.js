let taskList = JSON.parse(localStorage.getItem('todos'));
let taskInput = document.getElementById("task");
window.addEventListener("load",() => {
    let taskList = JSON.parse(localStorage.getItem('todos'));
    let list = document.getElementById("todos");
    if(!taskList)
        list.innerHTML = `<li class="list-group-item">No Tasks in Do</li>`;
    

    taskList?.forEach((element,index) => {
        let taskItem = document.createElement("li");
        taskItem.innerHTML = `<p> ${element} <button type="button" class="btn btn-danger" style="margin: 5px" onclick="deleteTask(${index})">Danger</button> <button type="button" class="btn btn-info" style="margin: 5px" onclick="editTask(${index})">Edit</button> </p>`;
        taskItem.classList.add("list-group-item");
        list.append(taskItem);
    });
});


let addTask = () => {
    let btn = document.getElementById("submit");
    btn.addEventListener("click",(e) => {
        e.preventDefault(); //prevent page reload of form submit
        let taskInput = document.getElementById("task");
        let task = taskInput.value;
        let taskList = [];
        taskList = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')) : [];
        if(task == "") { 
            taskInput.classList.add("error"); 
            if(!document.getElementById("error")){
                let error = document.createElement("p");
                error.innerText = "Please Enter Task To Add";
                error.setAttribute('id','error');
                taskInput.insertAdjacentElement("afterend",error);
                return false;
            }
            taskList = [];
         }else{
            if(taskInput.hasAttribute("edit"))
            {
                taskList[taskInput.getAttribute('edit')] = task;
                console.log(taskList);
            }else{
                taskList.push(task);
            }
             localStorage.setItem("todos",  JSON.stringify(taskList));
             window.location.reload();
         }

    });
};

addTask();
let deleteTask = (item) => {
    let tasks = Array.from(taskList); 
    tasks.splice(item,1);
    localStorage.setItem('todos', JSON.stringify(tasks));
    window.location.reload();
}
let editTask = (item) => {
    let tasks = Array.from(taskList); 
    taskInput.value = tasks[item];   
    taskInput.setAttribute('edit',item);
}