<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
header('Location: edit_building.php?building='.$_GET["building"].'&saved=true');
require 'header.php'; ?>
<?php 
	global $description, $type, $title, $table_string;
	
	$last_mod = filemtime("../assets/buildings.xml");
	$xml=simplexml_load_file("../assets/buildings.xml");
	$name = $_GET["building"];
	
	$table_string = "<table cellpadding='0' cellspacing='0'><thead><tr><th>Image</th><th>Building</th><th>Type</th><th>Description</th></tr></thead><tbody>";
	
	$query = $xml->xpath('/buildings/building[@label="'.$name.'"]');
	foreach ($query as $building) {
		$titleraw = $building->attributes();
		$title = str_replace('_', ' ', $titleraw);
		if($_POST['description']!=""){
			$description = $building->description = $_POST['description'];
		}else{
			$description = $building->description;
		}
		$type = $building->type = $_POST['type'];
		
		$toilet = $xml->xpath('/buildings/building[@label="'.$name.'"]/list/listitem[1]');
		$catering = $xml->xpath('/buildings/building[@label="'.$name.'"]/list/listitem[2]');
		$price = $xml->xpath('/buildings/building[@label="'.$name.'"]/list/listitem[3]');
		
		if($_POST['toilet']!=""){
			$toilet[0][0] = $_POST['toilet'];
		}
		if($_POST['catering']!=""){
			$catering[0][0] = $_POST['catering'];
		}
		if($_POST['price']!=""){
			$price[0][0] = $_POST['price'];
		}
		
		$table_string .= "<tr><td><img src='../assets/images/buildings/".$titleraw.".jpg' /></td><td>".$title."</td><td>".$type."</td><td>".$description."</td></tr>";
	}
	$table_string .= "</tbody></table>";
	
	$xml->asXml('../assets/buildings.xml'); 
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h2>Your changes to "<?php echo $title ?>" have been saved.</h2>
        	<?php echo $table_string ?>
            <form action='edit_building.php?building=<?php echo $name ?>' method='post'>
            	<button type='submit' class="back"><i class='fa fa-chevron-left'></i> Back to edit</button>
            </form>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>