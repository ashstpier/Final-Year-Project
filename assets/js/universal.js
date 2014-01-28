function primaryOpen(button, panel){
	if($(panel).is(":visible")){
		$(".slide-drawer.primary").toggle("slide", {direction:'left'}, function(){
			$(".slide-drawer.primary div").hide();
		});
		$("#leftnav button").removeClass( "active" );
		$(".slide-drawer.secondary").hide();
		$(".slide-drawer a").removeClass( "checked" );
	}else if($($('.primary div').not(panel)).is(":visible")){
		$(".slide-drawer.primary div").hide();
		$(panel).fadeIn();
		$("#leftnav button").removeClass( "active" );
		$(button).addClass( "active" );
		$(".slide-drawer.secondary").hide();
		$(".slide-drawer.primary a").removeClass( "checked" );
	}else{
		$(panel).show();
		$(".slide-drawer.primary").toggle("slide", {direction:'left'});
		$(button).addClass( "active" );
	}
}

$( "#label-button" ).click(function() {
	primaryOpen(this, "#label-panel");
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

///// SECONDARY //////

function secondaryOpen(button, panel) {
	if($(panel).is(":visible")){
		$(".slide-drawer.secondary").toggle("slide", {direction:'left'}, function(){
			$(".slide-drawer.secondary div").hide();
		});
		$(button).removeClass('checked');
	}else if($($('.secondary div').not(panel)).is(":visible")){
		$(".slide-drawer.secondary div").hide();
		$(panel).fadeIn();
		$("#search-panel a").removeClass('checked');
		$(button).addClass('checked');
	}else{
		$(panel).fadeIn();
		$(".slide-drawer.secondary").toggle("slide", {direction:'left'});
		$(button).addClass('checked');
	}
}
$( "#a-z" ).click(function() {
	secondaryOpen(this, "#a-z-panel");
});
$( "#subjects" ).click(function() {
	secondaryOpen(this, "#subject-panel");
});
$( "#community" ).click(function() {
	secondaryOpen(this, "#community-panel");
});
$( "#admin" ).click(function() {
	secondaryOpen(this, "#admin-panel");
});
$( "#accommodation" ).click(function() {
	secondaryOpen(this, "#accommodation-panel");
});
$( "#maintenance" ).click(function() {
	secondaryOpen(this, "#maintenance-panel");
});

//////// SEARCH ///////

$( ".secondary a" ).click(function() {
	$('#modalfront, #modalback').empty();
	$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
	$(".card").removeClass('flipped');
	closeTweet();
	modal = scene.getObjectByName( $(this).attr("data-building"), true );
	placeMarker(modal);
	$(".slide-drawer.secondary").toggle("slide", {direction:'left'}, function(){
		$(".slide-drawer.secondary div").hide();
	});
	$("#search-panel a").removeClass('checked');
});