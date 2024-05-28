function addTodoItem() {
    // 1. kiểm tra ô input rỗng 
    let todoInput = document.querySelector(".todo-item-input");
    console.log(todoInput);

    if (todoInput.value == "") {
        alert("Giá trị ô input không được rỗng!!");
        return;
    }

    // 2. thêm item trong input vừa nhập vào todo list
    let todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todo-item");
    
    todoItemDiv.textContent = todoInput.value;

    let binImg = document.createElement("img");
    binImg.src = "./bin.png";
    binImg.classList.add("bin-icon");

    todoItemDiv.appendChild(binImg);

    document.querySelector(".todo-list-items")
    .appendChild(todoItemDiv);

    // 3. reset value 
    todoInput.value = "";
}

document.querySelector(".todo-list-items").onclick = function(e) {
    let targetElement = e.target;
    if (targetElement.classList.contains("bin-icon")) {
        let parent = targetElement.closest(".todo-item");
        parent.remove();
    }
    alert("Xóa thành công");
}