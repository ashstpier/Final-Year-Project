function onDocumentMouseDown( event ) {
	event.preventDefault();
	var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
	projector.unprojectVector( vector, camera );
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = raycaster.intersectObjects( objects, true );

	if ( intersects.length > 0 ) {
		controls.enabled = false;
		SELECTED = intersects[ 0 ].object.parent;
		var intersects = raycaster.intersectObject( plane );
		offset.copy( intersects[ 0 ].point ).sub( plane.position );
		container.style.cursor = 'move';
	}
}
function dragStart( event ) {
	event.preventDefault();
	mouse.x = ( event.changedTouches[0].pageX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.changedTouches[0].pageY / window.innerHeight ) * 2 + 1;
	var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
	
	projector.unprojectVector( vector, camera );
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = raycaster.intersectObjects( objects, true );

	if ( intersects.length > 0 ) {
		controls.enabled = false;
		SELECTED = intersects[ 0 ].object.parent;
		var intersects = raycaster.intersectObject( plane );
		offset.copy( new THREE.Vector3( intersects[ 0 ].point.x - group.position.x, 0, intersects[ 0 ].point.z - group.position.z ) );
		container.style.cursor = 'move';
	}
	
}

////////// CLICK EVENT ///////////
function onDocumentMouseUp( event ) {
	event.preventDefault();
	var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
	projector.unprojectVector( vector, camera );
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
	
	var intersects = raycaster.intersectObjects( clickobjects, true );
	clickEvent( intersects );

}
function dragEnd( event ) {
	event.preventDefault();
	var vector = new THREE.Vector3( ( event.changedTouches[0].pageX / window.innerWidth ) * 2 - 1, - ( event.changedTouches[0].pageY / window.innerHeight ) * 2 + 1, 0.5 );
	projector.unprojectVector( vector, camera );
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
	
	var intersects = raycaster.intersectObjects( clickobjects, true );
	clickEvent( intersects );
}
var tweetcontainer;
function clickEvent( intersects ) {

if ( intersects.length > 0 ) {
	
	var name = intersects[0].object.name;
	var splitname = name.split("_");
	var fact = splitname[0];
	
	var splitbus = name.split("_");
	var bus = splitbus[1];
	
	if ( name == "zoom_venue" ) {
		var object = intersects[0].object;
		zoomFunction(object, -1, 0.5);
	}
	else if ( name == "zoom_library" ) {
		var object = intersects[0].object;
		zoomFunction(object, 0.5, 1);
	}
	else if ( name == "zoom_sport" ) {
		var object = intersects[0].object;
		zoomFunction(object, -0.3, -1);
	}
	else if ( name == "tweet-Jennison" ) {
		tweetcontainer = "#tweet_edakent";
		twitterMap(intersects, tweetcontainer);
	} 
	else if ( name == "tweet-Mandela_Building" ) {
		tweetcontainer = "#tweet_kentunion";
		twitterMap(intersects, tweetcontainer);
	} 
	else if ( name == "tweet-Registry" ) {
		tweetcontainer = "#tweet_unikent";
		twitterMap(intersects, tweetcontainer);
	} 
	else if ( name == "tweet-Careers_Employability_Service" ) {
		tweetcontainer = "#tweet_unikentemploy";
		twitterMap(intersects, tweetcontainer);
	} 
	else if ( name == "tweet-Colyer_Fergusson" ) {
		tweetcontainer = "#tweet_unikent_music";
		twitterMap(intersects, tweetcontainer);
	}
	else if ( name == "tweet-Parkwood_Administration" ) {
		tweetcontainer = "#tweet_parkwoodsc";
		twitterMap(intersects, tweetcontainer);
	} 
	else {
	
		$('#modalfront, #modalback').empty();
		$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
		$(".card").removeClass('flipped');
		closeTweet();
		closeBus();
		closeFact();
		
		modal = intersects[0].object;
		placeMarker(modal);
	}
	
	if ( fact == "fact" ) {
		var object = intersects[0].object;
		factFunction(object);
	}
	if ( bus == "bus" ) {
		var object = intersects[0].object;
		busFunction(object);
	}
	
}

if ( INTERSECTED ) {
	plane.position.copy( INTERSECTED.position );
	SELECTED = null;
}
container.style.cursor = 'move';
controls.enabled = true;
}

function busFunction(modal){
	$(".busmodal").removeClass('fadeOutUp fadeInDown opaque');
	$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
	$(".card").removeClass('flipped');
	closeTweet();
	closeFact();
	busmodal = modal;
	var time = 1000;
	
	modal.geometry.computeBoundingBox();
	var boundingBox = modal.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );
	position.applyMatrix4( modal.matrixWorld );
		
	if (camera.position.z >= position.z && controls.center.z <= camera.position.z){
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#"+modal.name).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z +75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: - 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#"+modal.name).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z -75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#"+modal.name).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z +75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: - 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#"+modal.name).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z -75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
}

