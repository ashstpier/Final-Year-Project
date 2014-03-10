<?php
$errors = array();
if(isset($_POST['login'])){
	$username = preg_replace('/[^A-Za-z]/', '', $_POST['username']);
	$email = $_POST['email'];
	$password = $_POST['password'];
	$c_password = $_POST['c_password'];
	
	if(file_exists('users/' . $username . '.xml')){
		$errors[] = 'Username already exists';
	}
	if($username == ''){
		$errors[] = 'Username is blank';
	}
	if($email == ''){
		$errors[] = 'Email is blank';
	}
	if($password == '' || $c_password == ''){
		$errors[] = 'Passwords are blank';
	}
	if($password != $c_password){
		$errors[] = 'Passwords do not match';
	}
	if(count($errors) == 0){
		$xml = new SimpleXMLElement('<user></user>');
		$xml->addChild('password', md5($password));
		$xml->addChild('email', $email);
		$xml->asXML('users/' . $username . '.xml');
		header('Location: login.php');
		die;
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Register</title>
</head>
<body>
	<h1>Register</h1>
	<form method="post" action="">
		<?php
		if(count($errors) > 0){
			echo '<ul>';
			foreach($errors as $e){
				echo '<li>' . $e . '</li>';
			}
			echo '</ul>';
		}
		?>
		<p>Username <input type="text" name="username" size="20" /></p>
		<p>Email <input type="text" name="email" size="20" /></p>
		<p>Password <input type="password" name="password" size="20" /></p>
		<p>Confirm Password <input type="password" name="c_password" size="20" /></p>
		<p><input type="submit" name="login" value="Login" /></p>
	</form>
</body>
</html>