<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
header('Location: edit_facts.php?id='.$_GET["id"].'&saved=true');
require 'header.php'; ?>
<?php 
	
	$xml=simplexml_load_file("../assets/facts.xml");
	$factid = $_GET["id"];
	
	$query = $xml->xpath('/facts/fact[@id="'.$factid.'"]');
	foreach ($query as $fact) {	
		if($_POST['content']!=""){
			$content = $fact->content = $_POST['content'];
		}
	}
	
	$xml->asXml('../assets/facts.xml'); 
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h2>Your changes to "<?php echo $factid ?>" have been saved.</h2>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>