function factFunction(modal){
	$('#factmodal').empty();
	$("#factmodal").removeClass('fadeOutUp fadeInDown opaque');
	$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
	$(".card").removeClass('flipped');
	closeTweet();
	closeBus();
	factmodal = modal;
	var time = 1000;
	modal.geometry.computeBoundingBox();
	var boundingBox = modal.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );
	position.applyMatrix4( modal.matrixWorld );
	
	var name = modal.name;
	var splitname = name.split("_");
	var id = splitname[1];
	$(factxml).find("fact[id='"+id+"']").each(function(){
		var content = $(this).find('content').text();
		$('<div class="content"></div>').html('<a href="#" class="closefact" onclick="closeFact()"><i class="fa fa-times fa-lg"></i></a><h2>Did you know?</h2><p>'+content+'</p>').appendTo('#factmodal');
		$('<div class="arrow-down grey"></div>').appendTo('#factmodal');
	});
		
	if (camera.position.z >= position.z && controls.center.z <= camera.position.z){
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#factmodal").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z +75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: - 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#factmodal").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z -75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#factmodal").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z +75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: - 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#factmodal").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z -75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
}

function zoomFunction(object, xoffset, yoffset){
	object.geometry.computeBoundingBox();
	var boundingBox = object.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );
	position.applyMatrix4( object.matrixWorld );
	
	controls.minDistance = 0;
	
	object.visible = false;
	new TWEEN.Tween( controls.center ).to( { x: position.x, y: 7, z: position.z }, 1500 ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {
		controls.minPolarAngle = Math.PI/2.25; 
		controls.maxPolarAngle = Math.PI/1.5; 
		controls.maxDistance = 1;
		controls.noZoom = true;
		$('#controls').fadeOut();
		$('#exitzoom').fadeIn();
		$('#exitzoom a').css('display','inline-block');
		for (var i=0, tot=zoomobjects.length; i < tot; i++) {
			zoomobjects[i].visible = false;
		}
		for (var i=0, tot=zoomArray.length; i < tot; i++) {
			zoomArray[i].visible = true;
		}
		for (var i=0, tot=tweetIcons.length; i < tot; i++) {
			tweetIcons[i].visible = false;
		}
		var visited = $.cookie('zoom')
		if (visited == null) {
			$('#zoom.controls-modal').slideDown(500);
			$('.modal-overlay').show();
		}
		$.cookie('zoom', 'yes_zoom', {
			expires: 1,
			path: '/'
		});
	}).start();
	new TWEEN.Tween( camera.position ).to( { x: position.x + xoffset, y: 7, z: position.z + yoffset }, 1500 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	document.getElementById("mapwrapper").removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.getElementById("app").removeEventListener( 'mousedown', onDocumentMouseDown, false );
	document.getElementById("app").removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.getElementById("app").removeEventListener( 'touchstart', dragStart, false );
	document.getElementById("app").removeEventListener( 'touchend', dragEnd, false );
	document.getElementById("mapwrapper").removeEventListener( 'touchmove', dragMove, false );
	closeModal();
	closeFact();
	closeBus();
	closeTweet();
	$('#controls').fadeOut();
	$('#leftnav').toggleClass("closeleft openleft");
	$('.slide-drawer').hide();
	$('#search').fadeOut();
	$('#leftnav button').removeClass('active');
	$(".slide-drawer a").removeClass( "checked" );
	$(".slide-drawer .slidepanel").hide();
	for (var i=0, tot=sprites.length; i < tot; i++) {
		new TWEEN.Tween( sprites[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	}
	for (var i=0, tot=locationIcons.length; i < tot; i++) {
		locationIcons[i].material.color.setHex(maincolour);
	}
	for (var i=0, tot=teachingIcons.length; i < tot; i++) {
		teachingIcons[i].material.color.setHex(maincolour);
	}
	for (var i=0, tot=communityIcons.length; i < tot; i++) {
		communityIcons[i].material.color.setHex(maincolour);
	}
	for (var i=0, tot=maintenanceIcons.length; i < tot; i++) {
		maintenanceIcons[i].material.color.setHex(maincolour);
	}
	for (var i=0, tot=adminIcons.length; i < tot; i++) {
		adminIcons[i].material.color.setHex(maincolour);
	}
	for (var i=0, tot=darwinRoute.length; i < tot; i++) {
		darwinRoute[i].visible = false;
	}
	for (var i=0, tot=parkwoodRoute.length; i < tot; i++) {
		parkwoodRoute[i].visible = false;
	}
	for (var i=0, tot=keynesRoute.length; i < tot; i++) {
		keynesRoute[i].visible = false;
	}
	for (var i=0, tot=cycleRoute.length; i < tot; i++) {
		cycleRoute[i].visible = false;
	}
	for (var i=0, tot=cycleArray.length; i < tot; i++) {
		cycleArray[i].visible = false;
	}
	for (var i=0, tot=busArray.length; i < tot; i++) {
		busArray[i].visible = false;
	}
	for (var i=0, tot=roadArray.length; i < tot; i++) {
		new TWEEN.Tween( roadArray[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	}
	var parking = scene.getObjectByName( "Visitor_Parking", true );
	parking.visible = false;
	parking = scene.getObjectByName( "Permit_Parking", true );
	parking.visible = false;
	var development = scene.getObjectByName( "Templeman_Extension", true );
	var development2 = scene.getObjectByName( "Turing_College", true );
	development.visible = false;
	development.position.y = -99999;
	development2.visible = false;
	development2.position.y = -99999;
	for (var i=0, tot=investmentArray.length; i < tot; i++) {
		investmentArray[i].visible = false;
	}
	for (var i=0, tot=developmentArray.length; i < tot; i++) {
		developmentArray[i].visible = false;
	}
	for (var i=0, tot=populationArray.length; i < tot; i++) {
		populationArray[i].visible = false;
	}
	for (var i=0, tot=roompriceArray.length; i < tot; i++) {
		roompriceArray[i].visible = false;
	}
	for (var i=0, tot=subjectscoreArray.length; i < tot; i++) {
		subjectscoreArray[i].visible = false;
	}
	for (var i=0, tot=subjectsatisfactionArray.length; i < tot; i++) {
		subjectsatisfactionArray[i].visible = false;
	}
	for (var i=0, tot=entrypointsArray.length; i < tot; i++) {
		entrypointsArray[i].visible = false;
	}
	for (var i=0, tot=sizeArray.length; i < tot; i++) {
		sizeArray[i].visible = false;
	}
	$("#label-panel a, #overlay-panel a, #investment-panel a").removeClass( "toggled" );
	$("#label-panel a, #overlay-panel a, #investment-panel a").addClass( "toggle" );
	$("#tweettoggle, #bustoggle").removeClass( "toggle" );
	$("#tweettoggle, #bustoggle").addClass( "toggled" );
}

function placeMarker(modal){
	var node = modal.name;
			
	$(xml).find("building[label='"+node+"']").each(function(){
		var img = $(this).attr("label");
		var header = $(this).attr("label").replace(/_/g, ' ');
		var type = $(this).find('type').text();
		var description = $(this).find('description').text();
		var list = $(this).find('list').text();
		var rooms = $(this).find('rooms').text();
		
		var typeicon;
		switch(type){ 
		case 'Accommodation': 
			typeicon = '<i class="fa-home fa"></i> Accommodation'; 
			break; 
		case 'Admin': 
			typeicon = '<i class="fa-info fa"></i> Admin'; 
			break;
		case 'Maintenance': 
			typeicon = '<i class="fa-wrench fa"></i> Maintenance'; 
			break;
		case 'Community': 
			typeicon = '<i class="fa-users fa"></i> Community'; 
			break; 
		case 'Teaching': 
			typeicon = '<i class="fa-book fa"></i> Teaching'; 
			break;
		case 'College': 
			typeicon = '<i class="fa-bell fa"></i> College'; 
			break;
		} 
	
		if (rooms != ""){
			$('<div class="header"></div>').html('<img src="assets/images/buildings/'+img+'.jpg" />').appendTo('#modalfront');
			$('<div class="content"></div>').html('<a href="#" onclick="closeModal()"><i class="fa-times fa fa-lg"></i></a><h2>'+header+'</h2><h3>'+typeicon+'</h3><p>'+description+'</p>').appendTo('#modalfront');
			$('<div class="footer"><form method="POST" target="_blank" id="roomform" action="http://www.kent.ac.uk/timetabling/rooms/room.html?room=" onsubmit="return SetData()"><select id="roomlist"><option value="default">select a room...</option></select><button type="submit">Find room</button></form></div>').appendTo('#modalfront');
			$(this).find('rooms').children().each(function(){
				var room = $(this).text();
				var attr = $(this).attr("value");
				$('<option value="'+attr+'">'+room+'</option>').appendTo('#roomlist');
			});
			if($(window).height() > 600){
				$('<div class="arrow-down grey"></div>').appendTo('#modalfront');
			}
		}else if(list != ""){
			$('<div class="header"></div>').html('<img src="assets/images/buildings/'+img+'.jpg" />').appendTo('#modalfront');
			$('<div class="content"></div>').html('<a href="#" onclick="closeModal()"><i class="fa-times fa fa-lg"></i></a><h2>'+header+'</h2><h3>'+typeicon+'</h3><p>'+description+'</p>').appendTo('#modalfront');
			$('<div class="footer"><ul></ul></div>').appendTo('#modalfront');
			$(this).find('list').children().each(function(){
				var listitem = $(this).text();
				$('<li>'+listitem+'</li>').appendTo('#modalfront .footer ul');
			});
			if($(window).height() > 600){
				$('<div class="arrow-down grey"></div>').appendTo('#modalfront');
			}
		}else {
			$('<div class="header"></div>').html('<img src="assets/images/buildings/'+img+'.jpg" />').appendTo('#modalfront');
			$('<div class="content"></div>').html('<a href="#" onclick="closeModal()"><i class="fa-times fa fa-lg"></i></a><h2>'+header+'</h2><h3>'+typeicon+'</h3><p>'+description+'</p>').appendTo('#modalfront');
			if($(window).height() > 600){
				$('<div class="arrow-down"></div>').appendTo('#modalfront');
			}
			
		}
	});

	var time = 1000;
	modal.geometry.computeBoundingBox();
	var boundingBox = modal.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );
	position.applyMatrix4( modal.matrixWorld );
		
	if (camera.position.z >= position.z && controls.center.z <= camera.position.z){
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z +75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: - 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z -75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z +75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: - 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z -75 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
}

function twitterMap(intersects, tweetcontainer){
	$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
	$(".card").removeClass('flipped');
	$(".tweetpanel").removeClass('fadeInDown fadeOutUp opaque');
	closeBus();
	closeFact();
	var time = 1000;
			
	var string = intersects[0].object.name;
	var splitstring = string.split("-");
	var name = splitstring[1];
	
	tweetmodal = scene.getObjectByName( name, true );
	
	tweetmodal.geometry.computeBoundingBox();
	var boundingBox = tweetmodal.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );
	position.applyMatrix4( tweetmodal.matrixWorld );
		
	if (camera.position.z >= position.z && controls.center.z <= camera.position.z){
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, z: group.position.z - position.z +50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: -250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, z: group.position.z - position.z -50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, z: group.position.z - position.z +50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: -250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, z: group.position.z - position.z +50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
}

//////// MOUSEMOVE EVENT /////////

function onDocumentMouseMove( event ) {
	event.preventDefault();
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
	projector.unprojectVector( vector, camera );
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
	
	if ( SELECTED ) {
		var intersects = raycaster.intersectObject( plane );
		SELECTED.position.copy( intersects[ 0 ].point.sub( offset ) );
		return;
	}

	var intersect = raycaster.intersectObjects( objects, true );

	if ( intersect.length > 0 ) {
		if ( INTERSECTED != intersect[ 0 ].object ) {
			INTERSECTED = intersect[ 0 ].object.parent;
			plane.position.copy( INTERSECTED.position );
			container.style.cursor = 'move';
		}
	} else { INTERSECTED = null; }
	
	var intersects = raycaster.intersectObjects( clickobjects, true );

	if (intersects.length > 0 ) {
		container.style.cursor = 'pointer';	
	}
	
	var intersects = raycaster.intersectObjects( tweetobjects, true );

	if (intersects.length > 0 ) {
		container.style.cursor = 'pointer';	
	}
	
	var intersects = raycaster.intersectObjects( zoomobjects, true );

	if (intersects.length > 0 ) {
		container.style.cursor = 'pointer';	
	}
	
	/*
	var vector = new THREE.Vector3(
    ( event.clientX / window.innerWidth ) * 2 - 1,
    - ( event.clientY / window.innerHeight ) * 2 + 1,
    0.5 );

	projector.unprojectVector( vector, camera );
	
	var dir = vector.sub( camera.position ).normalize();
	
	var distance = - camera.position.y / dir.y;
	
	var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
	
	console.log(pos);
	*/
}
function dragMove( event ) {
	event.preventDefault();
	mouse.x = ( event.changedTouches[0].pageX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.changedTouches[0].pageY / window.innerHeight ) * 2 + 1;
	var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
	projector.unprojectVector( vector, camera );
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
	
	if ( SELECTED ) {
		var intersects = raycaster.intersectObject( plane );
		SELECTED.position.copy( intersects[ 0 ].point.sub( offset ) );
		return;
	}

	var intersect = raycaster.intersectObjects( objects, true );

	if ( intersect.length > 0 ) {
		if ( INTERSECTED != intersect[ 0 ].object ) {
			INTERSECTED = intersect[ 0 ].object.parent;
			plane.position.copy( INTERSECTED.position );
			container.style.cursor = 'move';
		}
	} else { INTERSECTED = null; }
}

///////// CONTROLS //////////
var clicked = 0;
var tilt = 0;
function tiltView() {
	if(clicked == 0){
		clicked = 1;
		if (tilt == 0){
			if (camera.position.z >= controls.center.z){
				new TWEEN.Tween( camera.position ).to( { y: 60, z: controls.center.z + 200 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {
				clicked = 0;
			}).start();
			}else {
				new TWEEN.Tween( camera.position ).to( { y: 60, z: controls.center.z - 200 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
			}
			tilt = 1;
		} else if (tilt == 1){
			if (camera.position.z >= controls.center.z){
				new TWEEN.Tween( camera.position ).to( { x: controls.center.x, y: 600, z: controls.center.z + 1, }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {
				clicked = 0;
			}).start();
			}else {
				new TWEEN.Tween( camera.position ).to( { x: controls.center.x, y: 600, z: controls.center.z - 1, }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
			}
			tilt = 2;
		} else {
			if (camera.position.z >= controls.center.z){
				new TWEEN.Tween( camera.position ).to( { y: 250, z: controls.center.z + 400 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {
				clicked = 0;
			}).start();
			}else {
				new TWEEN.Tween( camera.position ).to( { y: 250, z: controls.center.z - 400 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
			}
			tilt = 0;
		}
	}
}

var theta = Math.PI/4;

$('#rotateleft').click(function() {
	var x = camera.position.x;
	var z = camera.position.z;
	if(clicked == 0){
		clicked = 1;
		new TWEEN.Tween( camera.position ).to( { x: x * Math.cos(theta) - z * Math.sin(theta), z: z * Math.cos(theta) + x * Math.sin(theta) }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {
			clicked = 0;
		}).start();
	}
});

$('#rotateright').click(function() {
	var x = camera.position.x;
	var z = camera.position.z;
	if(clicked == 0){
		clicked = 1;
		new TWEEN.Tween( camera.position ).to( { x: x * Math.cos(theta) + z * Math.sin(theta), z: z * Math.cos(theta) - x * Math.sin(theta) }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {
			clicked = 0;
		}).start();
	}
});

function closeModal() {
	$("#modalpanel").addClass('fadeOutUp');
	$("#modalpanel").removeClass('fadeInDown');
	setTimeout(function() {
        $("#modalpanel").removeClass('opaque'); // alternative to menu.style.display = 'none';
    }, 500)
}
function flipModal() {
	$(".card").toggleClass("flipped");
}
function closeTweet() {
	$(".tweetpanel").addClass('fadeOutUp');
	$(".tweetpanel").removeClass('fadeInDown');
	setTimeout(function() {
        $(".tweetpanel").removeClass('opaque'); // alternative to menu.style.display = 'none';
    }, 500)
}
function closeBus() {
	$(".busmodal").addClass('fadeOutUp');
	$(".busmodal").removeClass('fadeInDown');
	setTimeout(function() {
        $(".busmodal").removeClass('opaque'); // alternative to menu.style.display = 'none';
    }, 500)
}
function closeFact() {
	$("#factmodal").addClass('fadeOutUp');
	$("#factmodal").removeClass('fadeInDown');
	setTimeout(function() {
        $("#factmodal").removeClass('opaque'); // alternative to menu.style.display = 'none';
    }, 500)
}

/////////// MARKERS /////////////

$( "#label-panel a" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=darwinRoute.length; i < tot; i++) {
			darwinRoute[i].visible = false;
		}
		for (var i=0, tot=parkwoodRoute.length; i < tot; i++) {
			parkwoodRoute[i].visible = false;
		}
		for (var i=0, tot=keynesRoute.length; i < tot; i++) {
			keynesRoute[i].visible = false;
		}
		for (var i=0, tot=cycleRoute.length; i < tot; i++) {
			cycleRoute[i].visible = false;
		}
		for (var i=0, tot=footPath.length; i < tot; i++) {
			footPath[i].visible = false;
		}
		for (var i=0, tot=cycleArray.length; i < tot; i++) {
			cycleArray[i].visible = false;
		}
		for (var i=0, tot=busArray.length; i < tot; i++) {
			busArray[i].visible = false;
		}
		for (var i=0, tot=roadArray.length; i < tot; i++) {
			new TWEEN.Tween( roadArray[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		var parking = scene.getObjectByName( "Visitor_Parking", true );
		parking.visible = false;
		parking = scene.getObjectByName( "Permit_Parking", true );
		parking.visible = false;
		
		for (var i=0, tot=investmentArray.length; i < tot; i++) {
			investmentArray[i].visible = false;
		}
		for (var i=0, tot=developmentArray.length; i < tot; i++) {
			developmentArray[i].visible = false;
		}
		for (var i=0, tot=populationArray.length; i < tot; i++) {
			populationArray[i].visible = false;
		}
		for (var i=0, tot=roompriceArray.length; i < tot; i++) {
			roompriceArray[i].visible = false;
		}
		for (var i=0, tot=subjectscoreArray.length; i < tot; i++) {
			subjectscoreArray[i].visible = false;
		}
		for (var i=0, tot=subjectsatisfactionArray.length; i < tot; i++) {
			subjectsatisfactionArray[i].visible = false;
		}
		for (var i=0, tot=entrypointsArray.length; i < tot; i++) {
			entrypointsArray[i].visible = false;
		}
		for (var i=0, tot=sizeArray.length; i < tot; i++) {
			sizeArray[i].visible = false;
		}
		$("#investment-panel a, #overlay-panel a").removeClass( "toggled" );
		$("#investment-panel a, #overlay-panel a").addClass( "toggle" );
	} else {
	
	}
});
$( "#labelall" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			locationIcons[i].material.color.setHex(0x477d8f);
		}
		for (var i=0, tot=teachingIcons.length; i < tot; i++) {
			teachingIcons[i].material.color.setHex(0x338061);
		}
		for (var i=0, tot=communityIcons.length; i < tot; i++) {
			communityIcons[i].material.color.setHex(0x944646);
		}
		for (var i=0, tot=maintenanceIcons.length; i < tot; i++) {
			maintenanceIcons[i].material.color.setHex(0xad426b);
		}
		for (var i=0, tot=adminIcons.length; i < tot; i++) {
			adminIcons[i].material.color.setHex(0x6e4399);
		}
		var development = scene.getObjectByName( "Templeman_Extension", true );
		var development2 = scene.getObjectByName( "Turing_College", true );
		development.visible = true;
		development.position.y = 0;
		development2.visible = true;
		development2.position.y = 0;
		$("#accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle, #developmenttoggle").removeClass( "toggle" );
		$("#accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle, #developmenttoggle").addClass( "toggled" );
	} else {
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			locationIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=teachingIcons.length; i < tot; i++) {
			teachingIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=communityIcons.length; i < tot; i++) {
			communityIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=maintenanceIcons.length; i < tot; i++) {
			maintenanceIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=adminIcons.length; i < tot; i++) {
			adminIcons[i].material.color.setHex(maincolour);
		}
		var development = scene.getObjectByName( "Templeman_Extension", true );
		var development2 = scene.getObjectByName( "Turing_College", true );
		development.visible = false;
		development.position.y = -99999;
		development2.visible = false;
		development2.position.y = -99999;
		$("#accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle, #developmenttoggle").removeClass( "toggled" );
		$("#accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle, #developmenttoggle").addClass( "toggle" );
	}
});
$( "#labeltoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=sprites.length; i < tot; i++) {
			new TWEEN.Tween( sprites[i].material ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
	} else {
		for (var i=0, tot=sprites.length; i < tot; i++) {
			new TWEEN.Tween( sprites[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
	}
});
$( "#accommodationtoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			locationIcons[i].material.color.setHex(0x477d8f);
		}
	} else {
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			locationIcons[i].material.color.setHex(maincolour);
		}
		$("#labelall").removeClass( "toggled" );
		$("#labelall").addClass( "toggle" );
	}
});
$( "#teachingtoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=teachingIcons.length; i < tot; i++) {
			teachingIcons[i].material.color.setHex(0x338061);
		}
	} else {
		for (var i=0, tot=teachingIcons.length; i < tot; i++) {
			teachingIcons[i].material.color.setHex(maincolour);
		}
		$("#labelall").removeClass( "toggled" );
		$("#labelall").addClass( "toggle" );
	}
});
$( "#communitytoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=communityIcons.length; i < tot; i++) {
			communityIcons[i].material.color.setHex(0x944646);
		}
	} else {
		for (var i=0, tot=communityIcons.length; i < tot; i++) {
			communityIcons[i].material.color.setHex(maincolour);
		}
		$("#labelall").removeClass( "toggled" );
		$("#labelall").addClass( "toggle" );
	}
});
$( "#maintenancetoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=maintenanceIcons.length; i < tot; i++) {
			maintenanceIcons[i].material.color.setHex(0xad426b);
		}
	} else {
		for (var i=0, tot=maintenanceIcons.length; i < tot; i++) {
			maintenanceIcons[i].material.color.setHex(maincolour);
		}
		$("#labelall").removeClass( "toggled" );
		$("#labelall").addClass( "toggle" );
	}
});
$( "#admintoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=adminIcons.length; i < tot; i++) {
			adminIcons[i].material.color.setHex(0x6e4399);
		}
	} else {
		for (var i=0, tot=adminIcons.length; i < tot; i++) {
			adminIcons[i].material.color.setHex(maincolour);
		}
		$("#labelall").removeClass( "toggled" );
		$("#labelall").addClass( "toggle" );
	}
});
$( "#developmenttoggle" ).click(function() {
	var development = scene.getObjectByName( "Templeman_Extension", true );
	var development2 = scene.getObjectByName( "Turing_College", true );
	if ($(this).hasClass( "toggle" )) {
		development.visible = true;
		development.position.y = 0;
		development2.visible = true;
		development2.position.y = 0;
	} else {
		development.visible = false;
		development.position.y = -99999;
		development2.visible = false;
		development2.position.y = -99999;
	}
});
$( "#tweettoggle" ).click(function() {
	if ($(this).hasClass( "toggled" )) {
		for (var i=0, tot=tweetIcons.length; i < tot; i++) {
			tweetIcons[i].visible = false;
		}
		$(this).removeClass( "toggled" );
		$(this).addClass( "toggle" );
	} else {
		for (var i=0, tot=tweetIcons.length; i < tot; i++) {
			tweetIcons[i].visible = true;
		}
		$(this).removeClass( "toggle" );
		$(this).addClass( "toggled" );
	}
});
$( "#bustoggle" ).click(function() {
	if ($(this).hasClass( "toggled" )) {
		for (var i=0, tot=busIcons.length; i < tot; i++) {
			busIcons[i].visible = false;
		}
		$(this).removeClass( "toggled" );
		$(this).addClass( "toggle" );
	} else {
		for (var i=0, tot=busIcons.length; i < tot; i++) {
			busIcons[i].visible = true;
		}
		$(this).removeClass( "toggle" );
		$(this).addClass( "toggled" );
	}
});

