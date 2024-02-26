let boxs = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;
let count= 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxs.forEach(box => {
    box.addEventListener("click",()=>{
        if (turnO) {
            box.innerHTML =" X";
            turnO = false
        } else {
            box.innerHTML = "O";
            turnO = true;
        }
        box.disabled = false
        let isWin = checkWinner();
        count++;

        if (count === 9 && !isWin) {
            gameOver();
        }
    })

});


let reset = ()=>{
    turnO = true;
    count = 0; 
    msgContainer.classList.add("hide");
    enable();
}


let gameOver = ()=>{
    msg.innerText = `Game is over try again`;
    msgContainer.classList.remove("hide");
    disabled();
}
let disabled = ()=>{
    for (const box of boxs) {
        box.disabled = true
    }
}
let enable = ()=>{
    for (const box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}


        let showWinner = (winner) => {
          msg.innerText =  `Congratulations, Winner is ${winner}`;
          msgContainer.classList.remove("hide");
          disabled();
      };




let checkWinner = ()=>{
    for (const pattern of winPatterns) {
        let val1 = boxs[pattern[0]].innerText;
        let val2 = boxs[pattern[1]].innerText;
        let val3 = boxs[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
             if (val1 === val2 && val2 === val3) {
                 showWinner(val1);
                 return true;
             }
        }
    }

}



resetBtn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);