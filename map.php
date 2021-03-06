<?php 
	include_once 'twitter/display-tweet.php';
	include_once 'assets/php/events.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
    <title>Explore UKC</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"/>
    <link rel="icon" type="image/ico" href="favicon.ico"/>
    <link href="assets/css/style_light.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/typography.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/preloader.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/social.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/3dbuttons.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="assets/css/animate.css"/>
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700,400,300' rel='stylesheet' type='text/css'/>
    <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
    <script src="assets/js/utils/modernizr.js"></script>
</head>
<body>
<div id="preloader">
	<div id="preloader-content">
        <img src="assets/images/splash.gif" alt="University of Kent loading" />
        <div id="percent">0%</div>
    </div>
</div>
<div id="navbar" class="fold close">
	<div id="logo"><a href="index.html"><img src="assets/images/logo.png" alt="University of Kent logo" /></a><h1>Interactive 3D Campus</h1></div>
    <ul id="nav">
        <li id="search-toggle"><a href="#"><i class="fa fa-search"></i></a></li>
        <li><a href="map.php" class="active"><i class="fa fa-compass"></i>Explore</a></li>
        <li><a href="social.php"><i class="fa fa-comment-o"></i>Social</a></li>
        <li id="share"><a href="#" title="Share this page"><i class="fa fa-share"></i></a></li>
    </ul>
    <div id="sharebox">
    	<div class="arrow-down"></div>
    	<ul>
        	<li><a href="http://twitter.com/home?status=Currently viewing the University of Kent campus map at http://3d.eda.kent.ac.uk" title="Share on Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="http://www.facebook.com/sharer.php?u=3d.eda.kent.ac.uk" title="Share on Facebook" target="blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://plus.google.com/share?url=3d.eda.kent.ac.uk" title="Share on Google Plus" target="blank"><i class="fa fa-google-plus"></i></a></li>
        </ul>
    </div>
</div>
<div id="leftnav" class="foldleft closeleft">
    <button id="label-button" class="slide" type="button" title="Markers"><i class="fa fa-map-marker"></i></button>
    <button id="overlay-button" class="slide" type="button" title="Transport"><i class="fa fa-location-arrow"></i></button>
    <button id="investment-button" class="slide" type="button" title="Data"><i class="fa fa-bar-chart-o"></i></button>
    <?php if($event_string != "") : ?>
    	<button id="event-button" class="slide" type="button" title="Events"><i class="fa fa-calendar"></i></button>
    <?php endif; ?>
    <button id="info-button" class="slide" type="button" title="Info"><i class="fa fa-cogs"></i></button>
</div>
<div id="search">
    <form name="search_form" id="searchForm" method="GET" onsubmit="return searchResult(this);">
        <label for="searchBox"><i class="fa fa-search"></i> </label>
        <input type="text" id="searchBox" name="searchString" placeholder="Search for a building or room..." />
        <div class="search-error"><a href="#"><i class="fa fa-lg fa-times"></i></a></div>
    </form>
</div>
<div id="search2">
    <form name="search_form" id="searchForm" method="GET" onsubmit="return searchResult(this);">
        <label for="searchBox"><i class="fa fa-search"></i> </label>
        <input type="text" id="searchBox" name="searchString" placeholder="Search for a building or room..." />
        <div class="search-error"><a href="#"><i class="fa fa-lg fa-times"></i></a></div>
    </form>
