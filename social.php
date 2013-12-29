<!DOCTYPE html>
<html lang="en">
		<head>
		<title>Final Year Project</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<link href="assets/css/style.css" rel="stylesheet" type="text/css">
        <link href="assets/css/typography.css" rel="stylesheet" type="text/css">
        <link href="assets/css/buttons.css" rel="stylesheet" type="text/css">
        <link href="assets/css/toast.css" rel="stylesheet" type="text/css">
        <link href="assets/css/social.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="assets/css/animate.css">
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
</head>
<body>
<div id="navbar">
    <ul id="nav">
    	<li><a href="facts.html">10 Facts</a></li>
    	<li><a href="index.php">Explore</a></li>
        <li><a href="social.html" class="active">Social</a></li>
    </ul>
</div>
<div id="leftdrawer">
    <ul id="filters">
      <li><a href="#" data-filter="*"><i class="fa fa-th-large"></i>&nbsp; Show all</a></li>
      <li><a href="#" data-filter=".UniKent"><i class="fa fa-twitter"></i>&nbsp; University of Kent</a></li>
      <li><a href="#" data-filter=".KentUnion"><i class="fa fa-twitter"></i>&nbsp; Kent Union</a></li>
    </ul>
</div>
<div id="wrapper">
	<a href="#" class="grid-toggle"><i class="fa fa-th-large"></i>&nbsp; Grid</a>
    <a href="#" class="list-toggle"><i class="fa fa-th-list"></i>&nbsp; List</a>
	<?php include_once 'twitter/display-tweets.php';
        display_tweets('unikent', 'kentunion','time_since', 10, 30);
    ?>
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
<script src="http://isotope.metafizzy.co/jquery.isotope.min.js"></script>

<script>
// code found on this page: http://isotope.metafizzy.co/custom-layout-modes/masonry-gutters.html

// modified Isotope methods for gutters in masonry
$(window).load(function(){
	$.Isotope.prototype._getMasonryGutterColumns = function() {
    var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
    containerWidth = this.element.width();

    this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
    // or use the size of the first item
    this.$filteredAtoms.outerWidth(true) ||
    // if there's no items, use size of container
    containerWidth;

    this.masonry.columnWidth += gutter;

    this.masonry.cols = Math.floor((containerWidth + gutter) / this.masonry.columnWidth);
    this.masonry.cols = Math.max(this.masonry.cols, 1);
	};
	
	$.Isotope.prototype._masonryReset = function() {
		// layout-specific props
		this.masonry = {};
		// FIXME shouldn't have to call this again
		this._getMasonryGutterColumns();
		var i = this.masonry.cols;
		this.masonry.colYs = [];
		while (i--) {
			this.masonry.colYs.push(0);
		}
	};
	
	$.Isotope.prototype._masonryResizeChanged = function() {
		var prevSegments = this.masonry.cols;
		// update cols/rows
		this._getMasonryGutterColumns();
		// return if updated cols/rows is not equal to previous
		return (this.masonry.cols !== prevSegments);
	};
	
	
	
	
	var $container = $('#stream');
	$container.isotope({
		itemSelector: '.tweet',
		masonry: {
			gutterWidth: 20
		}
	});
	
	$('#filters a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  return false;
	});
	
	$('a.list-toggle').click(function(){
	  event.preventDefault();
	  $('.tweet').css("width","100%");
	  $container.isotope( 'reLayout' );
	  return false;
	});
	$('a.grid-toggle').click(function(){
	  event.preventDefault();
	  $('.tweet').css("width","340px");
	  $container.isotope( 'reLayout' );
	  return false;
	});
});
</script>


</body>
</html>