$( "#overlay-panel a" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			locationIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=teachingIcons.length; i < tot; i++) {
			teachingIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=communityIcons.length; i < tot; i++) {
			communityIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=maintenanceIcons.length; i < tot; i++) {
			maintenanceIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=adminIcons.length; i < tot; i++) {
			adminIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=populationArray.length; i < tot; i++) {
			populationArray[i].visible = false;
		}
		for (var i=0, tot=roompriceArray.length; i < tot; i++) {
			roompriceArray[i].visible = false;
		}
		for (var i=0, tot=subjectscoreArray.length; i < tot; i++) {
			subjectscoreArray[i].visible = false;
		}
		for (var i=0, tot=subjectsatisfactionArray.length; i < tot; i++) {
			subjectsatisfactionArray[i].visible = false;
		}
		for (var i=0, tot=entrypointsArray.length; i < tot; i++) {
			entrypointsArray[i].visible = false;
		}
		for (var i=0, tot=sizeArray.length; i < tot; i++) {
			sizeArray[i].visible = false;
		}
		var development = scene.getObjectByName( "Templeman_Extension", true );
		var development2 = scene.getObjectByName( "Turing_College", true );
		development.visible = false;
		development.position.y = -99999;
		development2.visible = false;
		development2.position.y = -99999;
		$("#label-panel a, #investment-panel a").not("#tweettoggle, #bustoggle, #labeltoggle").removeClass( "toggled" );
		$("#label-panel a, #investment-panel a").not("#tweettoggle, #bustoggle, #labeltoggle").addClass( "toggle" );
	} else {
	
	}
});
$( "#keynesbus" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=keynesRoute.length; i < tot; i++) {
			keynesRoute[i].visible = true;
		}
	} else {
		for (var i=0, tot=keynesRoute.length; i < tot; i++) {
			keynesRoute[i].visible = false;
		}
	}
});
$( "#darwinbus" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=darwinRoute.length; i < tot; i++) {
			darwinRoute[i].visible = true;
		}
	} else {
		for (var i=0, tot=darwinRoute.length; i < tot; i++) {
			darwinRoute[i].visible = false;
		}
	}
});
$( "#parkwoodbus" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=parkwoodRoute.length; i < tot; i++) {
			parkwoodRoute[i].visible = true;
		}
	} else {
		for (var i=0, tot=parkwoodRoute.length; i < tot; i++) {
			parkwoodRoute[i].visible = false;
		}
	}
});
$( "#cycleroutes" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=cycleRoute.length; i < tot; i++) {
			cycleRoute[i].visible = true;
		}
	} else {
		for (var i=0, tot=cycleRoute.length; i < tot; i++) {
			cycleRoute[i].visible = false;
		}
	}
});
$( "#footpaths" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=footPath.length; i < tot; i++) {
			footPath[i].visible = true;
		}
	} else {
		for (var i=0, tot=footPath.length; i < tot; i++) {
			footPath[i].visible = false;
		}
	}
});
$( "#bikeracks" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=cycleArray.length; i < tot; i++) {
			cycleArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=cycleArray.length; i < tot; i++) {
			cycleArray[i].visible = false;
		}
	}
});
$( "#visitorparking" ).click(function() {
	var parking = scene.getObjectByName( "Visitor_Parking", true );
	if ($(this).hasClass( "toggle" )) {
		parking.visible = true;
	} else {
		parking.visible = false;
	}
});
$( "#permitparking" ).click(function() {
	var parking = scene.getObjectByName( "Permit_Parking", true );
	if ($(this).hasClass( "toggle" )) {
		parking.visible = true;
	} else {
		parking.visible = false;
	}
});
$( "#roadnames" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=roadArray.length; i < tot; i++) {
			new TWEEN.Tween( roadArray[i].material ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
	} else {
		for (var i=0, tot=roadArray.length; i < tot; i++) {
			new TWEEN.Tween( roadArray[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
	}
});

$( "#investment-panel a" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			locationIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=teachingIcons.length; i < tot; i++) {
			teachingIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=communityIcons.length; i < tot; i++) {
			communityIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=maintenanceIcons.length; i < tot; i++) {
			maintenanceIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=adminIcons.length; i < tot; i++) {
			adminIcons[i].material.color.setHex(maincolour);
		}
		for (var i=0, tot=darwinRoute.length; i < tot; i++) {
			darwinRoute[i].visible = false;
		}
		for (var i=0, tot=parkwoodRoute.length; i < tot; i++) {
			parkwoodRoute[i].visible = false;
		}
		for (var i=0, tot=keynesRoute.length; i < tot; i++) {
			keynesRoute[i].visible = false;
		}
		for (var i=0, tot=cycleRoute.length; i < tot; i++) {
			cycleRoute[i].visible = false;
		}
		for (var i=0, tot=footPath.length; i < tot; i++) {
			footPath[i].visible = false;
		}
		for (var i=0, tot=cycleArray.length; i < tot; i++) {
			cycleArray[i].visible = false;
		}
		for (var i=0, tot=busArray.length; i < tot; i++) {
			busArray[i].visible = false;
		}
		for (var i=0, tot=roadArray.length; i < tot; i++) {
			new TWEEN.Tween( roadArray[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		var parking = scene.getObjectByName( "Visitor_Parking", true );
		parking.visible = false;
		parking = scene.getObjectByName( "Permit_Parking", true );
		parking.visible = false;
		var development = scene.getObjectByName( "Templeman_Extension", true );
		var development2 = scene.getObjectByName( "Turing_College", true );
		development.visible = false;
		development.position.y = -99999;
		development2.visible = false;
		development2.position.y = -99999;
		for (var i=0, tot=investmentArray.length; i < tot; i++) {
			investmentArray[i].visible = false;
		}
		for (var i=0, tot=developmentArray.length; i < tot; i++) {
			developmentArray[i].visible = false;
		}
		for (var i=0, tot=populationArray.length; i < tot; i++) {
			populationArray[i].visible = false;
		}
		for (var i=0, tot=roompriceArray.length; i < tot; i++) {
			roompriceArray[i].visible = false;
		}
		for (var i=0, tot=subjectscoreArray.length; i < tot; i++) {
			subjectscoreArray[i].visible = false;
		}
		for (var i=0, tot=subjectsatisfactionArray.length; i < tot; i++) {
			subjectsatisfactionArray[i].visible = false;
		}
		for (var i=0, tot=entrypointsArray.length; i < tot; i++) {
			entrypointsArray[i].visible = false;
		}
		for (var i=0, tot=sizeArray.length; i < tot; i++) {
			sizeArray[i].visible = false;
		}
		$("#label-panel a, #overlay-panel a, #investment-panel a").not("#tweettoggle, #bustoggle, #labeltoggle").removeClass( "toggled" );
		$("#label-panel a, #overlay-panel a, #investment-panel a").not("#tweettoggle, #bustoggle, #labeltoggle").addClass( "toggle" );
	} else {
	
	}
});

$( "#roomprice" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=roompriceArray.length; i < tot; i++) {
			roompriceArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=roompriceArray.length; i < tot; i++) {
			roompriceArray[i].visible = false;
		}
	}
});
$( "#population" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=populationArray.length; i < tot; i++) {
			populationArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=populationArray.length; i < tot; i++) {
			populationArray[i].visible = false;
		}
	}
});
$( "#subjectscore" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=subjectscoreArray.length; i < tot; i++) {
			subjectscoreArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=subjectscoreArray.length; i < tot; i++) {
			subjectscoreArray[i].visible = false;
		}
	}
});
$( "#subjectsatisfaction" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=subjectsatisfactionArray.length; i < tot; i++) {
			subjectsatisfactionArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=subjectsatisfactionArray.length; i < tot; i++) {
			subjectsatisfactionArray[i].visible = false;
		}
	}
});
$( "#entrypoints" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=entrypointsArray.length; i < tot; i++) {
			entrypointsArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=entrypointsArray.length; i < tot; i++) {
			entrypointsArray[i].visible = false;
		}
	}
});
$( "#roomsize" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=sizeArray.length; i < tot; i++) {
			sizeArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=sizeArray.length; i < tot; i++) {
			sizeArray[i].visible = false;
		}
	}
});
$( "#developmenttoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=developmentArray.length; i < tot; i++) {
			developmentArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=developmentArray.length; i < tot; i++) {
			developmentArray[i].visible = false;
		}
	}
});

