import * as images from "./images"



class Card {
    constructor(index, imgSrc){
        this.index = index
        this.imgSrc = imgSrc
        this.selected = false
    }
}

const Amoonguss = new Card(1, images.img1)
const Ariados = new Card(2, images.img2)
const Durant = new Card(3, images.img3)
const Foongus = new Card(4, images.img4)
const Grossifleur = new Card(5, images.img5)
const Lilligant = new Card(6, images.img6)
const Petilil = new Card(7, images.img7)
const Spinarak = new Card(8, images.img8)
const Sunflora = new Card(9, images.img9)
const Sunkern = new Card(10, images.img10)
const Venomoth = new Card(11, images.img11)
const Venonat = new Card(12, images.img12)

const Virizion = new Card(13, images.img13)
const Vulpix = new Card(14, images.img14)
const Ninetales = new Card(15, images.img15)
const Growlithe = new Card(16, images.img16)
const Arcanine = new Card(17, images.img17)
const Ponyta = new Card(18, images.img18)
const Rapidash = new Card(19, images.img19)
const Victini = new Card(20, images.img20)
const Fennekin = new Card(21, images.img21)
const Braixen = new Card(22, images.img22)
const Delphox = new Card(23, images.img23)
const Fletchinder = new Card(24, images.img24)





export {Amoonguss, Ariados, Durant, Foongus, Grossifleur, Lilligant, Petilil, Spinarak, Sunflora, Sunkern, Venomoth, Venonat, Virizion, Vulpix, Ninetales, Growlithe, Arcanine, Ponyta, Rapidash, Victini, Fennekin, Braixen, Delphox, Fletchinder}