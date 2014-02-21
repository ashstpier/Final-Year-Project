<?php require 'header.php'; ?>
<?php
$name = $_GET["building"];		

$allowedExts = array("jpg");
$temp = explode(".", $_FILES["file"]["name"]);
$extension = end($temp);
if ((($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg"))
&& ($_FILES["file"]["size"] < 2000000)
&& in_array($extension, $allowedExts))
  {
  if ($_FILES["file"]["error"] > 0)
	{
	echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
	}
  else { ?>
<div class="container">
	<div class="grid">
		<div class="unit span-grid">
			<h2>The image has been successfully uploaded.</h2>
            <img src='../assets/images/buildings/<?php echo $name ?>.jpg' />
			<form action='edit_building.php?building=<?php echo $name ?>' method='post'>
				<button type='submit' class="back"><i class='fa fa-chevron-left'></i> Back to edit</button>
			</form>
		</div>
	</div>
</div>
<?php 
	  move_uploaded_file($_FILES["file"]["tmp_name"], "../assets/images/buildings/".$name.".".$extension);
	}
  }
else
{
?>
<div class="container">
	<div class="grid">
		<div class="unit span-grid">
			<h2>Incorrect file type.</h2>
			<form action='edit_building.php?building=<?php echo $name ?>' method='post'>
				<button type='submit' class="back"><i class='fa fa-chevron-left'></i> Back to edit</button>
			</form>
		</div>
	</div>
</div>
<?php 
}
?>

<?php require 'footer.php'; ?>