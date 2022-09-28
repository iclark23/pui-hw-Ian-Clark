// initializing variables
let basePrice = 2.49;
let glazePrice = 0;
let packPrice = 1;
let totalPrice;

// class constructor for bun - this makes an object
class Bun{
    glazeName; 
    bunPrice;

    constructor(bunName,bunPrice){
        this.glazeName = bunName;
        this.bunPrice = bunPrice;
    }
    priceChange() {
        glazePrice = this.bunPrice
}
}

class Pack {
    quantity;
    quantityPrice;

    constructor (quantity, quantityPrice){
        this.quantity = quantity
        this.quantityPrice = quantityPrice
    }

    priceChange(){
        packPrice = this.quantityPrice
    }

}

// making an array of glaze objects and pack objects
let bunGlazes =[new Bun("Keep Original", 0), new Bun("Sugar Milk", 0 ), new Bun("Vanilla Milk", 0.50 ), new Bun("Double Chococlate", 1.50 )];
let packs = [new Pack("1", 1), new Pack ("3", 3), new Pack ("6", 5) , new Pack ("12", 10) ];


let glazedropdown = document.getElementById("dropdownglaze")
let packdropdown = document.getElementById("dropdownpacks")
for (let i = 0; i < bunGlazes.length;i++) {
    // glaze dropdown
    let glazedropdownoption= document.createElement("option")
    glazedropdownoption.innerHTML = bunGlazes[i].glazeName
    glazedropdown.appendChild(glazedropdownoption)

    //pack dropdown
    let dropdownpacks = document.createElement("option") // makes dropdown option with no names yet
    dropdownpacks.innerHTML = packs[i].quantity // gives a dropdown option a name
    packdropdown.appendChild(dropdownpacks)  // adds the options inside the dropdown

}


function changeGlazing(element){

    const priceChange = element.value;
    

    for (i = 0; i < bunGlazes.length; i++){
        if (bunGlazes[i].glazeName == element.value) {
            bunGlazes[i].priceChange()
        }

    }

    for (i = 0; i < packs.length; i++){
        if (packs[i].quantity == element.value) {
            packs[i].priceChange()
        }
    }

    totalPrice = ((basePrice + glazePrice) * packPrice).toFixed(2);
    document.getElementById("changePrice").innerHTML = "$" + totalPrice;
}
