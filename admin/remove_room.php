<?php require 'header.php'; ?>
<?php 
	global $delete, $title, $roomname;
	
	$xml=simplexml_load_file("../assets/buildings2.xml");
	$name = $_GET["building"];
	$room = $_GET["room"];
	
	$query = $xml->xpath('/buildings/building[@label="'.$name.'"]');
	foreach ($query as $building) {
		$titleraw = $building->attributes();
		$title = str_replace('_', ' ', $titleraw);
		$delete = $xml->xpath('/buildings/building[@label="'.$name.'"]/rooms/room[@value="'.$room.'"]');
		unset($delete[0][0]);
	}
	
	$xml->asXml('../assets/buildings2.xml'); 
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h2>The room has been successfully deleted from <?php echo $title ?>.</h2>
            <form action='edit_building.php?building=<?php echo $name ?>' method='post'>
            	<button type='submit' class="back"><i class='fa fa-chevron-left'></i> Back to edit</button>
            </form>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>