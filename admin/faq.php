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
        	<h1>Frequently Asked Questions</h1>
            <h2>How do I edit a building?</h2>
            <p>some answer</p>
            <h2>How do I add a room?</h2>
            <p>some answer</p>
            <h2>How do I remove a room?</h2>
            <p>some answer</p>
            <h2>How do I upload an image?</h2>
            <p>some answer</p>
            <h2>How do I edit accommodation and subject data?</h2>
            <p>some answer</p>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>