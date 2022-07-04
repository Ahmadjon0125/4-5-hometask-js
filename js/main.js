// let elForm = document.querySelector(".js-form")
// let elList = document.querySelector(".js-list")
// let elInput = document.querySelector(".js-input")

// let todos = []

// let renderTodo = (array, node) => {
// 	array.forEach(element => {
// 		let newItem = document.createElement("li");
// 		let newButton = document.createElement("button")
// 		let newSpan = document.createElement("span")
// 		let newCheckbox = document.createElement("input")
// 		// newItem.textContent = element.name
// 		newSpan.textContent = element.name
// 		newButton.textContent = "Delete"
// 		newButton.setAttribute("class", "delete-btn")
// 		newButton.dataset.todoId = element.id;
// 		newCheckbox.setAttribute("type", "checkbox")
// 		newCheckbox.dataset.todoId = element.id;

// 		newItem.appendChild(newCheckbox)
// 		newItem.appendChild(newSpan)
// 		newItem.appendChild(newButton)
// 		node.appendChild(newItem);
// 	})
// }

// elList.addEventListener("click", function (evt){
// 	if(evt.target.matches(".delete-btn")){
// 		let deletedId = evt.target.dataset.todoId;
// 		elList.innerHTML = ""
// 		let findedIndex = todos.findIndex((todo) => todo.id == deletedId)
// 		// console.log(findedIndex);
// 		todos.splice(findedIndex,1);
// 		// console.log(todos);
// 		renderTodo(todos,elList)
// 	}else if(evt.target.matches(".todo-check")){
// 		let checkedId = evt.target.dataset.todoId;
// 		// console.log(checkedId);
// 		let findedElement = todos.find((todo) => todo.id == checkedId)
// 		findedElement.isComplete = !findedElement.isComplete
// 		console.log(todos);
// 	}
// })

// elForm.addEventListener("submit", function(evt){
// 	evt.preventDefault();
// 	elList.innerHTML = ""
// 	let elInputVal = elInput.value;
// 	console.log(elInputVal);

// 	let obj = {
// 		id: todos.length + 1,
// 		name: elInputVal,
// 		isComplete: false
// 	}
// 	todos.push(obj)
// 	renderTodo(todos,elList)
// 	elInput.value = ""
// })

























let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elList = document.querySelector(".js-list");
let elAll = document.querySelector(".js-all");
let elComp = document.querySelector(".js-comp");
let elUncomp = document.querySelector(".js-uncomp");

let todos = [];

function renderTodo(array, node) {

	let count1 = 0 
	let count2 = 0
	array.forEach(element => {
		let newItem = document.createElement("li");
		let newSpan = document.createElement("span");
		let newButton = document.createElement("button");
		let newCheckbox = document.createElement("input");

		newSpan.textContent = element.name;
		newButton.textContent = "Delete";
		newButton.setAttribute("class", "delete-btn");
		newButton.dataset.todoId = element.id;
		newCheckbox.setAttribute("type", "checkbox");
		newCheckbox.setAttribute("class", "todo-check");
		newCheckbox.dataset.todoId = element.id;

		if (element.isComplete) {
			newSpan.style.textDecoration = "line-through";
			newCheckbox.checked = true;
			count1 = count1 + 1
		} else {
			count2 = count2 + 1
		}

		
		newItem.appendChild(newCheckbox);
		newItem.appendChild(newSpan);
		newItem.appendChild(newButton);
		node.appendChild(newItem);
	});
	elComp.textContent = count1
	elUncomp.textContent = count2
}

elList.addEventListener("click", function (evt) {
  if (evt.target.matches(".delete-btn")) {
    let deletedId = evt.target.dataset.todoId;
    elList.innerHTML = "";
    let findedIndex = todos.findIndex((todo) => todo.id == deletedId);

    todos.splice(findedIndex, 1);
		elAll.textContent = todos.length 
		elUncomp.textContent = todos.length
    renderTodo(todos, elList);
  } else if (evt.target.matches(".todo-check")) {
    let checkedId = evt.target.dataset.todoId;
    elList.innerHTML = "";
    let findedElement = todos.find((todo) => todo.id == checkedId)
		
    findedElement.isComplete = !findedElement.isComplete;
    renderTodo(todos, elList);
  }
})


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  elList.innerHTML = "";
  let elInputVal = elInput.value;
	elAll.textContent = todos.length + 1
	elUncomp.textContent = todos.length +1
	 

  let obj = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 0,
    name: elInputVal,
    isComplete: false
  }
  todos.push(obj)
  renderTodo(todos, elList);
  elInput.value = "";
})