import Lampa from "./Lampa.js"

export default class Jatekter{
    #allapotok
    constructor(szuloelem){
        this.szuloelem = szuloelem
        this.#allapotok = [false,false,false,false,true,false,false,false,false]
        
        this.megjelenit();
        this.kezel();
        this.nyertesFigyel();
    }

    megjelenit(){
        for (let index = 0; index < this.#allapotok.length; index++) {
            new Lampa(this.szuloelem,this.#allapotok[index],index)
            
        }
    }

    kezel(){
        window.addEventListener("kattint",(event)=>{
            let index = event.detail
            this.#allapotok[index] = this.#allapotok[index] === true ? false : true;
            console.log(this.#allapotok[index])

                // Toggle the neighbors in a 3x3 grid (up, down, left, right)
                const neighbours = this.getNeighbours(index);

                // Toggle the neighboring lamps
                neighbours.forEach(neighborIndex => {
                    this.#allapotok[neighborIndex] = this.#allapotok[neighborIndex] === true ? false : true;
                });

                this.szuloelem.innerHTML = "";

                this.megjelenit();

                this.nyertesFigyel();

                


            }
    )}
    

    getNeighbours(index){
        const neighbors = [];

        // Calculate row and column based on the index
        const row = Math.floor(index / 3); // 0, 1, or 2
        const col = index % 3; // 0, 1, or 2

        // Check the neighbors based on the row and column
        if (row > 0) neighbors.push(index - 3); // Up
        if (row < 2) neighbors.push(index + 3); // Down
        if (col > 0) neighbors.push(index - 1); // Left
        if (col < 2) neighbors.push(index + 1); // Right

        return neighbors;

}

    nyertesFigyel(){
        let win = this.#allapotok.every(state => state === true)
        if (!win) {
            win = this.#allapotok.every(state => state === false)
            
        }
        if(win){
            alert("big win")

    }
}
}

