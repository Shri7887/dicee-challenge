


var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var h1Tag = document.getElementById("heading");
console.log(randomNumber1, randomNumber2);

document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice"+randomNumber2+".png");


if(randomNumber1 > randomNumber2){
    h1Tag.textContent = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    h1Tag.textContent = "Player 2 wins";
}
else{
    h1Tag.textContent = "Draw!";
}