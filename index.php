<?php include_once 'twitter/display-tweet.php';

$html = file_get_contents('http://www.kent.ac.uk/calendar/'); //get the html returned from the following url

$kent_doc = new DOMDocument();

libxml_use_internal_errors(TRUE); //disable libxml errors

if(!empty($html)){ //if any html is actually returned

  $kent_doc->loadHTML($html);
  libxml_clear_errors(); //remove errors for yucky html
  
  $kent_xpath = new DOMXPath($kent_doc);

  //get all the h2's with an id
  $event = $kent_xpath->query('//div[contains(concat(" ", normalize-space(@class), " "), " event ")]');

$event_string = "<ul id='eventlist'>";
$i = 0;

  if($event->length > 0){
      foreach($event as $row){
		  $titlepath = $kent_xpath->query('.//div[@class="title"]', $row);
		  $title = $titlepath->item(0)->nodeValue;
		  $timepath = $kent_xpath->query('.//div[@class="time"]', $row);
		  $time = $timepath->item(0)->nodeValue;
		  $linkpath = $kent_xpath->query('.//div[@class="title"]/a/@href', $row);
		  $link = $linkpath->item(0)->nodeValue;
		  $linktitlepath = $kent_xpath->query('.//div[@class="categories"]/a', $row);
		  $linktitle = $linktitlepath->item(0)->nodeValue;
		  
		  $event_string .= '<li><h3><a href="http://www.kent.ac.uk/calendar/'.$link.'" target="_blank">'.$title.'</a></h3><span class="category"><a href="http://www.kent.ac.uk/calendar/?view_by=month&date=20140312&category='.$linktitle.'" target="_blank">'.$linktitle.'</a></span><span class="time">'.$time.'</span></li>';
		  
		  if (++$i == 15) break;
      }
  }
  $event_string .= "</ul>";
}
?>
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
    <link href="assets/css/3dbuttons.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
    <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div id="preloader">
	<div id="preloader-content">
    	<h2>Loading the University of Kent<br/> campus map.</h2>
        <img src="assets/images/splash.gif" alt="University of Kent logo" />
        <div id="percent">0%</div>
        <nav class="cl-effect-2">
            <a href="#" id="start"><span data-hover="Explore the campus now!" class="external">Explore the campus now!</span></a>
        </nav>
    </div>
</div>
<div id="navbar" class="fold close">
	<div id="logo"><a href="http://www.kent.ac.uk/" target="_blank"><img src="assets/images/logo.png" alt="University of Kent logo" /></a><h1>Explore the campus!</h1></div>
    <ul id="nav">
        <li id="search-toggle"><a href="#"><i class="fa fa-search"></i></a></li>
        <li><a href="index.php" class="active">Explore</a></li>
        <li><a href="facts.html">10 Facts</a></li>
        <li><a href="social.php">Social</a></li>
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
<div id="leftnav" class="foldleft closeleft">
    <button id="label-button" class="slide" type="button" title="Markers"><i class="fa fa-map-marker"></i></button>
    <button id="overlay-button" class="slide" type="button" title="Transport"><i class="fa fa-location-arrow"></i></button>
    <button id="investment-button" class="slide" type="button" title="Data"><i class="fa fa-bar-chart-o"></i></button>
    <button id="event-button" class="slide" type="button" title="Events"><i class="fa fa-calendar"></i></button>
    <div id="leftnav-footer">
    	<button id="info-button" class="slide" type="button" title="Info"><i class="fa fa-cogs"></i></button>
    </div>
</div>
<div id="search">
    <form name="search_form" id="searchForm" method="GET" onsubmit="return searchResult(this);">
        <label for="searchBox"><i class="fa fa-search"></i> </label>
        <input type="text" id="searchBox" name="searchString" placeholder="Search for a building or room..." />
        <div class="search-error"><i class="fa fa-lg fa-times"></i></div>
    </form>
