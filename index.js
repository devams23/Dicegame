var imglist = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
var ran_n1 = Math.random();
var index1 = Math.floor(ran_n1 * 6);
var ran_n2 = Math.random();
var index2 = Math.floor(ran_n2 * 6);

document.querySelector(".dice1").setAttribute("src",imglist[index1]);
document.querySelector(".dice2").setAttribute("src",imglist[index2]);
if (index1 > index2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(index2 > index1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}

