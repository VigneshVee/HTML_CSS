console.log("CONNECTED!");

var todos = ["Buy new Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {


if (input === "list") {
	console.log("************************");
	todos.forEach(function(todo,i){
		console.log(i + " : " + todo);
	});
	console.log("************************");
	//console.log(todos);

} else if (input === "new"){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Todo Added");
}else if (input === "delete"){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Todo deleted");
}

input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listToDos(){
	console.log("************************");
	todos.forEach(function(todo,i){
		console.log(i + " : " + todo);
	});
}

function addToDo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Todo Added");
}

function deleteToDo(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Todo deleted");
}