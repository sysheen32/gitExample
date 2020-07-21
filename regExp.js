var regExp=/^[0-9]+$/;
var amount = "1230";

if(isNaN(amount) == true) {
	console.log("문자 "+amount);
}
else {
	console.log("숫자 "+amount);
}



if(!regExp.test(amount)) {
	console.log("숫자만 입력하세요");
}
else {
	console.log("문자");
}
