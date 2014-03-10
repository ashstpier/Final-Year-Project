<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
require 'header.php'; ?>
<?php 
	global $delete, $title, $roomname, $roomlink;
	
	$xml=simplexml_load_file("../assets/buildings.xml");
	$name = $_GET["building"];
	$roomname = $_POST["roomname"];
	$roomlink = $_POST["roomlink"];
	
	$query = $xml->xpath('/buildings/building[@label="'.$name.'"]');
	foreach ($query as $building) {
		$titleraw = $building->attributes();
		$title = str_replace('_', ' ', $titleraw);
		$add = $xml->xpath('/buildings/building[@label="'.$name.'"]/rooms');
		$newroom = $add[0]->addChild('room', $roomname);
		$newroom->addAttribute('value', $roomlink);
	}
	
	$xml->asXml('../assets/buildings.xml'); 
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h2>The room "<?php echo $roomname ?>" has been added to <?php echo $title ?>.</h2>
            <form action='edit_building.php?building=<?php echo $name ?>' method='post'>
            	<button type='submit' class="back"><i class='fa fa-chevron-left'></i> Back to edit</button>
            </form>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>