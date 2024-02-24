let inpBox = document.querySelector(".inpBox");
let listContainer = document.querySelector(".list-container");
let btn = document.querySelector(".btn");

function storeData() {
    localStorage.setItem("data",listContainer.innerHTML)
}

function getData() {
    listContainer.innerHTML = localStorage.getItem("data")
}

getData()

btn.addEventListener("click",()=>{
    if (inpBox.value == "") {
        alert("Must be write something in input");
    } else  {
        let li = document.createElement("li");
        li.innerHTML = inpBox.value;  
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listContainer.appendChild(li).appendChild(span);
        storeData()
    }

    inpBox.value = "";
}) 


listContainer.addEventListener("click",(evt)=>{
   if (evt.target.tagName === "LI") {
       evt.target.classList.toggle("checked");
       storeData()
   } else if(evt.target.tagName === "SPAN"){
       evt.target.parentElement.remove();
       storeData()
   }
})



