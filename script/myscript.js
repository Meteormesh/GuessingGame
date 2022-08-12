

function myFunc(){
    let x = Number(document.getElementById("first").value);
    let y =  Number(document.getElementById("second").value);
    let guessed = Math.floor(Math.random()*y) + x;
    let z = x + y;
    document.getElementById("erg").innerText = guessed;
}