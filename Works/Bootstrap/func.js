function isEven(num){
	return n % 2 === 0;
}

function factorial(num){
	var result = 1;
	for(int i=1;i<=num;i++){
		result*=i;
	}
	return result;
}

function kebabToString(str){
	return str.replaceAll("-","_");
}