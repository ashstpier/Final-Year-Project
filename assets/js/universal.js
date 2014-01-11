$( "#label-button" ).click(function() {
	if($("#label-panel").is(":visible")){
		$(".slide-drawer").toggle("slide", {direction:'left'}, function(){
			$(".slide-drawer div").hide();
		});
		$("#leftnav button").removeClass( "active" );
	}else if($("#subject-panel, #investment-panel, #event-panel, #info-panel").is(":visible")){
		$(".slide-drawer div").hide();
		$("#label-panel").fadeIn();
		$("#leftnav button").removeClass( "active" );
		$("#label-button").addClass( "active" );
	}else{
		$("#label-panel").fadeIn();
		$(".slide-drawer").toggle("slide", {direction:'left'});
		$("#label-button").addClass( "active" );
	}
});
$( "#subject-button" ).click(function() {
	if($("#subject-panel").is(":visible")){
		$(".slide-drawer").toggle("slide", {direction:'left'}, function(){
			$(".slide-drawer div").hide();
		});
		$("#leftnav button").removeClass( "active" );
	}else if($("#label-panel, #investment-panel, #event-panel, #info-panel").is(":visible")){
		$(".slide-drawer div").hide();
		$("#subject-panel").fadeIn();
		$("#leftnav button").removeClass( "active" );
		$("#subject-button").addClass( "active" );
	}else{
		$("#subject-panel").fadeIn();
		$(".slide-drawer").toggle("slide", {direction:'left'});
		$("#subject-button").addClass( "active" );
	}
});
$( "#investment-button" ).click(function() {
	if($("#investment-panel").is(":visible")){
		$(".slide-drawer").toggle("slide", {direction:'left'}, function(){
			$(".slide-drawer div").hide();
		});
		$("#leftnav button").removeClass( "active" );
	}else if($("#label-panel, #subject-panel, #event-panel, #info-panel").is(":visible")){
		$(".slide-drawer div").hide();
		$("#investment-panel").fadeIn();
		$("#leftnav button").removeClass( "active" );
		$("#investment-button").addClass( "active" );
	}else{
		$("#investment-panel").fadeIn();
		$(".slide-drawer").toggle("slide", {direction:'left'});
		$("#investment-button").addClass( "active" );
	}
});
$( "#event-button" ).click(function() {
	if($("#event-panel").is(":visible")){
		$(".slide-drawer").toggle("slide", {direction:'left'}, function(){
			$(".slide-drawer div").hide();
		});
		$("#leftnav button").removeClass( "active" );
	}else if($("#label-panel, #subject-panel, #investment-panel, #info-panel").is(":visible")){
		$(".slide-drawer div").hide();
		$("#event-panel").fadeIn();
		$("#leftnav button").removeClass( "active" );
		$("#event-button").addClass( "active" );
	}else{
		$("#event-panel").fadeIn();
		$(".slide-drawer").toggle("slide", {direction:'left'});
		$("#event-button").addClass( "active" );
	}
});
$( "#info-button" ).click(function() {
	if($("#info-panel").is(":visible")){
		$(".slide-drawer").toggle("slide", {direction:'left'}, function(){
			$(".slide-drawer div").hide();
		});
		$("#leftnav button").removeClass( "active" );
	}else if($("#label-panel, #subject-panel, #investment-panel, #event-panel").is(":visible")){
		$(".slide-drawer div").hide();
		$("#info-panel").fadeIn();
		$("#leftnav button").removeClass( "active" );
		$("#info-button").addClass( "active" );
	}else{
		$("#info-panel").fadeIn();
		$(".slide-drawer").toggle("slide", {direction:'left'});
		$("#info-button").addClass( "active" );
	}
});