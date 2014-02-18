<!DOCTYPE html>
<html lang="en">
		<head>
		<title>Admin</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
        <link href="../css/admin.css" rel="stylesheet" type="text/css"/>
        <link href="../css/toast.css" rel="stylesheet" type="text/css"/>
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
        
</head>
<body>
<?
$xml=simplexml_load_file("../buildings.xml");

global $table_string;
$table_string = "<table cellpadding='0' cellspacing='0'><thead><tr><th>Building</th><th>Type</th><th>Description</th></tr></thead><tbody>";

$query = $xml->xpath('/buildings/building[@label="'.$_POST['id'].'"]');
foreach ($query as $building) {
	$titleraw = $building->attributes();
	$title = str_replace('_', ' ', $titleraw);
	$description = $building->description;
	$type = $building->type;
	$table_string .= "<tr><td>".$title."</td><td>".$type."</td><td><textarea>".$description."</textarea></td></tr>";
}
//$xml->asXml('../buildings.xml');
$table_string .= "</tbody></table>";
?>

<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<?php echo $table_string ?>
        </div>
    </div>
</div>
</body>
</html>