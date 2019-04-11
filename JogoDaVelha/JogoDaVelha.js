// --- REGRAS ---
// X = 1
// O = -1

//Número da jogada
move = 9;

//Array que representa as casas do tabuleiro
arrField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var point;

function play(idElementClicked) {

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

function setElement(idElementClicked) {

    if (move % 2 == 0 && move != 0) {
        document.getElementById(idElementClicked).innerHTML = '<p>X</p>';
        move--;
        return -1;
    }
    else {
        document.getElementById(idElementClicked).innerHTML = '<p>O</p>';
        move--;        
        return 1;
    }
}

function rule() {

    for (let i = 0; i < arrField.length; i+=3) {
        for (let j = 0; j < 3; j++) {
            
            if(arrField[i + j] == 1)
            {
                point++;                
            }
        }        
    }    
}

// function rule() {

//     for (let i = 0; index < arrField.lenght; index++) {
//         for (let j = 0; index < array.length; index++) {
            
            
//         }        
//     }    
// }


// if (arrField[0] == 1 && arrField[1] == 1 && arrField[2] == 1 ) {
    //     alert("O X ganhou !");
    // }
    // else if(arrField[0] == 1 && arrField[1] == 1 && arrField[2] == 1 ) {
    //     alert("A Bolinha ganhou !");
    // }

    // if (arrField[3] == 1 && arrField[4] == 1 && arrField[5] == 1 ) {
    //     alert("O X ganhou !");
    // }
    // else if(arrField[3] == 1 && arrField[4] == 1 && arrField[5] == 1 ) {
    //     alert("A Bolinha ganhou !");
    // }

    // if (arrField[0] == 1 && arrField[1] == 1 && arrField[2] == 1 ) {
    //     alert("O X ganhou !");
    // }
    // else if(arrField[0] == 1 && arrField[1] == 1 && arrField[2] == 1 ) {
    //     alert("A Bolinha ganhou !");
    // }