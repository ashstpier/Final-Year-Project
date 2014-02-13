<?php include_once 'twitter/display-tweet.php'; ?>
<!DOCTYPE html>
<html lang="en">
		<head>
		<title>Final Year Project</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<link href="assets/css/style_light.css" rel="stylesheet" type="text/css">
        <link href="assets/css/typography.css" rel="stylesheet" type="text/css">
        <link href="assets/css/preloader.css" rel="stylesheet" type="text/css">
        <link href="assets/css/social.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="assets/css/animate.css">
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div id="preloader">
    <div class="loading">
    <!-- We make this div spin -->
        <div class="spinner">
            <!-- Mask of the quarter of circle -->
            <div class="mask">
                <!-- Inner masked circle -->
                <div class="maskedCircle"></div>
            </div>
        </div>
    </div>
</div>
<div id="navbar">
	<div id="logo"><a href="http://www.kent.ac.uk/" target="_blank"><img src="assets/images/logo.png" alt="University of Kent logo" /></a><h1>Explore the campus!</h1></div>
    <ul id="nav">
    	<!--<li><a href="#"><i class="fa fa-reply"></i> Back</a></li>
    	<li><a href="index.php" class="active">Explore</a></li>
    	<li><a href="facts.html">10 Facts</a></li>-->
        <li><a href="index.php" class="active"><i class="fa fa-compass"></i>&nbsp;&nbsp;Explore</a></li>
        <li><a href="social.php"><i class="fa fa-users"></i>&nbsp;&nbsp;Social</a></li>
        <li id="share"><a href="#"><i class="fa fa-heart-o"></i></a></li>
    </ul>
    <div id="sharebox">
    	<div class="arrow-down"></div>
    	<ul>
        	<li><button type="button"><i class="fa fa-twitter"></i></button></li>
            <li><button type="button"><i class="fa fa-facebook"></i></button></li>
            <li><button type="button"><i class="fa fa-google-plus"></i></button></li>
        </ul>
    </div>
</div>
<div id="leftnav">
    <button id="label-button" class="slide" type="button"><i class="fa fa-map-marker"></i></button>
    <button id="overlay-button" class="slide" type="button"><i class="fa fa-location-arrow"></i></button>
    <button id="investment-button" class="slide" type="button"><i class="fa fa-bar-chart-o"></i></button>
    <button id="event-button" class="slide" type="button"><i class="fa fa-calendar"></i></button>
    <div id="leftnav-footer">
    	<button id="info-button" class="slide" type="button"><i class="fa fa-cogs"></i></button>
    </div>
</div>
<!--<div id="leftdrawer">
	<h2>Markers</h2>
    <ul>
    	<li><a href="#" class="unchecked" id="labeltoggle"><i class="fa fa-map-marker"></i>Locations</a></li>
        <li><a href="#" class="unchecked" id="subjecttoggle"><i class="fa fa-book"></i>Subject Areas</a></li>
        <li><a href="#" class="unchecked" id="accommodationtoggle"><i class="fa fa-building-o"></i>Accomodation</a></li>
        <li><a href="#" class="unchecked" id="foodtoggle"><i class="fa fa-cutlery"></i>Food &amp; Drink</a></li>
        <li><a href="#" class="unchecked" id="parkingtoggle"><i class="fa fa-road"></i>Parking</a></li>
        <li><a href="#" class="unchecked" id="bustoggle"><i class="fa fa-ticket"></i>Bus routes</a></li>
    </ul>
</div>-->
<div id="search">
    <form name="search_form" id="searchForm" method="GET" onsubmit="return searchResult(this);">
        <label for="searchBox"><i class="fa fa-search"></i> </label>
        <input type="text" id="searchBox" name="searchString" placeholder="Search for a building..." />
    </form>
