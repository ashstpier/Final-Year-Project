<!DOCTYPE html>
<html lang="en">
		<head>
		<title>Admin</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
        <link href="assets/css/admin.css" rel="stylesheet" type="text/css"/>
        <link href="assets/css/toast.css" rel="stylesheet" type="text/css"/>
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
        
</head>
<body>
<div id="navbar">
	<div id="logo"><a href="http://www.kent.ac.uk/" target="_blank"><img src="assets/images/logo.png" alt="University of Kent logo" /></a><h1>Admin panel</h1></div>
    <ul id="nav">
    	<li><a href="#" class="active" id="toggledrawer"><i class="fa fa-bars"></i></a></li>
        <li><a href="#"><i class="fa fa-user"></i>&nbsp;&nbsp;Profile</a></li>
        <li><a href="#"><i class="fa fa-sign-out"></i>&nbsp;&nbsp;Logout</a></li>
    </ul>
</div>

<?php
$last_mod = filemtime("assets/buildings.xml");
$xml=simplexml_load_file("assets/buildings.xml");
global $table_string;
$table_string = "<table cellpadding='0' cellspacing='0'><thead><tr><th>Image</th><th>Building</th><th>Last modified</th><th></th></tr></thead><tbody>";
foreach ($xml->building as $building) {
	$titleraw = $building->attributes();
	$title = str_replace('_', ' ', $titleraw);
	$description = $building->description;
	$type = $building->type;
	$table_string .= "<tr><td><img src='assets/images/buildings/".$titleraw.".jpg' /></td><td>".$title."</td><td>".date("H:i j/m/y", $last_mod)."</td><td><form action='assets/php/editXML.php' method='post'><input type='hidden' name='id' value='".$titleraw."' /><button type='submit'><i class='fa fa-lg fa-pencil-square-o'></i></button></form></td></tr>";
}
$table_string .= "</tbody></table>";
?>
<div id="leftcolumn">
	<ul>
    	<li><a href="#" class="active"><i class="fa fa-dashboard"></i>Dashboard</a></li>
      	<li><a href="#"><i class="fa fa-pencil-square-o"></i>Edit buildings</a></li>
    </ul>
    <h3>Map data</h3>
    <ul>
   		<li><a href="#"><i class="fa fa-bar-chart-o"></i>Accommodation data</a></li>
      	<li><a href="#"><i class="fa fa-bar-chart-o"></i>Subject data</a></li>
    </ul>
</div>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h2><i class='fa fa-clock-o'></i> <?php print("Last edit made ".date("H:i j M Y", $last_mod)) ?></h2>
            <?php echo $table_string ?>
        </div>
    </div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
</body>
</html>
