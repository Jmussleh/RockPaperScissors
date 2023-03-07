window.alert("Play a game with me but choose carefully...");
let mygame = ["Rock","Paper","Scissors"];
let Comp = mygame[Math.floor(Math.random() * mygame.length)];

window.prompt("Choose Rock, Paper, or Scissors", "Choose wisely...");

alert("The computer chose " + Comp);


