<?php require 'header.php'; ?>
<?php
$xml=simplexml_load_file("../assets/buildings.xml");
global $table_string;
$table_string = "<table cellpadding='0' cellspacing='0'><colgroup><col width='40%'><col width='15%' span='3'><col width='10%'></colgroup><thead><tr><th>Building</th><th>Score</th><th>Satisfaction</th><th>Points</th><th></th></tr></thead><tbody>";

$query = $xml->xpath('/buildings/building[datalist[data[@type="subjectscore"]]]');
foreach ($query as $building) {
	$titleraw = $building->attributes();
	$title = str_replace('_', ' ', $titleraw);
	$subjectscore = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="subjectscore"]');
	$subjectsatisfaction = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="subjectsatisfaction"]');
	$entrypoints = $xml->xpath('/buildings/building[@label="'.$titleraw.'"]/datalist/data[@type="entrypoints"]');
	
	$table_string .= "<tr><td>".$title."</td><td>".$subjectscore[0]."</td><td>".$subjectsatisfaction[0]."%</td><td>".$entrypoints[0]."</td><td><form action='edit_subject.php?building=".$titleraw."' method='post'><button type='submit' title='Edit'><i class='fa fa-pencil-square-o'></i></button></form></td></tr>";
}
$table_string .= "</tbody></table>";
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h1>Subject data</h1>
            <?php echo $table_string ?>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>