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
        </div>
        <div class="unit two-of-three">
            <h2>How do I edit a building?</h2>
            <p>To edit a building begin by selecting 'Edit Building' in the left navigation. You will then be presented with a list of editable buildings, click on the orange edit button on the building that you wish to edit. This will bring up the edit page where you can change the description and type of that particular building. Once you are done editing click on 'Save Building' to save your changes.</p>
            <h2>How do I add or remove a room?</h2>
            <p> You can add new rooms on the 'Edit Building' page by entering the details in the corresponding input areas and clicking the (<i class='fa fa-plus'></i>) button. Similarly you can remove a room by clicking the (<i class='fa fa-times'></i>) button next to it.</p>
            <h2>How do I upload an image?</h2>
            <p>Uploading an image is done on the 'Building Edit' page (see above)  by clicking on 'Choose file', selecting a file and clicking 'Upload'. Be sure to read the note on image restrictions.</p>
            <h2>How do I edit facts or restaurants?</h2>
            <p>First select the item that you wish to edit and click the orange edit button to the right of it. This will bring you to the edit page where you can change the current information. Once you have made your edits click the save button and check that you receive a notification that the save is complete.</p>
            <h2>How do I edit accommodation and subject data?</h2>
            <p>To edit this data click on the corresponding link in the navigation bar and you will be presented with a list of buildings similar to when editing building information. Click on the edit button beside the building you would like to edit and you will be taken to a new page. Here you can edit the data in the text areas and click 'save' when you are finished.</p>
        </div>
    </div>
</div>
<?php require 'footer.php'; ?>