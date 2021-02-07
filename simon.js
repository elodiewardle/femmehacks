let order = [];
let humanOrder = [];
let score = 1;
let numFlashes = 0;

function getOrder(){
    while(numFlashes < score){
        var button = Math.floor(Math.random() * 4) + 1;
        if (button === 1){
            document.getElementById("red").style.background='#FC4040';
            await delay(3000);
            document.getElementById("red").style.background='#861F1F';
        } 
        else if (button === 2){
            document.getElementById("blue").style.background='#1947ED;';
            await delay(3000);
            document.getElementById("blue").style.background='#182D78';
        }
        else if (button === 3){
            document.getElementById("green").style.background='#3BE31F';
            await delay(3000);
            document.getElementById("green").style.background='#145908';
        }
        else{
            document.getElementById("yellow").style.background='#FDF424;';
            await delay(3000);
            document.getElementById("yellow").style.background='#6A670F';
        }
    }
}