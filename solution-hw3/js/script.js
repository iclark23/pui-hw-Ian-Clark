// class constructor for bun - this makes an object
class Bun{
    glazeName; 
    bunPrice;

    constructor(bunName,bunPrice){
        this.glazeName = bunName;
        this.bunPrice = bunPrice;
    }
}
// made first object using class constructor (new bun object)
const keep_Original = new Bun("Keep Original", 0 );
const sugar_Milk = new Bun("Sugar Milk", 0 );
const vanilla_Milk = new Bun("Vanilla Milk", 0.50 );
const double_Chocolate = new Bun("Double Chococlate", 1.50 );

class Pack {
    quantity;
    quantityPrice;

    constructor (quantity, quantityPrice){
        this.quantity = quantity
        this.quantityPrice = quantityPrice
    }

}
// made second set of objects 
const onePack = new Pack("1", 1);
const twoPack = new Pack("3", 3);
const sixPack = new Pack("6", 5);
const twelvePack = new Pack("12", 10);

// made an array of glaze objects and pack objects
let bunGlazes =[keep_Original, sugar_Milk, vanilla_Milk, double_Chocolate];
let packs = [onePack, twoPack, sixPack, twelvePack];

// console.log("hi");

let glazedropdown = document.getElementById("dropdownglaze")
let packdropdown = document.getElementById("dropdownpacks")
for (let i = 0; i < bunGlazes.length;i++) {
    // glaze dropdown
    let glazedropdownoption= document.createElement("option")
    glazedropdownoption.textContent = bunGlazes[i].glazeName
    glazedropdown.appendChild(glazedropdownoption)
    // console.log( "I am on bun:");
    // console.log(bunGlazes[i].glazeName);

    //pack dropdown
    let dropdownpacks = document.createElement("option") // makes dropdown option with no names yet
    dropdownpacks.textContent = packs[i].quantity // gives a dropdown option a name
    packdropdown.appendChild(dropdownpacks)  // adds the options inside the dropdown
}

