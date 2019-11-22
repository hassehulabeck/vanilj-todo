var tasks = [{
    name: "Städa",
    isDone: false
}];

var list;

document.addEventListener("DOMContentLoaded", () => {

    list = document.getElementById("todoList");

    showList();

    var button = document.getElementById("createTask");
    var inputTask = document.getElementById("inputTask");
    button.addEventListener("click", () => {
        let newTask = {};
        newTask.name = inputTask.value;
        newTask.isDone = false;
        tasks.push(newTask);
        showList();
        inputTask.value = "";
    })

})


function showList() {

    list.innerHTML = "";

    tasks.forEach(function (task, index) {
        var item = document.createElement("LI");
        item.innerText = task.name;
        list.appendChild(item);
    })

}