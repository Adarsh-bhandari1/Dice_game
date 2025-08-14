// Check if the page was reloaded/refreshed
if (performance.navigation.type === 1) {
    // This is a refresh
    var n1 = Math.floor(Math.random()*6)+1;
    var n2 = Math.floor(Math.random()*6)+1;

    function Dice_change(n1 , n2){
        document.querySelector(".img1 img").setAttribute("src" , "./images/dice" +n1+".png")
        document.querySelector(".img2 img").setAttribute("src" , "./images/dice" +n2+".png")
    }

    function Winner(n1 , n2) {
        if(n1>n2){
            document.querySelector(".heading h1").innerHTML="Player 1 wins !";
        }
        else if(n1<n2){
            document.querySelector(".heading h1").innerHTML="Player 2 wins !";
        }
        else{
           document.querySelector(".heading h1").innerHTML="Draw !"; 
        }
    }

    Dice_change(n1 ,n2);
    Winner(n1 , n2);
} else {
    // This is the initial page load
    document.querySelector(".heading h1").innerHTML="Refresh Me to Start the Game";
}