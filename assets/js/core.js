var container, stats, camera, scene, scene2, renderer, composer, projector, controls, ground, group = new THREE.Object3D(), group2 = new THREE.Object3D(), satellite;
var depthMaterial, depthTarget;
var clickobjects = [], tweetobjects = [], zoomobjects = [], sprites = [], locationIcons = [], teachingIcons = [], communityIcons = [], tweetIcons = [], visitorParking = [], permitParking = [], cycleArray = [], busArray = [], maintenanceIcons = [], adminIcons = [], rotate = [], investmentArray = [], developmentArray = [], roompriceArray = [], populationArray = [], subjectscoreArray = [], subjectsatisfactionArray = [], entrypointsArray = [], sizeArray = [], buildings = [], roadArray = [], darwinRoute = [], keynesRoute = [], parkwoodRoute = [], cycleRoute = [], footPath = [], zoomArray = [], textlookat = [], busIcons = [], factIcons = [], foodIcons = [], iconHide = [];
var jsonFileNames = [
	'assets/models/Aphra_and_Lumley_Theatre.js',
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
	'assets/models/Grimond.js',
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
	'assets/models/Woolf_College.js',
	'assets/models/Woolf_Pavillion.js',
	'assets/models/Woolf_Residential.js'
];

var objects = [], plane;
var mouse = new THREE.Vector2(),
offset = new THREE.Vector3(),
INTERSECTED, SELECTED;

var WIDTH = $(window).width();
var HEIGHT = $(window).height();

var maincolour = 0xaaaaaa;
var percent = 0;
	
init();
animate();

