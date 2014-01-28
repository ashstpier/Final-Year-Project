<!DOCTYPE html>
<html lang="en">
		<head>
		<title>Final Year Project</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<link href="assets/css/style_light.css" rel="stylesheet" type="text/css">
        <link href="assets/css/typography.css" rel="stylesheet" type="text/css">
        <link href="assets/css/social.css" rel="stylesheet" type="text/css">
        <link href="assets/css/preloader.css" rel="stylesheet" type="text/css">
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
    	<li><a href="index.php">Explore</a></li>
    	<li><a href="facts.html">10 Facts</a></li>
        <li><a href="social.php" class="active">Social</a></li>
        <li id="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li id="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li id="github"><a href="#"><i class="fa fa-github-alt"></i></a></li>
    </ul>
</div>
<div id="leftnav">
    <button id="twitter-button" class="slide" type="button"><i class="fa fa-bars"></i></button>
    <button id="social-button" class="slide" type="button"><i class="fa fa-sort-amount-desc"></i></button>
    <div id="leftnav-footer">
    	<button id="info-button" class="slide" type="button"><i class="fa fa-cogs"></i></button>
    </div>
</div>
<div class="slide-drawer">
    <div id="twitter-panel">
        <h2>Filters</h2>
        <ul id="filters">
        	<li><a href="#" data-filter="*" class="checked"><i class="fa fa-th-large"></i>Show all</a></li>
      		<li><a href="#" data-filter=".twitter"><i class="fa fa-twitter"></i>Twitter</a></li>
      		<li><a href="#" data-filter=".instagram"><i class="fa fa-instagram"></i>Instagram</a></li>
        </ul>
        <h3>Twitter feed</h3>
        <ul id="filters">
          <li><a href="#" data-filter=".UniKent">@UniKent</a></li>
          <li><a href="#" data-filter=".KentUnion">@KentUnion</a></li>
          <li><a href="#" data-filter=".UniKentNews">@UniKentNews</a></li>
          <li><a href="#" data-filter=".UniKentEmploy">@UniKentEmploy</a></li>
          <li><a href="#" data-filter=".UniKent_Music">@UniKent_Music</a></li>
        </ul>
        <h3>Instagram feed</h3>
        <ul id="filters">
          <li><a href="#" data-filter=".kentuni">#KentUni</a></li>
          <li><a href="#" data-filter=".kentunion">#KentUnion</a></li>
        </ul>
    </div>
    <div id="social-panel">
        <h2>Options</h2>
        <h3>Display</h3>
        <ul>
            <li><a href="#" id="grid-toggle" class="sort checked"><i class="fa fa-th"></i>Grid</a></li>
            <li><a href="#" id="list-toggle" class="sort"><i class="fa fa-align-left"></i>List</a></li>
        </ul>
        <h3>Sort</h3>
        <ul>
            <li><a href="#" id="date-new" class="sort checked"><i class="fa fa-sort-amount-desc"></i>Newest</a></li>
            <li><a href="#" id="date-old" class="sort"><i class="fa fa-sort-amount-asc"></i>Oldest</a></li>
        </ul>
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
<!--<div id="leftdrawer">
	<h2>Filters</h2>
	<ul id="filters">
      <li><a href="#" data-filter="*"><i class="fa fa-th-large"></i>Show all</a></li>
      <li><a href="#" data-filter=".twitter"><i class="fa fa-twitter"></i>Twitter</a></li>
      <li><a href="#" data-filter=".instagram"><i class="fa fa-instagram"></i>Instagram</a></li>
    </ul>
    <h2>Twitter</h2>
    <ul id="filters">
      <li><a href="#" data-filter=".UniKent"><i class="fa fa-twitter"></i>University of Kent</a></li>
      <li><a href="#" data-filter=".KentUnion"><i class="fa fa-twitter"></i>Kent Union</a></li>
      <li><a href="#" data-filter=".UniKentNews"><i class="fa fa-twitter"></i>Uni Kent News</a></li>
      <li><a href="#" data-filter=".UniKentEmploy"><i class="fa fa-twitter"></i>Uni Kent Employ</a></li>
      <li><a href="#" data-filter=".UniKent_Music"><i class="fa fa-twitter"></i>Uni Kent Music</a></li>
      <li><a href="#" data-filter=".edakent"><i class="fa fa-twitter"></i>EDA Kent</a></li>
    </ul>
    <h2>Instagram</h2>
    <ul id="filters">
      <li><a href="#" data-filter=".kentuni"><i class="fa fa-instagram"></i>#KentUni</a></li>
      <li><a href="#" data-filter=".kentunion"><i class="fa fa-instagram"></i>#KentUnion</a></li>
    </ul>
