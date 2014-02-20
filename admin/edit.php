<?php require 'header.php'; ?>
<?php
$last_mod = filemtime("../assets/buildings.xml");
$xml=simplexml_load_file("../assets/buildings.xml");
global $table_string;
$table_string = "<table cellpadding='0' cellspacing='0'><tbody>";
foreach ($xml->building as $building) {
	$titleraw = $building->attributes();
	$title = str_replace('_', ' ', $titleraw);
	$description = $building->description;
	$type = $building->type;
	$table_string .= "<tr><td><img src='../assets/images/buildings/".$titleraw.".jpg' /></td><td>".$title."</td><td>".$type."</td><td><form action='edit_building.php?building=".$titleraw."' method='post'><button type='submit' title='Edit'><i class='fa fa-pencil-square-o'></i></button></form></td></tr>";
}
$table_string .= "</tbody></table>";
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h1>Buildings <span class="time"><i class='fa fa-clock-o'></i> <?php print("Last edit made ".date("H:i j M Y", $last_mod)) ?></span></h1>
            <?php echo $table_string ?>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>