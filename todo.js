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

    // Känn av klick i "checkbox"
    list.addEventListener("click", (e) => {
        if (e.target.className == "box") {
            tasks[e.target.id].isDone = !tasks[e.target.id].isDone;
            console.log(tasks[e.target.id].isDone)
            showList();
        }
    })

    // Ta bort klara uppgifter
    let deleteBtn = document.getElementById("delete");
    deleteBtn.addEventListener("click", () => {
        tasks.forEach((task, index) => {
            if (task.isDone) {
                tasks.splice(index, 1);
            }
        })
        showList();
    });


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

        item.innerHTML = `
        <div>${task.name}</div>
        <div class= "box" id = "${index}">${ruta}</div>`;
        list.appendChild(item);
    })

}