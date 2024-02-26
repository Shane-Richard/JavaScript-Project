let bubble = document.querySelector(".card-bottom");
function makeBubble() {
  let cuttler = "";

  for (let index = 0; index <= 101; index++) {
    let rn = Math.floor(Math.random() * 10);
    cuttler += `<div class="circle">${rn}</div>`;
  }

  bubble.innerHTML = cuttler;
}

makeBubble();


function timerNum() {
    let timer = 30;
    let timerInt;

timerInt = setInterval(() => {
   if (timer > 0) {
        timer--
        document.querySelector("#timeVal").innerHTML = timer
    } else {
        clearInterval(timerInt);
        bubble.innerHTML = `<h1>Game is over</h1>`
    }
}, 1000);
}

timerNum();

let randomNum = 0;
function hitNum() {
    randomNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").innerHTML=  randomNum
}

hitNum()


let srocePlus = 0;

function sroceNum() {
    srocePlus += 10;
    document.querySelector("#sroceVal").innerHTML = srocePlus;
}


 

bubble.addEventListener("click",(e)=>{
   let box = e.target.textContent;
   if (box == randomNum ) {
    sroceNum()   
    makeBubble();
    hitNum()
   }
   
})
