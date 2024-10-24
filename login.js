// 6. Hotstar: Logging Out (Confirm & SetTimeout)
// Scenario: User Logging Out with Confirmation
// Simulating a logout experience where the user is
//  asked to confirm if they really want to log out,
//   with a delay before redirecting them to the login page.
//  let userInput=prompt("Are you sure want to log out ")
let confirmation=confirm("Are you really  want to log out.?")

if(confirmation){
   alert("Logging out your account"); 

   setTimeout(function(){
       alert("You have been successfully logged out");
   },2000);
}else{
   alert("your logout is cancelled.enjoy streaming")
}