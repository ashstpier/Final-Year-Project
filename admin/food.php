<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
require 'header.php'; ?>
<?php
$xml=simplexml_load_file("../assets/food.xml");
global $table_string;
$table_string = "<table cellpadding='0' cellspacing='0'><colgroup><col width='20%'><col width='80%'><col width='10%'></colgroup><thead><tr><th>Title</th><th>Content</th><th></th></tr></thead><tbody>";

$query = $xml->xpath('/foods/food');
foreach ($query as $food) {
	$content = $food->content;
	$title = $food->title;
	$foodid = $food->attributes();
	
	$table_string .= "<tr><td>".$title."</td><td>".$content."</td><td><form action='edit_food.php?id=".$foodid."' method='post'><button type='submit' title='Edit'><i class='fa fa-pencil-square-o'></i></button></form></td></tr>";
}
$table_string .= "</tbody></table>";
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h1>Restaurants</h1>
            <?php echo $table_string ?>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>