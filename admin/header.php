<!DOCTYPE html>
<html lang="en">
    <head>
    <?php 
    $title;
	$id;
    $path=$_SERVER['PHP_SELF'];
    $page=basename($path);
    switch("$page"){ 
    case 'index.php': 
        $title = 'Admin - Edit Building'; 
		$id = 'editbuilding';
        break;
    case 'edit_building.php': 
        $title = 'Admin - Edit Building'; 
		$id = 'editbuilding';
        break;
    case 'save_edit.php': 
        $title = 'Admin - Edit Saved'; 
		$id = 'editbuilding';
        break; 
    case 'upload_file.php': 
        $title = 'Admin - Image Upload'; 
		$id = 'editbuilding';
        break;
	case 'accommodation_data.php': 
        $title = 'Admin - Accommodation Data'; 
		$id = 'accommodationdata';
        break;
	case 'edit_accommodation.php': 
        $title = 'Admin - Edit Accommodation Data'; 
		$id = 'accommodationdata';
        break;
	case 'save_accommodation.php': 
        $title = 'Admin - Save Accommodation Data'; 
		$id = 'accommodationdata';
        break;
	case 'subject_data.php': 
        $title = 'Admin - Subject Data'; 
		$id = 'subjectdata';
        break;
	case 'edit_subject.php': 
        $title = 'Admin - Edit Subject Data'; 
		$id = 'subjectdata';
        break;
	case 'save_subject.php': 
        $title = 'Admin - Save Subject Data'; 
		$id = 'subjectdata';
        break;
	case 'help.php': 
        $title = 'Admin - Help'; 
		$id = 'help';
        break;
	case 'faq.php': 
        $title = 'Admin - FAQ'; 
		$id = 'faq';
        break;
    } 
    echo '<title>'.$title.'</title>'; 
    ?>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <link href="../assets/css/toast.css" rel="stylesheet" type="text/css"/>
    <link href="../assets/css/admin.css" rel="stylesheet" type="text/css"/>
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
	<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div id="navbar">
	<a href="#" class="active" id="toggledrawer"><i class="fa fa-bars"></i></a>
    <ul id="nav">
        <li><a href="../index.php"><i class="fa fa-compass"></i>&nbsp;&nbsp;Explore</a></li>
        <li><a href="logout.php"><i class="fa fa-sign-out"></i>&nbsp;&nbsp;Logout</a></li>
    </ul>
</div>
<div id="leftcolumn">
	<div id="logo"><a href="http://www.kent.ac.uk/" target="_blank"><img src="../assets/images/logo.png" alt="University of Kent logo" /></a><h1>Admin panel</h1></div>
    <h3>Data</h3>
    <ul>
    	<li><a href="index.php" id="editbuilding"><i class="fa fa-pencil-square-o"></i>Edit buildings</a></li>
   		<li><a href="accommodation_data.php" id="accommodationdata"><i class="fa fa-bar-chart-o"></i>Accommodation data</a></li>
      	<li><a href="subject_data.php" id="subjectdata"><i class="fa fa-bar-chart-o"></i>Subject data</a></li>
    </ul>
    <h3>Help</h3>
    <ul>
    	<li><a href="faq.php" id="faq"><i class="fa fa-info"></i>FAQ</a></li>
    	<li><a href="help.php" id="help"><i class="fa fa-info"></i>Help document</a></li>
   		<li><a href="https://github.com/ashstpier/Final-Year-Project" target="_blank"><i class="fa fa-github-alt"></i>Github repository</a></li>
      	<li><a href="http://www.kent.ac.uk/" target="_blank"><i class="fa fa-globe"></i>University of Kent</a></li>
    </ul>
</div>