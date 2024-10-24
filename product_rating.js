
// 4. Amazon Product Rating Feature (For Loop, Conditional Statements, Alert)
// Scenario: Giving a Product Rating.The user rates products on Amazon,
//  simulating the rating process using a loop.

let userInput=prompt("enter the rating of " + items[i] +  " out of 5:");

const items=["Phone","Laptop","watch"]
let rating=[];

for(let i=0;i<items.length;i++){
let userInput=prompt("enter the rating of " + items[i] +  " out of 5:");

    if(userInput>=0 && userInput<=5){
        rating.push(`${items[i]}: ${userInput}/5`);
    }else{
        alert("invalid rating for  " + items[i]);
    }
}
alert("Thanks for rating us! Here are the list of ratings you have given to us:\n" + rating.join("\n"));