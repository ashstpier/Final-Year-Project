<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
require 'header.php'; ?>
<?
$name = $_GET["building"];
$xml=simplexml_load_file("../assets/buildings.xml");

global $description, $type, $title, $titleraw, $roomprice, $population, $roomsize;

$query = $xml->xpath('/buildings/building[@label="'.$name.'"]');
foreach ($query as $building) {
	$titleraw = $building->attributes();
	$title = str_replace('_', ' ', $titleraw);
	
	$roomprice = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="roomprice"]');
	$population = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="population"]');
	$roomsize = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="roomsize"]');
}
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
            <h1 class="margin-bottom"><?php echo $title ?></h1>
        </div>
        <div class="unit two-of-three">
            <form action='save_accommodation.php?building=<?php echo $name ?>' method='post'>
				<h2><i class='fa fa-pencil-square-o'></i> Accommodation data</h2>
                <h3>Room price per year <a href="#" class="clear" name="roomprice"><i class='fa fa-times'></i> Clear</a></h3>
                <textarea name="roomprice" id="roomprice">£<?php echo $roomprice[0] ?></textarea>
                <h3>Population density <a href="#" class="clear" name="population"><i class='fa fa-times'></i> Clear</a></h3>
                <textarea name="population" id="population"><?php echo $population[0] ?></textarea>
                <h3>Room floor space <a href="#" class="clear" name="roomsize"><i class='fa fa-times'></i> Clear</a></h3>
                <textarea name="roomsize" id="roomsize"><?php echo $roomsize[0] ?>m²</textarea>
                <button class="modal-save"><i class='fa fa-floppy-o'></i> Save</button>
            </form>
        </div>
        <div class="unit one-of-three margin-bottom building-image">
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>