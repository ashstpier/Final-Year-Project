<?php require 'header.php'; ?>
<?
$name = $_GET["building"];
$xml=simplexml_load_file("../assets/buildings2.xml");

global $description, $type, $title, $titleraw, $subjectscore, $subjectsatisfaction, $entrypoints;

$query = $xml->xpath('/buildings/building[@label="'.$name.'"]');
foreach ($query as $building) {
	$titleraw = $building->attributes();
	$title = str_replace('_', ' ', $titleraw);
	
	$subjectscore = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="subjectscore"]');
	$subjectsatisfaction = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="subjectsatisfaction"]');
	$entrypoints = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="entrypoints"]');
}
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
            <h1 class="margin-bottom"><?php echo $title ?></h1>
        </div>
        <div class="unit two-of-three">
            <form action='save_subject.php?building=<?php echo $name ?>' method='post'>
				<h2><i class='fa fa-pencil-square-o'></i> League table data</h2>
                <h3>Subject score <a href="#" class="clear" name="subjectscore"><i class='fa fa-times'></i> Clear</a></h3>
                <textarea name="subjectscore" id="subjectscore"><?php echo $subjectscore[0] ?></textarea>
                <h3>Subject satisfaction <a href="#" class="clear" name="subjectsatisfaction"><i class='fa fa-times'></i> Clear</a></h3>
                <textarea name="subjectsatisfaction" id="subjectsatisfaction"><?php echo $subjectsatisfaction[0] ?>%</textarea>
                <h3>UCAS Entry points <a href="#" class="clear" name="entrypoints"><i class='fa fa-times'></i> Clear</a></h3>
                <textarea name="entrypoints" id="entrypoints"><?php echo $entrypoints[0] ?></textarea>
                <button class="modal-save"><i class='fa fa-floppy-o'></i> Save</button>
            </form>
        </div>
        <div class="unit one-of-three margin-bottom building-image">
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>