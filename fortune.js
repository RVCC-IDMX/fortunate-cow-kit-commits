// fortune.js - Fortunate Cow
import * as cowsay from "cowsay";

// YOUR FORTUNES: Replace these with your own!
// Pick a theme that interests you: motivational quotes, coding tips,
// jokes, song lyrics, advice to your future self — whatever you want.
const fortunes = [
  "We found love in a hopeless place.-Rhianna",
  "I got a feeling that tonight’s gonna be a good night.-Black Eyed Peas",
  "I’m a survivor, I’m not gonna give up, I’m not gonna stop, I’m gonna work harder.-Destiny’s Child",
  "I’m on the pursuit of happiness and I know everything that shine ain’t always gonna be gold.-Kid Cudi",
  "I’m a believer, I couldn’t leave her if I tried.-Smash Mouth", 
  "I’m a Barbie girl, in a Barbie world. Life in plastic, it’s fantastic!-Aqua",
  "I’m too hot (hot damn), call the police and the fireman. I’m too hot (hot damn), make a dragon wanna retire.-Bruno Mars",
];

// Array of color emojis to add variety
const colors = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🩷", "🤍"];

// Pick a random fortune
const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];

// Pick a random color
const randomColorIndex = Math.floor(Math.random() * colors.length);
const todaysColor = colors[randomColorIndex];

// Get the current hour (0-23)
const currentHour = new Date().getHours();

// Determine the greeting based on time of day
let greeting = "";
if (currentHour < 12) {
  greeting = "Good morning!";
} else if (currentHour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

// Get the day of the week (0 = Sunday, 6 = Saturday)
const currentDay = new Date().getDay();

// Check if it's a weekend and add extra message
let dayMessage = "";
if (currentDay === 0 || currentDay === 6) {
  dayMessage = " Happy weekend! 🎉 ";
} else {
  dayMessage = " Have a great weekday! ";
}

// Combine greeting, day message, and fortune
const message = todaysColor + " " + greeting + dayMessage + todaysFortune;

// Display the cow (or change the creature — it's your project!)
console.log(cowsay.say({ 
  text: message, 
  f: "kitty",
  e: "^^",
  T: "U ",
 })
);
