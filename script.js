// Function to add a new todo

function addTodo(){
    let input=document.getElementById("todoInput");
    let todoText=input.value.trim();

    if(todoText===""){
        alert("Please enter a todo! ");
    }

    let ul=document.getElementById("todoList");
    let li=document.createElement("li");

    li.textContent=todoText;
    // Toggle completion on left-click
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete on right-click
    li.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        ul.removeChild(li);
    });

    ul.appendChild(li);
    input.value = ""; // Clear input field after adding
}
// Allow pressing Enter to add todo
document.getElementById("todoInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

// function addTodo() {
//     let input = document.getElementById("todoInput");
//     let todoText = input.value.trim();

//     if (todoText === "") {
//         alert("Please enter a todo!");
//         return;
//     }

//     let ul = document.getElementById("todoList");
//     let li = document.createElement("li");

//     li.textContent = todoText;

//     // Toggle completion on left-click
//     li.addEventListener("click", function () {
//         li.classList.toggle("completed");
//     });

//     // Delete on right-click
//     li.addEventListener("contextmenu", function (event) {
//         event.preventDefault();
//         ul.removeChild(li);
//     });

//     ul.appendChild(li);
//     input.value = ""; // Clear input field after adding
// }

// // Allow pressing Enter to add todo
// document.getElementById("todoInput").addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         addTodo();
//     }
// });
