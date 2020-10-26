export class Punto{

    private x: number;
    private y: number;

    constructor(x:number ,y: number){
        this.x = x
        this.y = y
    }

    toString(){
        
        return `coordenada x: ${this.x}, coordenada y: ${this.y}`

    }

    getx(){
        return this.x
    }
    gety(){
        return this.y
    }
    setx(x: number){
        this.x = x
    }
    sety(y: number){
        this.y = y
    }

    distanciaAlOrigen(): number{

        let distancia: number = 0

        distancia = Math.sqrt(((this.x - 0)*(this.x - 0))+((this.y-0)* (this.y -0)))

        return distancia

    }

    calcularDistancia(otroPunto: Punto):number{

        let distancia: number = 0

        distancia = Math.sqrt(((otroPunto.x - this.x)*(otroPunto.x - this.x))+((otroPunto.y-this.y) * (otroPunto.y - this.y)))

        return distancia

    }

    calcularCuadrante():number{

        let cuadrante:number

        if(this.x == 0 || this.y == 0){

            cuadrante = 0
        }

        else if( this.x > 0 && this.y > 0){

            cuadrante = 1
        }

        else if( this.x < 0 && this.y > 0){

            cuadrante = 2
        }

        else if( this.x < 0 && this.y < 0){

            cuadrante = 3
        }

        else if( this.x > 0 && this.y < 0){

            cuadrante = 4
        }

        return cuadrante

    }

    //calcularMasCercano(puntos: Punto[]):Punto{}
       

    

}