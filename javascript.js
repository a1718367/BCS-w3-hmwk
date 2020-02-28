const length_el = document.getElementById("length");
const lowcase_el = document.getElementById("lowcase");
const upcase_el = document.getElementById("upcase");
const numeric_el = document.getElementById("numeric");
const symbols_el = document.getElementById("symbols");
const generate_el = document.getElementById("egenerate");
const clipboard_el = document.getElementById("clipboard");

const pwlength = +length_el.value;

const lowcase_arr = ["abcdefghijklmnopqrstuvwxyz"];
const upcase_arr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numeric_arr = ["0123456789"];
const symbols_arr = ["!#$%&()*+,-./:;<=>?@[\]^_`{|}~"];

function validate(){
    if(length_el.value == "" || length_el.value <=0 || length_el.value > 128){
        document.getElementById("error_nolength").innerHTML = "Please eneter a number between 8 and 128";
    }else {
        document.getElementById("error_nolength").innerHTML = "";
    }
}
console.log(lowcase_el.value);

function pwgenerate(){

let pwresult = ""

for (var i = 0; i<pwlength; i++){
pwresult = pwresult + lowcase_arr[Math.floor(Math.random() * Math.floor(lowcase_arr-1))];
}

console.log(pwresult);
}
