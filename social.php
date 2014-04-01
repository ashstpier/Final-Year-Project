<!DOCTYPE html>
<html lang="en">
		<head>
		<title>Social</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
        <link rel="icon" type="image/ico" href="favicon.ico"/>
		<link href="assets/css/style_light.css" rel="stylesheet" type="text/css">
        <link href="assets/css/typography.css" rel="stylesheet" type="text/css">
        <link href="assets/css/social.css" rel="stylesheet" type="text/css">
        <link href="assets/css/preloader.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="assets/css/animate.css">
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
</head>
<div id="social-preloader">
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
	<div id="logo"><a href="index.html"><img src="assets/images/logo.png" alt="University of Kent logo" /></a><h1>Social Network Feed</h1></div>
    <ul id="nav">
        <li><a href="map.php"><i class="fa fa-compass"></i>Explore</a></li>
        <li><a href="social.php" class="active"><i class="fa fa-comment-o"></i>Social</a></li>
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
<div id="leftnav">
    <button id="twitter-button" class="slide" type="button" title="Filter"><i class="fa fa-bars"></i></button>
    <button id="social-button" class="slide" type="button" title="Sort"><i class="fa fa-sort-amount-desc"></i></button>
    <div id="leftnav-footer">
    	<button id="info-button" class="slide" type="button" title="Info"><i class="fa fa-cogs"></i></button>
    </div>
</div>
<div class="slide-drawer">
    <div id="twitter-panel" class="slidepanel">
        <h2>Filters</h2>
        <ul class="filters">
        	<li><a id="all" href="#" data-filter="*" class="checked toggle">Show all</a></li>
        </ul>
        <h3>Twitter feed</h3>
        <ul class="filters">
          <li><a class="twitter-filter toggle" href="#" data-filter=".UniKent">@UniKent</a></li>
          <li><a class="twitter-filter toggle" href="#" data-filter=".KentUnion">@KentUnion</a></li>
          <li><a class="twitter-filter toggle" href="#" data-filter=".UniKentNews">@UniKentNews</a></li>
          <li><a class="twitter-filter toggle" href="#" data-filter=".UniKentEmploy">@UniKentEmploy</a></li>
          <li><a class="twitter-filter toggle" href="#" data-filter=".UniKent_Music">@UniKent_Music</a></li>
        </ul>
        <h3>Instagram feed</h3>
        <ul class="filters">
          <li><a class="instagram-filter toggle" href="#" data-filter=".kentuni">#KentUni</a></li>
        </ul>
    </div>
    <div id="social-panel" class="slidepanel">
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
    <div id="info-panel" class="slidepanel">
        <h2>Info</h2>
        <ul>
         	<li><a href="pages/help.php">Help</a></li>
            <li><a href="pages/about.php">About</a></li>
            <li><a href="pages/disclaimer.php">Disclaimer</a></li>
            <li><a href="pages/credits.php">Credits</a></li>
            <li><a href="admin/">Admin</a></li>
            <li><a href="http://www.kent.ac.uk/">UKC website</a></li>
            <li><a href="https://github.com/ashstpier/Final-Year-Project">GitHub Repository</a></li>
        </ul>
    </div>
</div>
<div id="wrapper">
    <section id="stream">
	<?php include_once 'twitter/display-tweets.php';
        display_tweets('unikent', 'kentunion','unikentemploy','unikent_music','unikentnews','default', 20, 60);
    ?>
    <?php include_once 'assets/php/instagram.php';
       
    ?>
    </section>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="http://isotope.metafizzy.co/jquery.isotope.min.js"></script>
<script src="assets/js/universal.js"></script>

<script>
var $container

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
	
	
	
	$container = $('#stream');
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

	function primaryOpen(button, panel){
		if($($('.slidepanel').not(panel)).is(":visible")){
			$(".slide-drawer .slidepanel").hide();
			$(panel).fadeIn();
			$("#leftnav button").removeClass( "active" );
			$(button).addClass( "active" );
		}else{
			$(".slide-drawer .slidepanel").hide();
			$(panel).show();
			$(".slide-drawer").toggle("slide", {direction:'left', easing:'easeInOutQuint'}, function(){
				$container.isotope('reLayout');
			});
			$(button).toggleClass( "active" );
			$("#wrapper").toggleClass( "slide-margin" );
		}
	}
	$( "#social-button" ).click(function() {
		primaryOpen(this, "#social-panel");
	});
	$( "#twitter-button" ).click(function() {
		primaryOpen(this, "#twitter-panel");
	});
	
	var filters = [];
	
	$('.filters a').click(function(){
      var $this = $(this);

	  var foo = $(this).attr('data-filter');
      if ( $this.hasClass('checked') ) {
		var index = jQuery.inArray( foo, filters )
		filters.splice( index, 1 );
		var selector = filters.join(',');
		console.log(selector);
		$container.isotope({ filter: selector });
		$(this).toggleClass("checked");
      }else{
		  if ( foo == "*" ) {
			$('.filters a').removeClass("checked");
			$(this).toggleClass("checked");
			filters.push(foo);
			var selector = filters.join(',');
			$container.isotope({ filter: selector });
			filters.length = 0;
		  }else{
			$('#all').removeClass("checked");
			$(this).toggleClass("checked");
			filters.push(foo);
			var selector = filters.join(',');
			$container.isotope({ filter: selector });
		  }
	  }

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
	
	$('.instagram ').hover(
	  function() {
		$(this).find('.caption').stop().fadeIn();
	  }, function() {
		$(this).find('.caption').stop().fadeOut();
	  }
	);
	
});
</script>

<script type="text/javascript">
    //<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(1000); // will first fade out the loading animation
            $('#social-preloader').delay(350).fadeOut(1000); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});
        })
    //]]>
</script>

</body>
</html>
