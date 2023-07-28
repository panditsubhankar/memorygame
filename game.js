var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
// var userPattern = [];
var gameLevel = 0;
var gameStarted = false;
var i = 0;
var maxLevel = 0;


$(document).keydown(function() {
    if (gameStarted == false) {
        gameStarted = true;
        nextSequence();
    }
    
});

function nextSequence () {
    gameLevel++;
    $("#level-title").text("Level " + gameLevel);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playButtonSound(randomChosenColor);
    i = 0;

    $("#max-level").css("visibility", "visible");
}


$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    // userPattern.push(userChosenColor);
    playButtonSound(userChosenColor);
    
        if (userChosenColor == gamePattern[i]){
            i++;
            if (i == gameLevel) {
                if (gameLevel > maxLevel) {
                    maxLevel = gameLevel;
                }
                $("#max-level").text("Max Level = " + maxLevel);
                setTimeout (nextSequence, 500);
            }
        }
        else {
            gameOver();
        }
});


function gameOver () {
    playButtonSound("wrong")
    $("#level-title").text("Game Over!!! Press any key to play again.");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200)
    gamePattern = [];
    gameLevel = 0;
    gameStarted = false;
}
    


function playButtonSound (buttonColor) {
    var audioLocation = "./sounds/" + buttonColor + ".mp3";
    var buttonSound = new Audio (audioLocation);
    buttonSound.play();
}





//nextSequence();