$( ".slide-drawer .toggle" ).click(function() {
	$(this).toggleClass( "toggle toggled" );
});

function SetData(){
   var selectbox = document.getElementById('roomlist');
   var myform = document.getElementById('roomform');
   var room = selectbox.options[selectbox.selectedIndex].value;
   if (room == "default"){
	   return false;
   }else{
	   myform.action = "http://www.kent.ac.uk/timetabling/rooms/room.html?room="+room ;
  		myform.submit();
   }
}
$(".controls-close").click(function() {
	$('.controls-modal').fadeOut(500);
});
$("#exitzoom").click(function() {
	for (var i=0, tot=zoomobjects.length; i < tot; i++) {
		zoomobjects[i].visible = true;
	}
	controls.maxPolarAngle = Math.PI/2.25; 
	controls.minPolarAngle = 0; 
	controls.maxDistance = 700;
	document.getElementById("mapwrapper").addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.getElementById("app").addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.getElementById("app").addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.getElementById("app").addEventListener( 'touchstart', dragStart, false );
	document.getElementById("app").addEventListener( 'touchend', dragEnd, false );
	document.getElementById("mapwrapper").addEventListener( 'touchmove', dragMove, false );
	$(this).fadeOut();
	$('#zoom.controls-modal').hide();
	$('.modal-overlay').hide();
	$('#search').fadeIn();
	for (var i=0, tot=zoomArray.length; i < tot; i++) {
		zoomArray[i].visible = false;
	}
	for (var i=0, tot=tweetIcons.length; i < tot; i++) {
		tweetIcons[i].visible = true;
	}
	new TWEEN.Tween( camera.position ).to( { x: 0, y: 350, z: 500 }, 1500 ).easing( TWEEN.Easing.Quadratic.InOut).onComplete(function () {
		controls.minDistance = 200;
		controls.noZoom = false;
		$('#controls').fadeIn();
		$('#leftnav').toggleClass("openleft closeleft");
	}).start();
	new TWEEN.Tween( controls.center ).to( { x: 0, y: 0, z: 0 }, 1500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
});