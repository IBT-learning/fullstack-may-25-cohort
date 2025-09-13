const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    let text = taskInput.value.trim();
    if (text !== ""){
        createTask(text);
        taskInput.value = "";
    }
})

const createTask = (text) => {
    // console.log(text)
    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = text;
    span.addEventListener("click", () => {
        li.classList.toggle("completed")
    })

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏";
    editBtn.className = "action-btn";
    editBtn.onclick = () => editTask(span);

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "🗑";
    delBtn.className = "action-btn";
    delBtn.onclick = () => li.remove();

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);
}

const editTask = (span) => {
    const oldText = span.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = oldText;
    input.className = "edit-input";

    span.replaceWith(input)
    input.focus();

    input.addEventListener("blur", () => {
        const newText = input.value.trim();
        const newSpan = document.createElement("span");
        newSpan.textContent = newText || oldText;

        newSpan.onclick = () => input.closest(".task-item").classList.toggle("completed");
        input.replaceWith(newSpan)
    })
}