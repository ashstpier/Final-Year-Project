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
	
	var slide = 0;
	var time = 2000;
	
	$("#slidepanel").empty();
	
	$.ajax({
		type: "GET",
		url: "assets/slides.xml",
		dataType: "xml",
		success: function(xml) {
			$(xml).find(jsonFileNames[slide].split("/")[2].split(".")[0]).each(function(){
				var title = $(this).find('title').text();
				$('<section id="info"></section>').html('<h2>'+title+'</h2>').appendTo('#slidepanel');
				var content = $(this).find('content');
				$(content).appendTo('#info');
			});
		}
	});

	if ( intersects.length > 0 ) {
		if ( intersects[0].object.id == clickobjects[0].id ){
			slide = 0;
		}
		else if ( intersects[0].object.id == clickobjects[1].id ){
			slide = 1;
		}
		else if ( intersects[0].object.id == clickobjects[2].id ){
			slide = 2;
		}
		else if ( intersects[0].object.id == clickobjects[3].id ){
			slide = 3;
		}
		
		intersects[0].object.geometry.computeBoundingBox();
		var boundingBox = intersects[0].object.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( intersects[0].object.matrixWorld );
		
		$("#slidepanel").toggle("slide", {direction:'left'});
			
		if (camera.position.z >= position.z && controls.center.z <= camera.position.z){
			new TWEEN.Tween( camera.position ).to( {
				x: position.x,
				y: 130,
				z: position.z + 150 }, time )
			.easing( TWEEN.Easing.Quadratic.InOut).start();
		}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
			new TWEEN.Tween( camera.position ).to( {
				x: position.x,
				y: 130,
				z: position.z - 150 }, time )
			.easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
			new TWEEN.Tween( camera.position ).to( {
				x: position.x,
				y: 130,
				z: position.z + 150 }, time )
			.easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		else {
			new TWEEN.Tween( camera.position ).to( {
				x: position.x,
				y: 130,
				z: position.z - 150 }, time )
			.easing( TWEEN.Easing.Quadratic.InOut).start();
		}
		new TWEEN.Tween( controls.center ).to( {
			x: position.x,
			y: 0,
			z: position.z }, time )
		.easing( TWEEN.Easing.Quadratic.InOut).start();
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

function view2D() {
	if (camera.position.z >= controls.center.z){
		new TWEEN.Tween( camera.position ).to( {
			x: controls.center.x,
			y: 500,
			z: controls.center.z + 1 }, 2000 )
		.easing( TWEEN.Easing.Quadratic.Out).start();
	}else{
		new TWEEN.Tween( camera.position ).to( {
			x: controls.center.x,
			y: 500,
			z: controls.center.z - 1 }, 2000 )
		.easing( TWEEN.Easing.Quadratic.Out).start();
	}
}
function tilt() {
	new TWEEN.Tween( camera.position ).to( {
			y: 100 }, 1000 )
		.easing( TWEEN.Easing.Quadratic.InOut).start();
}