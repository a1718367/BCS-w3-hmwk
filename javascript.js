function validate(){

var checkbox= document.querySelector('input[name="checkbox"]:checked');
  if(!checkbox){
        document.getElementById("error_no_criteria").innerHTML="Please Select at least one criteria";
    } else {
        document.getElementById("error_no_criteria").innerHTML="All good"}}
