import {Punto} from "./Punto"
import {Triangulo} from "./Triangulo"

let punto1 = new Punto(2,4)
let punto2 = new Punto(8,12)
let punto3 = new Punto(4,10)

console.log(punto1.toString())

console.log(punto1.distanciaAlOrigen())
console.log(punto1.calcularDistancia(punto2))
console.log(punto1.calcularCuadrante())

let triangulo = new Triangulo(punto1,punto2,punto3)
console.log(triangulo.calcularLongitudLados())