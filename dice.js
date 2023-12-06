var ran=Math.random();
ran=ran*6;
ran=Math.floor(ran)+1;
// console.log(ran);
var rpic="./images/dice"+ran+".png";
console.log(rpic);
document.querySelector(".img1").setAttribute("src",rpic);

var ran2=Math.random();
ran2=ran2*6;
ran2=Math.floor(ran2)+1;
// console.log(ran);
var rpic2="./images/dice"+ran2+".png";
console.log(rpic2);
document.querySelector(".img2").setAttribute("src",rpic2);

if(ran===ran2){
document.querySelector("h1").textContent="Draw..";
}
else if(ran>ran2){
    document.querySelector("h1").textContent="Player 1 Wins..";
    }
    else{
        document.querySelector("h1").textContent="Player 2 Wins..";
        }