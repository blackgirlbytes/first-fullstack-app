//Simple Calculator
//author : Rizel
//Lic: GPlv3

//user can enter values into inputs



//user can click operations
document.getElementById("add").onclick = add;
document.getElementById("sub").onclick = sub;
document.getElementById("multiply").onclick = multiply;
document.getElementById("divide").onclick = divide;

  //user expects operation to occur
function add(){
  //get values out of inputs
var num1= parseFloat(document.getElementById('firstVal').value)
var num2=  parseFloat(document.getElementById('secondVal').value)

  //do the math
var sum= num1+ num2
  //display
  document.getElementById('result').innerHTML = sum

//user sees results

//cleartheinput
document.getElementById('firstVal').value=""
document.getElementById('secondVal').value=""
}

//user expects operation to occur
function sub(){
//get values out of inputs
//put it in a variable so it could store it into memory or else it would just disappear
var num1= parseFloat(document.getElementById('firstVal').value)
var num2=  parseFloat(document.getElementById('secondVal').value)

//do the math
var minus= num1- num2
//display
document.getElementById('result').innerHTML = minus

//user sees results

//cleartheinput
document.getElementById('firstVal').value=""
document.getElementById('secondVal').value=""
}

//user expects operation to occur
function multiply(){
//get values out of inputs
//put it in a variable so it could store it into memory or else it would just disappear
var num1= parseFloat(document.getElementById('firstVal').value)
var num2=  parseFloat(document.getElementById('secondVal').value)

//do the math
var prod= num1 * num2
//display
document.getElementById('result').innerHTML = prod

//user sees results

//cleartheinput
document.getElementById('firstVal').value=""
document.getElementById('secondVal').value=""
}

//user expects operation to occur
function divide(){
//get values out of inputs
//put it in a variable so it could store it into memory or else it would just disappear
var num1= parseFloat(document.getElementById('firstVal').value)
var num2=  parseFloat(document.getElementById('secondVal').value)

//do the math
var quotient= num1/ num2
//display
document.getElementById('result').innerHTML = quotient

//user sees results

//cleartheinput
document.getElementById('firstVal').value=""
document.getElementById('secondVal').value=""
}
