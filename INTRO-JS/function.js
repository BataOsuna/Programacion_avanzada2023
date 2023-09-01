//funcion declaraton

function saludar(nombre){
    console.log('Bienvenido: ' + nombre);
}

saludar('Juan')

//function expression

const cliente = function(nombreDev, skill) {
    console.log('Mostrando datos del desarrollador: ' + nombreDev + ' ' + skill);

}

cliente('Franco Osuna', 'Desarrollador web')