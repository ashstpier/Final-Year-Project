<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
$error = false;
if(isset($_POST['change'])){
	$old = md5($_POST['o_password']);
	$new = md5($_POST['n_password']);
	$c_new = md5($_POST['c_n_password']);
	$xml = new SimpleXMLElement('users/' . $_SESSION['username'] . '.xml', 0, true);
	if($old == $xml->password){
		if($new == $c_new){
			$xml->password = $new;
			$xml->asXML('users/' . $_SESSION['username'] . '.xml');
			header('Location: logout.php');
			die;
		}
	}
	$error = true;
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>User Page</title>
</head>
<body>
	<h1>Change Password</h1>
	<form method="post" action="">
		<?php 
		if($error){
			echo '<p>Some of the passwords do not match</p>';
		}
		?>
		<p>Old password <input type="password" name="o_password" /></p>
		<p>New password <input type="password" name="n_password" /></p>
		<p>Confirm new password <input type="password" name="c_n_password" /></p>
		<p><input type="submit" name="change" value="Change Password" /></p>
	</form>
	<hr />
	<a href="index.php">User home</a>
</body>
</html>