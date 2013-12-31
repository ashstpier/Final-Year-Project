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
    <ul id="nav">
    	<li><a href="facts.html">10 Facts</a></li>
    	<li><a href="index.php" class="active">Explore</a></li>
        <li><a href="social.php">Social</a></li>
    </ul>
</div>
<div id="leftnav">
    <button id="labelbutton" class="slide" type="button"><i class="fa fa-map-marker fa-lg"></i></button>
    <button id="eventbutton" class="slide" type="button"><i class="fa fa-calendar"></i></button>
    <div id="leftnav-footer">
        <form action="http://facebook.com" target="_blank">
            <button type="submit"><i class="fa fa-facebook"></i></button>
        </form>
        <form action="http://twitter.com" target="_blank">
            <button type="submit"><i class="fa fa-twitter"></i></button>
        </form>
        <form action="http://dribbble.com" target="_blank">
            <button type="submit"><i class="fa fa-dribbble"></i></button>
        </form>
    </div>
</div>
<div id="mapwrapper">
    <div id="labelpanel">
        <h2>Markers</h2>
        <button id="labeltoggle" class="unchecked" type="button">Show building names</button>
        <button id="subjecttoggle" class="unchecked" type="button">Show subject areas</button>
        <button id="accommodationtoggle" class="unchecked" type="button">Show accommodation</button>
        <button id="parkingtoggle" class="unchecked" type="button">Show parking</button>
        <button id="bustoggle" class="unchecked" type="button">Show bus routes</button>
    </div>
    <div id="eventpanel">
        <h2>Events</h2>
    </div>
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
<div id="footer">
    <ul>
        <li><a href="pages/about.php">About</a></li>
        <li><a href="pages/casestudies.php">Case Studies</a></li>
        <li><a href="http://www.kent.ac.uk/">UKC Website</a></li>
        <li><a href="pages/disclaimer.php">Disclaimer</a></li>
        <li><a href="pages/credits.php">Credits</a></li>
    </ul>
</div>

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
            $('#status').fadeOut(1000); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut(1000); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});
        })
    //]]>
</script>
 

</body>
</html>
