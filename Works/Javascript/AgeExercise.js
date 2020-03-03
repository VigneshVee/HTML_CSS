var age = Number(prompt("What is your age?"));
if(age<0){
	console.log("Age Cannot be negative")
}
else if(age==21){
	console.log("happy 21st birthday");
}
else if((age%2)!=0){
	console.log("Your age is odd");
}
if(age % Math.sqrt(age)===0){
	console.log("Your age is a square root number");
}