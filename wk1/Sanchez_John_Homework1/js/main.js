/*
     Name:John Sanchez
     Date:
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

window.onload = function() {


/*    if(Modernizer.canvas){

        var theCanvas = document.getElementById("Canvas1");
        var ctx = theCanvas.getContext("2d");

    }else{

    }

    console.log(Modernizer);
*/


/*******************************************
FILE SETUP

Setup up 7 different Canvases in index.html one for each problem.
Link Modernizr.js
Link the main.js file
Setup the call to that canvas and get it's 2d context
Use Modernizr to verify that your browser supports canvas, include a fallback message
********************************************/

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

    var theCanvas = document.getElementById('Canvas1');

    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            ctx.fillStyle = "lightblue";
            ctx.fillRect(0,0, 50,100);

            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.strokeRect(0,0, 50,100);

        }
    }

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

    var theCanvas = document.getElementById('Canvas2');

    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            ctx.beginPath();
            ctx.arc(50,50, 20, 0, 2* Math.PI);
            ctx.fillStyle ="rgba(255,0,0,.5)";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(50,50, 30, 0, 2*Math.PI, false);
            ctx.lineWidth = 10;
            ctx.strokeStyle= "black";
            ctx.stroke();

        }
    }


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

    var theCanvas = document.getElementById('Canvas3');

    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            ctx.strokeStyle = "purple";
            ctx.fillStyle= "violet";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(100,100);
            ctx.lineTo(160,80);
            ctx.lineTo(180,20);
            ctx.lineTo(200,80);
            ctx.lineTo(260,100);
            ctx.lineTo(200,120);
            ctx.lineTo(230,170);
            ctx.lineTo(180,150);
            ctx.lineTo(140,170);
            ctx.lineTo(160,120);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

        }
    }

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

    var theCanvas = document.getElementById('Canvas4');

    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            ctx.strokeStyle = "purple";
            ctx.fillStyle= "violet";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.arc(ctx.canvas.width/2,ctx.canvas.height/2, 100, 1*Math.PI, 2*Math.PI);
            ctx.arc(275,200, 25, 2*Math.PI, 1*Math.PI, true);
            ctx.arc(225,200, 25, 2*Math.PI, 1*Math.PI, true);
            ctx.arc(175,200, 25, 2*Math.PI, 1*Math.PI, true);
            ctx.arc(125,200, 25, 2*Math.PI, 1*Math.PI, true);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

        }
    }

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

    var theCanvas = document.getElementById('Canvas5');

    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            var string1 = "FOREVER";

            ctx.font="60pt Verdana";
            ctx.fillStyle = "orange";
            ctx.strokeStyle = "green";
            ctx.lineWidth = 1;
            ctx.fillText(string1, 10, 100);
            ctx.strokeText(string1, 12, 102);

            var string2 = "young";

            ctx.font="60pt Times";
            ctx.fillStyle = "green";
            ctx.strokeStyle = "orange";
            ctx.lineWidth = 1;
            ctx.fillText(string2, 100, 140);
            ctx.strokeText(string2, 92, 143);

        }
    }

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

    var theCanvas = document.getElementById('Canvas6');

    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            var srcImg = document.getElementById("img1");

            //ctx.drawImage(srcImg, 0,0);

            //ctx.drawImage(srcImg, 50, 50, srcImg.width/2, srcImg.height/2);

            ctx.drawImage(srcImg, 316,595, 318,407, 0,0, 311,403);

        }
    }


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

    var theCanvas = document.getElementById('Canvas7');

    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            var string1 = "Bouncing";

            ctx.font="60pt Verdana";
            ctx.fillStyle = "red";
            ctx.fillText(string1, 15, 80);

            var srcImg = document.getElementById("img1");
            ctx.drawImage(srcImg, 1257,582, 117,119, 65,121, 117/2,119/2);

            ctx.strokeStyle = "purple";
            ctx.fillStyle= "violet";
            ctx.lineWidth = 2;

            ctx.beginPath();
            //ctx.arc(ctx.canvas.width/2,ctx.canvas.height/2, 100, 1*Math.PI, 2*Math.PI);
            ctx.arc(275,180, 25, 2*Math.PI, 1*Math.PI, true);
            ctx.arc(225,180, 25, 2*Math.PI, 1*Math.PI, true);
            ctx.arc(175,180, 25, 2*Math.PI, 1*Math.PI, true);
            ctx.arc(125,180, 25, 2*Math.PI, 1.5*Math.PI, true);
            ctx.stroke();

        }
    }

}