// Tamamlanmadi!!!!!

let todoData = [
    {
        task: "do the homework",
        done : true
    },
    {
        task: "go to gym",
        done: false
    },
    {
        task: "go to school",
        done: false
    }
];
let myJSON;
function checkComplete(todoData) {
    if (JSON.stringify(todoData.done)==true) {
     myJSON = (checkComplete);
    } return todoData.task;
}


function done() {
    document.getElementById("done").innerHTML = "Status: " + myJSON;
}

function notYet() {
    document.getElementById("notyet").innerHTML = "Status: " + myJSON;
}