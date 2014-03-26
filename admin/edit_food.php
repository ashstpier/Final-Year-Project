<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
require 'header.php'; 
$foodid = $_GET["id"];
$xml=simplexml_load_file("../assets/food.xml");

global $content;

$query = $xml->xpath('/foods/food[@id="'.$foodid.'"]');
foreach ($query as $food) {
	$content = $food->content;
	$title = $food->title;
}
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
            <h1 class="margin-bottom"><?php echo $title ?></h1>
        </div>
        <div class="unit two-of-three">
            <form action='save_food.php?id=<?php echo $foodid ?>' method='post'>
            	<h2><i class='fa fa-pencil-square-o'></i> Restaurant title <a href="#" class="clear" name="title"><i class='fa fa-times'></i> Clear</a></h2>
                <textarea name="title" maxlength="250" id="title"><?php echo $title ?></textarea>
                <h2><i class='fa fa-pencil-square-o'></i> Restaurant description <a href="#" class="clear" name="content"><i class='fa fa-times'></i> Clear</a></h2>
                <textarea name="content" class="description" maxlength="250" id="content"><?php echo $content ?></textarea>
                <button class="modal-save"><i class='fa fa-floppy-o'></i> Save restaurant</button>
             </form>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>