</div>
<div class="slide-drawer">
	<div id="label-panel" class="slidepanel">
    	<h2>Markers</h2>
        <p>Use the controls below to display labels and buildings by category:</p>
        <h3>Labels</h3>
        <ul>
        	<li><a href="#" class="toggle" id="labeltoggle">Names</a></li>
            <li><a href="#" class="toggled" id="eventtoggle">Events</a></li>
            <li><a href="#" class="toggled" id="tweettoggle">Twitter</a></li>
        </ul>
        <h3>Buildings</h3>
        <ul>
        	<li><a href="#" class="toggle" id="labelall">Show all</a></li>
            <li><a href="#" class="toggle" id="accommodationtoggle">Accomodation</a></li>
            <li><a href="#" class="toggle" id="teachingtoggle">Teaching</a></li>
            <li><a href="#" class="toggle" id="admintoggle">Admin</a></li>
            <li><a href="#" class="toggle" id="communitytoggle">Community</a></li>
            <li><a href="#" class="toggle" id="maintenancetoggle">Other services</a></li>
            <!--<li><a href="#" class="toggled" id="tweettoggle">Tweets</a></li>-->
        </ul>
        <!--<h3>New developments</h3>
        <a href="#" class="event">
         	<img src="assets/images/libraryextension.png" alt="Library Extension" />
            <h3>Templeman Library</h3>
            <p>Extension</p>
        </a>
        <a href="#" class="event">
         	<img src="assets/images/libraryextension.png" alt="Turing College" />
            <h3>Turing College</h3>
            <p>New development</p>
        </a>-->
    </div>
    <div id="overlay-panel" class="slidepanel">
    	<h2>Travel</h2>
        <p>Use the controls below to display transport information and bus routes:</p>
        <h3>Transport</h3>
        <ul>
        	<li><a href="#" class="toggle" id="visitorparking">Visitor parking</a></li>
            <li><a href="#" class="toggle" id="permitparking">Permit holder parking</a></li>
            <li><a href="#" class="toggle" id="busstops">Bus stops</a></li>
            <li><a href="#" class="toggle" id="bikeracks">Bike racks</a></li>
        </ul>
        <h3>Routes</h3>
        <ul>
            <li><a href="#" class="toggle" id="keynesbus">Keynes bus</a></li>
            <li><a href="#" class="toggle" id="darwinbus">Darwin bus</a></li>
            <li><a href="#" class="toggle" id="parkwoodbus">Parkwood bus</a></li>
            <li><a href="#" class="toggle" id="cycleroutes">Cycle routes</a></li>
        </ul>
        <a href="" class="external">Bus timetables</a>
    </div>
    <div id="investment-panel" class="slidepanel">
        <h2>Data</h2>
        <p>Show various data as a 3D bar graph on top of the campus map:</p>
        <h3>Accommodation</h3>
        <ul>
            <!--<li><a href="#" class="toggle" id="investmenttoggle">Show latest investments</a></li>
            <li><a href="#" class="toggle" id="developmenttoggle">Show recent developments</a></li>-->
            <li><a href="#" class="toggle" id="population">Population density</a></li>
            <li><a href="#" class="toggle" id="roomprice">Accommodation price</a></li>
            <li><a href="#" class="toggle" id="roomsize">Room size</a></li>
            <!--<li><a href="#" class="toggle" id="spending">Spending</a></li>-->
        </ul>
        <h3>University league scores</h3>
        <ul>
        	<li><a href="#" class="toggle" id="subjectscore">Subject score</a></li>
        	<li><a href="#" class="toggle" id="subjectsatisfaction">Subject satisfaction</a></li>
            <li><a href="#" class="toggle" id="entrypoints">Subject entry points</a></li>
        </ul>
        <a href="" class="external">More league scores</a>
    </div>
    <div id="event-panel" class="slidepanel">
        <h2>Events</h2>
        <h3>Recently Added</h3>
        <ul id="eventlist"></ul>
        <a href="" class="external">More events</a>
        <!--<a href="#" class="event">
         	<img src="assets/images/summerball.png" alt="Summer Ball" />
            <h3>Summer Ball</h3>
            <p>29 Jun 2014</p>
        </a>
        <a href="#" class="event">
         	<img src="assets/images/keynestock.png" alt="Keynestock" />
            <h3>Keynestock</h3>
            <p>15 Apr 2014</p>
        </a>
        <a href="#" class="event">
         	<img src="assets/images/freshersfayre.png" alt="freshersfayre" />
            <h3>Freshers Fayre</h3>
            <p>22 Sep 2014</p>
        </a>
        <h3>Talks</h3>
        <a href="#" class="event">
            <h3>Guillem Anglada - Doppler detection of low-mass</h3>
            <p>ILT - 14 Jun 2014</p>
        </a>
        <a href="#" class="event">
            <h3>COALAS - Designing the COgnitive Assisted Living Ambient System framework</h3>
            <p>KLT2 - 28 Jul 2014</p>
        </a>
        <a href="#" class="event">
            <h3>Everysense Everywhere Human Communication</h3>
            <p>Gulbenkian - 7 Jan 2014</p>
        </a>-->
    </div>
    <div id="info-panel" class="slidepanel">
        <h2>Info</h2>
        <ul>
         	<li><a href="#">Help</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Case studies</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Credits</a></li>
            <li><a href="#">UKC website</a></li>
        </ul>
    </div>
