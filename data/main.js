//========================================
// JavaScript code used by both html files
//========================================
var stateA,stateB,stateC,stateD,stateE,stateF,stateG;
var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
function common(n){
    if(n<0 && n>9){
        alert("Please enter digit between 0 and 9");
        }
      else if(n==0){
          onA(); onB(); onC(); onD(); onE(); onF();
          offG();
          drawSeg();
        }
      else if(n==1){
          onB(); onC();
          offA(); offD(); offE(); offF(); offG();
          drawSeg();
        }
      else if(n==2){
          onA(); onB(); onG(); onE(); onD();
          offF(); offC();
          drawSeg();
        }
      else if(n==3){
          onA(); onB(); onG(); onC(); onD();
          offE(); offF();
          drawSeg();
        }
      else if(n==4){
          onF(); onG(); onB(); onC();
          offA(); offE(); offD();
          drawSeg();
        }
      else if(n==5){
          onA(); onF(); onG(); onC(); onD();
          offB(); offE();
          drawSeg();
        }
      else if(n==6){
          onA(); onC(); onD(); onE(); onF(); onG();
          offB();
          drawSeg();
        }
      else if(n==7){
          onA(); onB(); onC();
          offD(); offE(); offF(); offG();
          drawSeg();
        }
      else if(n==8){
          onA(); onB(); onC(); onD(); onE(); onF(); onG();
          drawSeg();
        }
      else if(n==9){
          onA(); onB(); onC(); onF(); onG();
          offE(); offD();
         drawSeg();
        }
      }
function onA(){ stateA=true;} function offA(){ stateA=false}
function onB(){ stateB=true;} function offB(){ stateB=false}
function onC(){ stateC=true;} function offC(){ stateC=false}
function onD(){ stateD=true;} function offD(){ stateD=false}
function onE(){ stateE=true;} function offE(){ stateE=false}
function onF(){ stateF=true;} function offF(){ stateF=false}
function onG(){ stateG=true;} function offG(){ stateG=false}
function drawSeg(){
    if (canvas.getContext) {
        // use getContext to use the canvas for drawing
    if(stateA==true)
        ctx.fillStyle="red";
    else
        ctx.fillStyle="rgb(248, 195, 195)";
     ctx.beginPath();
     ctx.moveTo(80,40);
     ctx.lineTo(60,60);
     ctx.lineTo(80,80);
     ctx.fillRect(80,40,100,40);
     ctx.moveTo(180,40);
     ctx.lineTo(200,60);
     ctx.lineTo(180,80);
     ctx.closePath(); 
     ctx.fill();
     ctx.beginPath();
     if(stateF==true)
        ctx.fillStyle="red";
    else
        ctx.fillStyle="rgb(248, 195, 195)";
     ctx.moveTo(40,90);
     ctx.lineTo(60,70);
     ctx.lineTo(80,90);
     ctx.fillRect(40,90,40,100);
     ctx.moveTo(40,190);
     ctx.lineTo(60,210);
     ctx.lineTo(80,190);
     ctx.closePath();
     ctx.fill();
     ctx.beginPath();
     if(stateE==true)
        ctx.fillStyle="red";
    else
        ctx.fillStyle="rgb(248, 195, 195)";
     ctx.moveTo(40,240);
     ctx.lineTo(60,220);
     ctx.lineTo(80,240);
     ctx.fillRect(40,240,40,100);
     ctx.moveTo(40,340);
     ctx.lineTo(60,360);
     ctx.lineTo(80,340);
     ctx.closePath();
     ctx.fill();
     ctx.beginPath();
     if(stateD==true)
        ctx.fillStyle="red";
    else
        ctx.fillStyle="rgb(248, 195, 195)";
     ctx.moveTo(80,350);
     ctx.lineTo(60,370);
     ctx.lineTo(80,390);
     ctx.fillRect(80,350,100,40);
     ctx.moveTo(180,350);
     ctx.lineTo(200,370);
     ctx.lineTo(180,390);
     ctx.closePath();
     ctx.fill();
     ctx.beginPath();
     if(stateC==true)
        ctx.fillStyle="red";
    else
        ctx.fillStyle="rgb(248, 195, 195)";
     ctx.moveTo(180,340);
     ctx.lineTo(200,360);
     ctx.lineTo(220,340);
     ctx.fillRect(180,340,40,-100);
     ctx.moveTo(180,240);
     ctx.lineTo(200,220);
     ctx.lineTo(220,240);
     ctx.closePath();
     ctx.fill();
     ctx.beginPath();
     if(stateB==true)
        ctx.fillStyle="red";
    else
        ctx.fillStyle="rgb(248, 195, 195)";
     ctx.moveTo(180,190);
     ctx.lineTo(200,210);
     ctx.lineTo(220,190);
     ctx.fillRect(180,190,40,-100);
     ctx.moveTo(180,90);
     ctx.lineTo(200,70);
     ctx.lineTo(220,90);
      ctx.closePath();
     ctx.fill();
     ctx.beginPath();
     if(stateG==true)
        ctx.fillStyle="red";
    else
        ctx.fillStyle="rgb(248, 195, 195)";
     ctx.moveTo(80,195);
     ctx.lineTo(62,215);
     ctx.lineTo(80,235);
     ctx.fillRect(80,195,100,40);
     ctx.moveTo(180,195);
     ctx.lineTo(198,215);
     ctx.lineTo(180,235);
     ctx.closePath();  
     ctx.fill();
     
}
var grd=ctx.createLinearGradient(240,170,240,200);
ctx.font = "50px Comic Sans MS";
  grd.addColorStop(0,"red");
  grd.addColorStop(1,"blue");
  ctx.fillStyle=grd;
  ctx.fillText("Seven Segment Display",230,200);
  
}
