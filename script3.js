window.onload = function(){document.getElementById("length").focus()};
var arr = {
"lowcase" : "abcdefghijklmnopqrstuvwxyz",
"upcase" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
"num" : "0123456789",
"sym" : "!#$%&()*+,-./:;<=>?@[\]^_'{|}~"
}

// js logic
// check for chbx status
// unchecked chbx => var = empty
// chcked chbx => var = arr.object
// combine var to create selected arr
// generate pw using selected arr

function initiate(){

var n = document.getElementById("length").value;
var a = document.getElementById("lowcase").checked;
var b = document.getElementById("upcase").checked;
var c = document.getElementById("numeric").checked;
var d = document.getElementById("symbols").checked;


if(isNaN(n) || n == 0 || n < 8 || n > 128){
    document.getElementById("result").innerHTML = "Enter a Number between 8 and 128"
    document.getElementById("result").style.color = "red";
}else if (a == false && b == false && c == false && d == false){
    document.getElementById("result").innerHTML = "Select at least 1 criteria"
    document.getElementById("result").style.color = "red";
}else{

if(a == true){var w = arr.lowcase}else{w =""};
if(b == true){var x = arr.upcase}else{x =""};
if(c == true){var y = arr.num}else{y =""};
if(d == true){var z = arr.sym}else{z =""};
var q = +document.getElementById("length").value;
var newarr = w+x+y+z;
var arr1 = Array.from(newarr)

    document.getElementById("result").innerText = generate(arr1,q);
    document.getElementById("result").style.color = "black";
    var result = document.getElementById("result").innerText;
    document.getElementById("display").innerHTML += result.length + "</br>" + result.toString() + "</br>"
};
}
function generate(arr1, length){
    var pw = "";
        for(i=0; i<length; i++){
        pw = pw + arr1[Math.floor(Math.random()*Math.floor(arr1.length))]; 
    }
    console.log(pw, "length: ", pw.length)
    return pw;
    
}