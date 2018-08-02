var numberOfClicks = 0;
var grid = [[0,0,0],[0,0,0],[0,0,0]];
var white = "rgba(0, 0, 0, 0)";

$(".cell").click(function () {
    var cellColour = $(this).css("background-color");
    if (cellColour == white) {
        var cellId = $(this).attr('id');
        var cellPosition = cellId.split("-");
        var player = (numberOfClicks % 2) + 1;
        var lavender = "#bba3d0";
        var sprout = "#b8d0a3";
        if (player == 1) {
            $(this).css('background-color', lavender);
        } else {
            $(this).css('background-color', sprout);
        }
        grid[cellPosition[0]][cellPosition[1]] = player;
        numberOfClicks++; 
        if (hasWon()) {
            $("#winner").text("Player " + player + " has won!");
            $('.cell').prop('disabled', true);
        }
        if (!hasWon() && numberOfClicks == 9) {
            $("#winner").text("Cat's game!");            
        }
    } 
});

$("#new-game").click(function () {
    newGame();
});

const hasWon = function () {
    if (numberOfClicks > 4) {
        return checkRowWin() || checkColumnWin() || checkDiagonalWin();
    }
    return false;
}

const checkRowWin = function () {
    for (var i = 0; i < grid.length; i++) {
        if (grid[i][0] && grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]) {
            return true;
        }
    }
    return false;
}

const checkColumnWin = function () {
    for (var i = 0; i < grid.length; i++) {
        if (grid[0][i] && grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]) {
            return true;
        }
    }
    return false; 
}

const checkDiagonalWin = function () {
    if (grid[1][1] && 
        ((grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) || (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]))) {
        return true;
    }
    return false;
}

const newGame = function() {
    $("button").css('background-color', white);
    grid = [[0,0,0],[0,0,0],[0,0,0]];
    numberOfClicks = 0;
    $("#winner").text("Made by Alisa");
    $('.cell').prop('disabled', false);
}