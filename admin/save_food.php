<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
header('Location: edit_food.php?id='.$_GET["id"].'&saved=true');
require 'header.php'; ?>
<?php 
	
	$xml=simplexml_load_file("../assets/food.xml");
	$foodid = $_GET["id"];
	
	$query = $xml->xpath('/foods/food[@id="'.$foodid.'"]');
	foreach ($query as $food) {	
		if($_POST['content']!=""){
			$title = $food->title = $_POST['title'];
			$content = $food->content = $_POST['content'];
		}
	}
	
	$xml->asXml('../assets/food.xml'); 
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h2>Your changes to "<?php echo $title ?>" have been saved.</h2>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>