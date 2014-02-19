<!DOCTYPE html>
<html lang="en">
<head>
		<title>Admin</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
        <link href="../assets/css/admin.css" rel="stylesheet" type="text/css"/>
        <link href="../assets/css/toast.css" rel="stylesheet" type="text/css"/>
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
        
</head>
<body>
<div id="navbar">
	<div id="logo"><a href="http://www.kent.ac.uk/" target="_blank"><img src="../assets/images/logo.png" alt="University of Kent logo" /></a><h1>Admin panel</h1></div>
    <ul id="nav">
    	<li><a href="#" class="active" id="toggledrawer"><i class="fa fa-bars"></i></a></li>
        <li><a href="#"><i class="fa fa-user"></i>&nbsp;&nbsp;Profile</a></li>
        <li><a href="#"><i class="fa fa-sign-out"></i>&nbsp;&nbsp;Logout</a></li>
    </ul>
</div>

<?
$name = $_GET["building"];
$xml=simplexml_load_file("../assets/buildings.xml");

global $description, $type, $list, $title, $titleraw;

$query = $xml->xpath('/buildings/building[@label="'.$name.'"]');
foreach ($query as $building) {
	$titleraw = $building->attributes();
	$title = str_replace('_', ' ', $titleraw);
	$description = $building->description;
	$type = $building->type;
	foreach ($building->list->listitem as $listitem) {
		$list .= "<textarea>".$listitem."</textarea>";
	}
}
?>

<div id="leftcolumn">
	<ul>
    	<li><a href="#" class="active"><i class="fa fa-dashboard"></i>Dashboard</a></li>
      	<li><a href="#"><i class="fa fa-pencil-square-o"></i>Edit buildings</a></li>
        <li><a href="#"><i class="fa fa-pencil-square-o"></i>Edit rooms</a></li>
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
            <h1 class="margin-bottom"><?php echo $title ?></h1>
        </div>
        <div class="unit two-of-three">
            <form action='save_edit.php?building=<?php echo $name ?>' method='post'>
                <h2><i class='fa fa-pencil-square-o'></i> Building description <a href="#" class="clear"><i class='fa fa-times'></i> Clear</a></h2>
                <textarea name="description" class="description" maxlength="250"><?php echo $description ?></textarea>
                <h2><i class='fa fa-pencil-square-o'></i> Type of building <a href="#" class="clear"><i class='fa fa-times'></i> Clear</a></h2>
                <textarea name="type"><?php echo $type ?></textarea>
                <h2><i class='fa fa-pencil-square-o'></i> Extra information <a href="#" class="clear"><i class='fa fa-times'></i> Clear</a></h2>
                <?php echo $list ?>
                <button type="submit"><i class='fa fa-floppy-o'></i> Save</button>
            </form>
        </div>
        <div class="unit one-of-three margin-bottom building-image">
            <h2><i class='fa fa-pencil-square-o'></i> Building image</h2>
            <img src='../assets/images/buildings/<?php echo $titleraw ?>.jpg' />
            <form action="upload_file.php?building=<?php echo $titleraw ?>" method="post" enctype="multipart/form-data">
                <input type="file" name="file" id="file">
                <button type="submit" name="submit" class="upload"><i class='fa fa-upload'></i> Upload</button>
                <p class="filetypes">Images must be less than 2Mb and be .jpg</p>
            </form>
        </div>
    </div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
</body>
</html>