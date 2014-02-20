<?php require 'header.php'; ?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<?php
			$name = $_GET["building"];		
			echo $name;
			
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
			  else
				{
				echo "Upload: " . $_FILES["file"]["name"] . "<br>";
				echo "Type: " . $_FILES["file"]["type"] . "<br>";
				echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
				echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";
			
				if (file_exists("upload/" . $_FILES["file"]["name"]))
				  {
				  echo $_FILES["file"]["name"] . " already exists. ";
				  }
				else
				  {
				  move_uploaded_file($_FILES["file"]["tmp_name"], "../assets/images/buildings/".$name.".".$extension);
				  echo "Stored in: " . "upload/{$name}";
				  }
				}
			  }
			else
			{
			echo "Invalid file";
			}
			?>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>