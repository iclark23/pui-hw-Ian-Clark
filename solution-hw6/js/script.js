// initializing variables
let basePrice = 2.49;
let glazePrice = 0;
let packPrice = 1;
let totalPrice;




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
let bunGlazes =[new Bun("Keep Original", 0), new Bun("Sugar Milk", 0 ), new Bun("Vanilla Milk", 0.50 ), new Bun("Double Chocolate", 1.50 )];
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

// let glazing = bunGlazes[0];
function changeGlazing(element){

// glazing = bunGlazes[element.selectedIndex];

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

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
console.log(rollType);


document.querySelector(".paragraph").innerText =  rollType + " Cinnamon Roll";
document.querySelector("#changePrice").innerText = rolls[rollType].basePrice;
document.querySelector(".image-number-2").src = "./products/"+rolls[rollType].imageFile;

// function itemToCart(){
//     console.log("function is running");
//     //create a roll object
//     let roll = new Roll (rollType, bunGlazes,packs, rolls[rollType].basePrice);
//     // get rollType -> when the page loads?
//     // get glaze -> document.querySelector('#dropdownglaze').value
//     // get pack -> document.querySelector('select').value
//     // console.log the parameters from the object "roll"

//     cart.push(roll);
//     console.log(cart);

// }
//./products/original-cinnamon-roll.jpg
console.log(document.querySelector(".price"));
console.log(document.querySelector("Apple"))

let cart = []
if(localStorage.getItem("cart")) cart = Array.from(JSON.parse(localStorage.getItem("cart")));

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function itemToCart() {
    let newRoll = new Roll (rollType,glazedropdown.options[glazedropdown.selectedIndex].text,packdropdown.options[packdropdown.selectedIndex].text,rolls[rollType].basePrice)
    cart.push(newRoll);
    console.log(cart)

    localStorage.setItem("cart", JSON.stringify(cart));
}


