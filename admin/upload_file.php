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
        	<?php
$name = $_GET["building"];		
echo $name;

$allowedExts = array("jpg");
$temp = explode(".", $_FILES["file"]["name"]);
$extension = end($temp);
if ((($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg"))
&& ($_FILES["file"]["size"] < 2000000)
&& in_array($extension, $allowedExts))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
    }
  else
    {
    echo "Upload: " . $_FILES["file"]["name"] . "<br>";
    echo "Type: " . $_FILES["file"]["type"] . "<br>";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
    echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";

    if (file_exists("upload/" . $_FILES["file"]["name"]))
      {
      echo $_FILES["file"]["name"] . " already exists. ";
      }
    else
      {
      move_uploaded_file($_FILES["file"]["tmp_name"], "../assets/images/buildings/".$name.".".$extension);
      echo "Stored in: " . "upload/{$name}";
      }
    }
  }
else
  {
  echo "Invalid file";
  }
  
 
?>
        </div>
    </div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
</body>
</html>