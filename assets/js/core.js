var container, stats, camera, scene, renderer, projector, controls, group;
var depthMaterial, depthTarget, composer;
var clickobjects = [], hoverobjects = [], iconAcademic = [], iconLocation = [], iconMusic = [], iconAnnouncement = [];

init();
animate();

function init() {
	
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 10, 2000 );
	camera.position.z = 500;
	
	//////// ORBIT CONTROLS /////////

	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.maxPolarAngle = Math.PI/3; 
	controls.minDistance = 200;
	controls.maxDistance = 400;
	
	///////// SCENE SETUP //////////

	scene = new THREE.Scene();
	//scene.fog = new THREE.Fog( 0xffffff, 0.00002 );
	
	/////////// LIGHTS ////////////
	
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	directionalLight.position.set( 0, 1, 0 );
	scene.add( directionalLight );
	
	var ambientLight = new THREE.AmbientLight( 0xcccccc );
	scene.add( ambientLight );

	/////////// GEOMETRY /////////////
		
	group = new THREE.Object3D();
	scene.add( group );
	
	var material = new THREE.MeshLambertMaterial({ color: 0xcccccc });
	
	var jsonFileNames = [
		'assets/models/Keynes_College.js',
		'assets/models/Templeman_Library.js'
	];
	
	var meshes = new Object();
	
	for(var i = 0; i < jsonFileNames.length; i++){
		var loader = new THREE.JSONLoader();
		var meshName = jsonFileNames[i].split("/")[2].split(".")[0];
		loader.load(jsonFileNames[i], makeHandler(meshName));
	}
	
	function makeHandler(meshName) {
		return function(geometry, materials) {
			mesh =  new THREE.Mesh( geometry, material );
			mesh.scale.set( 1, 1, 1 );
			group.add( mesh );
			clickobjects.push( mesh );
			hoverobjects.push( mesh);
			meshes[meshName] = mesh;
			alert(meshes['Keynes_College']); // Needs fixing
				
			spriteName = meshName.split("_")[0] + " " + meshName.split("_")[1];
			var sprite = makeTextSprite( spriteName, mesh );
			scene.add( sprite );
		};
	}
	
	/*iconMusic.push( meshes['Keynes_College'] );
	makeIcon( iconMusic, 'music' );*/
	
	group.position.set( -36, 0, -9 );
	
	texture = THREE.ImageUtils.loadTexture('assets/images/map.jpg', {}, function() {
		renderer.render(scene);
	})
	mapmaterial = new THREE.MeshBasicMaterial({map: texture})
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 1200, 628, 8, 8 ), mapmaterial );
	plane.rotation.x += 270 * Math.PI / 180;
	scene.add( plane );
	
	
	//////////// RENDERER ////////////
	
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
	///////////// DEPTH //////////////
	
	var depthShader = THREE.ShaderLib[ "depthRGBA" ];
	var depthUniforms = THREE.UniformsUtils.clone( depthShader.uniforms );

	depthMaterial = new THREE.ShaderMaterial( { fragmentShader: depthShader.fragmentShader, vertexShader: depthShader.vertexShader, uniforms: depthUniforms } );
	depthMaterial.blending = THREE.NoBlending;

	////////////// SSAO //////////////
	
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

function makeTextSprite( message, name )
{
	
	var fontface = "Arial";
	
	var fontsize = 12;
	
	var borderColor = { r:255, g:255, b:255, a:1.0 };
	
	var backgroundColor = { r:255, g:255, b:255, a:1.0 };

	var spriteAlignment = THREE.SpriteAlignment.topCenter;
		
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Normal " + fontsize + "px " + fontface;
    
	// get size data (height depends only on font size)
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
	
	// background color
	context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
								  + backgroundColor.b + "," + backgroundColor.a + ")";
	// border color
	context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
								  + borderColor.b + "," + borderColor.a + ")";

	context.lineWidth = 5;
	roundRect(context, 5/2, 5/2, textWidth + 5, fontsize * 1.4 + 5, 6);
	context.fillStyle = "rgba(0, 0, 0, 1.0)";

	context.fillText( message, 5, fontsize + 5);
	var texture = new THREE.Texture(canvas) 
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture, useScreenCoordinates: false, alignment: spriteAlignment } );
	var sprite = new THREE.Sprite( spriteMaterial );
	
	name.geometry.computeBoundingBox();
	var boundingBox = name.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );

	position.applyMatrix4( name.matrixWorld );
	
	sprite.position.set( position.x - 40, 40, position.z - 10 );
	sprite.scale.set(80,40,1.0);
	return sprite;	
}

// function for drawing rounded rectangles
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

////////// ICON FUNCTION ///////////

function makeIcon( iconArray, iconType ){
	for (var i=0, tot=iconArray.length; i < tot; i++) {
		var spriteMaterial = new THREE.SpriteMaterial( { map: THREE.ImageUtils.loadTexture( 'assets/images/icons/ico_'+iconType+'.png' ), useScreenCoordinates: false } );
		var sprite = new THREE.Sprite( spriteMaterial );
		sprite.scale.set(12,12,1.0);
		iconArray[i].geometry.computeBoundingBox();
		var boundingBox = iconArray[i].geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );

		position.applyMatrix4( iconArray[i].matrixWorld );
		
		sprite.position.set( position.x - 36, 50, position.z - 9 );
		scene.add( sprite );
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
		
		var time = 2000;
		
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
		
		intersects[0].object.geometry.computeBoundingBox();
		var boundingBox = intersects[0].object.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );

		position.applyMatrix4( intersects[0].object.matrixWorld );
		
		$("#slidepanel").toggle("slide", {direction:'left'});
			
		new TWEEN.Tween( camera.position ).to( {
			x: position.x,
			y: 130,
			z: position.z + 150 }, time )
		.easing( TWEEN.Easing.Quadratic.InOut).start();
		
		new TWEEN.Tween( controls.center ).to( {
			x: position.x,
			y: 0,
			z: position.z }, time )
		.easing( TWEEN.Easing.Quadratic.InOut).start();
	}
	
}

//////// MOUSEMOVE EVENT /////////

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