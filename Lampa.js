export default class Lampa{
    #index
    #allapot
    constructor(szuloelem, allapot, index){
        this.#allapot=allapot;
        this.#index = index;
        this.szuloelem = szuloelem

        this.megjelenit();
        this.esemeny();

    }

    megjelenit(){
        let html = ""
        if (this.#allapot) {
            html = `<div class="kor green">
                    </div>`;
                        
        }else{
             html = `<div class="kor orange">
                    </div>`;
        }
        this.szuloelem.insertAdjacentHTML("beforeend",html);
        
    }

    esemeny(){
        this.elem = document.querySelector(".kor:last-child");
        this.elem.addEventListener("click",(event)=>{
            console.log(this.#index)

            const e = new CustomEvent("kattint", {detail:this.#index})
            window.dispatchEvent(e);
        })
    }
}
