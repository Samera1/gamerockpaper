
const User = parseInt (
    prompt ("Escoge tu jugada Piedra=1 Papel=2 Tijera=3")
);

const Machine = Math.floor (Math.random()* (3))+1;

const Play = (User,Machine) =>{
    if (
    (User===1 && Machine===3) ||
    (User===2 && Machine===1) || 
    (User===3 && Machine===2) 
    ) {
        console.log("Ganaste")
    } else if(User === Machine) {
        console.log("Empate")
    } else {
        console.log ("Perdiste")
    }

    }
    if (Machine===1) {
        console.log("Piedra")
    }else if (Machine===2) {
        console.log("Papel")
        
    }else{
        console.log("Tijeras")
    }

    Play (User,Machine);


