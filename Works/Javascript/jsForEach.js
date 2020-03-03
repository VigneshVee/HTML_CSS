console.log("Connected");

function myForEach(arr,func){
	for(var i = 0; i < arr.length; i++){
		//call function for each element in array
		func(arr[i]);
	}
}

var colors = ["red","orange","blue","green"];
//myForEach(colors,alert);
//myForEach(colors,function(){alert("Anonymous function")});

Array.prototype.myForEach = function(first_argument) {
for(var i = 0; i < this.length; i++){
		//call function for each element in array
		first_argument(this[i]);
	}	
};



var friends = ["Cena", "Randy", "Edge"];

//friends.myForEach(alert);

friends.myForEach(function(name){
	console.log("Hello "+name);
});


var movieObject = [
	{title : "Frozen", rating : "4.5 stars", hasWatched : true},
	{title : "Dragons", rating : "4.6 stars", hasWatched : false},
	{title : "Pirates Of The Caribbean", rating : "5 stars", hasWatched : true},
	]

movieObject.forEach(function(movie){
var result = "You have ";
if(movie.hasWatched){
result += "watched ";
} else {
result += "not watched ";
}
result += "\""+movie.title+"\"-";
result += movie.rating;
console.log(result);
});

