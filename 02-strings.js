var name = 'Jonathan'
var surname = 'Muñoz'
var lastname = 'Arribas'

var recipeInterpolated =
  `Mi nombre:
${name} ${surname} ${lastname}
`
console.log(recipeInterpolated);

var car = 'Fiat'
var myCar = `Mi coche es un ${car.toUpperCase()}`

console.log(`--------------`)

var dog = 'CARLINO'
var myDog = `Mi perro es un ${dog.toLowerCase()}`

console.log(myDog)

console.log(`--------------`)

var computerDescription = `      Ordenador muy potente con mucha RAM.   `

console.log(computerDescription.trim())

var school = 'The PMBA'
var schoolName = school.slice(0, 5);
console.log(schoolName)