var count = 0

while (count <= 10) {
  console.log(`La cuenta va por ${count}`)

  count += 1
}

var negativeCount = 10

while (negativeCount >= 0) {
  console.log(`La cuenta va por ${negativeCount}`)

  negativeCount -= 1
}

var count = 1
while (count < 11) {
  console.log(`Soy el número: ${count}`)
  count += 1
}

var count = 12
while (count < 25) {
  console.log(`soy el número: ${count}`)
  count += 1
}

console.log('-------------------')

var count = 7
while (count < 32) {
  if (count % 2 !== 0) {
    console.log("Soy un numero impar " + count)
  }
  count += 1
}

var count = 12
while (count < 21) {
  if (count % 2 === 0) {
    console.log(`Soy un numero par ${count}`)
  }
  count += 1
}
var count = 1
while (count < 46) {
  if (count % 3 === 0 && count % 5) {
    console.log(`somos los multiplos de 3 y 5 ${count}`)
  }
  else if (count % 3 === 0) {
    console.log(`somos los multiplos de 3 ${count}`)
  }
  else if (count % 5 === 0) {
    console.log(`somos los multiplos de 5 ${count}`)
  }
  count += 1
}

console.log(`----------------`)

i = 0
var arrayEjemplo = ["Cosito1", "Cosito2", "Cosito3", "Cosito4"]
while (i < arrayEjemplo.length) {
  console.log(`Este es el elemento: ${arrayEjemplo[i]}`)
  i += 1
}

console.log(`---------------`)

suma = 0
i = 0
var arrayEjemplo = [1, 2, 9, 1102, 20]
while (i < arrayEjemplo.length) {
  console.log(`La suma total es de ${suma}`)
  suma = suma + arrayEjemplo[i];
  i += 1
}