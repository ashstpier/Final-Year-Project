<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="../assets/js/jquery.simplemodal.1.4.4.min.js"></script>
<script>
$( document ).ready(function() {
	
	var filename;
	
	$( ".clear" ).click(function(event) {
		event.preventDefault();
		var name = $(this).attr('name');
		$('#'+name).val('');
	});
	$("a#<?php echo $id ?>").addClass('active');
	$("select option[value='<?php echo $type ?>']").attr("selected","selected");
	
	$( ".modal-delete" ).click(function(event) {
		var form = $(this).parent();
		event.preventDefault();
		$.modal("<p>Are you sure you want to delete this room?</p><button class='simplemodal-close'>Cancel</button><button class='confirm'>Delete</button>");
		$( ".confirm" ).click(function(event) {
			$(form).submit();
		});
	});
	$( ".modal-add" ).click(function(event) {
		var form = $(this).parent();
		event.preventDefault();
		if ($('.roomtext').val().length != 0){
			$.modal("<p>Are you sure you want to add this room?</p><button class='simplemodal-close'>Cancel</button><button class='confirm'>Add</button>");
			$( ".confirm" ).click(function(event) {
				$('#addform').submit();
			});
		}else{
			return false
		}
	});
	$( ".modal-save" ).click(function(event) {
		var form = $(this).parent();
		event.preventDefault();
		$.modal("<p>Are you sure you want to save these changes?</p><button class='simplemodal-close'>Cancel</button><button class='confirm'>Save</button>");
		$( ".confirm" ).click(function(event) {
			$(form).submit();
		});
	});
	$( ".modal-upload" ).click(function(event) {
		event.preventDefault();
		if(fileName.length != 0){
			$.modal("<p>Are you sure you want to upload this image?</p><button class='simplemodal-close'>Cancel</button><button class='confirm'>Upload</button>");
			$( ".confirm" ).click(function(event) {
				$('#uploadform').submit();
			});
		}
	});
	$("input:file").change(function (){
       fileName = $(this).val();
    });
	$('#toggledrawer').click(function(event) {
		$('#leftcolumn').toggle("slide", {direction:'left', easing:'easeInOutQuint'});
		$('#toggledrawer').toggleClass("slide");
	});
	<?php if($_GET["saved"] == "true") :?>
			$.modal("<p>Your changes have been saved.</p><button class='simplemodal-close ok'>OK</button>");
	<?php endif ?>
});
</script>
</body>
</html>