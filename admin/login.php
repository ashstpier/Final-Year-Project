<?php
$error = false;
if(isset($_POST['login'])){
	$username = preg_replace('/[^A-Za-z]/', '', $_POST['username']);
	$password = md5($_POST['password']);
	if(file_exists('users/' . $username . '.xml')){
		$xml = new SimpleXMLElement('users/' . $username . '.xml', 0, true);
		if($password == $xml->password){
			session_start();
			$_SESSION['username'] = $username;
			header('Location: index.php');
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
	<link href="../assets/css/admin.css" rel="stylesheet" type="text/css"/>
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	<title>Admin Login</title>
</head>
<body class="login">
	<div id="login-container">
        <h1>Admin login</h1>
        <form method="post" action="">
            <p>Username <input type="text" name="username" size="20" /></p>
            <p>Password <input type="password" name="password" size="20" /></p>
            <?php
            if($error){
                echo '<p>Invalid username and/or password</p>';
            }
            ?>
            <button type="submit" name="login"><i class="fa fa-sign-in"></i>&nbsp;&nbsp;Login</button>
        </form>
    </div>
</body>
</html>