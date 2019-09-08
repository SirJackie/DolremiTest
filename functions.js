var ctx;
function clearScreen(){
    ctx.fillStyle="white";
    ctx.fillRect(0,0,400,400);
}
function quickLine(y){
    ctx.beginPath();
    ctx.moveTo(0,y);
    ctx.lineTo(400,y);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.stroke();
}
function drawLine(){
    quickLine(50);
    quickLine(100);
    quickLine(150);
    quickLine(200);
    quickLine(250);
    //line in (0,300)
    ctx.beginPath();
    ctx.moveTo(100,300);
    ctx.lineTo(300,300);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.stroke();
}
function drawNote(music){
    y = 325 - music*25;
    ctx.beginPath();
    ctx.arc(200,y,25,0*Math.PI,2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.moveTo(225,y);
    ctx.lineTo(225,y-125);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.stroke();
}
var buttonpushed = false;
var seed;
function random(){
    buttonpushed = false;
    answerbar.innerHTML = "&nbsp;"
    seed = Math.random();
    seed = seed * 10;
    seed = parseInt(seed);
    if(seed == 0){
        seed = 1;
    }
    clearScreen();
    drawLine();
    drawNote(seed);
}
function answer(){
    var answerbar = document.getElementById("answerbar");
    if(seed>7){
        seed = seed - 7;
    }
    if(seed == 1){
        answerbar.innerHTML = "Dol";
    }
    else if (seed == 2){
        answerbar.innerHTML = "Re";
    }
    else if (seed == 3){
        answerbar.innerHTML = "Mi";
    }
    else if (seed == 4){
        answerbar.innerHTML = "Fa";
    }
    else if (seed == 5){
        answerbar.innerHTML = "Sol";
    }
    else if (seed == 6){
        answerbar.innerHTML = "La";
    }
    else if (seed == 7){
        answerbar.innerHTML = "Si";
    }
}
function showAnswer(){
    if(buttonpushed == false){
        //var button = document.getElementById("button");
        //button.style.background = "linear-gradient(160deg, #ffce00 20%,#ff8b00 80%)";
        answer();
        setTimeout(() => {
            //var button = document.getElementById("button");
            //button.style.background = "linear-gradient(160deg, #00ffd5 20%,#008cff 80%)";
            random();
        }, 1000);
    }
    buttonpushed = true;
}
window.onload = function(){
    var clientwidth = document.body.clientWidth;
    var style = document.createElement("style");
    style.innerHTML = "#canvas{width:" + clientwidth + ";height:" + clientwidth + ";}";
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);

    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    random();
}