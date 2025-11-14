let boxex=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let winningText=document.querySelector(".winner");
let newgamebtn=document.querySelector(".new-game");
let containerDiv=document.querySelector(".container");

const winPattern=[
    [0,1,2,"horizontal-up"],
    [3,4,5,"horizontal-middle"],
    [6,7,8,"horizontal-down"],
    [0,3,6,"vertical-left"],
    [1,4,7,"vertical-middle"],
    [2,5,8,"vertical-right"],
    [0,4,8,"left-diagnol"],
    [2,4,6,"right-diagnol"]
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
                drawLine(arr[3]);
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
        newgamebtn.className="show-new-game";
    }
    else{
        winningText.innerText="Congratulations! Winner is O";
        newgamebtn.className="show-new-game";
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
        newgamebtn.className="new-game";
        hideLine();
    }
}

function drawLine(direction){
    line=document.createElement("div");
    line.className=`${direction}`;
    // line.className="vertical-middle";
    // line.className="vertical-right";
    // line.className="horizontal-left";
    // line.className="horizontal-middle";
    // line.className="horizontal-right";
    // line.className="left-diagnol";
    // line.className="right-diagnol";
    containerDiv.append(line);
};

function hideLine()
{
    line.className="hide-line";
    return;
}