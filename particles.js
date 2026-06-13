const p = document.getElementById("particles");

for(let i=0;i<40;i++){
let d = document.createElement("div");

d.style.position = "absolute";
d.style.width = "6px";
d.style.height = "6px";
d.style.background = "white";
d.style.borderRadius = "50%";
d.style.left = Math.random()*100+"vw";
d.style.top = Math.random()*100+"vh";
d.style.opacity = Math.random();

p.appendChild(d);
}
