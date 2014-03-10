<?php
session_start();
if(!file_exists('users/' . $_SESSION['username'] . '.xml')){
	header('Location: login.php');
	die;
}
require 'header.php'; ?>
<div class="container">
    <div class="grid">
        <div class="unit span-grid">
        	<h1>Help</h1>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>