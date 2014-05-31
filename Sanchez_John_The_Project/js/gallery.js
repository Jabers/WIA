$(document).ready(function() {
	
	$(".gallery_thumbnails a").click(function(e){
			
			e.preventDefault();
			
			var photo_fullsize = $(this).attr("href");
			var photo_caption = $(this).attr("title");
			
			var photo_preview = photo_fullsize.replace("_fullsize", "_preview");
			
			$(".gallery_caption").slideUp(500);
			
			$(".gallery_preview").fadeOut(500, function(){

				$(".gallery_preload_area").html('<img src="' + photo_preview + '" />');
				
				$(".gallery_preload_area img").imgpreload(function(){

					$(".gallery_preview").html('<a class="overlayLink" title="' + photo_caption + '" href="' + photo_fullsize + '" style="background-image:url(' + photo_preview + ');"></a>');

					$(".gallery_preview").fadeIn(500);
					
					$(".gallery_caption").html('<p><a class="overlayLink zoom" title="' + photo_caption + '" href="' + photo_fullsize + '">See Full Photo</a></p>');
					
					$(".gallery_caption").slideDown(500);
					
						
					setFancyBoxLinks();
					updateThumbnails();
				
				});
				
			});	
		
		});//end of click
		
		var first_photo_caption = $(".gallery_thumbnails a").first().attr("title");
		var first_photo_fullsize = $(".gallery_thumbnails a").first().attr("href");
		var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");
		
		$(".gallery_preview").html('<a class="overlayLink" title="' + first_photo_caption + '" href="' + first_photo_fullsize + '" style="background-image:url(' + first_photo_preview + ');"></a>');
		
		$(".gallery_caption").html('<p><a class="overlayLink zoom" title="' + first_photo_caption + '" href="' + first_photo_fullsize + '">See Full Photo</a></p>');
		
		setFancyBoxLinks();
		updateThumbnails();

});

function setFancyBoxLinks(){
		$("a.overlayLink").fancybox({
			'titlePosition':'over',
			'overlayColor': '#007CC2',
			'overlayOpacity': .75,
			'transitionIn':'elastic',
			'transitionOut':'elastic',
			'autoScale': true
			
			
			});
		
	
	}
	
	
function updateThumbnails(){
	
	$(".gallery_thumbnails a").each(function(index){
			
			if($(".gallery_preview a").attr("href") == $(this).attr("href")){
				//If the anchor tag is the same as the preview anchor
				//Shade the thumbnail and give it a class of selected
				$(this).addClass("selected");
				$(this).children().fadeTo(250, .3);
				
				}else{
						//Remove the selected class and fade up to 100%
						$(this).removeClass("selected");
						$(this).children().css("opacity", "1");
					
					}
		
	});

}