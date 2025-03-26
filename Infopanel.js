export default class Infopanel
{

    #szuloElem
    constructor(szam, szuloElem)
    {
        this.szam = szam
        this.#szuloElem = szuloElem
        this.lampaszamlalo();
        
    }


    lampaszamlalo()
    {
        let html = `<p>Kapcsold la e lehető legtöbb lámpát! (Legyen az összes zöld)
                        <br>A lekapcsolt lámpák száma:</p>
                    <p class="kiemelt">${this.szam}</p>`;

        this.#szuloElem.insertAdjacentHTML("beforeend", html);
    }
}