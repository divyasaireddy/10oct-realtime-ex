
// 5.Hotstar: Subscription Plan Selection (Switch Case & Prompt)
// Scenario: User Selects a Subscription Plan.Simulating Hotstar's 
// subscription options, the user chooses between different plans,
//  and based on their selection, they receive an alert with the plan details.


let userInput=prompt("Choose your subscription plan: Free,VIP,Premium")

switch(userInput){
    case "Free":
        alert("This is free which contains ads between the movies and shows");
        break;
    case "VIP":
        alert("This is VIP plan you can enjoy add-free movies and shows");
        break;
    case "premium":
        alert("This is premium plan you can enjoy all ad-free shows and movies with HD quality");
        break;
    default:
        alert("Invalid plan.Please choose the active plan")
}