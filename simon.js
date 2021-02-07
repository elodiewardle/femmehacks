let order = [];
let humanOrder = [];
let score = 1;
let numFlashes = 0;

function getOrder(){
    while(numFlashes < score){
        var button = Math.floor(Math.random() * 4) + 1;
        if (button === 1){
            document.getElementById("button").style.background='#FC4040';
            await delay(5000);
        } 
        else if (button === 2){

        }
        else if (button === 3){

        }
        else{

        }
    }
}