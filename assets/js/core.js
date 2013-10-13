var container, stats, camera, scene, renderer, projector, controls, group;
var depthMaterial, depthTarget, composer;
var clickobjects = [], hoverobjects = [], sprites = [];

init();
animate();

function init() {
	
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 1000 );
	camera.position.z = 500;
	
	//////////////////////////////////
	//////// ORBIT CONTROLS //////////
	//////////////////////////////////

	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.maxPolarAngle = Math.PI/4.5; 
	controls.minDistance = 200;
	controls.maxDistance = 300;

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0xeeeeee, 0.002 );

	//////////////////////////////////
	/////////// GEOMETRY /////////////
	//////////////////////////////////
		
	group = new THREE.Object3D();
	scene.add( group );
	
	var material = new THREE.MeshDepthMaterial( { side: THREE.DoubleSide, overdraw: true } );
	
	loader = new THREE.JSONLoader();

	loader.load( "assets/models/citybuildings.js", function( geometry ) {

		buildings = new THREE.Mesh( geometry, material );
		buildings.scale.set( 1.5, 1.5, 1.5 );
		buildings.position.set( -100, -0.5, -100 );
		group.add( buildings );
		
		buildings2 = new THREE.Mesh( geometry, material );
		buildings2.scale.set( 1.5, 1.5, 1.5 );
		buildings2.position.set( 100, -0.5, 100 );
		group.add( buildings2 );
		
		buildings3 = new THREE.Mesh( geometry, material );
		buildings3.scale.set( 1.5, 1.5, 1.5 );
		buildings3.position.set( -100, -0.5, 100 );
		group.add( buildings3 );
		
		buildings4 = new THREE.Mesh( geometry, material );
		buildings4.scale.set( 1.5, 1.5, 1.5 );
		buildings4.position.set( 100, -0.5, -100 );
		group.add( buildings4 );
		
		clickobjects.push( buildings, buildings2, buildings3, buildings4 );
		hoverobjects.push( buildings, buildings2, buildings3, buildings4 );
	} );
	
	texture = THREE.ImageUtils.loadTexture('assets/images/gmap.png', {}, function() {
		renderer.render(scene);
	})
	mapmaterial = new THREE.MeshBasicMaterial({map: texture})
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000, 8, 8 ), mapmaterial );
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
	//////////// RENDERER ////////////
	//////////////////////////////////
	
	projector = new THREE.Projector();

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	container.appendChild( renderer.domElement );

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	stats.domElement.style.right = '0px';
	container.appendChild( stats.domElement );

	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	//

	window.addEventListener( 'resize', onWindowResize, false );

	/*			
	//////////////////////////////////
	///////////// DEPTH //////////////
	//////////////////////////////////
	
	var depthShader = THREE.ShaderLib[ "depthRGBA" ];
	var depthUniforms = THREE.UniformsUtils.clone( depthShader.uniforms );

	depthMaterial = new THREE.ShaderMaterial( { fragmentShader: depthShader.fragmentShader, vertexShader: depthShader.vertexShader, uniforms: depthUniforms } );
	depthMaterial.blending = THREE.NoBlending;

	//////////////////////////////////
	////////////// SSAO //////////////
	//////////////////////////////////
	
	composer = new THREE.EffectComposer( renderer );
	composer.addPass( new THREE.RenderPass( scene, camera ) );

	depthTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat } );
	
	var effect = new THREE.ShaderPass( THREE.SSAOShader );
	effect.uniforms[ 'tDepth' ].value = depthTarget;
	effect.uniforms[ 'size' ].value.set( window.innerWidth, window.innerHeight );
	effect.uniforms[ 'cameraNear' ].value = camera.near;
	effect.uniforms[ 'cameraFar' ].value = camera.far;
	effect.renderToScreen = true;
	composer.addPass( effect );
	*/
	
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

//////////////////////////////////
////////// CLICK EVENT ///////////
//////////////////////////////////

function onDocumentMouseUp( event ) {
	
	event.preventDefault();

	var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
	projector.unprojectVector( vector, camera );

	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = raycaster.intersectObjects( clickobjects );
	
	/////////// AJAX call from XML ///////////
	
	var slide = 1;
	
	$("#slidepanel").empty();
	
	$.ajax({
		type: "GET",
		url: "assets/slides.xml",
		dataType: "xml",
		success: function(xml) {
			$(xml).find('slide'+slide).each(function(){
				var id = $(this).attr('id');
				var title = $(this).find('title').text();
				$('<section id="'+id+'"></section>').html('<h2>'+title+'</h2>').appendTo('#slidepanel');
				var content = $(this).find('content');
				$(content).appendTo('#'+id);
			});
		}
	});

	if ( intersects.length > 0 ) {
		
		var time = 1000;
		
		if ( intersects[0].object.id == clickobjects[0].id ){
			slide = 1;
		}
		else if ( intersects[0].object.id == clickobjects[1].id ){
			slide = 2;
		}
		else if ( intersects[0].object.id == clickobjects[2].id ){
			slide = 3;
		}
		else if ( intersects[0].object.id == clickobjects[3].id ){
			slide = 4;
		}
		
		$("#slidepanel").toggle("slide", {direction:'left'});
			
			new TWEEN.Tween( camera.position ).to( {
				x: intersects[0].object.position.x,
				z: intersects[0].object.position.z + 150 }, time )
			.easing( TWEEN.Easing.Quadratic.InOut).start();
			
			new TWEEN.Tween( controls.center ).to( {
				x: intersects[0].object.position.x,
				y: 0,
				z: intersects[0].object.position.z }, time )
			.easing( TWEEN.Easing.Quadratic.InOut).start();
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

	if (intersects [ 0 ] ) {
		//intersects[ 0 ].object.material.color.setHex( 0xcc0000 );
		$('canvas').css('cursor','pointer')
		
	}else{
		$('canvas').css('cursor','auto')
		//for (var i=0;i<hoverobjects.length;i++){ 
			//hoverobjects[ i ].material.color.setHex( 0xffffff );}
	}
	
}


function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {
	
	TWEEN.update();
	requestAnimationFrame( animate );
	controls.update();
	stats.update();
	
	//scene.overrideMaterial = depthMaterial;
	render();

	//scene.overrideMaterial = null;
	//composer.render();

	
}
function render() {

	renderer.render( scene, camera/*, depthTarget*/ );

}