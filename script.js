let boxex=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let winningText=document.querySelector(".winner");
let newgamebtn=document.querySelector(".new-game");
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turnO=true;

boxex.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button Clicked.");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWin();
    });
});

resetbtn.addEventListener("click",resetGame);
newgamebtn.addEventListener("click",resetGame);

function checkWin()
{
    for(arr of winPattern)
    {
        let one=boxex[arr[0]].innerText;
        let two=boxex[arr[1]].innerText;
        let three=boxex[arr[2]].innerText;
        if(one!=""&&two!=""&&three!="") //checking non empty
        {
            if(one===two&&one===three)  //checkin equality
            {
                for(box of boxex)   //disable all boxex
                {
                    box.disabled=true;
                }
                showWinner();
            }   
        }
    }
}

function showWinner()
{
    //since the turnO is now False
    if(turnO)
    {
        winningText.innerText="Congratulations! Winner is X";
        newgamebtn.classList.remove("new-game");
        newgamebtn.classList.add("show-new-game");
    }
    else{
        winningText.innerText="Congratulations! Winner is O";
        newgamebtn.classList.remove("new-game");
        newgamebtn.classList.add("show-new-game");
    }
}

function resetGame()
{
    for(box of boxex)
    {
        box.disabled=false;
        box.innerText="";
        turnO=true;
        winningText.innerText="";
        newgamebtn.classList.remove("show-new-game");
        newgamebtn.classList.add("new-game");

    }
}
