//This code will expand an extract a ball to allow user to regulate and control their breathing during 




var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var r = 20;
var expanding = true;
setInterval(circleSize, 250);//call the circleSize function after 500ms


//     ctx.fillText("Hello World!", 10, 50);



function circleSize(){
//expanding (inhale) and contracting (exhale)
    if(expanding){
        
        console.log(r)
        r+=5;
        ctx.beginPath();
        ctx.arc(250, 180, r, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
        
        
        
        if (r == 100){
            expanding = false;
        }
    }
    else if(!expanding){
        
        r-=5;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        ctx.arc(250, 180, r, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#0000ff";
        ctx.fill();
        ctx.closePath();
        
        
        
        if (r == 10){
            expanding = true;
            

        }
    }
}


