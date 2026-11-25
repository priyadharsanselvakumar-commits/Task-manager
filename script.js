
const api = "https://jsonplaceholder.typicode.com/todos";
async function getTasks() {
    const response = await fetch(api + "?_limit=5");
    const data = await response.json();

    document.getElementById("result").innerHTML = "";

    data.forEach(task => {
        document.getElementById("result").innerHTML +=
            `<p>${task.title} 
            <button onclick="deleteTask(${task.id})">Delete</button>
            </p>`;
    });
}
async function addTask() {
    const task = document.getElementById("taskInput").value;
    const response = await fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: task,
            completed: false,
            userId: 1
        })
    });
    const data = await response.json();
    alert("Task added successfully! ID: " + data.id);
    document.getElementById("taskInput").value = "";
}
async function deleteTask(id) {
    await fetch(api + "/" + id, {
        method: "DELETE"
    });
    alert("Task deleted successfully!");
}