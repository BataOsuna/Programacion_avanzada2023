const lenguajes = ['JavaScript', 'PHP', 'Python', 'Ruby']
const frameworks = ['ReacJS', 'Laravel', 'Django', 'Ruby on Rails']

//unir los arreglos en uno solo

//forma anterior
let combinacion = lenguajes.concat(frameworks)
console.log(combinacion)


//forma nueva
let combinacion2 = [... lenguajes, ...frameworks]
console.log(combinacion2)


//otros ejemplos con reverse muestra el ultimo parametro del array
let [ultimo]= [... lenguajes].reverse()
console.log(ultimo)