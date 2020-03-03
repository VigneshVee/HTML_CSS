function isEven(n){
	return n % 2 === 0;
}

function factorial(num){
	var result = 1;
	for(var i=1;i<=num;i++){
		result*=i;
	}
	return result;
}

function kebabToString(str){
	return str.replace(/-/g,"_");
}