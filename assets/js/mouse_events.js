function onDocumentMouseDown( event ) {
	event.preventDefault();
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
		
		$('#modalpanel').empty();
		$("#modalpanel").removeClass('bounceInDown opaque');
		var time = 1000;
		var node = intersects[0].object.name;
		
		$(xml).find(node).each(function(){
			var content = $(this).find('content').text();
			$(content).appendTo('#modalpanel');
		});
		
		modal = intersects[0].object;
		
		intersects[0].object.geometry.computeBoundingBox();
		var boundingBox = intersects[0].object.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( intersects[0].object.matrixWorld );
			
		if (camera.position.z >= position.z && controls.center.z <= camera.position.z){
			new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: 100 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('bounceInDown opaque');}).start();
		}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
			new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: - 100 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('bounceInDown opaque');}).start();
		}
		else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
			new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: 100 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('bounceInDown opaque');}).start();
		}
		else {
			new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: - 100 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('bounceInDown opaque');}).start();
		}
		new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: 0, z: group.position.z - position.z }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
		
	}
	if ( INTERSECTED ) {
		plane.position.copy( INTERSECTED.position );
		SELECTED = null;
	}
	container.style.cursor = 'move';
	controls.enabled = true;
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
}

///////// CONTROLS //////////

function view2D() {
	if (camera.position.z >= controls.center.z){
		new TWEEN.Tween( camera.position ).to( { x: controls.center.x, y: 500, z: controls.center.z + 1 }, 1000 ).easing( TWEEN.Easing.Quadratic.Out).start();
	}else{
		new TWEEN.Tween( camera.position ).to( { x: controls.center.x, y: 500, z: controls.center.z - 1 }, 1000 ).easing( TWEEN.Easing.Quadratic.Out).start();
	}
}
function tilt() {
	new TWEEN.Tween( camera.position ).to( { y: 80 }, 1000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
}
function refreshView() {
	new TWEEN.Tween( camera.position ).to( { x: 0, y: 200, z: 500 }, 1000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	new TWEEN.Tween( group.position ).to( { x: 0, y: 0, z: 0 }, 1000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	new TWEEN.Tween( controls.center ).to( { x: 0, y: 0, z: 0 }, 1000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
}

function rotateRight() {
	var x = camera.position.x, z = camera.position.z, rotSpeed = 0.5;
	new TWEEN.Tween( camera.position ).to( { x: x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed),  z: z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed) }, 500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
}

function rotateLeft() {
	var x = camera.position.x, z = camera.position.z, rotSpeed = 0.5;
	new TWEEN.Tween( camera.position ).to( { x: x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed),  z: z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed) }, 500 ) .easing( TWEEN.Easing.Quadratic.InOut).start();
}

/////////// TOGGLES /////////////

$( "#labeltoggle" ).click(function() {
	if ($(this).hasClass( "unchecked" )) {
		$(this).toggleClass("unchecked checked");
		for (var i=0, tot=sprites.length; i < tot; i++) {
			sprites[i].visible = true;
		}
		$(this).toggleClass( "active" );
	} else {
		$(this).toggleClass("checked unchecked");
		for (var i=0, tot=sprites.length; i < tot; i++) {
			sprites[i].visible = false;
		}
		$(this).toggleClass( "active" );
	}
});
$( "#subjecttoggle" ).click(function() {
	if ($(this).hasClass( "unchecked" )) {
		$(this).toggleClass("unchecked checked");
		// toggle code
		$(this).toggleClass( "active" );
	} else {
		$(this).toggleClass("checked unchecked");
		// toggle code
		$(this).toggleClass( "active" );
	}
});
$( "#accommodationtoggle" ).click(function() {
	if ($(this).hasClass( "unchecked" )) {
		$(this).toggleClass("unchecked checked");
		$(this).toggleClass( "active" );
		for (var i=0, tot=sprites.length; i < tot; i++) {
			locationIcons[i].visible = true;
		}
	} else {
		$(this).toggleClass("checked unchecked");
		$(this).toggleClass( "active" );
		for (var i=0, tot=sprites.length; i < tot; i++) {
			locationIcons[i].visible = false;
		}
	}
});
$( "#parkingtoggle" ).click(function() {
	if ($(this).hasClass( "unchecked" )) {
		$(this).toggleClass("unchecked checked");
		// toggle code
		$(this).toggleClass( "active" );
	} else {
		$(this).toggleClass("checked unchecked");
		// toggle code
		$(this).toggleClass( "active" );
	}
});
$( "#bustoggle" ).click(function() {
	if ($(this).hasClass( "unchecked" )) {
		$(this).toggleClass("unchecked checked");
		// toggle code
		$(this).toggleClass( "active" );
	} else {
		$(this).toggleClass("checked unchecked");
		// toggle code
		$(this).toggleClass( "active" );
	}
});


///////////// SLIDES /////////////

$( ".slide" ).click(function() {
	$(this).toggleClass( "active" );
});
$( "#labelbutton" ).click(function() {
	if($("#eventpanel").is(":visible")){
		$("#eventpanel").toggle("slide", {direction:'left'}, function(){
			$("#eventbutton").toggleClass( "active" );
			$("#labelpanel").toggle("slide", {direction:'left'});
		});
	}else{
		$("#labelpanel").toggle("slide", {direction:'left'});
	}
});
$( "#eventbutton" ).click(function() {
	if($("#labelpanel").is(":visible")){
		$("#labelpanel").toggle("slide", {direction:'left'}, function(){
			$("#labelbutton").toggleClass( "active" );
			$("#eventpanel").toggle("slide", {direction:'left'});
		});
	}else{
		$("#eventpanel").toggle("slide", {direction:'left'});
	}
});