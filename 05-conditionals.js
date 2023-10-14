var age = 25
var canParticipe = false

if (age < 30) {
  canParticipe = true
}

console.log(`Puede participar el usuario? ${canParticipe}`)

var money = 90
var trainTicketPrice = 100

if (money >= trainTicketPrice) {
  console.log('Podemos comprar el billete de tren')
} else { console.log('No puedes comprar el billete de tren') }

var favoriteAnimal = 'Caballo'

if (favoriteAnimal === 'Gato') { console.log('Me gustan los gatos') }
else if (favoriteAnimal === 'Perro') { console.log('Me gustan los Perros') }
else { console.log('No te gustan los animales') }


let numero = 18
let resto = numero % 2
if (resto === 0) { console.log(numero + " es par"); }
else { console.log(numero + " es impar"); }

var number = 18
var rest = number % 2
if (rest === 0) { console.log(`El número ${number} es par`); }
else if (rest > 0) { console.log(`El número ${number} es impar`) }

var number = -1
if (number >= 0) { console.log(`El número es positivo`) }
else { console.log(`El número es negativo`) }

var numberOne = 8
var numberTwo = 0
var result = numberOne / numberTwo
if (result > 0) { console.log(`El resultado es: ${result}`) }
else if (result <= 0) { console.log(`No se puede realizar la operación`) }

var letter = "A"
if (letter.toUpperCase() == "A") { console.log('Has acertado') }
else { console.log('No has acertado') }

var numberOne = 5
var numberTwo = 9
var rest
if (numberOne > numberTwo) { rest = numberOne - numberTwo; console.log(`La diferencia es: ${rest}`) }
else if (numberOne < numberTwo) { rest = numberTwo - numberOne; console.log(`La diferencia es: ${rest}`) }