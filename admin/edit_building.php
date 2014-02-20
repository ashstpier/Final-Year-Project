<?php require 'header.php'; ?>
<?
$name = $_GET["building"];
$xml=simplexml_load_file("../assets/buildings2.xml");

global $description, $type, $list, $title, $titleraw, $toilet, $catering, $price;

$query = $xml->xpath('/buildings/building[@label="'.$name.'"]');
foreach ($query as $building) {
	$titleraw = $building->attributes();
	$title = str_replace('_', ' ', $titleraw);
	$description = $building->description;
	$type = $building->type;
	$list = $building->list->listitem;
	
	$toilet = $xml->xpath('/buildings/building[@label="'.$name.'"]/list/listitem[1]');
	$catering = $xml->xpath('/buildings/building[@label="'.$name.'"]/list/listitem[2]');
	$price = $xml->xpath('/buildings/building[@label="'.$name.'"]/list/listitem[3]');
}
?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
            <h1 class="margin-bottom"><?php echo $title ?></h1>
        </div>
        <div class="unit two-of-three">
            <form action='save_edit.php?building=<?php echo $name ?>' method='post'>
                <h2><i class='fa fa-pencil-square-o'></i> Building description <a href="#" class="clear" name="description"><i class='fa fa-times'></i> Clear</a></h2>
                <textarea name="description" class="description" maxlength="250" id="description"><?php echo $description ?></textarea>
                <h2><i class='fa fa-pencil-square-o'></i> Type of building</h2>
                <select name="type">
                	<option value="Accommodation">Accommodation</option>
                    <option value="Admin">Admin</option>
                    <option value="College">College</option>
                    <option value="Community">Community</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Teaching">Teaching</option>
                </select>
                <?php if(isset($list)) : ?>
				<h2><i class='fa fa-pencil-square-o'></i> Accommodation information</h2>
                <h3>Toilet and bathroom facilities <a href="#" class="clear" name="toilet"><i class='fa fa-times'></i> Clear</a></h3>
                <textarea name="toilet" id="toilet"><?php echo $toilet[0] ?></textarea>
                <h3>Catering services <a href="#" class="clear" name="catering"><i class='fa fa-times'></i> Clear</a></h3>
                <textarea name="catering" id="catering"><?php echo $catering[0] ?></textarea>
                <h3>Price per year <a href="#" class="clear" name="price"><i class='fa fa-times'></i> Clear</a></h3>
                <textarea name="price" id="price"><?php echo $price[0] ?></textarea>
                <?php endif; ?>
                <button type="submit"><i class='fa fa-floppy-o'></i> Save</button>
            </form>
        </div>
        <div class="unit one-of-three margin-bottom building-image">
            <h2><i class='fa fa-pencil-square-o'></i> Building image</h2>
            <img src='../assets/images/buildings/<?php echo $titleraw ?>.jpg' />
            <form action="upload_file.php?building=<?php echo $titleraw ?>" method="post" enctype="multipart/form-data">
                <input type="file" name="file" id="file">
                <button type="submit" name="submit" class="upload"><i class='fa fa-upload'></i> Upload</button>
                <p class="filetypes">Images must be less than 2Mb and be .jpg</p>
            </form>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>