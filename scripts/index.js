var Game = {
    player : "Player",
    comp : "Computer",
    rounds : 0,
    compPoints : 0,
    playerPoints: 0
}

const popup = document.getElementById('popup-background');
const closePopup = document.getElementById('popup-button');

popup.style.display = "none";
popup.style.opacity = 0;

closePopup.addEventListener("click", function(){
    location.reload();
});

function rollTheDice() {
    setTimeout(function () {
        var die1 = Math.floor(Math.random() * 6) + 1;
        var die2 = Math.floor(Math.random() * 6) + 1;
        var die3 = Math.floor(Math.random() * 6) + 1;
        var die4 = Math.floor(Math.random() * 6) + 1;
        var roll1 = die1 + die2;
        var roll2 = die3 + die4;

        document.querySelector(".img1").setAttribute("src",
            "images/dice-" + die1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "images/dice-" + die2 + ".png");

        document.querySelector(".img3").setAttribute("src",
            "images/black-dice-" + die3 + ".png");

        document.querySelector(".img4").setAttribute("src",
            "images/black-dice-" + die4 + ".png");

        if (die1 === 1 || die2 === 1) {
            roll1 = 0;
        }

        if (die3 === 1 || die4 === 1) {
            roll2 = 0;
        }
        
        if (die1 === die2) {
            roll1 *= 2;
            document.getElementById('player-roll').innerHTML = "ROLL: " + roll1;
        } else {
            document.getElementById('player-roll').innerHTML = "ROLL: " + roll1;
        }

        if (die3 === die4) {
            roll2 *= 2;
            document.getElementById('comp-roll').innerHTML = "ROLL: " + roll2;
        } else {
            document.getElementById('comp-roll').innerHTML = "ROLL: " + roll2;
        }

        Game.playerPoints += roll1;
        Game.compPoints += roll2;
        Game.rounds++;

        if (roll1 < roll2) {
            document.querySelector(".winlose").innerHTML = Game.comp + " WINS round!";
        } else if (roll1 === roll2) {
            document.querySelector(".winlose").innerHTML = "Round DRAW!";
        } else {
            document.querySelector(".winlose").innerHTML = Game.player + " WINS round!";
        }

        document.querySelector("#comp-points").innerHTML = "POINTS: " + Game.compPoints;
        document.querySelector("#player-points").innerHTML = "POINTS: " + Game.playerPoints;

        if (Game.rounds === 3) {
            popup.style.display = "block";
            setTimeout(function(){
                popup.style.opacity = 1;
            }, 1000);

            if (Game.playerPoints > Game.compPoints) {
                document.querySelector(".winner").innerHTML = "YOU WON!";
            } else if (Game.playerPoints < Game.compPoints) {
                document.querySelector(".winner").innerHTML = "YOU LOST!";
            } else {
                document.querySelector(".winner").innerHTML = "DRAW!";
            }
        }

    }, 1000);
}