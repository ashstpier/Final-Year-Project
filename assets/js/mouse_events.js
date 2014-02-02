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
		else if ( intersects[0].object.name == "tweet-Templeman_Library" ) {
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
			
	$(xml).find(node).each(function(){
		var header = $(this).find('header').text();
		var type = $(this).find('type').text();
		var description = $(this).find('description').text();
		var list = $(this).find('list').text();
		var backcontent = $(this).find('backcontent').text();
	
		if (backcontent != ""){
			$('<div class="header"></div>').html('<img src="assets/images/buildings/becket_court.jpg" />').appendTo('#modalfront');
			$('<div class="content"></div>').html('<a href="#" onclick="closeModal()"><i class="fa-times fa fa-lg"></i></a><h2>'+header+'</h2><h3>'+type+'</h3><p>'+description+'</p>').appendTo('#modalfront');
			$('<div class="footer"></div>').html(list).appendTo('#modalfront');
			$('<div class="content"></div>').html(backcontent+'<div class="next"></div><a href="#" onclick="flipModal()"><i class="fa-align-left fa"></i></a>').appendTo('#modalback');
			}
		else {
			$('<div class="header"></div>').html('<img src="assets/images/buildings/becket_court.jpg" />').appendTo('#modalfront');
			$('<div class="content"></div>').html('<a href="#" onclick="closeModal()"><i class="fa-times fa fa-lg"></i></a><h2>'+header+'</h2><h3>'+type+'</h3><p>'+description+'</p>').appendTo('#modalfront');
			$('<div class="footer"></div>').html(list).appendTo('#modalfront');
		}
		$('<div class="arrow-down"></div>').appendTo('#modalfront, #modalback');
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
	closeModal();
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
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 80, z: 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
	}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 80, z: - 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
	}
	else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 80, z: 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
	}
	else {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 80, z: - 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
	}
	new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, z: group.position.z - position.z }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
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
	
	
	//////
	
	var vector = new THREE.Vector3(
    ( event.clientX / window.innerWidth ) * 2 - 1,
    - ( event.clientY / window.innerHeight ) * 2 + 1,
    0.5 );

	projector.unprojectVector( vector, camera );
	
	var dir = vector.sub( camera.position ).normalize();
	
	var distance = - camera.position.y / dir.y;
	
	var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
	
	console.log(pos);
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
		new TWEEN.Tween( camera.position ).to( { x: controls.center.x, y: 600 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
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
		for (var i=0, tot=investmentArray.length; i < tot; i++) {
			investmentArray[i].visible = false;
		}
		for (var i=0, tot=developmentArray.length; i < tot; i++) {
			developmentArray[i].visible = false;
		}
		$("#investment-panel a").removeClass( "toggled" );
		$("#investment-panel a").addClass( "toggle" );
	} else {
	
	}
});
$( "#labelall" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=sprites.length; i < tot; i++) {
			new TWEEN.Tween( sprites[i].material ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			locationIcons[i].material.color.setHex(0x477d8f);
		}
		for (var i=0, tot=teachingIcons.length; i < tot; i++) {
			teachingIcons[i].material.color.setHex(0xb8793d);
		}
		for (var i=0, tot=communityIcons.length; i < tot; i++) {
			communityIcons[i].material.color.setHex(0x338061);
		}
		for (var i=0, tot=maintenanceIcons.length; i < tot; i++) {
			maintenanceIcons[i].material.color.setHex(0x944646);
		}
		for (var i=0, tot=adminIcons.length; i < tot; i++) {
			adminIcons[i].material.color.setHex(0x6e4399);
		}
		for (var i=0, tot=tweetIcons.length; i < tot; i++) {
			tweetIcons[i].visible = true;
		}
		$("#labeltoggle, #accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle, #tweettoggle").removeClass( "toggle" );
		$("#labeltoggle, #accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle, #tweettoggle").addClass( "toggled" );
	} else {
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
		for (var i=0, tot=tweetIcons.length; i < tot; i++) {
			tweetIcons[i].visible = false;
		}
		$("#labeltoggle, #accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle, #tweettoggle").removeClass( "toggled" );
		$("#labeltoggle, #accommodationtoggle, #teachingtoggle, #communitytoggle, #maintenancetoggle, #admintoggle, #tweettoggle").addClass( "toggle" );
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
		$("#labelall").removeClass( "toggled" );
		$("#labelall").addClass( "toggle" );
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
			teachingIcons[i].material.color.setHex(0xb8793d);
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
			communityIcons[i].material.color.setHex(0x338061);
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
			maintenanceIcons[i].material.color.setHex(0x944646);
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
		$("#labelall").removeClass( "toggled" );
		$("#labelall").addClass( "toggle" );
	} else {
		for (var i=0, tot=tweetIcons.length; i < tot; i++) {
			tweetIcons[i].visible = true;
		}
		$(this).toggleClass( "toggle toggled" );
	}
});
$( "#keynesbus" ).click(function() {
	var route = scene.getObjectByName( 'keynesRoute', true );
	if ($(this).hasClass( "toggle" )) {
		route.visible = true;
		new TWEEN.Tween( route.material ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	} else {
		new TWEEN.Tween( route.material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		setTimeout(function() {
			route.visible = false;
		}, 500);
	}
});
$( "#darwinbus" ).click(function() {
	var route = scene.getObjectByName( 'darwinRoute', true );
	if ($(this).hasClass( "toggle" )) {
		route.visible = true;
		new TWEEN.Tween( route.material ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	} else {
		new TWEEN.Tween( route.material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		setTimeout(function() {
			route.visible = false;
		}, 500);
	}
});
$( "#parkwoodbus" ).click(function() {
	var route = scene.getObjectByName( 'parkwoodRoute', true );
	if ($(this).hasClass( "toggle" )) {
		route.visible = true;
		new TWEEN.Tween( route.material ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	} else {
		new TWEEN.Tween( route.material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		setTimeout(function() {
			route.visible = false;
		}, 500);
	}
});
$( "#cycleroutes" ).click(function() {
	var route = scene.getObjectByName( 'cycle1', true );
	var route2 = scene.getObjectByName( 'cycle2', true );
	if ($(this).hasClass( "toggle" )) {
		route.visible = true;
		route2.visible = true;
		new TWEEN.Tween( route.material ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		new TWEEN.Tween( route2.material ).to( { opacity: 1 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	} else {
		new TWEEN.Tween( route.material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		new TWEEN.Tween( route2.material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		setTimeout(function() {
			route.visible = false;
			route2.visible = false;
		}, 500);
	}
});
$( "#bikeracks" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=cycleArray.length; i < tot; i++) {
			cycleArray[i].visible = true;
			new TWEEN.Tween( cycleArray[i].material ).to( { opacity: 0.5 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
	} else {
		for (var i=0, tot=cycleArray.length; i < tot; i++) {
			new TWEEN.Tween( cycleArray[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		setTimeout(function() {
			for (var i=0, tot=cycleArray.length; i < tot; i++) {
				cycleArray[i].visible = false;
			}
		}, 500);
	}
});
$( "#visitorparking" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=visitorParking.length; i < tot; i++) {
			visitorParking[i].visible = true;
			new TWEEN.Tween( visitorParking[i].material ).to( { opacity: 0.5 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
	} else {
		for (var i=0, tot=visitorParking.length; i < tot; i++) {
			new TWEEN.Tween( visitorParking[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		setTimeout(function() {
			for (var i=0, tot=visitorParking.length; i < tot; i++) {
				visitorParking[i].visible = false;
			}
		}, 500);
	}
});
$( "#permitparking" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=permitParking.length; i < tot; i++) {
			permitParking[i].visible = true;
			new TWEEN.Tween( permitParking[i].material ).to( { opacity: 0.5 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
	} else {
		for (var i=0, tot=permitParking.length; i < tot; i++) {
			new TWEEN.Tween( permitParking[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		setTimeout(function() {
			for (var i=0, tot=permitParking.length; i < tot; i++) {
				permitParking[i].visible = false;
			}
		}, 500);
	}
});

$( "#investment-panel a" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=sprites.length; i < tot; i++) {
			new TWEEN.Tween( sprites[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			new TWEEN.Tween( locationIcons[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		for (var i=0, tot=foodIcons.length; i < tot; i++) {
			new TWEEN.Tween( foodIcons[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		for (var i=0, tot=shopIcons.length; i < tot; i++) {
			new TWEEN.Tween( shopIcons[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		for (var i=0, tot=visitorParking.length; i < tot; i++) {
			new TWEEN.Tween( visitorParking[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		for (var i=0, tot=permitParking.length; i < tot; i++) {
			new TWEEN.Tween( permitParking[i].material ).to( { opacity: 0 }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		for (var i=0, tot=tweetIcons.length; i < tot; i++) {
			tweetIcons[i].visible = false;
		}
		$("#label-panel a").removeClass( "toggled" );
		$("#label-panel a").addClass( "toggle" );
	} else {
		
	}
});
$( "#investmenttoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=investmentArray.length; i < tot; i++) {
			investmentArray[i].visible = true;
		}
	} else {
		for (var i=0, tot=investmentArray.length; i < tot; i++) {
			investmentArray[i].visible = false;
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


/////////// DRAWER TOGGLE /////////////

$( "#drawer-toggle" ).click(function() {
	$(this).toggleClass( "active" );
	$("#leftdrawer").toggle("slide", {direction:'left', duration: 200, easing: "linear"});
	$("#wrapper").toggleClass( "slide-margin" );
});
$( ".slide-drawer .toggle" ).click(function() {
	$(this).toggleClass( "toggle toggled" );
});

/////////// CONTROLS HOVER /////////////

$( "#controlhover" ).hover(function() {
	$("#tilt, #refresh").stop().fadeIn();
}, function() {
    $("#tilt, #refresh").stop().fadeOut();
});