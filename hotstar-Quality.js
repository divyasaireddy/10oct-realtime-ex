
// 2. Hotstar: Video Quality Selection (Switch Case & Prompt)
// Scenario: Choosing Video Quality Based on User Input
// Before starting a video, the system prompts the user to 
// select the video quality (like 720p, 1080p, 4K).



let userInput=prompt("Enter the Video Quality: Normal,720p,1080p,4K")

switch(userInput){
    case "Normal":
        alert("You have choosen Normal Quality of Video.")
        break;
    case "720p":
        alert("You have choosen 720p.It can play with average internet speed also.")
        break;
    case "1080p":
        alert("You have choosen 1080p.It is HD quality of video.")
        break;
    case "4K":
        alert("You have choosen 4k.It is Ultra Hd and which requires more internet.")
        break;
    default:
        alert("Please Choose a Valid Option")
}