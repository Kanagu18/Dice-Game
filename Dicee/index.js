
var randomNumer1=Math.floor((Math.random()*6))+1;
var randomdice1 = "./images/dice" + randomNumer1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdice1);

var randomNumer2=Math.floor((Math.random()*6))+1;
var randomdice2 = "./images/dice" + randomNumer2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomdice2);

if(randomNumer1>randomNumer2){
    document.querySelector("h1").innerHTML=" <- Player1 Win!! ";
}
else if(randomNumer2>randomNumer1){
    document.querySelector("h1").innerHTML=" Player2 Win!! ->";
}
else{
    document.querySelector("h1").innerHTML="<- Match Draw ->";
}