</div>
<div class="slide-drawer">
	<div id="label-panel" class="slidepanel">
    	<h2>Markers</h2>
        <p><em>Use the options below to highlight buildings by category and hide/show labels:</em></p>
        <h3>Building categories</h3>
        <ul>
        	<li><a href="#" class="toggle" id="labelall">Show all</a></li>
            <li><a href="#" class="toggle" id="accommodationtoggle">Accomodation</a></li>
            <li><a href="#" class="toggle" id="teachingtoggle">Teaching</a></li>
            <li><a href="#" class="toggle" id="admintoggle">Admin</a></li>
            <li><a href="#" class="toggle" id="communitytoggle">Community</a></li>
            <li><a href="#" class="toggle" id="maintenancetoggle">Other services</a></li>
            <li><a href="#" class="toggle" id="developmenttoggle">New developments</a></li>
        </ul>
        <h3>Labels</h3>
        <ul>
        	<li><a href="#" class="toggle" id="labeltoggle">Names</a></li>
            <li><a href="#" class="toggled" id="tweettoggle">Tweets</a></li>
            <li><a href="#" class="toggled" id="facttoggle">Facts</a></li>
            <li><a href="#" class="toggled" id="bustoggle">Bus stops</a></li>
            <li><a href="#" class="toggled" id="foodtoggle">Restaurants</a></li>
        </ul>
    </div>
    <div id="overlay-panel" class="slidepanel">
    	<h2>Travel</h2>
        <p><em>Use the options below to display transport information and bus routes:</em></p>
        <h3>Routes</h3>
        <ul>
        	<li><a href="#" class="toggle" id="busall">Show all</a></li>
            <li><a href="#" class="toggle" id="keynesbus">Keynes bus</a></li>
            <li><a href="#" class="toggle" id="darwinbus">Darwin bus</a></li>
            <li><a href="#" class="toggle" id="parkwoodbus">Parkwood bus</a></li>
            <li><a href="#" class="toggle" id="cycleroutes">Cycle routes</a></li>
            <li><a href="#" class="toggle" id="footpaths">Footpaths</a></li>
        </ul>
        <h3>Transport</h3>
        <ul>
        	<li><a href="#" class="toggle" id="roadnames">Road Names</a></li>
        	<li><a href="#" class="toggle" id="visitorparking">Visitor parking</a></li>
            <li><a href="#" class="toggle" id="permitparking">Permit holder parking</a></li>
            <li><a href="#" class="toggle" id="bikeracks">Bike racks</a></li>
        </ul>
        <a href="http://www.stagecoachbus.com/uploads/unibus_wef220913.pdf" class="external" target="_blank">Bus timetables</a>
    </div>
    <div id="investment-panel" class="slidepanel">
        <h2>Data</h2>
        <p><em>Show various data as a 3D bar graph on top of the campus map:</em></p>
        <h3>Accommodation</h3>
        <ul>
            <li><a href="#" class="toggle" id="population">Population density</a></li>
            <li><a href="#" class="toggle" id="roomprice">Accommodation price</a></li>
            <li><a href="#" class="toggle" id="roomsize">Room size</a></li>
        </ul>
        <h3>University league scores</h3>
        <p><em>The data displayed on these graphs is taken from the Complete University Guide website.</em></p>
        <ul>
        	<li><a href="#" class="toggle" id="subjectscore">Subject score</a></li>
        	<li><a href="#" class="toggle" id="subjectsatisfaction">Subject satisfaction</a></li>
            <li><a href="#" class="toggle" id="entrypoints">Subject entry points</a></li>
        </ul>
        <a href="http://www.thecompleteuniversityguide.co.uk/kent" class="external" target="_blank">More league scores</a>
    </div>
    <div id="event-panel" class="slidepanel">
        <h2>Events</h2>
        <h3>Todays events</h3>
        <?php echo $event_string ?>
        <a href="http://www.kent.ac.uk/calendar/" class="external" target="_blank">More events</a>
    </div>
    <div id="info-panel" class="slidepanel">
        <h2>Info</h2>
        <p>The various pages below provide further information about this application.</p>
        <ul>
         	<li><a href="pages/help.php" target="_blank">Help</a></li>
            <li><a href="pages/about.php" target="_blank">About</a></li>
            <li><a href="pages/disclaimer.php" target="_blank">Disclaimer</a></li>
            <li><a href="pages/credits.php" target="_blank">Credits</a></li>
            <li><a href="admin/" target="_blank">Admin</a></li>
            <li><a href="http://www.kent.ac.uk/" target="_blank">UKC website</a></li>
            <li><a href="https://github.com/ashstpier/Final-Year-Project" target="_blank">GitHub Repository</a></li>
        </ul>
    </div>
