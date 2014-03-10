<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
require 'header.php'; ?>
<?php
$xml=simplexml_load_file("../assets/buildings.xml");
global $table_string;
$table_string = "<table cellpadding='0' cellspacing='0'><colgroup><col width='40%'><col width='15%' span='3'><col width='10%'></colgroup><thead><tr><th>Building</th><th>Price</th><th class='type'>Population</th><th class='type'>Room size</th><th></th></tr></thead><tbody>";

$query = $xml->xpath('/buildings/building[datalist[data[@type="roomprice"]]]');
foreach ($query as $building) {
	$titleraw = $building->attributes();
	$title = str_replace('_', ' ', $titleraw);
	$roomprice = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="roomprice"]');
	$population = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="population"]');
	$roomsize = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="roomsize"]');
	
	$table_string .= "<tr><td>".$title."</td><td>£".$roomprice[0]."</td><td class='type'>".$population[0]."</td><td class='type'>".$roomsize[0]."m²</td><td><form action='edit_accommodation.php?building=".$titleraw."' method='post'><button type='submit' title='Edit'><i class='fa fa-pencil-square-o'></i></button></form></td></tr>";
}
$table_string .= "</tbody></table>";
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h1>Accommodation data</h1>
            <?php echo $table_string ?>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>