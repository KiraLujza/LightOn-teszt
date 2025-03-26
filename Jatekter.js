import Infopanel from "./Infopanel.js";
import Lampa from "./Lampa.js";

export default class Jatekter{
    #allapotok

    constructor(szuloelem){
        this.szuloelem = szuloelem
        this.#allapotok = [false, false, false,
                            false, true, false,
                            false, false, false];
        
        this.megjelenit();
        this.kezel();
        this.ujrakezd();

    }

    
    ujrakezd()
    {
        let elem = document.getElementsByClassName("ujra")[0];
        let html = `<button class="gomb">Újrakezdés</button>`;

        elem.insertAdjacentHTML("beforeend", html);

        let gomb = document.querySelector(".gomb");
        gomb.addEventListener("click", (event)=>{
            console.log(event)
            this.visszaall();
            this.megjelenit()
        });
    }   

    visszaall()
    {
       
        for (let index = 0; index < this.#allapotok.length; index++) 
        {
           this.#allapotok[index] = Math.random() < 0.5;
           console.log(index)
        }
    }

    megszamlal()
    {
        let szamlal = 0;
        for (let index = 0; index < this.#allapotok.length; index++) 
        {
            if(this.#allapotok[index] === true)
            {
                szamlal++;
            }
        }
        return szamlal;
    }


    megjelenit(){
        this.szuloelem.innerHTML = "";
        for (let index = 0; index < this.#allapotok.length; index++) {
            new Lampa(this.szuloelem,this.#allapotok[index],index)
            
        }
        
        this.nyertesFigyel();
        
        new Infopanel(this.megszamlal(), this.szuloelem);
    }

    kezel(){
        window.addEventListener("kattint",(event)=>{
            let index = event.detail
            this.#allapotok[index] = this.#allapotok[index] === true ? false : true;
            console.log(this.#allapotok[index])

                const neighbours = this.getNeighbours(index);

                neighbours.forEach(neighborIndex => {
                    this.#allapotok[neighborIndex] = this.#allapotok[neighborIndex] === true ? false : true;
                });
                this.megjelenit();                

            }
    )};
    

    getNeighbours(index){
        const neighbors = [];

        const row = Math.floor(index / 3);
        const col = index % 3;

        if (row > 0) neighbors.push(index - 3); 
        if (row < 2) neighbors.push(index + 3); 
        if (col > 0) neighbors.push(index - 1); 
        if (col < 2) neighbors.push(index + 1); 

        return neighbors;

    }

    nyertesFigyel()
    {
        let win = this.#allapotok.every(state => state === true)
        if (!win) 
        {
            win = this.#allapotok.every(state => state === false)
            
        }
        if (win) {
            this.szuloelem.innerHTML = "";
            for (let index = 0; index < this.#allapotok.length; index++) {
                new Lampa(this.szuloelem,true,index)
            }

            setTimeout(() => {
                alert("Big win");
            }, 500);

        }
    }
}

