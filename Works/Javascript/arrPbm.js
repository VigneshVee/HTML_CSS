console.log("Connected");

function printReverse(arr){
	for(var i = arr.length-1; i>=0; i--){
		console.log(arr[i]);
	}
}


printReverse([1,4,3,6,78]);

//*******************************************************************
function isUnform(arr){
	arr.forEach( function(element){
		console.log(element);
		
	});
	var first = arr[0];
	for(var i = 0; i<=arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

function isUnformUsingForEach(arr){
	arr.forEach( function(element){
		console.log(element);
		
	});
	var first = arr[0];
	arr.forEach( function(element){
		if(element !== first){
			return false;
		}
	});
	return true;
}

var uniform = isUnform([1,2,1]);
console.log("isUniform : "+uniform);
uniform = isUnformUsingForEach([1,2,1]);
console.log("isUniform : "+uniform);

//***************************************************
function sumArray(arr){
	arr.forEach( function(element){
		console.log(element);
		
	});
	var sum = 0;
	arr.forEach(function(element){
		sum+=element;
	});
	return sum;
}

var sum = sumArray([34,16,20,100,99]);
console.log("Sum : "+sum);

//**************************************************************************************
function maxArray(arr){
arr.forEach( function(element){
		console.log(element);
		
	});
var max = 0;
arr.forEach(function(element){
	if(element>=max){
		max=element;
	}
});
return max;
}

var max = maxArray([12,90,15,120,3000,-2]);
console.log("Max :"+max);

