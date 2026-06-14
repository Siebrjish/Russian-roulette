```javascript
let wins = Number(localStorage.getItem("wins")) || 0;
let losses = Number(localStorage.getItem("losses")) || 0;
let streak = Number(localStorage.getItem("streak")) || 0;

const enemies = ["Nova","Echo","Atlas","Sigma"];

let playerAlive = true;
let enemyAlive = true;

let deck = [];

newGame();

function newGame(){

deck = [];

for(let i=1;i<=20;i++){
deck.push(i);
}

let poisonIndex =
Math.floor(Math.random()*20);

deck[poisonIndex] = "POISON";

playerAlive = true;
enemyAlive = true;

updateStats();

document.getElementById("result").innerHTML =
"Choose your first card...";

}


function drawCard(choice){

if(!playerAlive || !enemyAlive){
return;
}

if(deck.length===0){

document.getElementById("result").innerHTML =
"🏆 No poison card appeared.";

return;

}

let enemy =
enemies[Math.floor(Math.random()*enemies.length)];

document.getElementById("enemyName").innerText =
enemy;


let playerCard =
deck.splice(
Math.floor(Math.random()*deck.length),
1
)[0];


if(playerCard==="POISON"){

playerAlive=false;

losses++;
streak=0;

document.getElementById("result").innerHTML =
"☠️ You found the Poison Card!";

document.getElementById("enemyText").innerText =
enemy+" wins the duel.";

saveData();
updateStats();

return;

}


if(deck.length>0){

let enemyCard =
deck.splice(
Math.floor(Math.random()*deck.length),
1
)[0];


if(enemyCard==="POISON"){

enemyAlive=false;

wins++;
streak++;

document.getElementById("result").innerHTML =
"🎉 "+enemy+" drew the Poison Card!";

document.getElementById("enemyText").innerText =
"You survive.";

saveData();
updateStats();

return;

}

}


addHistory(playerCard);

document.getElementById("result").innerHTML =
"✅ Both players survived.";

document.getElementById("enemyText").innerText =
enemy+" continues the duel.";

saveData();
updateStats();

}



function addHistory(card){

let history =
document.getElementById("history");

history.innerHTML =

"Round survived. Cards left: "

+ deck.length +

"<br>"

+ history.innerHTML;

}



function updateStats(){

document.getElementById("wins").innerText =
wins;

document.getElementById("losses").innerText =
losses;

document.getElementById("streak").innerText =
streak;

}



function saveData(){

localStorage.setItem("wins",wins);
localStorage.setItem("losses",losses);
localStorage.setItem("streak",streak);

}



function resetProgress(){

localStorage.clear();

wins=0;
losses=0;
streak=0;

updateStats();

document.getElementById("history").innerHTML="";

newGame();

}
```
