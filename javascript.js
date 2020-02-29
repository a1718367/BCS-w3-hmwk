window.onload = function(){document.getElementById("length").focus()};   
   
   
   const pwl = document.getElementById("length");
    const lowcase = "abcdefghijklmnopqrstuvwxyz";
    const upcase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
    const nlowcase = Array.from(lowcase);
    const nupcase = Array.from(upcase);
    const nnumeric = Array.from(numeric);
    const nsymbols = Array.from(symbols);


function initiate(){
    if(pwl.value == "" || pwl.value < 8 || pwl.value > 128){
        document.getElementById("result").innerHTML = "Please enter number between 8 and 128";
        document.getElementById("result").style.color = "red";
        return;
    }else{
        document.getElementById("err_length").innerHTML = "";
        generate();
    }
}


function generate(){

    const pwl = document.getElementById("length");
    const cblowcase = document.getElementById("lowcase");
    const cbupcase = document.getElementById("upcase");
    const cbnumeric = document.getElementById("numeric");
    const cbsymbols = document.getElementById("symbols");
    var result = "";
    let pwlength = +pwl.value;

    if (cblowcase.checked == true){
        arr1 = lowcase;
    } else {
        arr1 = "";
    }

    if (cbupcase.checked == true){
        arr2 = upcase;
    } else {
        arr2 = "";
    }
    if (cbnumeric.checked == true){
        arr3 = numeric;
    } else {
        arr3 = "";
    }
    if (cbsymbols.checked == true){
        arr4 = symbols;
    } else {
        arr4 = "";
    }
    console.log(arr1,arr2,arr3,arr4)
    f = arr1 + arr2 + arr3 + arr4;

if(f.length == 0){
        document.getElementById("result").innerHTML = "Select at least 1 criteria";
        document.getElementById("result").style.color = "red";
        return;
    }else{
    for (var i = 0; i<pwlength; i++){
    result = result + f.charAt(Math.floor(Math.random()*Math.floor(f.length)))
}
    console.log(f, result, result.length);
    document.getElementById("result").style.color = "black";
    document.getElementById("result").innerHTML = result;
    document.getElementById("display").innerHTML += result + "</br>";
    }
}