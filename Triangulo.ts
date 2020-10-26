import {Punto} from "./Punto"

export class Triangulo{

private puntoA: Punto
private puntoB: Punto
private puntoC: Punto

constructor(puntoA: Punto, puntoB: Punto, puntoC: Punto){

    this.puntoA = puntoA
    this.puntoB = puntoB
    this.puntoC = puntoC
}

calcularLongitudLados(): number[]{

    let ladoA: number = 0
    let ladoB: number = 0
    let ladoC: number = 0    
    let longitud : Array<number> = []

    ladoA = Math.sqrt(((this.puntoA.getx() - this.puntoB.getx())*(this.puntoA.getx() - this.puntoB.getx()))+((this.puntoA.gety() - this.puntoB.gety()) * (this.puntoA.gety() - this.puntoB.gety())))

    ladoB = Math.sqrt(((this.puntoB.getx() - this.puntoC.getx())*(this.puntoB.getx() - this.puntoC.getx()))+((this.puntoB.gety() - this.puntoC.gety()) * (this.puntoB.gety() - this.puntoC.gety())))

    ladoC = Math.sqrt(((this.puntoC.getx() - this.puntoA.getx())*(this.puntoC.getx() - this.puntoA.getx()))+((this.puntoC.gety() - this.puntoA.gety()) * (this.puntoC.gety() - this.puntoA.gety())))

    longitud.push (ladoA,ladoB,ladoC)

    return longitud
}

}