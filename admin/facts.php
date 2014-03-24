<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
require 'header.php'; ?>
<?php
$xml=simplexml_load_file("../assets/facts.xml");
global $table_string;
$table_string = "<table cellpadding='0' cellspacing='0'><thead><tr><th>ID</th><th>Fact</th><th></th></tr></thead><tbody>";

$query = $xml->xpath('/facts/fact');
foreach ($query as $fact) {
	$content = $fact->content;
	$factid = $fact->attributes();
	
	$table_string .= "<tr><td>".$factid."</td><td>".$content."</td><td><form action='edit_facts.php?id=".$factid."' method='post'><button type='submit' title='Edit'><i class='fa fa-pencil-square-o'></i></button></form></td></tr>";
}
$table_string .= "</tbody></table>";
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h1>Facts</h1>
            <?php echo $table_string ?>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>