for (var i = 0; i < 6; i = i + 1) {
  console.log(`El valor de i es: ${i}`)
}

(`------------`)

for (var i = 10; i >= 1; i = i - 1) {
  console.log(`El valor de i es: ${i}`)
}

var timesRepeated = 0
var sentence = 'La programación me gusta'

for (var i = 0; i < sentence.length; i += 1) {
  if (sentence[i] == 'a') {
    timesRepeated += 1;
  }
}
console.log(`La letra "a" se ha repetido ${timesRepeated} veces`)

console.log('------------------')

for (var i = 0; i < 10; i += 1) {
  console.log(`Soy el número: ${i}`)
}

for (var i = 12; i < 25; i += 1) {
  console.log(`Soy el número: ${i}`)
}

for (var i = 7; i < 32; i += 2) {
  console.log(`Soy el número: ${i}`)
}

for (var i = 12; i < 22; i += 1) {
  if (i % 2 !== 0) {
    console.log(`Soy el numero impar ${i}`)
  }
}

console.log(`----------------`)

for (var i = 1; i < 46; i += 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`somos los múltiplos de 3 y 5: ${i}`)
  }
  else if (i % 3 === 0) {
    console.log(`somos los múltiplos de 3: ${i}`)
  }
  else if (i % 5 === 0) {
    console.log(`somos los múltiplos de 5: ${i}`)
  }
}

var arrayEjemplo = ["Cosito1", "Cosito2", "Cosito3", "Cosito4"];

for (var i = 0; i < arrayEjemplo.length; i += 1) {
  console.log(arrayEjemplo[i])
}

var arraynumbers = [11, 2, 9, 1102, 20];
var sum = 0;
for (i = 0; i < arraynumbers.length; i += 1) {
  sum = sum + arraynumbers[i]
}
console.log("La suma del array es la siguiente: " + sum)