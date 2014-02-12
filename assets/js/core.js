var container, stats, camera, scene, renderer, composer, projector, controls, ground, particleSystem, group = new THREE.Object3D(), group = new THREE.Object3D(), xml;
var depthMaterial, depthTarget, composer;
var clickobjects = [], tweetobjects = [], sprites = [], locationIcons = [], teachingIcons = [], communityIcons = [], tweetIcons = [], visitorParking = [], permitParking = [], cycleArray = [], busArray = [], maintenanceIcons = [], adminIcons = [], rotate = [], investmentArray = [], developmentArray = [], roompriceArray = [], populationArray = [], subjectscoreArray = [], subjectsatisfactionArray = [], entrypointsArray = [], sizeArray = [];
var jsonFileNames = [
	'assets/models/Aphra_Theatre.js',
	'assets/models/Becket_Court.js',
	'assets/models/Bishopden_Court.js',
	'assets/models/Boiler_House.js',
	'assets/models/Bossenden_Court.js',
	'assets/models/Campus_Watch.js',
	'assets/models/Careers_Employability_Service.js',
	'assets/models/Clowes_Court.js',
	'assets/models/Colyer_Fergusson.js',
	'assets/models/Cornwallis_George_Allen_Wing.js',
	'assets/models/Cornwallis_Mathematics_Institute.js',
	'assets/models/Cornwallis_North_East.js',
	'assets/models/Cornwallis_North_West.js',
	'assets/models/Cornwallis_South_East.js',
	'assets/models/Cornwallis_South_West.js',
	'assets/models/Cornwallis_South.js',
	'assets/models/Cornwallis_West.js',
	'assets/models/Darwin_College.js',
	'assets/models/Darwin_Houses.js',
	'assets/models/Denstead_Court.js',
	'assets/models/Eliot_College.js',
	'assets/models/Ellenden_Court.js',
	'assets/models/Estates_Department.js',
	'assets/models/Farthings_Court.js',
	'assets/models/Grimmond.js',
	'assets/models/Grimshill_Court.js',
	'assets/models/Ground_Maintenance.js',
	'assets/models/Gulbenkian.js',
	'assets/models/Homestall_Court.js',
	'assets/models/Hothe_Court.js',
	'assets/models/Ingram.js',
	'assets/models/Innovation_Center.js',
	'assets/models/Jarman.js',
	'assets/models/Jennison.js',
	'assets/models/Kemsdale_Court.js',
	'assets/models/Kent_Business_School.js',
	'assets/models/Kent_Enterprise_Hub.js',
	'assets/models/Kent_Law_School.js',
	'assets/models/Keynes_College.js',
	'assets/models/Keynes_Flats.js',
	'assets/models/Keynes_Houses.js',
	'assets/models/Locke.js',
	'assets/models/Lypeatt_Court.js',
	'assets/models/Mandela_Building.js',
	'assets/models/Marley_Court.js',
	'assets/models/Marlowe.js',
	'assets/models/Missing_Link.js',
	'assets/models/Nickle_Court.js',
	'assets/models/Oaks_Day_Nursery.js',
	'assets/models/Olive_Cottages.js',
	'assets/models/Parkwood_Administration.js',
	'assets/models/Parkwood_Shop.js',
	'assets/models/Purchas_Court.js',
	'assets/models/Registry.js',
	'assets/models/Research_and_Development_Centre.js',
	'assets/models/Rothford.js',
	'assets/models/Rutherford_Annexe.js',
	'assets/models/Rutherford_College.js',
	'assets/models/Rutherford_Extension.js',
	'assets/models/Senate.js',
	'assets/models/Sports_Centre.js',
	'assets/models/Sports_Pavillion.js',
	'assets/models/Stacey.js',
	'assets/models/Stock_Court.js',
	'assets/models/Tanglewood.js',
	'assets/models/Templeman_Library.js',
	'assets/models/Thornden_Court.js',
	'assets/models/Tudor_Court.js',
	'assets/models/Tyler_Court_A.js',
	'assets/models/Tyler_Court_B.js',
	'assets/models/Tyler_Court_C.js',
	'assets/models/UELT.js',
	'assets/models/University_Medical_Centre.js',
	'assets/models/Venue.js',
	'assets/models/Willows_Court.js',
	'assets/models/Woodlands.js',
	'assets/models/Woodys.js',
	'assets/models/Woolf_Blocks.js',
	'assets/models/Woolf_Main.js',
	'assets/models/Woolf_Pavillion.js',
	'assets/models/Woolf_Residential.js'
];

