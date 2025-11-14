let boxex=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let winningText=document.querySelector(".winner");
let newgamebtn=document.querySelector(".new-game-hidden-btn");
let containerDiv=document.querySelector(".container");

//all patterns where user can win
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


let turnO=true; //track the switching b/w players
let count=0; //count how many buttons got clicked
boxex.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button Clicked.");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;    //changing status
            count++;
        }
        else{
            box.innerText="X";
            turnO=true;     //changing status
            count++;
        }
        box.disabled=true;

        if(checkWin())  //if someone won
        {
            showWinner();
            drawLine(arr[3]);
        }
        else if(!checkWin()&&count==9) //if all button clicked but no one won
        {
            noWinner();
        }
    });
});

resetbtn.addEventListener("click",resetGame);   //reset 
newgamebtn.addEventListener("click",resetGame); //reset by new game btn

function checkWin() //checks the win on every button click
{
    for(arr of winPattern)
    {
        let one=boxex[arr[0]].innerText;    //first button of pattern
        let two=boxex[arr[1]].innerText;    //second button of pattern
        let three=boxex[arr[2]].innerText;  //third button of pattern
        if(one!=""&&two!=""&&three!="") //checking non empty
        {
            if(one===two&&one===three)  //checkin equality
            {
                return true;    
            }   
        }
    }
}

function showWinner()
{
    //since the turnO is now False
    if(turnO)
    {
        winningText.innerText="Congratulations! Winner is X";   //show winnig text
        newgamebtn.className="show-new-game-btn";   //show new-game button
    }
    else{
        winningText.innerText="Congratulations! Winner is O";   //show winnig text
        newgamebtn.className="show-new-game-btn";   //show new-game button
    disableBoxes();
    }
}

//if no one won the game
function noWinner()
{
    winningText.innerText="No One Won!";
    newgamebtn.className="show-new-game-btn";
};

//function to reset game 
function resetGame()
{
    for(box of boxex)
    {
        box.disabled=false; //enable button click
        box.innerText="";   //making button blank
        winningText.innerText="";   //removing winning text
        newgamebtn.className="new-game-hidden-btn";    //hidinng new-game button
        hideLine(); //hiding the winning line
    }
    count=0;    //making count 0
    turnO=true; //making game start from O
};

line=document.createElement("div");
function drawLine(direction){
    line.className=`${direction}`;  //adds line according the winning pattern
    // line.className="vertical-middle";
    // line.className="vertical-right";
    // line.className="horizontal-left";
    // line.className="horizontal-middle";
    // line.className="horizontal-right";
    // line.className="left-diagnol";
    // line.className="right-diagnol";
    containerDiv.append(line);
};

//function for hiding line when game resets
function hideLine()
{
    line.className="hide-line";
    return;
};

//function for disable the all boxex when someone win the game
function disableBoxes()
{
    for(box of boxex)   //disable all boxex
    {
        box.disabled=true;
    }
};