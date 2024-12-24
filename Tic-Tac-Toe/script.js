let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newgamebtn = document.querySelector("#newgame-button");
let messagecontainer = document.querySelector(".message-container");
let message = document.querySelector("#message");

let turnO = true;

const winningpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(box.innerText === ""){
            if(turnO){
                box.innerText="O";
                turnO=false;
            }
            else{
                box.innerText="X";
                turnO=true;
            }

            box.disabled=true;
            checkwinner();
        }
    });
});

const disableBoxes= () => {
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableBoxes= () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}

const showwinner =( Winner ) => {
    message.innerText = ` Congratulations, Winner is ${Winner}`;
    messagecontainer.classList.remove("hide");
    disableBoxes();
    return;
}

const showtie = () => {
    message.innerText= "It's a Tie! ";
    messagecontainer.classList.remove("hide");
    disableBoxes();
}
const checkforTie = () => {
    const is_allfilled = boxes.forEach((box) => {
        box.inerText !== "" ;
    });
    if(is_allfilled){
        showtie();
    }
}

const checkwinner =() => {
    for(let pattern of winningpatterns){
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let position1value = boxes[pattern[0]].innerText;
        let position2value = boxes[pattern[1]].innerText;
        let position3value = boxes[pattern[2]].innerText;
        if(position1value !== "" && position2value !== "" &&position3value !== "" ){
            if(position1value === position2value && position2value === position3value ){
                
                showwinner(position1value);
            }
        }
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    messagecontainer.classList.add("hide");
}
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);