var objects = [], plane;
var mouse = new THREE.Vector2(),
offset = new THREE.Vector3(),
INTERSECTED, SELECTED;

var WIDTH = $(window).width();
var HEIGHT = $(window).height();

var maincolour = 0xaba7a2;
	
init();
animate();

function init() {
	
	container = document.createElement( 'div' );
	container.id = 'app';
	document.getElementById("mapwrapper").appendChild( container );
	
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 10, 2000 );
	camera.position.z = 0;
	camera.position.y = 700;
	
	//////// ORBIT CONTROLS /////////

	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.maxPolarAngle = Math.PI/2.25; 
	controls.minDistance = 160;
	controls.maxDistance = 700;
	controls.enabled = true;
	controls.center.set(0,-10,0);
	
	///////// SCENE SETUP //////////

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0xffffff, 100, 1800 );
	
	/////////// LIGHTS ////////////
	
	var directionalLight = new THREE.DirectionalLight( 0xffffff ,0.9 );
	directionalLight.position.set( 3, 15, 3 )
	scene.add( directionalLight );
	
	var hemiLight = new THREE.HemisphereLight( 0xeeeeee, 0x999999, 0.8 ); 
	scene.add( hemiLight );
	

	/////////// GEOMETRY /////////////
	
	/*
	texture = THREE.ImageUtils.loadTexture('assets/images/map.jpg', {}, function() {
		renderer.render(scene);
	})
	mapmaterial = new THREE.MeshBasicMaterial({map: texture})
	ground = new THREE.Mesh( new THREE.PlaneGeometry( 1200, 960, 8, 8 ), mapmaterial );
	ground.rotation.x += 270 * Math.PI / 180;
	ground.material.needsUpdate = true;
	scene.add( ground );
	group.add( ground );
	*/
	
	busRoutes();
	makeParkingOverlay();
	makeCycleRacks();
	
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 1200, 960, 8, 8 ), new THREE.MeshBasicMaterial( { transparent: true, wireframe: true } ) );
	plane.visible = false;
	scene.add( plane );
	plane.rotation.x += 270 * Math.PI / 180;
	
	var loader = new THREE.JSONLoader();
	
	
	loader.load( "assets/models/trees.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
        mesh.scale.set( 1, 1, 1 );
		group.add( mesh );
    } );
	
	loader.load( "assets/models/forest.js", function( geometry, materials ) {
		mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
        mesh.scale.set( 1, 1, 1 );
		group.add( mesh );
		
        mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
        mesh.scale.set( 1, 1, 1 );
		mesh.position.set( 0, 4, 0 );
		group.add( mesh );
    } );
	
	loader.load( "assets/models/walls.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial({ color: maincolour, wrapAround: true }) );
        mesh.scale.set( 1, 1, 1 );
		group.add( mesh );
    } );
	
	loader.load( "assets/models/cars.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
        mesh.scale.set( 1, 1, 1 );
		group.add( mesh );
    } );
	
	loader.load( "assets/models/map.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
        mesh.scale.set( 1, 1, 1 );
		mesh.position.set( 0, 0, 0);
		group.add( mesh );
    } );
	
	for(var i = 0; i < jsonFileNames.length; i++){
		var meshName = jsonFileNames[i].split("/")[2].split(".")[0];
		loader.load(jsonFileNames[i], makeHandler(meshName));
	}
	
	function makeHandler(meshName) {
		return function(geometry, materials) {
			var material = new THREE.MeshLambertMaterial({ color: maincolour, wrapAround: true, transparent: true });
			mesh = new THREE.Mesh( geometry, material );
			mesh.scale.set( 1, 1, 1 );
			mesh.position.set( 0, -0.1, 0 );
			clickobjects.push( mesh );
			group.add( mesh );
			mesh.name = meshName;
			
			var spriteName = meshName.replace(/_/g, ' ');
			var sprite = makeTextSprite( spriteName, mesh );
			scene.add( sprite );
			sprites.push( sprite );
			group.add( sprite );
			
			sprite.material.opacity = 0;
			makeIcon(mesh);
			tweetIcon(mesh);
		};
	}
	
	objects.push( group );
	
	//////////// RENDERER ////////////
	
	scene.add( group );
	
	projector = new THREE.Projector();

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	container.appendChild( renderer.domElement );

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.bottom = '0px';
	stats.domElement.style.right = '0px';
	container.appendChild( stats.domElement );
	container.style.cursor = 'move';
	
	$.ajax({
		type: "GET",
		url: "assets/slides.xml",
		dataType: "xml",
		success: function(data) { xml = data;}
	});

	document.getElementById("mapwrapper").addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.getElementById("app").addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.getElementById("app").addEventListener( 'mouseup', onDocumentMouseUp, false );

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
	
	/*
	composer = new THREE.EffectComposer( renderer );
	composer.setSize(window.innerWidth, window.innerHeight);
	composer.addPass( new THREE.RenderPass( scene, camera ) );
	
	var vignette = new THREE.ShaderPass( THREE.VignetteShader );
	vignette.uniforms[ 'darkness' ].value = 0.8;
	composer.addPass( vignette )
	
	var tiltH = new THREE.ShaderPass( THREE.HorizontalTiltShiftShader );
	tiltH.uniforms[ 'h' ].value = 2 / window.innerWidth;
	tiltH.uniforms[ 'r' ].value = 0.5;
	composer.addPass( tiltH );
	
	var tiltV = new THREE.ShaderPass( THREE.VerticalTiltShiftShader );
	tiltV.uniforms[ 'v' ].value = 2 / window.innerHeight;
	tiltV.uniforms[ 'r' ].value = 0.5;
	tiltV.renderToScreen = true;
	composer.addPass( tiltV );
	
	tiltH.material.transparent = true;
	tiltV.material.transparent = true;
	vignette.material.transparent = true;
	*/
	
	
	/*
	var particleCount = 10,
    particles = new THREE.Geometry(),
    pMaterial = new THREE.ParticleBasicMaterial({
	  color: 0x666666,
	  size: 20,
	  map: THREE.ImageUtils.loadTexture(
		"assets/images/particle.png"
	  ),
	  transparent: true,
	  depthWrite: false
	});
	for (var p = 0; p < particleCount; p++) {
	  var pX = Math.random() * 500 - 250,
		  pY = Math.random() * 100,
		  pZ = Math.random() * 500 - 250,
		  particle = new THREE.Vertex(
			new THREE.Vector3(pX, pY, pZ)
		  );
	  particles.vertices.push(particle);
	}
	particleSystem = new THREE.ParticleSystem(
		particles,
		pMaterial);
		
	particleSystem.sortParticles = true;
	
	particle.velocity = new THREE.Vector3(0,-Math.random(),0);
	group.add(particleSystem);
	*/
	
}

