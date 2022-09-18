//Calcular el area de un cuadrado
// Usar arrowFunction
// Usar objetos como parámetros de la función

const square ={
    later:20
}

const squareArea=({later})=>{
   return Math.pow(later,2)
}
const squareParamet=({later})=>{
    return later*4
}
console.log(squareParamet(square))