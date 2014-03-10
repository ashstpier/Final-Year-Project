function primaryOpen(button, panel){
	if($(panel).is(":visible")){
		$(".slide-drawer").toggle("slide", {direction:'left', easing:'easeInOutQuint'}, function(){
			$(".slide-drawer .slidepanel").hide();
		});
		$("#leftnav button").removeClass( "active" );
		$(".slide-drawer a").removeClass( "checked" );
	}else if($($('.slidepanel').not(panel)).is(":visible")){
		$(".slide-drawer .slidepanel").hide();
		$(panel).fadeIn();
		$("#leftnav button").removeClass( "active" );
		$(button).addClass( "active" );
		$(".slide-drawer a").removeClass( "checked" );
	}else{
		$(panel).show();
		$(".slide-drawer").toggle("slide", {direction:'left', easing:'easeInOutQuint'});
		$(button).addClass( "active" );
	}
}

$( "#label-button" ).click(function() {
	primaryOpen(this, "#label-panel");
});
$( "#overlay-button" ).click(function() {
	primaryOpen(this, "#overlay-panel");
});
$( "#investment-button" ).click(function() {
	primaryOpen(this, "#investment-panel");
});
$( "#event-button" ).click(function() {
	primaryOpen(this, "#event-panel");
});
$( "#search-button" ).click(function() {
	primaryOpen(this, "#search-panel");
});
$( "#info-button" ).click(function() {
	primaryOpen(this, "#info-panel");
});

$( "#share a" ).click(function() {
	$('#sharebox').slideToggle( 300, "easeInOutQuint" );
});

//////// SEARCH ///////
function searchResult(searchvalue) {
 	
	var foo = searchvalue.searchString.value;
	if(jQuery.inArray( foo, buildings ) != -1){
		$('#searchBox').css('color','#666');
		$('.search-error').hide();
		var dashes = foo.replace(/\s/g, '_');
		
		var room = $(xml).find('room:contains('+foo+')');
		
		if( !room.length){
			$('#modalfront, #modalback').empty();
			$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
			$(".card").removeClass('flipped');
			closeTweet();
			modal = scene.getObjectByName( dashes, true );
			placeMarker(modal);
		}else{
			var rooms = $(room).parent()
			var building = rooms.parent().attr('label');
			$('#modalfront, #modalback').empty();
			$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
			$(".card").removeClass('flipped');
			closeTweet();
			modal = scene.getObjectByName( building, true );
			placeMarker(modal);
		}
	}else{
		$('#searchBox').css('color','#e83333');
		$('.search-error').show();
	}
	
	return false;
}
$( "#search-toggle a" ).click(function() {
	$('#search').toggle( 300, "easeInOutQuint" );
	$(this).toggleClass( "active" );
});