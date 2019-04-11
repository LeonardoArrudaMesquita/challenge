
move = 9; 

//var evento = event.target.getElementById;
//debugger;

function play(){

    if( move % 2 == 0)
    {        
        this.getElementById(this).innerHTML = '<img src="img/circle.png">';
        document.getElementById(this).innerHTML = '<img src="img/circle.png">';
    }
    else
    {
        this.getElementById(this).innerHTML = '<img src="img/x.png">';
    }
    move--;

}

// btn.addEventListener("click", function(){titulo.innerText= txt.value;});}