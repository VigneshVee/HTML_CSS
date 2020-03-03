var num = 10;


while(num<=19){
	console.log("While Loop");
	console.log(num);
	num++;
}

for (var i = 10; i <= 19; i++) {
	console.log("For Loop");
	console.log(i);
}


var num2 = 10;
while(num2<=40){
	if(num2%2==0){
		console.log(num2);
	}
	num2++;
}
console.log("For Loop");
for (var i = 10; i <= 40; i+=2) {
	
	if (i%2 == 0) {
		console.log(i);
	}
	
}


var num3 = 300;
while(num3<=333){
	if ((num3%2)!=0) {
		console.log(num3);
	}
	num3++;
}
console.log("For Loop");
for (var i = 300; i <= 333; i++) {
	
	if (i%2 != 0) {
		console.log(i);
	}
	
}

var num4 = 5;
while(num4<=50){
	if ((num4%5)==0 && (num4%3)==0){
		console.log(num4);
	}
	num4++;
}
console.log("For Loop");
for (var i = 5; i <= 50; i++) {
	
	if ((i%5)==0 && (i%3)==0){
		console.log(i);
	}
	
}