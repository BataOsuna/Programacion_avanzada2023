const aplicarDescuento = new Promise ((resolve, reject) =>{
    
    let descuento = false

    if (descuento) {
        resolve('Descuento aplicado')
    }  else { 
        reject('no se pudo aplicar el descuento')
    }
    
})

console.log(aplicarDescuento)