</div>
<div id="cookie" class="controls-modal"><a href="#" class="controls-close"><i class="fa-times fa fa-lg"></i></a><h2>Welcome to the University of Kent Campus map!</h2><p>You can control the map by clicking and dragging with your mouse. Click on individual buildings to reveal information about them.</p><br/><p>Use the buttons below to rotate the map and change perspective.</p><div class="arrow-down"></div></div>
<div id="touch_cookie" class="controls-modal"><a href="#" class="controls-close"><i class="fa-times fa fa-lg"></i></a><h2>Welcome to the University of Kent Campus map!</h2><p>You can control the map by touching and dragging with your finger. Tap on individual buildings to reveal information about them.</p><br/><p>Use the buttons below to rotate the map and change perspective.</p><div class="arrow-down"></div></div>
<div id="zoom" class="controls-modal"><a href="#" class="controls-close"><i class="fa-times fa fa-lg"></i></a><h2>UKC points of interest</h2><p>Click and drag to rotate the camera to view some of the University of Kent's most popular events and places.</p><br/><p>Click the button below to exit back to the map view.</p><div class="arrow-down"></div></div>
<div id="mapwrapper">
    <div id="modalpanel" class="animated flipcard">
    	<div class="card">
    		<div id="modalfront" class="face front"></div>
        	<div id="modalback" class="face back"></div>
        </div>
    </div>
    <nav class="cl-effect-2" id="exitzoom">
    	<a href="#"><span data-hover="Exit view" class="external">Exit view</span></a>
    </nav>
    
    <div id="tweet_kentunion" class="tweetpanel animated">
		<?php display_tweet('kentunion','time_since', 1, 30); ?>
        <div class="arrow-down"></div>
    </div>
    <div id="tweet_unikent" class="tweetpanel animated">
		<?php display_tweet('unikent','time_since', 1, 30); ?>
        <div class="arrow-down"></div>
    </div>
    <div id="tweet_unikentemploy" class="tweetpanel animated">
		<?php display_tweet('unikentemploy','time_since', 1, 30); ?>
        <div class="arrow-down"></div>
    </div>
    <div id="tweet_unikent_music" class="tweetpanel animated">
		<?php display_tweet('unikent_music','time_since', 1, 30); ?>
        <div class="arrow-down"></div>
    </div>
    <div id="tweet_edakent" class="tweetpanel animated">
		<?php display_tweet('edakent','time_since', 1, 30); ?>
        <div class="arrow-down"></div>
    </div>
    <div id="tweet_parkwoodsc" class="tweetpanel animated">
		<?php display_tweet('parkwoodsc','time_since', 1, 30); ?>
        <div class="arrow-down"></div>
    </div>
    
    <div id="keynes_bus" class="busmodal animated">
    	<div class="header">
        	<h2>Keynes UniBus Timetable</h2>
            <a href="#" class="closebus" onclick="closeBus()"><i class="fa fa-times fa-lg"></i></a>
        </div>
		<div class="content">
        	<?php include_once 'assets/keynes_table.php' ?>
        </div>
        <div class="arrow-down"></div>
    </div>
    <div id="parkwood_bus" class="busmodal animated">
		<div class="header">
        	<h2>Parkwood UniBus Timetable</h2>
            <a href="#" class="closebus" onclick="closeBus()"><i class="fa fa-times fa-lg"></i></a>
        </div>
		<div class="content">
        	<?php include_once 'assets/parkwood_table.php' ?>
        </div>
        <div class="arrow-down"></div>
    </div>
    <div id="darwin_bus" class="busmodal animated">
		<div class="header">
        	<h2>Darwin UniBus Timetable</h2>
            <a href="#" class="closebus" onclick="closeBus()"><i class="fa fa-times fa-lg"></i></a>
        </div>
		<div class="content">
        	<?php include_once 'assets/darwin_table.php' ?>
        </div>
        <div class="arrow-down"></div>
    </div>
    <div id="factmodal" class="animated"></div>
    <div id="foodmodal" class="animated"></div>
    <div id="controls">
        <button id="rotateleft" type="button" title="Rotate Left"><i class="fa fa-caret-left fa-2x"></i></button>
        <button id="twod" type="button" onclick="tiltView()" title="Tilt View"><img src="assets/images/icons/tilt.png" id="tilt_icon"/><img src="assets/images/icons/flat.png" id="flat_icon"/><img src="assets/images/icons/2d.png" id="twod_icon"/></button>
        <button id="rotateright" type="button" title="Rotate Right"><i class="fa fa-caret-right fa-2x"></i></button>
    </div>
    <button id="switchmap" type="button" title="Switch Map">Satellite</button>
    <div id="googlecopy">Imagery ©2014 Bluesky, Map data ©2014 Google</div>
    <div id="app">
    	<canvas id="canvas" width="100%" height="100%">
    </div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="assets/js/cookies.js"></script>
