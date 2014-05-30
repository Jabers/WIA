$(function() {
	
	$("#toggle").click(function(){
		
			$("#vidCont").slideToggle(500);
		
		});

	$("#fadeinclub").click(function(){
		
			$("#vs_club").fadeIn(1000);
		
		});

	$("#fadeoutclub").click(function(){
			$("#vs_club").fadeOut(1000);
		
		
		});

	$("#fadeinindi").click(function(){
		
			$("#vs_indi").fadeIn(1000);
		
		});

	$("#fadeoutindi").click(function(){
			$("#vs_indi").fadeOut(1000);
		
		});

	window.onload = function() {
		var canvas1 = document.getElementById('Canvas1');
		if (canvas1 && canvas1.getContext) {
			var ctx = canvas1.getContext("2d");
				if (ctx) {

					var  srcImg = document.getElementById("img1");
						
					//Draw an image directly onto the canvas
					ctx.drawImage(srcImg, 0,0);			
			     						
					}
		}

		var canvas2 = document.getElementById('Canvas2');
		if (canvas2 && canvas2.getContext) {
			var ctx = canvas2.getContext("2d");
				if (ctx) {

					var  srcImg = document.getElementById("img2");
						
					//Draw an image directly onto the canvas
					ctx.drawImage(srcImg, 0,0);			
			     						
					}
		}
	}

});