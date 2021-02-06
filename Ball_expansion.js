//This code will expand an extract a ball to allow user to regulate and control their breathing during 


//var context;
//function init()
//{
    //context = myCanvas.getContext('2d');
    //context.beginPath();
   // context.fillStyle="#0000ff";
    //Draws a circle of radius 20 at the coordinates 100, 100 on the canvas
    //context.arc(100,100,20,0,Math.Pi*2,true); context.closePath();
    //context.fill();



//}


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();