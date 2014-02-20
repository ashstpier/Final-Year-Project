<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script>
$( document ).ready(function() {
	$( ".clear" ).click(function(event) {
		event.preventDefault();
		var name = $(this).attr('name');
		$('#'+name).val('');
	});
	$("a#<?php echo $id ?>").addClass('active');
	$("select option[value='<?php echo $type ?>']").attr("selected","selected");
});
</script>
</body>
</html>