<script src="http://code.createjs.com/preloadjs-0.4.1.min.js"></script>

<script>
Modernizr.addValueTest = function(property,value){
    var testName= (property+value).replace(/-/g,'');
    Modernizr.addTest(testName , function () {
        var element = document.createElement('link');
        var body = document.getElementsByTagName('HEAD')[0];
        var properties = [];
        var upcaseProp = property.replace(/(^|-)([a-z])/g, function(a, b, c){ return c.toUpperCase(); });
        properties[property] = property;
        properties['Webkit'+upcaseProp] ='-webkit-'+property;
        properties['Moz'+upcaseProp] ='-moz-'+property;
        properties['ms'+upcaseProp] ='-ms-'+property;

        body.insertBefore(element, null);
        for (var i in properties) {
            if (element.style[i] !== undefined) {
                element.style[i] = value;
            }
        }
        //ie7,ie8 doesnt support getComputedStyle
        //so this is the implementation
        if(!window.getComputedStyle) {
            window.getComputedStyle = function(el, pseudo) {
                this.el = el;
                this.getPropertyValue = function(prop) {
                    var re = /(\-([a-z]){1})/g;
                    if (prop == 'float') prop = 'styleFloat';
                    if (re.test(prop)) {
                        prop = prop.replace(re, function () {
                            return arguments[2].toUpperCase();
                        });
                    }
                    return el.currentStyle[prop] ? el.currentStyle[prop] : null;
                };
                return this;
            };
        }

        var st = window.getComputedStyle(element, null),
            currentValue = st.getPropertyValue("-webkit-"+property) ||
                st.getPropertyValue("-moz-"+property) ||
                st.getPropertyValue("-ms-"+property) ||
                st.getPropertyValue(property);

        if(currentValue!== value){
            element.parentNode.removeChild(element);
            return false;
        }
        element.parentNode.removeChild(element);
        return true;
    });
}
Modernizr.addValueTest('transform-style','preserve-3d');

$('#search').hide();

var xml, factxml, foodxml;

$.ajax({
	type: "GET",
	url: "assets/buildings.xml",
	dataType: "xml",
	success: function(data) { xml = data;}
});
$.ajax({
	type: "GET",
	url: "assets/facts.xml",
	dataType: "xml",
	success: function(data) { factxml = data;}
});
$.ajax({
	type: "GET",
	url: "assets/food.xml",
	dataType: "xml",
	success: function(data) { foodxml = data;}
});
</script>

<script src="assets/js/three_r62.min.js"></script> 
<script src="assets/js/controls/OrbitControls_r62.js"></script> 

<script src="assets/js/utils/Detector.js"></script>
<script>
if( Detector.webgl ){
		
}else{
	 alert('Your browser or graphics card does not seem to support WebGL. Please switch to a modern browser like Google Chrome to be able to experience this application.');
	 window.location = 'index.html';
}
</script> 
<script src="assets/js/utils/tween.min.js"></script> 
     
<script src="assets/js/functions.js"></script> 
<script src="assets/js/mouse_events.js"></script>
<script src="assets/js/helvetiker_bold.typeface.js"></script>
<script src="assets/js/core.js"></script>
<script src="assets/js/universal.js"></script>

<script>
	/////// EVENTS ///////
	$(document).ready(function() {
		
	if (Modernizr.touch) {   
	}else{
		$( '#leftnav button' ).tooltip({ position: { my: "right top", at: "left top" }, show: { effect: "slide", duration: 200 }, hide: { effect: "slide", duration: 200 }, easing: "easeInOutQuad" });	
		$( '#controls button' ).tooltip({ position: { my: "center bottom-20", at: "center+8 top" },  show: { effect: "fade", duration: 0 }, hide: { effect: "fade", duration: 0 }, easing: "easeInOutQuad" });	
	}
	

	/////// SEARCH ///////
	
		$.ajax({
			type: "GET",
			url: "assets/buildings.xml", // change to full path of file on server
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
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-41428597-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</body>
</html>
