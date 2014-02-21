<?php require 'header.php'; ?>
<?php 
	global $description, $type, $title, $table_string;
	
	$xml=simplexml_load_file("../assets/buildings2.xml");
	$name = $_GET["building"];
	
	$table_string = "<table cellpadding='0' cellspacing='0'><thead><tr><th>Image</th><th>Building</th><th>Type</th><th>Description</th></tr></thead><tbody>";
	
	$query = $xml->xpath('/buildings/building[@label="'.$name.'"]');
	foreach ($query as $building) {
		$titleraw = $building->attributes();
		$title = str_replace('_', ' ', $titleraw);
		
		$subjectscore = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="subjectscore"]');
		$subjectsatisfaction = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="subjectsatisfaction"]');
		$entrypoints = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="entrypoints"]');
		
		if($_POST['subjectscore']!=""){
			$subjectscore[0][0] = $_POST['subjectscore'];
		}
		if($_POST['subjectsatisfaction']!=""){
			$subjectsatisfaction[0][0] = str_replace("%", "", $_POST['subjectsatisfaction']);
		}
		if($_POST['entrypoints']!=""){
			$entrypoints[0][0] = $_POST['entrypoints'];
		}
		
		$table_string .= "<tr><td>".$title."</td><td>".$subjectscore[0]."</td><td>".$subjectsatisfaction[0]."%</td><td>".$entrypoints[0]."</td></tr>";
	}
	$table_string .= "</tbody></table>";
	
	$xml->asXml('../assets/buildings2.xml'); 
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h2>Your changes to "<?php echo $title ?>" have been saved.</h2>
        	<?php echo $table_string ?>
            <form action='edit_subject.php?building=<?php echo $name ?>' method='post'>
            	<button type='submit' class="back"><i class='fa fa-chevron-left'></i> Back to edit</button>
            </form>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>