let wins = 0;
let losses = 0;
let streak = 0;

const aiNames = ["Atlas","Nova","Echo","Sigma"];

generateCrystals();
updateUI();

function generateCrystals(){
let html = "";

for(let i=1;i<=6;i++){
html += `<button class="crystal" onclick="pick(${i})">💎</button>`;
}

document.getElementById("crystalContainer").innerHTML = html;
}

function pick(choice){

let bad = Math.floor(Math.random()*6)+1;

let ai = aiNames[Math.floor(Math.random()*aiNames.length)];
document.getElementById("aiName").innerText = ai;

if(choice === bad){
losses++;
streak = 0;
document.getElementById("result").innerText = "❌ Corrupted Crystal!";
}
else{
wins++;
streak++;
document.getElementById("result").innerText = "✅ Safe Crystal!";
}

addHistory(choice,bad);
updateUI();
checkAchievements();
save();
}

function updateUI(){

document.getElementById("wins").innerText = wins;
document.getElementById("losses").innerText = losses;
document.getElementById("streak").innerText = streak;

let total = wins + losses;
let rate = total ? ((wins/total)*100).toFixed(1) : 0;

document.getElementById("rate").innerText = rate + "%";
}

function addHistory(c,b){
document.getElementById("history").innerHTML =
`You: ${c} | Bad: ${b}<br>` +
document.getElementById("history").innerHTML;
}

function checkAchievements(){

let a = "";

if(streak>=5) a += "<div class='achievement'>🏆 Survivor</div>";
if(streak>=10) a += "<div class='achievement'>🔥 Lucky Devil</div>";
if(streak>=20) a += "<div class='achievement'>👑 Wizard</div>";

document.getElementById("achievements").innerHTML = a;
}

function save(){
localStorage.setItem("w",wins);
localStorage.setItem("l",losses);
localStorage.setItem("s",streak);
}

function resetProgress(){
wins=0; losses=0; streak=0;
localStorage.clear();
updateUI();
document.getElementById("history").innerHTML="";
document.getElementById("achievements").innerHTML="";
}