function init() {
	
	container = document.getElementById("app");
	
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 10, 2000 );
	camera.position.z = 600;
	camera.position.y = 1200;
	camera.position.x = -600;
	
	//////// ORBIT CONTROLS /////////

	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.maxPolarAngle = Math.PI/2.25; 
	controls.minDistance = 200;
	controls.maxDistance = 900;
	controls.enabled = true;
	controls.center.set(0,-10,0);
	
	///////// SCENE SETUP //////////
	
	var preload = new createjs.LoadQueue(true);
	preload.on("complete", handleComplete, this);
	preload.on("fileload", handleLoad, this);
	preload.loadManifest(jsonFileNames);
	preload.loadManifest([
		"assets/models/textures/map.jpg",
		"assets/models/trees2.js",
		"assets/models/cars.js"
	]);
	
	function handleLoad() {
		percent += 1.19;
		$('#preloader #percent').html(Math.round(percent)+'%');
	}
	function handleComplete() {
		$('#status').fadeOut(500);
		$('#preloader').fadeOut(500);
		$('body').css({'overflow':'visible'});
		$('#mapwrapper').show();
		new TWEEN.Tween( camera.position ).to( { x: 0, y: 500, z: 750 }, 3000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
		setTimeout(function(){
			$('#navbar').toggleClass("open close");
		},3000);
		setTimeout(function(){
			$('#leftnav').toggleClass("openleft closeleft");
			if($(window).width() > 676){
				$('#search').fadeIn(500);
			}
			$('#controls').fadeIn(500);
			$('#switchmap').fadeIn(500);
			var visited = $.cookie('visited')
			if (visited == null) {
				$('#cookie').slideDown(500);
				$('.modal-overlay').show();
			}
			$.cookie('visited', 'yes_visited', {
				expires: 1,
				path: '/'
			});
		},3300);
	}

	scene = new THREE.Scene();
	scene2 = new THREE.Scene();
	scene.fog = new THREE.Fog( 0xf0eacc, 500, 1600 );
	
	/////////// LIGHTS ////////////
	
	var directionalLight = new THREE.DirectionalLight( 0xffffff ,0.5 );
	directionalLight.position.set( 500, 800, 300 )
	directionalLight.castShadow = true;
	directionalLight.shadowDarkness = 0.4;
	directionalLight.shadowMapWidth = 2048;
	directionalLight.shadowMapHeight = 2048;
	
	directionalLight.shadowCameraNear = 1200;
	directionalLight.shadowCameraFar = 2500;
	directionalLight.shadowCameraFov = 50;
	group.add( directionalLight );
	
	var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xcccccc, 1 );
	scene.add( hemiLight );
	
	// lens flares

	var textureFlare0 = THREE.ImageUtils.loadTexture( "assets/models/textures/lensflare0.png" );
	var textureFlare2 = THREE.ImageUtils.loadTexture( "assets/models/textures/lensflare2.png" );
	var textureFlare3 = THREE.ImageUtils.loadTexture( "assets/models/textures/lensflare3.png" );
	
	addLight( 0.55, 0.9, 0.5, 5000, 300, 0 );
	addLight( 0.08, 0.8, 0.5, 400, 300, 0 );
	addLight( 0.995, 0.5, 0.9, 5000, 5000, 0 );

	function addLight( h, s, l, x, y, z ) {

		var light = new THREE.PointLight( 0xffffff, 0.1, 2000 );
		light.color.setHSL( h, s, l );
		light.position.set( x, y, z );
		group.add( light );

		var flareColor = new THREE.Color( 0xffffff );
		flareColor.setHSL( h, s, l + 0.3 );

		var lensFlare = new THREE.LensFlare( textureFlare0, 1000, 0.0, THREE.AdditiveBlending, flareColor );

		

		lensFlare.add( textureFlare3, 60, 0.6, THREE.AdditiveBlending );
		lensFlare.add( textureFlare3, 70, 0.7, THREE.AdditiveBlending );
		lensFlare.add( textureFlare3, 120, 0.9, THREE.AdditiveBlending );
		lensFlare.add( textureFlare3, 70, 1.0, THREE.AdditiveBlending );

		lensFlare.customUpdateCallback = lensFlareUpdateCallback;
		lensFlare.position = light.position;

		group.add( lensFlare );

	}
	
	var cloudtexture = THREE.ImageUtils.loadTexture('assets/models/textures/clouds.png', {}, function() {
		renderer.render(scene, camera);
	});
	cloudtexture.wrapS = THREE.RepeatWrapping;
	cloudtexture.wrapT = THREE.RepeatWrapping;
	cloudtexture.repeat.set( 8, 8 );
	
	var planeGeometry = new THREE.PlaneGeometry(8000,8000,1,1);
	var planeMaterial = new THREE.MeshBasicMaterial({map: cloudtexture, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending, });
	planeMaterial.depthWrite = false;
	planeMaterial.depthTest = false;
	var clouds = new THREE.Mesh(planeGeometry,planeMaterial);
	clouds.position.set(0,200,0);
	clouds.rotation.x = - Math.PI/2;
	clouds.overdraw = true;
	group.add(clouds);
	
	var tweenOne = new TWEEN.Tween( clouds.position ).to( { x: 1000 }, 60000 ).easing( TWEEN.Easing.Linear.None);
	var tweenTwo = new TWEEN.Tween( clouds.position ).to( { x: 0 }, 0 ).easing( TWEEN.Easing.Linear.None);
			
	tweenOne.chain(tweenTwo);
	tweenTwo.chain(tweenOne);
			
	tweenOne.start();
			
	
	/////////// GEOMETRY /////////////
	
	busRoutes();
	makeParkingOverlay();
	makeCycleRacks();
	makeRoads();
	makeDevelopments();
	//makeZoom();
	makeBusstops();
	makeFacts();
	makeFood();
	
	var sprite = makeZoomSprite("assets/images/icons/ico_keynestock.png");
	sprite.position.set(136,11,29);
	var sprite = makeZoomSprite("assets/images/icons/ico_dolche.png");
	sprite.position.set(140,12,39);
	var sprite = makeZoomSprite("assets/images/icons/ico_freshers_fayre.png");
	sprite.position.set(168,10,18);
	var sprite = makeZoomSprite("assets/images/icons/ico_venue.png");
	sprite.position.set(170,11,32);
	
	var sprite = makeZoomSprite("assets/images/icons/ico_worldfest.png");
	sprite.position.set(320,12,-58);
	var sprite = makeZoomSprite("assets/images/icons/ico_library.png");
	sprite.position.set(330,11,-67);
	var sprite = makeZoomSprite("assets/images/icons/ico_field.png");
	sprite.position.set(346,12,-37);
	var sprite = makeZoomSprite("assets/images/icons/ico_mungos.png");
	sprite.position.set(328,11,-35);
	
	var sprite = makeZoomSprite("assets/images/icons/ico_sport.png");
	sprite.position.set(45,11,-139);
	var sprite = makeZoomSprite("assets/images/icons/ico_hub.png");
	sprite.position.set(57,11,-142);
	
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 1200, 960, 8, 8 ), new THREE.MeshBasicMaterial( { transparent: true, wireframe: true } ) );
	plane.visible = false;
	scene.add( plane );
	plane.rotation.x += 270 * Math.PI / 180;
	
	var loader = new THREE.JSONLoader();
	
	
	loader.load( "assets/models/trees2.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
        mesh.scale.set( 1, 1, 1 );
		mesh.castShadow = true;
		mesh.name = "trees";
		group.add( mesh );
    } );
	
	loader.load( "assets/models/walls.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial({ color: 0x999999, wrapAround: true }) );
        mesh.position.set( 0, 0, 0 );
		mesh.castShadow = true;
		mesh.name = "walls";
		group.add( mesh );
    } );
	
	
	loader.load( "assets/models/cars.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
        mesh.scale.set( 1, 1, 1 );
		mesh.castShadow = true;
		mesh.name = "cars";
		group.add( mesh );
    } );
	
	satellite = THREE.ImageUtils.loadTexture('assets/models/textures/satellite.jpg', {}, function() {
		renderer.render(scene, camera);
	});
	nosatellite = THREE.ImageUtils.loadTexture('assets/models/textures/map.jpg', {}, function() {
		renderer.render(scene, camera);
	});
	/*var normalmap = THREE.ImageUtils.loadTexture('assets/models/textures/normalmap.jpg', {}, function() {
		renderer.render(scene, camera);
	});*/
	
	loader.load( "assets/models/map.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
		//mesh.material.materials[0].normalMap = normalmap;
        mesh.scale.set( 1, 1, 1 );
		mesh.position.set( 0, 0, 0);
		mesh.material.needsUpdate = true;
		mesh.receiveShadow = true;
		mesh.name = "map";
		group.add( mesh );
    } );
	
	for(var i = 0; i < jsonFileNames.length; i++){
		var meshName = jsonFileNames[i].split("/")[2].split(".")[0];
		loader.load(jsonFileNames[i], makeHandler(meshName));
	}
	
	function makeHandler(meshName) {
		return function(geometry, materials) {
			var material = new THREE.MeshPhongMaterial( { color: maincolour, specular: 0x3333333, ambient: 0x222222, wrapAround: true, transparent: true, shading: THREE.FlatShading } );
			mesh = new THREE.Mesh( geometry, material );
			mesh.scale.set( 1, 1, 1 );
			mesh.position.set( 0, -0.001, 0 );
			clickobjects.push( mesh );
			mesh.castShadow = true;
			group.add( mesh );
			mesh.name = meshName;
			
			var spriteName = meshName.replace(/_/g, ' ');
			var sprite = makeTextSprite( spriteName, mesh );
			
			makeIcon(mesh);
			tweetIcon(mesh);
		};
	}
	
	objects.push( group );


	//////////// RENDERER ////////////
	
	scene.add( group );
	scene2.add( group2 );
	
	projector = new THREE.Projector();
	
	var canvas = document.getElementById("canvas");
	renderer = new THREE.WebGLRenderer({canvas:canvas, alpha: true, antialiasing: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0x6fabbf, 1);
	renderer.shadowMapEnabled = false;
	renderer.shadowMapSoft = true;
	renderer.shadowMapType = THREE.PCFSoftShadowMap;

	container.appendChild( renderer.domElement );
	container.style.cursor = 'move';

	document.getElementById("mapwrapper").addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.getElementById("app").addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.getElementById("app").addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.getElementById("mapwrapper").addEventListener( 'mouseup', stopdrag, false );
	document.getElementById("app").addEventListener( 'touchstart', dragStart, false );
	document.getElementById("app").addEventListener( 'touchend', dragEnd, false );
	document.getElementById("mapwrapper").addEventListener( 'touchmove', dragMove, false );
	document.getElementById("canvas").addEventListener("webglcontextlost", function(event) {
		event.preventDefault();
		alert("WebGL has crashed because of a hardware problem. Please reload WebGL and refresh the page.");
	}, false);
	document.getElementById("canvas").addEventListener("webglcontextrestored", function(event) {
	  	init();
		animate();
	}, false);

	window.addEventListener( 'resize', onWindowResize, false );

	
	function lensFlareUpdateCallback( object ) {

		var f, fl = object.lensFlares.length;
		var flare;
		var vecX = -object.positionScreen.x * 2;
		var vecY = -object.positionScreen.y * 2;


		for( f = 0; f < fl; f++ ) {

			   flare = object.lensFlares[ f ];

			   flare.x = object.positionScreen.x + vecX * flare.distance;
			   flare.y = object.positionScreen.y + vecY * flare.distance;

			   flare.rotation = 0;

		}

		object.lensFlares[ 2 ].y += 0.025;
		object.lensFlares[ 3 ].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad( 45 );

	}

	
	///////////// DEPTH //////////////
	
	var depthShader = THREE.ShaderLib[ "depthRGBA" ];
	var depthUniforms = THREE.UniformsUtils.clone( depthShader.uniforms );

	depthMaterial = new THREE.ShaderMaterial( { fragmentShader: depthShader.fragmentShader, vertexShader: depthShader.vertexShader, uniforms: depthUniforms } );
	depthMaterial.blending = THREE.NoBlending;

	////////////// SSAO //////////////
	
	composer = new THREE.EffectComposer( renderer );
	composer.addPass( new THREE.RenderPass( scene, camera ) );

	depthTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat } );
	
	var tiltH = new THREE.ShaderPass( THREE.HorizontalTiltShiftShader );
	tiltH.uniforms[ 'h' ].value = 2 / window.innerWidth;
	tiltH.uniforms[ 'r' ].value = 0.5;
	//composer.addPass( tiltH );
	
	var tiltV = new THREE.ShaderPass( THREE.VerticalTiltShiftShader );
	tiltV.uniforms[ 'v' ].value = 2 / window.innerHeight;
	tiltV.uniforms[ 'r' ].value = 0.5;
	//composer.addPass( tiltV );
	
	var vignette = new THREE.ShaderPass( THREE.VignetteShader );
	vignette.uniforms[ 'darkness' ].value = 0;
	vignette.uniforms[ 'offset' ].value = 1;
	composer.addPass( vignette );
	
	var effect = new THREE.ShaderPass( THREE.SSAOShader );
	effect.uniforms[ 'tDepth' ].value = depthTarget;
	effect.uniforms[ 'size' ].value.set( window.innerWidth * 1, window.innerHeight * 1 );
	effect.uniforms[ 'cameraNear' ].value = camera.near;
	effect.uniforms[ 'cameraFar' ].value = camera.far;
	effect.renderToScreen = true;
	composer.addPass( effect );
	
}

