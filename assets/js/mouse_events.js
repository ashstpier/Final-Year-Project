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
		
			$('#modalpanel').empty();
			$("#modalpanel").removeClass('fadeOutUp fadeInDown opaque');
			closeTweet();
			var time = 1000;
			var node = intersects[0].object.name;
			
			$(xml).find(node).each(function(){
				var header = $(this).find('header').text();
				var description = $(this).find('description').text();
				var area = $(this).find('area').text();
				$('<header></header>').html('<h2><i class="fa fa-map-marker"></i>'+header+'</h2>').appendTo('#modalpanel');
				$('<section></section>').html('<p>'+description+'</p>').appendTo('#modalpanel');
				$('<footer></footer>').html('<span>'+area+'</span><a href="#" onclick="closeModal()"><i class="fa fa-times"></i></a>').appendTo('#modalpanel');
				$('<div class="arrow-down"></div>').appendTo('#modalpanel');
			});
			
			modal = intersects[0].object;
			
			modal.geometry.computeBoundingBox();
			var boundingBox = modal.geometry.boundingBox;
			var position = new THREE.Vector3();
			position.subVectors( boundingBox.max, boundingBox.min );
			position.multiplyScalar( 0.5 );
			position.add( boundingBox.min );
			position.applyMatrix4( modal.matrixWorld );
				
			if (camera.position.z >= position.z && controls.center.z <= camera.position.z){
				new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
			}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
				new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: - 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
			}
			else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
				new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
			}
			else {
				new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: - 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$("#modalpanel").addClass('fadeInDown opaque');}).start();
			}
			new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -30, z: group.position.z - position.z }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).start();
		}
		
	}
	
	if ( INTERSECTED ) {
		plane.position.copy( INTERSECTED.position );
		SELECTED = null;
	}
	container.style.cursor = 'move';
	controls.enabled = true;
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
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
	}else if (camera.position.z >= position.z && controls.center.z >= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: - 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
	}
	else if (camera.position.z <= position.z && controls.center.z <= camera.position.z) {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
	}
	else {
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 110, z: - 150 }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
	}
	new TWEEN.Tween( group.position ).to( { x: group.position.x - position.x, y: -30, z: group.position.z - position.z }, time ).easing( TWEEN.Easing.Sinusoidal.InOut).onComplete(function () {$(tweetcontainer).addClass('fadeInDown opaque');}).start();
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
	new TWEEN.Tween( camera.position ).to( { x: 0, y: 350, z: 500 }, 1000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	new TWEEN.Tween( group.position ).to( { x: 0, y: 0, z: 0 }, 1000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
	new TWEEN.Tween( controls.center ).to( { x: 0, y: 0, z: 0 }, 1000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
}

function rotateRight() {
	var x = camera.position.x, z = camera.position.z, rotSpeed = 1;
	new TWEEN.Tween( camera.position ).to( { x: x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed),  z: z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed) }, 1000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
}

function rotateLeft() {
	var x = camera.position.x, z = camera.position.z, rotSpeed = 1;
	new TWEEN.Tween( camera.position ).to( { x: x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed),  z: z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed) }, 1000 ) .easing( TWEEN.Easing.Quadratic.InOut).start();
}
function closeModal() {
	$("#modalpanel").addClass('fadeOutUp');
	$("#modalpanel").removeClass('fadeInDown');
	setTimeout(function() {
        $("#modalpanel").removeClass('opaque'); // alternative to menu.style.display = 'none';
    }, 500)
}
function closeTweet() {
	$(".tweetpanel").addClass('fadeOutUp');
	$(".tweetpanel").removeClass('fadeInDown');
	setTimeout(function() {
        $(".tweetpanel").removeClass('opaque'); // alternative to menu.style.display = 'none';
    }, 500)
}

/////////// TOGGLES /////////////

$( "#labeltoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=sprites.length; i < tot; i++) {
			sprites[i].material.opacity = 1;
			new TWEEN.Tween( sprites[i].position ).to( { y: sprites[i].position.y - 50 }, 1000 ).easing( TWEEN.Easing.Bounce.Out).start();
		}
	} else {
		for (var i=0, tot=sprites.length; i < tot; i++) {
			sprites[i].material.opacity = 0;
			sprites[i].position.y += 50;
		}
	}
});
$( "#subjecttoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		// toggle code
	} else {
		// toggle code
	}
});
$( "#accommodationtoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			locationIcons[i].material.opacity = 1;
			new TWEEN.Tween( locationIcons[i].position ).to( { y: locationIcons[i].position.y - 40 }, 1000 ).easing( TWEEN.Easing.Bounce.Out).start();
		}
	} else {
		for (var i=0, tot=locationIcons.length; i < tot; i++) {
			locationIcons[i].material.opacity = 0;
			locationIcons[i].position.y += 40;
		}
	}
});
$( "#shoptoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
		// toggle code
	} else {
		// toggle code
	}
});
$( "#bustoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
	
	} else {
		// toggle code
	}
});
$( "#foodtoggle" ).click(function() {
	if ($(this).hasClass( "toggle" )) {
	
	} else {
		// toggle code
	}
});

$( "#drawer-toggle" ).click(function() {
	$(this).toggleClass( "active" );
	$("#leftdrawer").toggle("slide", {direction:'left', duration: 200, easing: "linear"});
	$("#wrapper").toggleClass( "slide-margin" );
});
$( ".slide-drawer .toggle" ).click(function() {
	$(this).toggleClass( "toggle toggled" );
});