</div>
<div class="slide-drawer">
	<div id="label-panel" class="slidepanel">
    	<h2>Markers</h2>
        <p>Use the controls below to display labels and buildings by category:</p>
        <h3>Labels</h3>
        <ul>
        	<li><a href="#" class="toggle" id="labeltoggle">Names</a></li>
            <!--<li><a href="#" class="toggle" id="eventtoggle">Events</a></li>-->
            <li><a href="#" class="toggle" id="tweettoggle">Tweets</a></li>
        </ul>
        <h3>Buildings</h3>
        <ul>
        	<li><a href="#" class="toggle" id="labelall">Show all</a></li>
            <li><a href="#" class="toggle" id="accommodationtoggle">Accomodation</a></li>
            <li><a href="#" class="toggle" id="teachingtoggle">Teaching</a></li>
            <li><a href="#" class="toggle" id="admintoggle">Admin</a></li>
            <li><a href="#" class="toggle" id="communitytoggle">Community</a></li>
            <li><a href="#" class="toggle" id="maintenancetoggle">Other services</a></li>
            <li><a href="#" class="toggle" id="developmenttoggle">New developments</a></li>
        </ul>
    </div>
    <div id="overlay-panel" class="slidepanel">
    	<h2>Travel</h2>
        <p>Use the controls below to display transport information and bus routes:</p>
        <h3>Routes</h3>
        <ul>
            <li><a href="#" class="toggle" id="keynesbus">Keynes bus</a></li>
            <li><a href="#" class="toggle" id="darwinbus">Darwin bus</a></li>
            <li><a href="#" class="toggle" id="parkwoodbus">Parkwood bus</a></li>
            <li><a href="#" class="toggle" id="cycleroutes">Cycle routes</a></li>
        </ul>
        <h3>Transport</h3>
        <ul>
        	<li><a href="#" class="toggle" id="roadnames">Road Names</a></li>
        	<li><a href="#" class="toggle" id="visitorparking">Visitor parking</a></li>
            <li><a href="#" class="toggle" id="permitparking">Permit holder parking</a></li>
            <!--<li><a href="#" class="toggle" id="busstops">Bus stops</a></li>-->
            <li><a href="#" class="toggle" id="bikeracks">Bike racks</a></li>
        </ul>
        <a href="#" class="external">Bus timetables</a>
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
        <h3>Todays events</h3>
        <?php echo $event_string ?>
        <a href="http://www.kent.ac.uk/calendar/?view_by=day&date=20140312&category=&tag=" class="external" target="_blank">More events</a>
    </div>
    <div id="info-panel" class="slidepanel">
        <h2>Info</h2>
        <ul>
         	<li><a href="pages/help.php">Help</a></li>
            <li><a href="pages/about.php">About</a></li>
            <li><a href="#">Case studies</a></li>
            <li><a href="pages/disclaimer.php">Disclaimer</a></li>
            <li><a href="pages/credits.php">Credits</a></li>
            <li><a href="http://www.kent.ac.uk/">UKC website</a></li>
        </ul>
    </div>
</div>
<div class="controls-modal"><a href="#" class="controls-close"><i class="fa-times fa fa-lg"></i></a><h2>Welcome to the University of Kent Campus map!</h2><p>You can control the map by clicking and dragging with your mouse. Click on individual buildings to reveal information about them.</p><br/><p>Use the buttons below to rotate the map and change perspective.</p><div class="arrow-down"></div></div>
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
        <button id="twod" type="button" onclick="tiltView()"><i class="fa fa-th-large"></i></button>
        <button id="rotateright" type="button"><i class="fa fa-chevron-right"></i></button>
    </div>
    <div id="app">
    	<canvas id="canvas" width="100%" height="100%">
    </div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="assets/js/cookies.js"></script>
<script src="http://code.createjs.com/preloadjs-0.4.1.min.js"></script>

<script>
var xml;

$.ajax({
	type: "GET",
	url: "assets/buildings.xml",
	dataType: "xml",
	success: function(data) { xml = data;}
});
</script>

<script src="assets/js/three_r62.min.js"></script> 
<script src="assets/js/controls/OrbitControls_r62.js"></script> 

<script src="assets/js/utils/Detector.js"></script> 
<script src="assets/js/utils/stats.min.js"></script> 
<script src="assets/js/utils/tween.min.js"></script> 

<script src="assets/js/postprocessing/EffectComposer.js"></script>
<script src="assets/js/postprocessing/RenderPass.js"></script>
<script src="assets/js/postprocessing/MaskPass.js"></script>
<script src="assets/js/postprocessing/ShaderPass.js"></script>

<script src="http://mrdoob.github.com/three.js/examples/js/shaders/FXAAShader.js"></script>

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

<script>
	/////// EVENTS ///////
	$(document).ready(function() {
		
		$( '#leftnav button' ).tooltip({ position: { my: "right top", at: "left top" }, show: { effect: "slide", duration: 250 }, easing: "easeInOutQuad" });
	

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

</body>
</html>
