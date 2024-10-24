
// 3. Uber (Ride Booking Experience)
// Scenario: Ride Booking Confirmation (Conditional Statements, 
// SetTimeout, Confirm).The user books a ride on Uber.
//  They receive a confirmation message with a 3-second delay, 
//  simulating real-time updates.

let userInput=prompt("Choose Your Ride: Bike,Auto,Cab","Bike");
let confirmation=confirm("You selected -" + userInput + ". Do you want to confirm the booking?");

if(confirmation){
    alert("Waiting for the captain to pickUp Your -" + userInput + "  ride");

    setTimeout(function() {
        alert("Your booking is confirmed!Your captaion will arrive shortly")
    },3000);

    setTimeout(function() {
        alert("Your captain is on the way!")
    },10000);

    setTimeout(function(){
        alert("Your captain is arrived to the point")
    },15000);
}else{
    alert("Your ride is cancelled")
}