var modal, tweetmodal, busmodal, factmodal, foodmodal;

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

		left = percX * $(window).innerWidth();
		top = percY * $(window).innerHeight();
				
		leftoffset = (left - $("#modalpanel").innerWidth() / 2);
		topoffset = (top - $("#modalpanel").innerHeight());
		
		$("#modalpanel")
				.css('left', leftoffset + 'px')
				.css('top', topoffset + 'px');
				
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

		left = percX * $(window).innerWidth();
		top = percY * $(window).innerHeight();
				
		leftoffset = (left - $(tweetcontainer).innerWidth() / 2);
		topoffset = (top - $(tweetcontainer).innerHeight());
		
		$(tweetcontainer)
				.css('left', leftoffset + 'px')
				.css('top', topoffset + 'px');	
					
	}if(busmodal != null){
		
		var visibleWidth, visibleHeight, p, v, percX, percY, left, top;
		
		busmodal.geometry.computeBoundingBox();
		var boundingBox = busmodal.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( busmodal.matrixWorld );
		
		p = new THREE.Vector3(position.x,position.y - 7,position.z);
		v = projector.projectVector(p, camera);
		percX = (v.x + 1) / 2;
		percY = (-v.y + 1) / 2;

		left = percX * $(window).innerWidth();
		top = percY * $(window).innerHeight();
				
		leftoffset = (left - $(".busmodal").innerWidth() / 2);
		topoffset = (top - $(".busmodal").innerHeight());
		
		$(".busmodal")
				.css('left', leftoffset + 'px')
				.css('top', topoffset + 'px');	
	}if(factmodal != null){
		
		var visibleWidth, visibleHeight, p, v, percX, percY, left, top;
		
		factmodal.geometry.computeBoundingBox();
		var boundingBox = factmodal.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( factmodal.matrixWorld );
		
		p = new THREE.Vector3(position.x,position.y - 7,position.z);
		v = projector.projectVector(p, camera);
		percX = (v.x + 1) / 2;
		percY = (-v.y + 1) / 2;

		left = percX * $(window).innerWidth();
		top = percY * $(window).innerHeight();
				
		leftoffset = (left - $("#factmodal").innerWidth() / 2);
		topoffset = (top - $("#factmodal").innerHeight());
		
		$("#factmodal")
				.css('left', leftoffset + 'px')
				.css('top', topoffset + 'px');	
	}if(foodmodal != null){
		
		var visibleWidth, visibleHeight, p, v, percX, percY, left, top;
		
		foodmodal.geometry.computeBoundingBox();
		var boundingBox = foodmodal.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( foodmodal.matrixWorld );
		
		p = new THREE.Vector3(position.x,position.y - 7,position.z);
		v = projector.projectVector(p, camera);
		percX = (v.x + 1) / 2;
		percY = (-v.y + 1) / 2;

		left = percX * $(window).innerWidth();
		top = percY * $(window).innerHeight();
				
		leftoffset = (left - $("#foodmodal").innerWidth() / 2);
		topoffset = (top - $("#foodmodal").innerHeight());
		
		$("#foodmodal")
				.css('left', leftoffset + 'px')
				.css('top', topoffset + 'px');	
	}
}

function animate() {
	requestAnimationFrame( animate );
	group2.position.copy(group.position);
	TWEEN.update();
	controls.update();
	positionTrackingOverlay();
	//scene.overrideMaterial = depthMaterial;
	for (var i=0, tot=textlookat.length; i < tot; i++) {
		textlookat[i].lookAt(new THREE.Vector3(camera.position.x - group.position.x,camera.position.y,camera.position.z - group.position.z));
		textlookat[i].rotation.x = camera.rotation.x; 
		textlookat[i].rotation.y = camera.rotation.y;
		textlookat[i].rotation.z = camera.rotation.z;
	}
	if($('#searchBox').val() != ''){
		$('.search-error').show();
	}else{
		$('.search-error a').css('color','#999');
		$('#searchBox').css('color','#666');
		$('.search-error').hide();
	}
	render();
	//scene.overrideMaterial = null;
	//composer.render();
}
function render() {
	renderer.render(scene, camera/*, depthTarget*/);
	
}