<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
require 'header.php'; 
$name = $_GET["building"];
$xml=simplexml_load_file("../assets/buildings.xml");

global $description, $type, $list, $title, $titleraw, $toilet, $catering, $price, $roomlist, $rooms;

$roomlist = "<table cellpadding='0' cellspacing='0'><colgroup><col width='45%'><col width='45%'><col width='10%'></colgroup><thead><tr><th>Room</th><th>Link</th><th></th></tr></thead><tbody>";
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
	
	$rooms = $xml->xpath('/buildings/building[@label="'.$name.'"]/rooms/room');
	foreach ($rooms as $room) {
		$value = $room->attributes();
		$content = $room;
		$roomlist .= "<tr><td>".$content."</td><td>".$value."</td><td><form class='roomform' action='remove_room.php?building=".$name."&room=".$value."' method='post'><button class='modal-delete' title='Edit'><i class='fa fa-times'></i></button></form></td></tr>";
	}
	$roomlist .= "</tbody></table>";
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
                <button class="modal-save"><i class='fa fa-floppy-o'></i> Save building</button>
             </form>
			<?php if(isset($rooms[0])) : ?>
				<h2><i class='fa fa-pencil-square-o'></i> Rooms</h2>
			<?php echo $roomlist; ?>
                <form action='add_room.php?building=<?php echo $name ?>' method='post' id="addform">
                    <table class="roomtable" cellpadding='0' cellspacing='0'>
                    <colgroup><col width='45%'><col width='45%'><col width='10%'></colgroup>
                    <tbody>
                    <tr>
                        <td><textarea class="roomtext" name="roomname" maxlength="250" placeholder="Room name"></textarea></td>
                        <td><textarea class="roomtext" name="roomlink" maxlength="250" placeholder="Room link"></textarea></td>
                        <td><button class='modal-add'><i class='fa fa-plus'></i></button></td>
                    </tr>
                    </tbody>
                    </table>
                </form>
                <?php endif; ?>
        </div>
        <div class="unit one-of-three margin-bottom building-image">
            <h2><i class='fa fa-pencil-square-o'></i> Building image</h2>
            <img src='../assets/images/buildings/<?php echo $titleraw ?>.jpg' />
            <form action="upload_file.php?building=<?php echo $titleraw ?>" method="post" enctype="multipart/form-data" id="uploadform">
                <input type="file" name="file" id="file">
                <button class="modal-upload"><i class='fa fa-upload'></i> Upload</button>
                <p class="filetypes">Images must be square and less than 2Mb. Only .jpg files can be uploaded.</p>
            </form>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>