var modal, tweetmodal;

function positionTrackingOverlay()
{
	var visibleWidth, visibleHeight, p, v, percX, percY, left, top, widthPercentage, heightPercentage;
	
	if(modal != null){
		
		modal.geometry.computeBoundingBox();
		var boundingBox = modal.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( modal.matrixWorld );
		
		p = position.clone();

		v = projector.projectVector(p, camera);

		percX = (v.x + 1) / 2;
		percY = (-v.y + 1) / 2;

		left = percX * WIDTH;
		top = percY * HEIGHT;
		
		widthPercentage = (left - $("#modalpanel").width() / 2) / WIDTH * 100;
		heightPercentage = (top - $("#modalpanel").height()) / HEIGHT * 100;
		
		$("#modalpanel")
				.css('left', widthPercentage + '%')
				.css('top', heightPercentage + '%');
				
	}if(tweetmodal != null){
		
		var visibleWidth, visibleHeight, p, v, percX, percY, left, top;
		
		tweetmodal.geometry.computeBoundingBox();
		var boundingBox = tweetmodal.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( tweetmodal.matrixWorld );
		
		p = position.clone();
		v = projector.projectVector(p, camera);
		percX = (v.x + 1) / 2;
		percY = (-v.y + 1) / 2;

		left = percX * WIDTH;
		top = percY * HEIGHT;
				
		widthPercentage = (left - $(".tweetpanel").width() / 2) / WIDTH * 100;
		heightPercentage = (top - $(".tweetpanel").height()) / HEIGHT * 100;
		
		$(".tweetpanel")
				.css('left', widthPercentage + '%')
				.css('top', heightPercentage + '%');	
	}
}

function animate() {
	TWEEN.update();
	controls.update();
	stats.update();
	//scene.overrideMaterial = depthMaterial;
	//particleSystem.rotation.y += 0.001;
	render();
	positionTrackingOverlay();
	//scene.overrideMaterial = null;
	//composer.render();
	requestAnimationFrame( animate );
}
function render() {
	renderer.render(scene, camera);
	//composer.render();
}