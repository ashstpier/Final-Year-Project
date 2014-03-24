<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
require 'header.php'; 
$factid = $_GET["id"];
$xml=simplexml_load_file("../assets/facts.xml");

global $content;

$query = $xml->xpath('/facts/fact[@id="'.$factid.'"]');
foreach ($query as $fact) {
	$content = $fact->content;
}
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
            <h1 class="margin-bottom">Fact <?php echo $factid ?></h1>
        </div>
        <div class="unit two-of-three">
            <form action='save_facts.php?id=<?php echo $factid ?>' method='post'>
                <h2><i class='fa fa-pencil-square-o'></i> Building description <a href="#" class="clear" name="content"><i class='fa fa-times'></i> Clear</a></h2>
                <textarea name="content" class="description" maxlength="250" id="content"><?php echo $content ?></textarea>
                <button class="modal-save"><i class='fa fa-floppy-o'></i> Save fact</button>
             </form>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>