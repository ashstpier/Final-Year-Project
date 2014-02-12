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
	var dashes = foo.replace(/\s/g, '_');
	
	var room = $(xml).find('room[value="'+dashes+'"]');
	
	if( !room.length){
		$('#modalfront, #modalback').empty();
		$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
		$(".card").removeClass('flipped');
		closeTweet();
		modal = scene.getObjectByName( dashes, true );
		placeMarker(modal);
	}else{
	room.each(function(){
		var rooms = $(this).parent();
		var building = rooms.parent().attr('label');
		$('#modalfront, #modalback').empty();
		$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
		$(".card").removeClass('flipped');
		closeTweet();
		modal = scene.getObjectByName( building, true );
		placeMarker(modal);
	});	
	}
	return false;
}