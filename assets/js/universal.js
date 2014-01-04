$( "#labelbutton" ).click(function() {
	if($("#eventpanel").is(":visible")){
		$("#eventpanel").toggle("slide", {direction:'left'}, function(){
			$("#eventbutton").toggleClass( "active" );
			$("#labelpanel").toggle("slide", {direction:'left'});
		});
	}else{
		$("#labelpanel").toggle("slide", {direction:'left'});
	}
});
$( "#eventbutton" ).click(function() {
	if($("#labelpanel").is(":visible")){
		$("#labelpanel").toggle("slide", {direction:'left'}, function(){
			$("#labelbutton").toggleClass( "active" );
			$("#eventpanel").toggle("slide", {direction:'left'});
		});
	}else{
		$("#eventpanel").toggle("slide", {direction:'left'});
	}
});