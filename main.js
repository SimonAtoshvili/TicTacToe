const blocksList = document.getElementsByClassName("blocks");
let xScore = document.getElementById("x_score");
let oScore = document.getElementById("o_score");
const reset = document.getElementById("reset");


for (let i = 0; i < blocksList.length; i++) {
    blocksList[i].addEventListener("click", function () {

        let xNumber = 0
        for (let i = 0; i < blocksList.length; i++) {
            if (blocksList[i].innerHTML === "") {
                xNumber++
            }

        }

        if (blocksList[i].innerHTML === "") {
            if (xNumber % 2 == 1) {
                blocksList[i].innerHTML = "X";
            } else {
                blocksList[i].innerHTML = "O";
            }
        }

        if (blocksList[0].innerHTML === "X" &&
            blocksList[1].innerHTML === "X" &&
            blocksList[2].innerHTML === "X" ||
            blocksList[3].innerHTML === "X" &&
            blocksList[4].innerHTML === "X" &&
            blocksList[5].innerHTML === "X" ||
            blocksList[6].innerHTML === "X" &&
            blocksList[7].innerHTML === "X" &&
            blocksList[8].innerHTML === "X" ||
            blocksList[0].innerHTML === "X" &&
            blocksList[3].innerHTML === "X" &&
            blocksList[6].innerHTML === "X" ||
            blocksList[1].innerHTML === "X" &&
            blocksList[4].innerHTML === "X" &&
            blocksList[7].innerHTML === "X" ||
            blocksList[2].innerHTML === "X" &&
            blocksList[5].innerHTML === "X" &&
            blocksList[8].innerHTML === "X" ||
            blocksList[0].innerHTML === "X" &&
            blocksList[4].innerHTML === "X" &&
            blocksList[8].innerHTML === "X" ||
            blocksList[2].innerHTML === "X" &&
            blocksList[4].innerHTML === "X" &&
            blocksList[6].innerHTML === "X") {
            alert("X Wins");
            xScore.innerHTML++;
            for (let i = 0; i < blocksList.length; i++) {
                blocksList[i].innerHTML = ""
            };
        } else if (
            blocksList[0].innerHTML === "O" &&
            blocksList[1].innerHTML === "O" &&
            blocksList[2].innerHTML === "O" ||
            blocksList[3].innerHTML === "O" &&
            blocksList[4].innerHTML === "O" &&
            blocksList[5].innerHTML === "O" ||
            blocksList[6].innerHTML === "O" &&
            blocksList[7].innerHTML === "O" &&
            blocksList[8].innerHTML === "O" ||
            blocksList[0].innerHTML === "O" &&
            blocksList[3].innerHTML === "O" &&
            blocksList[6].innerHTML === "O" ||
            blocksList[1].innerHTML === "O" &&
            blocksList[4].innerHTML === "O" &&
            blocksList[7].innerHTML === "O" ||
            blocksList[2].innerHTML === "O" &&
            blocksList[5].innerHTML === "O" &&
            blocksList[8].innerHTML === "O" ||
            blocksList[0].innerHTML === "O" &&
            blocksList[4].innerHTML === "O" &&
            blocksList[8].innerHTML === "O" ||
            blocksList[2].innerHTML === "O" &&
            blocksList[4].innerHTML === "O" &&
            blocksList[6].innerHTML === "O"
        ) {
            alert("O Wins");
            oScore.innerHTML++;
            for (let i = 0; i < blocksList.length; i++) {
                blocksList[i].innerHTML = ""
            };
        }

        if (xNumber < 2) {
            console.log("Hi");
            for (let i = 0; i < blocksList.length; i++) {
                blocksList[i].innerHTML = "";
            }
        }
    })
}

reset.addEventListener("click", function () {
    for (let i = 0; i < blocksList.length; i++) {
        blocksList[i].innerHTML = "";
    }
    xScore.innerHTML = "0";
    oScore.innerHTML = "0";
})

