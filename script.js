//DOM elements
const result_el = document.getElementById("result");
const length_el = document.getElementById("length");
const lowcase_el = document.getElementById("lowcase");
const upcase_el = document.getElementById("upcase");
const numeric_el = document.getElementById("numeric");
const symbols_el = document.getElementById("symbols");
const generate_el = document.getElementById("generate");
const clipboard_el = document.getElementById("clipboard");


const randomfunc = {
    lowcase: getranlowcase,
    upcase: getranupcase,
    numeric: getrannum,
    symbols: getransym
};

generate_el.addEventListener('click',() =>{
    const length = +length_el.value;
    const chklowcase = lowcase_el.checked;
    const chkupcase = upcase_el.checked;
    const chknumeric = numeric_el.checked;
    const chksymbols = symbols_el.checked;

    result_el.innerText = generate_pw(chklowcase,chkupcase,chknumeric,chksymbols,length);
});


function generate_pw(lowcase,upcase,numeric,symbols,length){
    let pwresult="";
    const typecount = lowcase + upcase + numeric + symbols;

    console.log("typcount: ", typecount)
    const type_arr = [{lowcase}, {upcase}, {numeric}, {symbols}].filter
    (item => Object.values(item)[0]);

    console.log("type_arr: ",type_arr);

    if (typecount===0){
        return '';
    }
    for (let i = 0; i < length; i += typecount){
        type_arr.forEach(type =>{
            const funcname = Object.keys(type)[0];
            console.log("funcname: ", funcname);
            pwresult += randomfunc[funcname]();
        });
    }
    const finalpw = (pwresult.slice(0, length));
    return finalpw;
}


function getranlowcase(){
    return String.fromCharCode(Math.floor(Math.random()* 26)+97);
}
function getranupcase(){
    return String.fromCharCode(Math.floor(Math.random()* 26)+65);
}
function getrannum(){
    return String.fromCharCode(Math.floor(Math.random()* 10)+48);
}
function getransym(){
    const sym = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
    return sym [Math.floor(Math.random()* sym.length)];
}
console.log(getranlowcase());
console.log(getranupcase());
console.log(getrannum());
console.log(getransym());
console.log(length);