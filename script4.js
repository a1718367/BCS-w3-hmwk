window.onload = function(){document.getElementById("length").focus()};
var arr = {
"lowcase" : "abcdefghijklmnopqrstuvwxyz",
"upcase" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
"num" : "0123456789",
"sym" : "!#$%&()*+,-./:;<=>?@[\]^_'{|}~"
}
arr_l = Array.from(arr.lowcase);
arr_u = Array.from(arr.upcase);
arr_n = Array.from(arr.num);
arr_s = Array.from(arr.sym);
iarr = [arr_l,arr_u,arr_n,arr_s];

// js logic



// chcked chbx => var = arr.object
// combine var to create selected arr
// generate pw using selected arr

function initiate(){

    var n = document.getElementById("length").value;
    var a = document.getElementById("lowcase").checked;
    var b = document.getElementById("upcase").checked;
    var c = document.getElementById("numeric").checked;
    var d = document.getElementById("symbols").checked;
    var chkbx = [a,b,c,d]
    console.log(chkbx, chkbx.length,n);

// input validation
    // validate length input >= 8; <= 128; is number; != ""
    // prompt user for input
    // check for chbx status
    // must have at least one selected

    if(isNaN(n) || n < 8 || n > 128){
    document.getElementById("result").innerHTML = "Enter a number between 8 and 128 inclusive"
    document.getElementById("result").style.color = "red";
    document.getElementById("length").focus();
    }else if (a == false && b == false && c == false && d == false){
    document.getElementById("result").innerHTML = "Select a criteria"
    document.getElementById("result").style.color = "red";
    }else{

// Generate user generated pw array based on criteria selected
    // check checkbox array for index with value == true
    // add checkbox array to empty array if value == true
    // pass on myarr and pw length to pw generator func
    var n = document.getElementById("length").value;
    var myarr = Array();
    for(i=0;i<chkbx.length;i++){
        if(chkbx[i]==true){
            myarr = myarr.concat(iarr[i])
        }        
    }
//display return pw to result box
//display return pw to previous pw generated area
    var pw = generate(myarr,n);
    document.getElementById("result").textContent = pw;
    document.getElementById("result").style.color = "black";
    display(pw);
    }

}
//pw generator
function generate(arr1, length){
    var pw = "";
        for(i=0; i<length; i++){
        pw = pw + arr1[Math.floor(Math.random()*Math.floor(arr1.length))]; 
    }
    console.log(pw, "length: ", pw.length)
    return pw;
    
}
//append generated password to display
function display(pw){
    var disp = document.createElement("div");
    disp.textContent = pw.length + "  " + pw;
    document.getElementById("display").appendChild(disp)
}