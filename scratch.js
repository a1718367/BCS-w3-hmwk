const lowcase_arr = ["abcdefghijklmnopqrstuvwxyz"];
const length = document.getElementById("length");

const pwlength =  +length.value;

let result = ""

for (var i = 0; i<pwlength; i++){
result = pwresult + lowcase_arr[Math.floor(Math.random() * Math.floor(lowcase_arr-1))];
}

console.log(pwlength.value);