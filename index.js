
var randomNumber1 =Math.floor(Math.random()*6+1);
var randomImage="images/dice" + randomNumber1 + ".png";
var ab=document.querySelectorAll("img")[0];
ab.setAttribute("src",randomImage);

var randomNumber2 =Math.floor(Math.random()*6+1);
var randomImage="images/dice" + randomNumber2 + ".png";
var ab=document.querySelectorAll("img")[1];
ab.setAttribute("src",randomImage);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="player1 wins";
}else{
    document.querySelector("h1").innerHTML="player2 wins";
}
