let noteContainer = document.querySelector(".note-containers");
let createBtn = document.querySelector(".createBtn");

let getData = ()=>{
    noteContainer.innerHTML = localStorage.getItem("data");
}
getData();
let storesData = ()=>{
    localStorage.setItem("data", noteContainer.innerHTML);
}


createBtn.addEventListener("click",()=>{
    let p = document.createElement("p");
    let img = document.createElement("img");
      p.className = "inpBox";
     p.setAttribute("contenteditable", "true");


    img.src = "assets/delete.webp"; 
    noteContainer.appendChild(p).appendChild(img);
})

noteContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        storesData()
    } else if (e.target.tagName === "P") {
           notes = document.querySelectorAll(".inpBox");
          notes.forEach((box) => {
              box.onkeyup = function() {
                storesData();
              }
          });
    }
});


document.addEventListener("keydown",(evt)=>{
    if (e.key == "Enter") {
        document.execCommand("insertLineBreak");
        evt.preventDefault()
    }
})