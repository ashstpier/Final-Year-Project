<!DOCTYPE html>
<html lang="en">
		<head>
		<title>Final Year Project</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<link href="assets/css/style.css" rel="stylesheet" type="text/css">
        <link href="assets/css/typography.css" rel="stylesheet" type="text/css">
        <link href="assets/css/buttons.css" rel="stylesheet" type="text/css">
        <link href="assets/css/preloader.css" rel="stylesheet" type="text/css">
        <link href="assets/css/social.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="assets/css/animate.css">
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
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
	<a href="#" id="drawer-toggle"><img src="assets/images/logo.png" alt="University of Kent logo" /></a>
    <ul id="nav">
    	<li><a href="facts.html">10 Facts</a></li>
    	<li><a href="index.php" class="active">Explore</a></li>
        <li><a href="social.php">Social</a></li>
    </ul>
</div>
<div id="leftnav">
    <button id="label-button" class="slide" type="button"><i class="fa fa-map-marker"></i></button>
    <button id="subject-button" class="slide" type="button"><i class="fa fa-book"></i></button>
    <button id="investment-button" class="slide" type="button"><i class="fa fa-bar-chart-o"></i></button>
    <button id="event-button" class="slide" type="button"><i class="fa fa-calendar"></i></button>
    <button id="info-button" class="slide" type="button"><i class="fa fa-cogs"></i></button>
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
<div class="slide-drawer">
	<div id="label-panel">
        <h2>Places</h2>
        <h3>Markers</h3>
        <ul>
            <li><a href="#" class="toggle" id="labelall">Show all</a></li>
            <li><a href="#" class="toggle" id="labeltoggle">Building names</a></li>
            <li><a href="#" class="toggle" id="accommodationtoggle">Accomodation</a></li>
            <li><a href="#" class="toggle" id="foodtoggle">Food &amp; Drink</a></li>
            <li><a href="#" class="toggle" id="shoptoggle">Shops</a></li>
        </ul>
        <h3>Transport</h3>
        <ul>
            <li><a href="#" class="toggle">Parking</a></li>
            <li><a href="#" class="toggle">Bus routes</a></li>
            <li><a href="#" class="toggle">Bus stops</a></li>
            <li><a href="#" class="toggle">Cycle routes</a></li>
            <li><a href="#" class="toggle">Bike racks</a></li>
        </ul>
    </div>
    <div id="subject-panel">
        <h2>Subjects</h2>
        <ul>
            <li><a href="#" class="toggle">Architecture</a></li>
            <li><a href="#" class="toggle">Arts</a></li>
            <li><a href="#" class="toggle">Biosciences</a></li>
            <li><a href="#" class="toggle">Computing</a></li>
            <li><a href="#" class="toggle">Digital Arts</a></li>
            <li><a href="#" class="toggle">Drama</a></li>
            <li><a href="#" class="toggle">Economics</a></li>
            <li><a href="#" class="toggle">Engineering</a></li>
            <li><a href="#" class="toggle">English</a></li>
            <li><a href="#" class="toggle">Humanities</a></li>
            <li><a href="#" class="toggle">Languages</a></li>
            <li><a href="#" class="toggle">Law</a></li>
            <li><a href="#" class="toggle">Mathematics</a></li>
            <li><a href="#" class="toggle">Music</a></li>
            <li><a href="#" class="toggle">Physical Sciences</a></li>
            <li><a href="#" class="toggle">Social Sciences</a></li>
            <li><a href="#" class="toggle">Sports</a></li>
        </ul>
    </div>
    <div id="investment-panel">
        <h2>Investment</h2>
        <ul>
            <li><a href="#" class="toggle">Bus routes</a></li>
            <li><a href="#" class="toggle">Bus stops</a></li>
            <li><a href="#" class="toggle">Cycle routes</a></li>
            <li><a href="#" class="toggle">Bike racks</a></li>
            <li><a href="#" class="toggle">Parking</a></li>
        </ul>
    </div>
    <div id="event-panel">
        <h2>Events</h2>
        <a href="#" class="event">
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
        </a>
    </div>
    <div id="info-panel">
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
    <div id="modalpanel" class="animated"></div>
    <div id="tweet_kentunion" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('kentunion','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_unikent" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('unikent','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_unikentemploy" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('unikentemploy','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_unikent_music" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('unikent_music','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_edakent" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('edakent','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_parkwoodsc" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('parkwoodsc','time_since', 1, 30);
    	?>
    </div>
    <div id="controls">
        <button id="rotateleft" type="button" title="Rotate Left" onclick="rotateLeft()"><i class="fa fa-chevron-left"></i></button>
        <button id="rotateright" type="button" title="Rotate Right" onclick="rotateRight()"><i class="fa fa-chevron-right"></i></button>
        <button id="twod" type="button" title="2D View" onclick="view2D()"><i class="fa fa-compass fa-lg"></i></button>
        <button id="tilt" type="button" title="Tilt Down" onclick="tilt()"><i class="fa fa-long-arrow-down"></i></button>
        <button id="refresh" type="button" title="Refresh View" onclick="refreshView()"><i class="fa fa-refresh"></i></button>
    </div>
</div>
<!--<div id="footer">
    <ul>
        <li><a href="pages/about.php">About</a></li>
        <li><a href="pages/casestudies.php">Case Studies</a></li>
        <li><a href="http://www.kent.ac.uk/">UKC Website</a></li>
        <li><a href="pages/disclaimer.php">Disclaimer</a></li>
        <li><a href="pages/credits.php">Credits</a></li>
    </ul>
</div>-->

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

<script src="assets/js/three_r62.min.js"></script> 
<script src="assets/js/controls/OrbitControls_r62.js"></script> 

<script src="assets/js/utils/Detector.js"></script> 
<script src="assets/js/utils/stats.min.js"></script> 
<script src="assets/js/utils/tween.min.js"></script> 

<script src="http://mrdoob.github.com/three.js/examples/js/shaders/CopyShader.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/js/shaders/SSAOShader.js"></script>

<script src="http://mrdoob.github.com/three.js/examples/js/postprocessing/EffectComposer.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/js/postprocessing/RenderPass.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/js/postprocessing/MaskPass.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/js/postprocessing/ShaderPass.js"></script>
      
<script src="assets/js/universal.js"></script>
<script src="assets/js/functions.js"></script> 
<script src="assets/js/mouse_events.js"></script>
<script src="assets/js/core.js"></script>
<script>
$(function() {
	$( "#controls button" ).tooltip({
      show: {delay: 200},
      position: {
        my: "center top",
        at: "center bottom+10"
      }
      
    });
});
</script>
<script type="text/javascript">
    //<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            setTimeout(function() {
				$('#status').fadeOut(1000); // will first fade out the loading animation
				$('#preloader').delay(350).fadeOut(1000); // will fade out the white DIV that covers the website.
				$('body').delay(350).css({'overflow':'visible'});
			 }, 750);
        })
    //]]>
</script>
 

</body>
</html>
