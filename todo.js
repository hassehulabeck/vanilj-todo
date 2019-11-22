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
        let ruta;

        // // Vanlig if-sats
        // if (task.isDone) {
        //     ruta = "&#9745";
        // } else {
        //     ruta = "&#9744";
        // }

        // Ternary operator
        ruta = task.isDone ? "&#9745" : "&#9744";

        item.innerHTML = "<div>" + task.name + "</div>" + "<div>" + ruta + "</div>";
        list.appendChild(item);
    })

}