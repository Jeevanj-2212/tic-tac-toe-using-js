let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const restGame =()=> {
    tur0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let count = 0;
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("box was clicked");
    count++;
    if(turnO){
        box.innerText = 'O';
        box.style.color= "black"
        turnO = false;
    }
    else{
        box.innerText = 'X';
        box.style.color= "red"
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
  })
});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};
const showWinner=(winner) =>{
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const draw =()=>{
    msg.innerText=`Draw`;
    msgContainer.classList.remove("hide");

}
const checkWinner = () =>{
    for(let pattern of winPatterns){
       let pos1val = boxes[pattern[0]].innerText;
       let pos2va1 = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;
       if(pos1val != "" && pos2va1 != "" && pos3val !=""){
        if(pos1val === pos2va1 && pos2va1 === pos3val){
            console.log("Winner",pos1val);
            showWinner(pos1val);
        }
       }
       if(count==9){
           draw();
       }
    }
};
newGameBtn.addEventListener("click",restGame);
reset.addEventListener("click",restGame);