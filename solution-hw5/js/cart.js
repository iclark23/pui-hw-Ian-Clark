class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let cart=[];
let finalCart = new Set();
let roll1 = new Roll ("Original", "Sugar Milk", 1, 2.49);
let roll2 = new Roll ("Walnut", "Vanilla Milk", 12, 3.49);
let roll3 = new Roll ("Raisin", "Sugar Milk", 3, 2.99);
let roll4 = new Roll ("Apple", "Original", 3, 3.49);

let glazingToPrice = {
    "Original": 0.0,
    "Sugar Milk": 0.0,
    "Vanilla Milk": 0.5,
    "Double chocolate": 1.5,
}

let packSizeToPrice = {
    1:1,
    3:3,
    6:5,
    12:10,
}

let totalPrice = 0.0;


cart.push(roll1, roll2, roll3, roll4);


function calculatePrice(basePrice, glazingPrice, packPrice){
    let calculatedP = ((basePrice+glazingPrice)*packPrice).toFixed(2);
    return(calculatedP);

}


function fillCart(item){
    finalCart.add(item);
let cartitem = document.getElementsByTagName("template")[0];
let cartItemClone=cartItem.content.cloneNode(true);


cartItemClone.querySelector(".rollName").innerText = item.type + " Cinnamon Roll";
cartItemClone.querySelector(".rollGlazing").innerText = "Glazing: " + item.glazing;
cartItemClone.querySelector(".rollSize").innerText = "Pack Size: " + item.size;
cartItemClone.querySelector(".image-number-3").src = "./products/"+ item.type.toLowerCase()+ "-cinnamon-roll.jpg";
let calculatedPrice =  calculatePrice(item.basePrice, glazingToPrice[item.glazing], packSizeToPrice[item.size]);
cartItemClone.querySelector(".price-2").innerText = "$ "+calculatedPrice;
totalPrice = totalPrice + parseFloat(calculatedPrice);

document.querySelector(".total-price").innerText = "$ "+totalPrice;
let cartElement = cartItemClone.querySelector(".flexbox-container-3");

cartItemClone.querySelector(".Remove").onclick = (() => {
    cartElement.remove();
    let totalCost = parseFloat(document.querySelector(".total-price").innerText.slice(2));
    totalCost = totalCost - calculatedPrice;
    document.querySelector(".total-price").innerText = "$ " + totalCost.toFixed(2);
    finalCart.delete(item);
    console.log(finalCart);
})

document.querySelector(".productList").appendChild(cartItemClone);
}

for(let i=0; i<cart.length; i++){
    fillCart(cart[i]);
}






/*
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
*/