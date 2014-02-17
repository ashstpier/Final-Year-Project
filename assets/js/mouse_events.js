function onDocumentMouseDown( event ) {
	event.preventDefault();
	controls.autoRotate = false;
	var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
	projector.unprojectVector( vector, camera );
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = raycaster.intersectObjects( objects, true );

	if ( intersects.length > 0 ) {
		SELECTED = intersects[ 0 ].object.parent;
		var intersects = raycaster.intersectObject( plane );
		offset.copy( intersects[ 0 ].point ).sub( plane.position );
		controls.enabled = false;
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
	
	/////////// AJAX call from XML ///////////

	if ( intersects.length > 0 ) {
		
		if ( intersects[0].object.name == "tweet-Jennison" ) {
			var tweetcontainer = "#tweet_edakent";
			twitterMap(intersects, tweetcontainer);
		} 
		else if ( intersects[0].object.name == "tweet-Locke" ) {
			var tweetcontainer = "#tweet_kentunion";
			twitterMap(intersects, tweetcontainer);
		} 
		else if ( intersects[0].object.name == "tweet-Registry" ) {
			var tweetcontainer = "#tweet_unikent";
			twitterMap(intersects, tweetcontainer);
		} 
		else if ( intersects[0].object.name == "tweet-Careers_Employability_Service" ) {
			var tweetcontainer = "#tweet_unikentemploy";
			twitterMap(intersects, tweetcontainer);
		} 
		else if ( intersects[0].object.name == "tweet-Colyer_Fergusson" ) {
			var tweetcontainer = "#tweet_unikent_music";
			twitterMap(intersects, tweetcontainer);
		}
		else if ( intersects[0].object.name == "tweet-Parkwood_Administration" ) {
			var tweetcontainer = "#tweet_parkwoodsc";
			twitterMap(intersects, tweetcontainer);
		} 
		else {
		
			$('#modalfront, #modalback').empty();
			$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
			$(".card").removeClass('flipped');
			closeTweet();
			
			modal = intersects[0].object;
			placeMarker(modal);
		}
		
	}
	
	if ( INTERSECTED ) {
		plane.position.copy( INTERSECTED.position );
		SELECTED = null;
	}
	container.style.cursor = 'move';
	controls.enabled = true;
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
	
		if (rooms != ""){
			$('<div class="header"></div>').html('<img src="assets/images/buildings/'+img+'.jpg" />').appendTo('#modalfront');
			$('<div class="content"></div>').html('<a href="#" onclick="closeModal()"><i class="fa-times fa fa-lg"></i></a><h2>'+header+'</h2><h3>'+type+'</h3><p>'+description+'</p>').appendTo('#modalfront');
			$('<div class="footer"><form method="POST" target="_blank" id="roomform" action="http://www.kent.ac.uk/timetabling/rooms/room.html?room=" onsubmit="return SetData()"><select id="roomlist"><option value="default">select a room...</option></select><button type="submit">Find room</button></form></div>').appendTo('#modalfront');
			$(this).find('rooms').children().each(function(){
				var room = $(this).text();
				var attr = $(this).attr("value");
				$('<option value="'+attr+'">'+room+'</option>').appendTo('#roomlist');
			});
			$('<div class="arrow-down grey"></div>').appendTo('#modalfront, #modalback');
			//$('<div class="content"></div>').html(backcontent+'<div class="next"></div><a href="#" onclick="flipModal()"><i class="fa-align-left fa"></i></a>').appendTo('#modalback');
		}else if(list != ""){
			$('<div class="header"></div>').html('<img src="assets/images/buildings/'+img+'.jpg" />').appendTo('#modalfront');
			$('<div class="content"></div>').html('<a href="#" onclick="closeModal()"><i class="fa-times fa fa-lg"></i></a><h2>'+header+'</h2><h3>'+type+'</h3><p>'+description+'</p>').appendTo('#modalfront');
			$('<div class="footer"><ul></ul></div>').appendTo('#modalfront');
			$(this).find('list').children().each(function(){
				var listitem = $(this).text();
				$('<li>'+listitem+'</li>').appendTo('#modalfront .footer ul');
			});
			$('<div class="arrow-down grey"></div>').appendTo('#modalfront, #modalback');
		}else {
			$('<div class="header"></div>').html('<img src="assets/images/buildings/'+img+'.jpg" />').appendTo('#modalfront');
			$('<div class="content"></div>').html('<a href="#" onclick="closeModal()"><i class="fa-times fa fa-lg"></i></a><h2>'+header+'</h2><h3>'+type+'</h3><p>'+description+'</p>').appendTo('#modalfront');
			$('<div class="arrow-down"></div>').appendTo('#modalfront, #modalback');
			
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
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -10, z: group.position.z - position.z +50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: - 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -10, z: group.position.z - position.z -50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -10, z: group.position.z - position.z +50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: - 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -10, z: group.position.z - position.z -50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
}

function twitterMap(intersects, tweetcontainer){
	$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
	$(".card").removeClass('flipped');
	$(".tweetpanel").removeClass('fadeOutUp fadeInDown opaque');
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
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -10, z: group.position.z - position.z +50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: -250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -10, z: group.position.z - position.z -50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: 250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -10, z: group.position.z - position.z +50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
	}
	else {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 150, z: -250 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -10, z: group.position.z - position.z +50 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
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

///////// CONTROLS //////////
var tilt = 0;
function tiltView() {
	if (tilt == 0){
		if (camera.position.z >= controls.center.z){
			new TWEEN.Tween( camera.position ).to( { y: 60, z: controls.center.z + 200 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
		}else {
			new TWEEN.Tween( camera.position ).to( { y: 60, z: controls.center.z - 200 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
		}
		tilt = 1;
	} else if (tilt == 1){
		new TWEEN.Tween( camera.position ).to( { x: controls.center.x, y: 600, z: controls.center.z, }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
		tilt = 2;
	} else {
		if (camera.position.z >= controls.center.z){
			new TWEEN.Tween( camera.position ).to( { y: 250, z: controls.center.z + 400 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
		}else {
			new TWEEN.Tween( camera.position ).to( { y: 250, z: controls.center.z - 400 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
		}
		tilt = 0;
	}
}

$('#rotateleft').mousedown(function() {
	controls.autoRotateRight = false;
	controls.autoRotateSpeed = 10;
    controls.autoRotate = true;
}).bind('mouseup mouseleave', function() {
    controls.autoRotate = false;
});

$('#rotateright').mousedown(function() {
	controls.autoRotate = false;
	controls.autoRotateSpeed = 10;
    controls.autoRotateRight = true;
}).bind('mouseup mouseleave', function() {
    controls.autoRotateRight = false;
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

/////////// MARKERS /////////////

$( "#label-panel a" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		var route = scene.getObjectByName( 'keynesRoute', true );
		route.visible = false;
		route = scene.getObjectByName( 'darwinRoute', true );
		route.visible = false;
		route = scene.getObjectByName( 'parkwoodRoute', true );
		route.visible = false;
		route = scene.getObjectByName( 'cycle1', true );
		route.visible = false;
		route = scene.getObjectByName( 'cycle2', true );
		route.visible = false;
		for (var i=0, tot=cycleArray.length; i < tot; i++) {
			cycleArray[i].visible = false;
		}
		for (var i=0, tot=busArray.length; i < tot; i++) {
			busArray[i].visible = false;
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
			maintenanceIcons[i].material.color.setHex(0xcc8746);
		}
		for (var i=0, tot=adminIcons.length; i < tot; i++) {
			adminIcons[i].material.color.setHex(0x6e4399);
		}
		$("#accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle").removeClass( "toggle" );
		$("#accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle").addClass( "toggled" );
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
		$("#accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle").removeClass( "toggled" );
		$("#accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle").addClass( "toggle" );
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
$( "#eventtoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		$(this).toggleClass( "toggle toggled" );
	} else {
		$(this).toggleClass( "toggle toggled" );
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
			maintenanceIcons[i].material.color.setHex(0xcf5b2d);
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
$( "#tweettoggle" ).click(function() {
	if ($(this).hasClass( "toggled" )) {
		for (var i=0, tot=tweetIcons.length; i < tot; i++) {
			tweetIcons[i].visible = false;
		}
		$(this).toggleClass( "toggle toggled" );
	} else {
		for (var i=0, tot=tweetIcons.length; i < tot; i++) {
			tweetIcons[i].visible = true;
		}
		$(this).toggleClass( "toggle toggled" );
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
		$("#label-panel a, #investment-panel a").removeClass( "toggled" );
		$("#label-panel a, #investment-panel a").addClass( "toggle" );
	} else {
	
	}
});
$( "#keynesbus" ).click(function() {
	var route = scene.getObjectByName( 'keynesRoute', true );
	if ($(this).hasClass( "toggle" )) {
		route.visible = true;
	} else {
		route.visible = false;
	}
});
$( "#darwinbus" ).click(function() {
	var route = scene.getObjectByName( 'darwinRoute', true );
	if ($(this).hasClass( "toggle" )) {
		route.visible = true;
	} else {
		route.visible = false;
	}
});
$( "#parkwoodbus" ).click(function() {
	var route = scene.getObjectByName( 'parkwoodRoute', true );
	if ($(this).hasClass( "toggle" )) {
		route.visible = true;
	} else {
		route.visible = false;
	}
});
$( "#cycleroutes" ).click(function() {
	var route = scene.getObjectByName( 'cycle1', true );
	var route2 = scene.getObjectByName( 'cycle2', true );
	if ($(this).hasClass( "toggle" )) {
		route.visible = true;
		route2.visible = true;
	} else {
		route.visible = false;
		route2.visible = false;
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
$( "#busstops" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=busArray.length; i < tot; i++) {
			busArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=busArray.length; i < tot; i++) {
			busArray[i].visible = false;
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
/*$( "#roadnames" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=roadArray.length; i < tot; i++) {
			new TWEEN.Tween( roadArray[i].material ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
	} else {
		for (var i=0, tot=roadArray.length; i < tot; i++) {
			new TWEEN.Tween( roadArray[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
	}
});*/

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
		var route = scene.getObjectByName( 'keynesRoute', true );
		route.visible = false;
		route = scene.getObjectByName( 'darwinRoute', true );
		route.visible = false;
		route = scene.getObjectByName( 'parkwoodRoute', true );
		route.visible = false;
		route = scene.getObjectByName( 'cycle1', true );
		route.visible = false;
		route = scene.getObjectByName( 'cycle2', true );
		route.visible = false;
		for (var i=0, tot=cycleArray.length; i < tot; i++) {
			cycleArray[i].visible = false;
		}
		for (var i=0, tot=busArray.length; i < tot; i++) {
			busArray[i].visible = false;
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
		$("#label-panel a, #overlay-panel a, #investment-panel a").removeClass( "toggled" );
		$("#label-panel a, #overlay-panel a, #investment-panel a").addClass( "toggle" );
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