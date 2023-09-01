//function  expression
let viajando = function(destino) {
    return 'Viajando a la ciudad de ' + destino

    
}

let viaje = viajando('Paris')
console.log(viaje)

//arrow function 
let viajando2 = (destino, duracion) => 'Viajando a la ciudad de ' + destino + ' por' + duracion
let viaje2 = viajando2('Londres', ' 9 dias')
console.log(viaje2)

//Area del triangulo con parseInt #### hacer tambien con let
var base = parseInt(prompt('Dime la base del triangulo'))
console.log(base)

var altura = parseInt(prompt('Dime la altura del triangulo'))
console.log(altura)

alert('El area del triangulo es ' + ((base * altura)/2))
area = ((base * altura)/2)
console.log(area)