</div>-->
<div id="wrapper">
    <section id="stream">
	<?php include_once 'twitter/display-tweets.php';
        display_tweets('unikent', 'kentunion','unikentemploy','unikent_music','unikentnews','default', 20, 30);
    ?>
    <?php include_once 'assets/php/instagram.php';
       
    ?>
    </section>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="http://isotope.metafizzy.co/jquery.isotope.min.js"></script>

<script>
// code found on this page: http://isotope.metafizzy.co/custom-layout-modes/masonry-gutters.html

// modified Isotope methods for gutters in masonry
$(window).load(function(){
	$.Isotope.prototype._getCenteredMasonryColumns = function() {
    this.width = this.element.width();
    
    var parentWidth = this.element.parent().width();
    
                  // i.e. options.masonry && options.masonry.columnWidth
    var colW = this.options.masonry && this.options.masonry.columnWidth ||
                  // or use the size of the first item
                  this.$filteredAtoms.outerWidth(true) ||
                  // if there's no items, use size of container
                  parentWidth;
    
    var cols = Math.floor( parentWidth / colW );
    cols = Math.max( cols, 1 );

    // i.e. this.masonry.cols = ....
    this.masonry.cols = cols;
    // i.e. this.masonry.columnWidth = ...
    this.masonry.columnWidth = colW;
  };
  
  $.Isotope.prototype._masonryReset = function() {
    // layout-specific props
    this.masonry = {};
    // FIXME shouldn't have to call this again
    this._getCenteredMasonryColumns();
    var i = this.masonry.cols;
    this.masonry.colYs = [];
    while (i--) {
      this.masonry.colYs.push( 0 );
    }
  };

  $.Isotope.prototype._masonryResizeChanged = function() {
    var prevColCount = this.masonry.cols;
    // get updated colCount
    this._getCenteredMasonryColumns();
    return ( this.masonry.cols !== prevColCount );
  };
  
  $.Isotope.prototype._masonryGetContainerSize = function() {
    var unusedCols = 0,
        i = this.masonry.cols;
    // count unused columns
    while ( --i ) {
      if ( this.masonry.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    
    return {
          height : Math.max.apply( Math, this.masonry.colYs ),
          // fit container to columns that have been used;
          width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
        };
  };
	
	
	
	var $container = $('#stream');
	$container.isotope({
		itemSelector: '.item',
		animationEngine: 'best-available',
		masonry: {
			
		},
		transformsEnabled: false,
		getSortData : {
			date : function ( $elem ) {
		  	return  parseInt($elem.find('.hidden_date').text(),10);
			}
		},
		sortBy : 'date',
		sortAscending : false
	});
	
	$(window).resize(function(){ $container.isotope('reLayout'); });
	
	$( "#social-button" ).click(function() {
		if($("#social-panel").is(":visible")){
			$(".slide-drawer").toggle("slide", {direction:'left', duration: 300, easing: "linear"}, function(){
				$(".slide-drawer div").hide();
				$container.isotope('reLayout');
			});
			$("#leftnav button").removeClass( "active" );
			$("#wrapper").toggleClass( "slide-margin" );
		}else if($("#twitter-panel, #info-panel").is(":visible")){
			$(".slide-drawer div").hide();
			$("#social-panel").fadeIn();
			$("#leftnav button").removeClass( "active" );
			$("#social-button").addClass( "active" );
		}else{
			$("#social-panel").fadeIn();
			$(".slide-drawer").toggle("slide", {direction:'left', duration: 300, easing: "linear"}, function(){
				$container.isotope('reLayout');
			});
			$("#social-button").addClass( "active" );
			$("#wrapper").toggleClass( "slide-margin" );
		}
	});
	$( "#twitter-button" ).click(function() {
		if($("#twitter-panel").is(":visible")){
			$(".slide-drawer").toggle("slide", {direction:'left', duration: 300, easing: "linear"}, function(){
				$(".slide-drawer div").hide();
				$container.isotope('reLayout');
			});
			$("#leftnav button").removeClass( "active" );
			$("#wrapper").toggleClass( "slide-margin" );
		}else if($("#social-panel, #info-panel").is(":visible")){
			$(".slide-drawer div").hide();
			$("#twitter-panel").fadeIn();
			$("#leftnav button").removeClass( "active" );
			$("#twitter-button").addClass( "active" );
		}else{
			$("#twitter-panel").fadeIn();
			$(".slide-drawer").toggle("slide", {direction:'left', duration: 300, easing: "linear"}, function(){
				$container.isotope('reLayout');
			});
			$("#twitter-button").addClass( "active" );
			$("#wrapper").toggleClass( "slide-margin" );
		}
	});
	$( "#info-button" ).click(function() {
		if($("#info-panel").is(":visible")){
			$(".slide-drawer").toggle("slide", {direction:'left', duration: 300, easing: "linear"}, function(){
				$(".slide-drawer div").hide();
				$container.isotope('reLayout');
			});
			$("#leftnav button").removeClass( "active" );
			$("#wrapper").toggleClass( "slide-margin" );
		}else if($("#social-panel, #twitter-panel").is(":visible")){
			$(".slide-drawer div").hide();
			$("#info-panel").fadeIn();
			$("#leftnav button").removeClass( "active" );
			$("#info-button").addClass( "active" );
		}else{
			$("#info-panel").fadeIn();
			$(".slide-drawer").toggle("slide", {direction:'left', duration: 300, easing: "linear"}, function(){
				$container.isotope('reLayout');
			});
			$("#info-button").addClass( "active" );
			$("#wrapper").toggleClass( "slide-margin" );
		}
	});
	
	$('#filters a, .instagram a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  $("#filters a").removeClass("checked");
	  $(this).addClass("checked");
	  return false;
	});
	
	$('a#list-toggle').click(function(){
	  event.preventDefault();
	  $('.item').css("width","100%");
	  $('.item.instagram').css("max-width","500px");
	  $(this).addClass("checked");
	  $("a#grid-toggle").removeClass("checked");
	  $container.isotope( 'reLayout' );
	  return false;
	});
	$('a#grid-toggle').click(function(){
	  event.preventDefault();
	  $('.item').css("width","340px");
	  $(this).addClass("checked");
	  $("a#list-toggle").removeClass("checked");
	  $container.isotope( 'reLayout' );
	  return false;
	});
	$('a#date-new').click(function(){
	  event.preventDefault();
	  $container.isotope({
		sortBy : 'date',
		sortAscending : false
	  });
	  $container.isotope( 'reLayout' );
	  $(this).addClass("checked");
	  $("a#date-old").removeClass("checked");
	  return false;
	});
	$('a#date-old').click(function(){
	  event.preventDefault();
	  $container.isotope({
		sortBy : 'date',
		sortAscending : true
	  });
	  $container.isotope( 'reLayout' );
	  $(this).addClass("checked");
	  $("a#date-new").removeClass("checked");
	  return false;
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
