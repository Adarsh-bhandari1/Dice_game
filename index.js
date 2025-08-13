var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;

function Dice_change(n1 , n2){
    document.querySelector(".img1 img").setAttribute("src" , "./images/dice" +n1+".png")

    document.querySelector(".img2 img").setAttribute("src" , "./images/dice" +n2+".png")
    
}
Dice_change(n1 ,n2);