var tasks = [{
    name: "Städa",
    isDone: false
}];

// Referens till listan i HTML.
var list;

document.addEventListener("DOMContentLoaded", () => {

    list = document.getElementById("todoList");

    showList();

    // Skapa uppgift
    var createButton = document.getElementById("createTask");
    var inputTask = document.getElementById("inputTask");
    createButton.addEventListener("click", () => {
        let newTask = {};
        newTask.name = inputTask.value;
        newTask.isDone = false;
        tasks.push(newTask);
        showList();
        inputTask.value = "";
    })

    // Uppdatera uppgift
    list.addEventListener("click", (e) => {
        if (e.target.className == "box") {
            tasks[e.target.id].isDone = !tasks[e.target.id].isDone;
            console.log(tasks[e.target.id].isDone)
            showList();
        }
    })

    // Ta bort färdiga uppgifter
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

// Rendera listan.
function showList() {

    list.innerHTML = "";

    tasks.forEach(function (task, index) {
        var item = document.createElement("LI");
        let ruta;

        // Ternary operator
        ruta = task.isDone ? "&#9745" : "&#9744";

        item.innerHTML = `
        <div>${task.name}</div>
        <div class= "box" id = "${index}">${ruta}</div>`;

        list.appendChild(item);
    })

}