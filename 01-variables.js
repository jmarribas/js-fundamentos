var greetings = "hola desde";
var school = "pmba";

var numberOne = 20;
var numberTwo = 30;

var greetingsFromSchool = greetings + " " + school;
var finalNumber = numberOne / numberTwo;

var myBooleat = false

var myObject = {
  name: "Ignacio",
  surname: "Diez"
};
console.log(greetingsFromSchool + " " + finalNumber + " " + myObject.surname);

var price = 100
var priceIva = price * 21 / 100
console.log(`El precio de la compra es de: ${price + priceIva} Euros`)

var numberOne = 3
var numberTwo = 3
var numberThree = 4
var medial = (numberOne + numberTwo + numberThree) / 3
console.log(`El valor medio es ${medial}`)


var kilometers = 80
var litres = 20
var consum = kilometers / litres
console.log(`El consumo que has tenido es de ${consum} l/km`)

var hours = 2
var minutes = 30
var seconds = (hours * 60) * 60 + (minutes * 60)
console.log(`El total de segundos son: ${seconds} segundos`)

var varUno = 10;
var varDos = 30;
console.log("varUno es " + varUno);   // 10
console.log("varDos es " + varDos);   // 30
var aux
aux = varUno
varUno = varDos;
varDos = aux;
console.log("varUno es " + varUno);    // 30
console.log("varDos es " + varDos);    // 10

var number = 51
var rest = number % 2
var par = rest == 0
console.log(`El número ${number} es par? ${par}`)