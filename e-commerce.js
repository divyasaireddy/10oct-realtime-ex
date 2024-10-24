// 1. Amazon (E-commerce Shopping Experience)
// Scenario: Checkout Process (For Loop & Conditional 
// Statements with alert() and confirm()).In this scenario,
// the user selects items from their cart, and the system prompts them to 
// confirm their purchase, simulating Amazon’s checkout process.

let userInput=prompt("enter the cartItems")
let totalCost=0;

let cartItems=["smart watch","smart phone","laptop"];

for(let i=0;i<cartItems.length;i++){
    let price=prompt(`Enter the price of ${cartItems[i]}`);
    if(price>=1){
    totalCost+=Number(price);
    }
}

if(confirm("Your total is $" + totalCost + " - Do you want to proceed to checkout?")){
    alert("Thankyou for your purchase!");
}else{
    alert("The selected items chancled")
}