</div>
<div id="mapwrapper">
    <div id="modalpanel" class="animated flipcard">
    	<div class="card">
    		<div id="modalfront" class="face front"></div>
        	<div id="modalback" class="face back"></div>
        </div>
    </div>
    
    <div id="tweet_kentunion" class="tweetpanel animated">
		<?php display_tweet('kentunion','time_since', 1, 30); ?>
    </div>
    <div id="tweet_unikent" class="tweetpanel animated">
		<?php display_tweet('unikent','time_since', 1, 30); ?>
    </div>
    <div id="tweet_unikentemploy" class="tweetpanel animated">
		<?php display_tweet('unikentemploy','time_since', 1, 30); ?>
    </div>
    <div id="tweet_unikent_music" class="tweetpanel animated">
		<?php display_tweet('unikent_music','time_since', 1, 30); ?>
    </div>
    <div id="tweet_edakent" class="tweetpanel animated">
		<?php display_tweet('edakent','time_since', 1, 30); ?>
    </div>
    <div id="tweet_parkwoodsc" class="tweetpanel animated">
		<?php display_tweet('parkwoodsc','time_since', 1, 30); ?>
    </div>
    <div id="controls">
        <button id="rotateleft" type="button"><i class="fa fa-chevron-left"></i></button>
        <button id="twod" type="button" onclick="tiltView()"><i class="fa fa-compass"></i></button>
        <button id="rotateright" type="button"><i class="fa fa-chevron-right"></i></button>
    </div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

<script src="assets/js/jquery.simplemodal.1.4.4.min.js"></script>

<script src="assets/js/three_r62.min.js"></script> 
<script src="assets/js/controls/OrbitControls_r62.js"></script> 

<script src="assets/js/utils/Detector.js"></script> 
<script src="assets/js/utils/stats.min.js"></script> 
<script src="assets/js/utils/tween.min.js"></script> 



<script src="assets/js/postprocessing/EffectComposer.js"></script>
<script src="assets/js/postprocessing/RenderPass.js"></script>
<script src="assets/js/postprocessing/MaskPass.js"></script>
<script src="assets/js/postprocessing/ShaderPass.js"></script>

<script src="assets/js/shaders/CopyShader.js"></script>
<script src="assets/js/shaders/SSAOShader.js"></script>
<script src="assets/js/shaders/VignetteShader.js"></script>
<script src="assets/js/shaders/VerticalTiltShiftShader.js"></script>
<script src="assets/js/shaders/HorizontalTiltShiftShader.js"></script>
     
<script src="assets/js/functions.js"></script> 
<script src="assets/js/mouse_events.js"></script>
<script src="assets/js/helvetiker_regular.typeface.js"></script>
<script src="assets/js/core.js"></script>
<script src="assets/js/universal.js"></script>
<script type="text/javascript">
    //<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            setTimeout(function() {
				$('#status').fadeOut(1000); // will first fade out the loading animation
				$('#preloader').delay(350).fadeOut(1000); // will fade out the white DIV that covers the website.
				$('body').delay(350).css({'overflow':'visible'});
				new TWEEN.Tween( camera.position ).to( { x: 0, y: 350, z: 500 }, 3000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
			 }, 750);
        })
    //]]>
</script>

<script>

	/////// EVENTS ///////
	$(document).ready(function() {
		$.ajax({
			type: "GET",
			url: "assets/events.xml", // change to full path of file on server
			dataType: "xml",
			success: function(xml) {
				$(xml).find("event").each(function()
				{
					var title = $(this).find('title').text();
					var day = $(this).find('day').text();
					var month = $(this).find('month').text();
					var location = $(this).find('location').text();
					
					$('<li></li>').html('<div class="left"><div class="date"><span class="day">'+day+'</span><span class="month">'+month+'</span></div></div><div class="content"><h3>'+title+'</h3><a class="location"><i class="fa fa-map-marker"></i>'+location+'</a></div>').appendTo('ul#eventlist');
				});	
			}
		});
	});
	

	/////// SEARCH ///////
	
	$(document).ready(function() {
	
		$.ajax({
			type: "GET",
			url: "assets/slides.xml", // change to full path of file on server
			dataType: "xml",
			success: parseXml,
			complete: setupAC,
			failure: function(data) {
				alert("XML File could not be found");
				}
		});
	
		function parseXml(xml)
		{
			//find every query value
			$(xml).find("building").each(function()
			{
				var spaces = $(this).attr("label").replace(/_/g, ' ');
				buildings.push(spaces);
				$(this).find('rooms').children().each(function(){
					var room = $(this).text();
					buildings.push(room);
				});
			});	
		}
		
		function setupAC() {
			$("input#searchBox").autocomplete({
					source: function( request, response ) {
						var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
						response( $.grep( buildings, function( item ){
							return matcher.test( item );
						}) );
					},
					minLength: 1,
					select: function(event, ui) {
						$("input#searchBox").val(ui.item.value);
						$("#searchForm").submit();
					}
			});
		}
	});
</script>
 

</body>
</html>
