// --- REGRAS ---
// O = 1
// X = 2

//Número total de jogadas
move = 9;

//Array que representa as casas do tabuleiro setadas como 0 (Vazia)
arrField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
aux = false;

function play(idElementClicked) {
    if (aux == false) {

        switch (idElementClicked) {
            case "square1":
                if (arrField[0] == 0) {
                    arrField[0] = setElement(idElementClicked);
                }
                break;
            case "square2":
                if (arrField[1] == 0) {
                    arrField[1] = setElement(idElementClicked);                    
                }
                break;
            case "square3":
                if (arrField[2] == 0) {
                    arrField[2] = setElement(idElementClicked);                    
                }
                break;
            case "square4":
                if (arrField[3] == 0) {
                    arrField[3] = setElement(idElementClicked);                    
                }
                break;
            case "square5":
                if (arrField[4] == 0) {
                    arrField[4] = setElement(idElementClicked);                    
                }
                break;
            case "square6":
                if (arrField[5] == 0) {
                    arrField[5] = setElement(idElementClicked);                    
                }
                break;
            case "square7":
                if (arrField[6] == 0) {
                    arrField[6] = setElement(idElementClicked);                    
                }
                break;
            case "square8":
                if (arrField[7] == 0) {
                    arrField[7] = setElement(idElementClicked);                    
                }
                break;
            case "square9":
                if (arrField[8] == 0) {
                    arrField[8] = setElement(idElementClicked);                    
                }
                break;
        }
        rule();
    }
}

//<img src="./img/circle.png>
function setElement(idElementClicked) {
    if (move % 2 == 0 && move != 0) {
        document.getElementById(idElementClicked).innerHTML = '<img src="./img/x.png" />';
        move--;
        return 2; //X
    }
    else {
        document.getElementById(idElementClicked).innerHTML = '<img src="./img/circle.png" />';
        move--;
        return 1; //O
    }
}

function rule() {
    //Linha Horizontal 1
    if (arrField[0] == 1 && arrField[1] == 1 && arrField[2] == 1) {
        document.getElementById("lblWinner").innerText += " O Player 1 - Bolinha ganhou !";
        aux = true;
    }
    else if (arrField[0] == 2 && arrField[1] == 2 && arrField[2] == 2) {
        document.getElementById("lblWinner").innerText = " O Player 2 - X ganhou !";
        aux = true;
    }
    //Linha Horizontal 2
    else if (arrField[3] == 1 && arrField[4] == 1 && arrField[5] == 1) {
        document.getElementById("lblWinner").innerText = " O Player 1 - Bolinha ganhou !";
        aux = true;
    }
    else if (arrField[3] == 2 && arrField[4] == 2 && arrField[5] == 2) {
        document.getElementById("lblWinner").innerText = " O Player 2 - X ganhou !";
        aux = true;
    }
    //Linha Horizontal 3
    else if (arrField[6] == 1 && arrField[7] == 1 && arrField[8] == 1) {
        document.getElementById("lblWinner").innerText = " O Player 1 - Bolinha ganhou !";
        aux = true;
    }
    else if (arrField[6] == 2 && arrField[7] == 2 && arrField[8] == 2) {
        document.getElementById("lblWinner").innerText = " O Player 2 - X ganhou !";
        aux = true;
    }
    //Linha Vertical 1
    else if (arrField[0] == 1 && arrField[3] == 1 && arrField[6] == 1) {
        document.getElementById("lblWinner").innerText = " O Player 1 - Bolinha ganhou !";
        aux = true;
    }
    else if (arrField[0] == 2 && arrField[3] == 2 && arrField[6] == 2) {
        document.getElementById("lblWinner").innerText = " O Player 2 - X ganhou !";
        aux = true;
    }
    //Linha Vertical 2
    else if (arrField[1] == 1 && arrField[4] == 1 && arrField[7] == 1) {
        document.getElementById("lblWinner").innerText = " O Player 1 - Bolinha ganhou !";
        aux = true;
    }
    else if (arrField[1] == 2 && arrField[4] == 2 && arrField[7] == 2) {
        document.getElementById("lblWinner").innerText = " O Player 2 - X ganhou !";
        aux = true;
    }
    //Linha Vertical 3
    else if (arrField[2] == 1 && arrField[5] == 1 && arrField[8] == 1) {
        document.getElementById("lblWinner").innerText = " O Player 1 - Bolinha ganhou !";
        aux = true;
    }
    else if (arrField[2] == 2 && arrField[5] == 2 && arrField[8] == 2) {
        document.getElementById("lblWinner").innerText = " O Player 2 - X ganhou !";
        aux = true;
    }
    //Linha Diagonal 1
    else if (arrField[0] == 1 && arrField[4] == 1 && arrField[8] == 1) {
        document.getElementById("lblWinner").innerText = " O Player 1 - Bolinha ganhou !";
        aux = true;
    }
    else if (arrField[0] == 2 && arrField[4] == 2 && arrField[8] == 2) {
        document.getElementById("lblWinner").innerText = " O Player 2 - X ganhou !";
        aux = true;
    }
    //Linha Diagonal 2
    else if (arrField[2] == 1 && arrField[4] == 1 && arrField[6] == 1) {
        document.getElementById("lblWinner").innerText = " O Player 1 - Bolinha ganhou !";
        aux = true;
    }
    else if (arrField[2] == 2 && arrField[4] == 2 && arrField[6] == 2) {
        document.getElementById("lblWinner").innerText = " O Player 2 - X ganhou !";
        aux = true;
    }
    else if (move == 0 && aux == false) {
        document.getElementById("lblWinner").innerText = " Jogo Empatado ! Favor reiniciar o Jogo !";
    }
}