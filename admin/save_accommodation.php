<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
header('Location: edit_accommodation.php?building='.$_GET["building"].'&saved=true');
require 'header.php'; ?>
<?php 
	global $description, $type, $title, $table_string;
	
	$xml=simplexml_load_file("../assets/buildings.xml");
	$name = $_GET["building"];
	
	$table_string = "<table cellpadding='0' cellspacing='0'><thead><tr><th>Image</th><th>Building</th><th>Type</th><th>Description</th></tr></thead><tbody>";
	
	$query = $xml->xpath('/buildings/building[@label="'.$name.'"]');
	foreach ($query as $building) {
		$titleraw = $building->attributes();
		$title = str_replace('_', ' ', $titleraw);
		
		$roomprice = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="roomprice"]');
		$population = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="population"]');
		$roomsize = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="roomsize"]');
		
		if($_POST['roomprice']!=""){
			$roomprice[0][0] = str_replace("£", "", $_POST['roomprice']);
		}
		if($_POST['population']!=""){
			$population[0][0] = $_POST['population'];
		}
		if($_POST['roomsize']!=""){
			$roomsize[0][0] = str_replace("m²", "", $_POST['roomsize']);
		}
		
		$table_string .= "<tr><td>".$title."</td><td>£".$roomprice[0]."</td><td>".$population[0]."</td><td>".$roomsize[0]."m²</td></tr>";
	}
	$table_string .= "</tbody></table>";
	
	$xml->asXml('../assets/buildings.xml'); 
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h2>Your changes to "<?php echo $title ?>" have been saved.</h2>
        	<?php echo $table_string ?>
            <form action='edit_accommodation.php?building=<?php echo $name ?>' method='post'>
            	<button type='submit' class="back"><i class='fa fa-chevron-left'></i> Back to edit</button>
            </form>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>