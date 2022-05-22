class LogicGame {
    #firstButton;
    #secondButton;

    constructor (tombolSatu, tombolDua){
        if (this.constructor === LogicGame) {
            throw new Error("Error Bro")
        }
        this.#firstButton = tombolSatu ;
        this.#secondButton = tombolDua ;
    }
    
    mulaiBatu(){
        this.#setTombolSatu ("batu");
        this.#setTombolDua (acak);
    }

    mulaiKertas(){
        this.#setTombolSatu ("kertas");
        this.#setTombolDua (acak);
    }

    mulaiGunting(){
        this.#setTombolSatu ("gunting");
        this.#setTombolDua (acak);
    }

    #setTombolSatu (pilihan) {
        for (let index = 0; index < this.#firstButton.length; index++) {
            if (pilihan === "batu") {
                this.#firstButton[0].style.backgroundColor = "#C4C4C4";
                this.#firstButton[1].disabled = true;
                this.#firstButton[2].disabled = true;
            } else if (pilihan === "kertas") {
                this.#firstButton[1].style.backgroundColor = "#C4C4C4";
                this.#firstButton[0].disabled = true;
                this.#firstButton[2].disabled = true;
            } else if (pilihan === "gunting") {
                this.#firstButton[2].style.backgroundColor = "#C4C4C4"
                this.#firstButton[1].disabled = true;
                this.#firstButton[0].disabled = true;
            }    
        }
    }

    #setTombolDua (selec){
        for (let ars = 0; ars < this.#secondButton.length; ars++) {
            if (selec === 0) {
                this.#secondButton[0].style.backgroundColor = "#C4C4C4";
            } else if (selec === 1) {
                this.#secondButton[1].style.backgroundColor = "#C4C4C4";
            } else if (selec === 2) {
                this.#secondButton[2].style.backgroundColor = "#C4C4C4";
            }
        }
    }
}

class Update extends LogicGame {
    #hasil;

    constructor (tombolSatu, tombolDua, hasilGame){
        super(tombolSatu, tombolDua);
        this.#hasil = hasilGame;
    }

    mulaiBatu() {
        super.mulaiBatu();
        this.#setPerbandingan ("batu");
    }

    mulaiKertas(){
        super.mulaiKertas();
        this.#setPerbandingan ("kertas");
    }

    mulaiGunting(){
        super.mulaiGunting();
        this.#setPerbandingan ("gunting");
    }

    #setPerbandingan (selek){
        for (let aaa = 0; aaa < this.#hasil.length; aaa++) {
            if (selek === "batu" && acak === 0) {
                this.#hasil[0].style.display = "none";
                this.#hasil[3].style.display = "flex";
            } else if (selek === "batu" && acak === 1) {
                this.#hasil[0].style.display = "none";
                this.#hasil[2].style.display = "flex";
            } else if (selek === "batu" && acak === 2) {
                this.#hasil[0].style.display = "none";
                this.#hasil[1].style.display = "flex";
            } else if (selek === "kertas" && acak === 0) {
                this.#hasil[0].style.display = "none";
                this.#hasil[1].style.display = "flex";
            } else if (selek === "kertas" && acak === 1) {
                this.#hasil[0].style.display = "none";
                this.#hasil[3].style.display = "flex";
            } else if (selek === "kertas" && acak === 2) {
                this.#hasil[0].style.display = "none";
                this.#hasil[2].style.display = "flex";
            } else if (selek === "gunting" && acak === 0) {
                this.#hasil[0].style.display = "none";
                this.#hasil[2].style.display = "flex";
            } else if (selek === "gunting" && acak === 1) {
                this.#hasil[0].style.display = "none";
                this.#hasil[1].style.display = "flex";
            } else if (selek === "gunting" && acak === 2) {
                this.#hasil[0].style.display = "none";
                this.#hasil[3].style.display = "flex";
            } 
        }
    }
}

const x = document.getElementsByClassName("btn-1");
const y = document.getElementsByClassName("btn-2");
const z = document.getElementsByClassName("value");

let acak = Math.floor(Math.random() * 3);
const coreGame = new Update(x, y, z)

function batu() {
    coreGame.mulaiBatu ()
    
}
function kertas() {
    coreGame.mulaiKertas ()
}
function gunting() {
    coreGame.mulaiGunting ()
}
function ref() {
    location.reload();
    return false;
}