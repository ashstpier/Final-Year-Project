var container, stats;
var camera, scene, projector, renderer, controls;
var clickobjects = [], hoverobjects = [], sprites = [];

init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 450;
	
	//////////////////////////////////
	//////// ORBIT CONTROLS //////////
	//////////////////////////////////
	
	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.maxPolarAngle = Math.PI/4; 
	controls.minDistance = 120;
	controls.maxDistance = 300;

	scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
	
	//////////////////////////////////
	/////////// GEOMETRY /////////////
	//////////////////////////////////
	
	loader = new THREE.JSONLoader();
	
	var depthmaterial = new THREE.MeshDepthMaterial( { side: THREE.DoubleSide, overdraw: true } );

	loader.load( "assets/models/citybuildings.js", function( geometry ) {

		buildings = new THREE.Mesh( geometry, depthmaterial );
		buildings.scale.set( 1.2, 1.2, 1.2 );
		buildings.position.set( 0, -0.5, 0 );
		scene.add( buildings );
		
		clickobjects.push( buildings );
		hoverobjects.push( buildings );
	} );
	
	texture = THREE.ImageUtils.loadTexture('assets/images/gmap.png', {}, function() {
		renderer.render(scene);
	})
	
	material = new THREE.MeshBasicMaterial({map: texture})
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000, 8, 8 ), material );
	plane.rotation.x += 270 * Math.PI / 180;
	scene.add( plane );

	
	//////////////////////////////////
	//////////// SPRITES /////////////
	//////////////////////////////////

	sprite1 = makeTextSprite( " Section 1 ", 
		{ fontsize: 12, fontface: "Arial", borderColor: {r:0, g:0, b:0, a:1.0} } );
	sprite1.position.set(-90,50,90);
	scene.add( sprite1 );
	
	sprite2 = makeTextSprite( " Section 2 ", 
		{ fontsize: 12, fontface: "Arial", borderColor: {r:0, g:0, b:0, a:1.0} } );
	sprite2.position.set(90,50,90);
	scene.add( sprite2 );
	
	sprite3 = makeTextSprite( " Section 3 ", 
		{ fontsize: 12, fontface: "Arial", borderColor: {r:0, g:0, b:0, a:1.0} } );
	sprite3.position.set(90,50,-90);
	scene.add( sprite3 );
	
	sprite4 = makeTextSprite( " Section 4 ", 
		{ fontsize: 12, fontface: "Arial", borderColor: {r:0, g:0, b:0, a:1.0} } );
	sprite4.position.set(-90,50,-90);
	scene.add( sprite4 );
	
	sprites.push( sprite1, sprite2, sprite3, sprite4 );
	
	
	//////////////////////////////////
	/////////// LIGHTS ///////////////
	//////////////////////////////////
	
	var ambientLight = new THREE.AmbientLight(0x999999);
	scene.add(ambientLight);
  
	// directional lighting
	var light = new THREE.DirectionalLight(0xcccccc);
	light.position.set(10, 200, 0).normalize();
	scene.add(light);
	
	
	//////////////////////////////////
	/////////// RENDERER /////////////
	//////////////////////////////////

	projector = new THREE.Projector();

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	container.appendChild( renderer.domElement );

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );

	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

//////////////////////////////////
///////// SPRITE BUILDER /////////
//////////////////////////////////

function makeTextSprite( message, parameters )
{
	if ( parameters === undefined ) parameters = {};
	
	var fontface = parameters.hasOwnProperty("fontface") ? 
		parameters["fontface"] : "Arial";
	
	var fontsize = parameters.hasOwnProperty("fontsize") ? 
		parameters["fontsize"] : 18;
	
	var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
		parameters["borderThickness"] : 1;
	
	var borderColor = parameters.hasOwnProperty("borderColor") ?
		parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
	
	var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
		parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

	var spriteAlignment = THREE.SpriteAlignment.topLeft;
		
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = fontsize + "px " + fontface;
	
	// get size data (height depends only on font size)
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
	
	// background color
	context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
								  + backgroundColor.b + "," + backgroundColor.a + ")";
	// border color
	context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
								  + borderColor.b + "," + borderColor.a + ")";

	context.lineWidth = borderThickness;
	roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
	// 1.4 is extra height factor for text below baseline: g,j,p,q.
	
	// text color
	context.fillStyle = "rgba(0, 0, 0, 1.0)";

	context.fillText( message, borderThickness, fontsize + borderThickness);
	
	// canvas contents will be used for a texture
	var texture = new THREE.Texture(canvas) 
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture, useScreenCoordinates: false, alignment: spriteAlignment } );
	var sprite = new THREE.Sprite( spriteMaterial );
	sprite.scale.set(100,50,1.0);
	return sprite;	
}

//////////////////////////////////
//////// ROUND RECTANGLES ////////
//////////////////////////////////

function roundRect(ctx, x, y, w, h, r) 
{
	ctx.beginPath();
	ctx.moveTo(x+r, y);
	ctx.lineTo(x+w-r, y);
	ctx.quadraticCurveTo(x+w, y, x+w, y+r);
	ctx.lineTo(x+w, y+h-r);
	ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
	ctx.lineTo(x+r, y+h);
	ctx.quadraticCurveTo(x, y+h, x, y+h-r);
	ctx.lineTo(x, y+r);
	ctx.quadraticCurveTo(x, y, x+r, y);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();   
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

//////////////////////////////////
////////// CLICK EVENT ///////////
//////////////////////////////////

function onDocumentMouseUp( event ) {

	event.preventDefault();

	var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
	projector.unprojectVector( vector, camera );

	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = raycaster.intersectObjects( clickobjects );

	if ( intersects.length > 0 ) {
		
		if ( intersects[0] ){
			
			var time = 2000;
			
			if ( intersects[0].object.id == clickobjects[0].id ){
				new TWEEN.Tween( camera.position ).to( {
				x: intersects[0].object.position.x,
				z: intersects[0].object.position.z + 150 }, time )
			.easing( TWEEN.Easing.Quadratic.InOut).start();
			}
			
			new TWEEN.Tween( controls.center ).to( {
				x: intersects[0].object.position.x,
				y: 0,
				z: intersects[0].object.position.z }, time )
			.easing( TWEEN.Easing.Quadratic.InOut).start();
			
		}
	}
}

//////////////////////////////////
//////// MOUSEMOVE EVENT /////////
//////////////////////////////////

function onDocumentMouseMove( event ) {

	event.preventDefault();

	var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
	projector.unprojectVector( vector, camera );

	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = raycaster.intersectObjects( hoverobjects );

	if (intersects[ 0 ]) {
		//intersects[ 0 ].object.material.color.setHex( 0xcc0000 );
		$('canvas').css('cursor','pointer')
		
	}else{
		$('canvas').css('cursor','auto')
		//for (var i=0;i<hoverobjects.length;i++){ 
			//hoverobjects[ i ].material.color.setHex( 0xffffff );}
	}
	
}


//

function animate() {
	
	TWEEN.update();
	requestAnimationFrame( animate );
	controls.update();
	
	render();
	stats.update();
	
}


function render() {
	
	renderer.render( scene, camera );

}