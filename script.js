let game_borad = [
    ["","",""],
    ["","",""],
    ["","",""]
]

let currentPlayer = "X";
let no_move = 0;
let game_over = false


function playMove(cell){
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;


    if(game_over){
        document.getElementById("playerTurn").innerHTML = "Reset Again"
        game_over = false
    }else{

        if(game_borad[row][col] == ""){
            game_borad[row][col] = currentPlayer;
            cell.innerHTML = currentPlayer;
            no_move += 1

            if(check_winner()){
                document.getElementById("result").innerHTML = `Player ${currentPlayer} Won !`
                game_over = true
            }else if(no_move == 9){
                document.getElementById("result").innerHTML = `It's a Tie!`
                game_over = true
            }else{
                if(currentPlayer == "X"){
                    currentPlayer = "O"
                }else{
                    currentPlayer = "X"
                }
        
                document.getElementById("playerTurn").innerHTML = `Now it is your turn ${currentPlayer} !`
            }
        }
    }

    
}

function check_winner(){

    for(let i=0 ; i <3 ; i++){
        if(game_borad[i][0] == currentPlayer
            && game_borad[i][1] == currentPlayer
            && game_borad[i][2] == currentPlayer){
                return true;
        }
    }

    for(let i=0 ; i <3 ; i++){
        if(game_borad[0][i] == currentPlayer
            && game_borad[1][i] == currentPlayer
            && game_borad[2][i] == currentPlayer){
                return true;
        }
    }

    if(game_borad[0][0] == currentPlayer
        && game_borad[1][1] == currentPlayer
        && game_borad[2][2] == currentPlayer){
            return true;
    }

    if(game_borad[0][2] == currentPlayer
        && game_borad[1][1] == currentPlayer
        && game_borad[2][0] == currentPlayer){
            return true;
    }

}

function resetGame(){
    game_borad = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    
    currentPlayer = "X";
    no_move = 0;
    let cells = document.getElementsByClassName("cell")

    for(let cell of cells){
        cell.innerHTML = ""
    }

    document.getElementById("playerTurn").innerHTML = "It's Your Turn  'X'!"
    document.getElementById("result").innerHTML = ``

}