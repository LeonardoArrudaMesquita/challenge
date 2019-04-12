// --- REGRAS ---
// O = 1
// X = 2

//  --- REINICIAR = F5 ---

//Número total de jogadas
move = 9;

//Array que representa as casas do tabuleiro setadas como 0 (Vazia)
arrField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
aux = false;

function play(idElementClicked) {
    if (aux == false) {

        switch (idElementClicked) {
            case "square1":
                arrField[0] = setElement(idElementClicked);
                break;
            case "square2":
                arrField[1] = setElement(idElementClicked);
                break;
            case "square3":
                arrField[2] = setElement(idElementClicked);
                break;
            case "square4":
                arrField[3] = setElement(idElementClicked);
                break;
            case "square5":
                arrField[4] = setElement(idElementClicked);
                break;
            case "square6":
                arrField[5] = setElement(idElementClicked);
                break;
            case "square7":
                arrField[6] = setElement(idElementClicked);
                break;
            case "square8":
                arrField[7] = setElement(idElementClicked);
                break;
            case "square9":
                arrField[8] = setElement(idElementClicked);
                break;
        }
        rule();
    }
}

function setElement(idElementClicked) {
    if (move % 2 == 0 && move != 0) {
        document.getElementById(idElementClicked).innerHTML = '<p>X</p>';
        move--;
        return 2; //X
    }
    else {
        document.getElementById(idElementClicked).innerHTML = '<p>O</p>';
        move--;
        return 1; //O
    }
}

function rule() {
    //Linha Horizontal 1
    if (arrField[0] == 1 && arrField[1] == 1 && arrField[2] == 1) {
        alert("O Player 1 - Bolinha ganhou !");
        aux = true;
    }
    else if (arrField[0] == 2 && arrField[1] == 2 && arrField[2] == 2) {
        alert("O Player 2 - X ganhou !");
        aux = true;
    }
    //Linha Horizontal 2
    else if (arrField[3] == 1 && arrField[4] == 1 && arrField[5] == 1) {
        alert("O Player 1 - Bolinha ganhou !");
        aux = true;
    }
    else if (arrField[3] == 2 && arrField[4] == 2 && arrField[5] == 2) {
        alert("O Player 2 - X ganhou !");
        aux = true;
    }
    //Linha Horizontal 3
    else if (arrField[6] == 1 && arrField[7] == 1 && arrField[8] == 1) {
        alert("O Player 1 - Bolinha ganhou !");
        aux = true;
    }
    else if (arrField[6] == 1 && arrField[7] == 1 && arrField[8] == 1) {
        alert("O Player 2 - X ganhou !");
        aux = true;
    }
    //Linha Vertical 1
    else if (arrField[0] == 1 && arrField[3] == 1 && arrField[6] == 1) {
        alert("O Player 1 - Bolinha ganhou !");
        aux = true;
    }
    else if (arrField[0] == 2 && arrField[3] == 2 && arrField[6] == 2) {
        alert("O Player 2 - X ganhou !");
        aux = true;
    }
    //Linha Vertical 2
    else if (arrField[1] == 1 && arrField[4] == 1 && arrField[7] == 1) {
        alert("O Player 1 - Bolinha ganhou !");
        aux = true;
    }
    else if (arrField[1] == 2 && arrField[4] == 2 && arrField[7] == 2) {
        alert("O Player 2 - X ganhou !");
        aux = true;
    }
    //Linha Vertical 3
    else if (arrField[2] == 1 && arrField[5] == 1 && arrField[8] == 1) {
        alert("O Player 1 - Bolinha ganhou !");
        aux = true;
    }
    else if (arrField[2] == 2 && arrField[5] == 2 && arrField[8] == 2) {
        alert("O Player 2 - X ganhou !");
        aux = true;
    }
    //Linha Diagonal 1
    else if (arrField[0] == 1 && arrField[4] == 1 && arrField[8] == 1) {
        alert("O Player 1 - Bolinha ganhou !");
        aux = true;
    }
    else if (arrField[0] == 2 && arrField[4] == 2 && arrField[8] == 2) {
        alert("O Player 2 - X ganhou !");
        aux = true;
    }
    //Linha Diagonal 2
    else if (arrField[2] == 1 && arrField[4] == 1 && arrField[6] == 1) {
        alert("O Player 1 - Bolinha ganhou !");
        aux = true;
    }
    else if (arrField[2] == 2 && arrField[4] == 2 && arrField[6] == 2) {
        alert("O Player 2 - X ganhou !");
        aux = true;
    }
    else if (move == 0 && aux == false) {
        alert("Jogo Empatado ! Favor reiniciar o Jogo !");
    }
}