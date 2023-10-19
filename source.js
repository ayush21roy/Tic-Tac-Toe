console.log("Welcome to Tic Tac Toe");
let music = new Audio("./audios/music.mp3");
let audioTurn = new Audio("./audios/ting.mp3");
let gameover = new Audio("./audios/gameover.mp3");

let isgameover = false;
let isTie = true;
let turn = "X";
let count = 0;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],       // x x x, x-translate, y-translate, rotation
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isgameover = true;
            isTie = false;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })

}

// Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            // audioTurn.play();
            checkWin();
            count = count + 1;
            console.log(count)
            if (count === 9 && isTie) {  // Tie
                document.getElementsByClassName("info")[0].innerText = "It's a TIE. Play Again!";
            }
            else if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {

    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach(e => {
        e.querySelector('.boxtext').innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
    document.querySelector('.line').style.width = "0";
    count = 0;
})
