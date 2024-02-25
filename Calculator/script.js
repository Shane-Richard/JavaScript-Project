let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let str = "";

let button = Array.from(buttons);

button.forEach((btn)=>{

    btn.addEventListener("click",(evt)=>{
      try {
        if (evt.target.innerHTML === "=") {
            str = eval(str)
            input.value = str;
        } else if(evt.target.innerHTML === "DEL") {
            str = str.substring(0,str.length-1) 
            input.value = str;
        }else if(evt.target.innerHTML === "AC"){
           str =  str.innerText = "";
            input.value = str;
        }
          else {
           str += evt.target.innerHTML;
            input.value = str;
        }
      } catch (error) {
        str = str.innerText = "Invalid ";
        input.value = str;
      }
    })
    
})