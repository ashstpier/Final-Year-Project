var container, stats, camera, scene, renderer, projector, controls, ground, group = new THREE.Object3D(), xml;
var depthMaterial, depthTarget, composer;
var clickobjects = [], iconAcademic = [], iconLocation = [], iconMusic = [], iconAnnouncement = [], sprites = [], locationIcons = [];
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
	'assets/models/Eliot_Extension.js',
	'assets/models/Ellenden_Court.js',
	'assets/models/Estates_Department.js',
	'assets/models/Farthings_Court.js',
	'assets/models/Giles_Lane_Teaching_Complex.js',
	'assets/models/Grimmond.js',
	'assets/models/Grimshill_Court.js',
	'assets/models/Ground_Maintenance.js',
	'assets/models/Gulbenkian.js',
	'assets/models/Homestall_Court.js',
	'assets/models/Hothe_Court.js',
	'assets/models/Ingram.js',
	'assets/models/Jarman.js',
	'assets/models/Jennison.js',
	'assets/models/Kemsdale_Court.js',
	'assets/models/Kent_Business_School.js',
	'assets/models/Kent_Enterprise_Hub.js',
	'assets/models/Kent_Law_School.js',
	'assets/models/Keynes_College.js',
	'assets/models/Keynes_Flats.js',
	'assets/models/Locke.js',
	'assets/models/Lypeatt_Court.js',
	'assets/models/Mandela_Building.js',
	'assets/models/Marley_Court.js',
	'assets/models/Marlowe.js',
	'assets/models/Missing_Link.js',
	'assets/models/NatWest.js',
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
	'assets/models/Rutherford_Ground_Extension.js',
	'assets/models/Santander.js',
	'assets/models/Senate.js',
	'assets/models/Sports_Centre.js',
	'assets/models/Sports_Pavillion.js',
	'assets/models/Stacey.js',
	'assets/models/Stock_Court.js',
	'assets/models/Tanglewood.js',
	'assets/models/Telephone_Exchange.js',
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
	'assets/models/Woolf_Flats.js',
	'assets/models/Woolf_Main.js',
	'assets/models/Woolf_Pavillion.js',
	'assets/models/Woolf_Residential.js'
];

var buildingNames = [
	'Aphra Theatre',
	'Becket Court',
	'Bishopden Court',
	'Boiler House',
	'Bossenden Court',
	'Campus Watch',
	'Careers Employability Service',
	'Clowes Court',
	'Colyer Fergusson',
	'Cornwallis George Allen Wing',
	'Cornwallis Mathematics Institute',
	'Cornwallis North East',
	'Cornwallis North West',
	'Cornwallis South East',
	'Cornwallis South West',
	'Cornwallis South',
	'Cornwallis West',
	'Darwin College',
	'Darwin Houses',
	'Denstead Court',
	'Eliot College',
	'Eliot Extension',
	'Ellenden Court',
	'Estates Department',
	'Farthings Court',
	'Giles Lane Teaching Complex',
	'Grimmond',
	'Grimshill Court',
	'Ground Maintenance',
	'Gulbenkian',
	'Homestall Court',
	'Hothe Court',
	'Ingram',
	'Jarman',
	'Jennison',
	'Kemsdale Court',
	'Kent Business School',
	'Kent Enterprise Hub',
	'Kent Law School',
	'Keynes College',
	'Keynes Flats',
	'Locke',
	'Lypeatt Court',
	'Mandela Building',
	'Marley Court',
	'Marlowe',
	'Missing Link',
	'NatWest',
	'Nickle Court',
	'Oaks Day Nursery',
	'Olive Cottages',
	'Parkwood Administration',
	'Parkwood Shop',
	'Purchas Court',
	'Registry',
	'Research and Development Centre',
	'Rothford',
	'Rutherford Annexe',
	'Rutherford College',
	'Rutherford Extension',
	'Rutherford Ground Extension',
	'Santander',
	'Senate',
	'Sports Centre',
	'Sports Pavillion',
	'Stacey',
	'Stock Court',
	'Tanglewood',
	'Telephone Exchange',
	'Templeman Library',
	'Thornden Court',
	'Tudor Court',
	'Tyler Court A',
	'Tyler Court B',
	'Tyler Court C',
	'UELT',
	'University Medical Centre',
	'Venue',
	'Willows Court',
	'Woodlands',
	'Woodys',
	'Woolf Flats',
	'Woolf Main',
	'Woolf Pavillion',
	'Woolf Residential'
];

var objects = [], plane;
var mouse = new THREE.Vector2(),
offset = new THREE.Vector3(),
INTERSECTED, SELECTED;

var WIDTH = $(window).width();
var HEIGHT = $(window).height();
	
init();
animate();

function init() {
	
	container = document.createElement( 'div' );
	container.id = 'app';
	document.getElementById("wrapper").appendChild( container );
	
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 10, 2000 );
	camera.position.z = 500;
	camera.position.y = 200;
	
	//////// ORBIT CONTROLS /////////

	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.maxPolarAngle = Math.PI/2.25; 
	controls.minDistance = 150;
	controls.maxDistance = 500;
	controls.enabled = true;
	
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
	
	texture = THREE.ImageUtils.loadTexture('assets/images/map.jpg', {}, function() {
		renderer.render(scene);
	})
	mapmaterial = new THREE.MeshBasicMaterial({map: texture})
	ground = new THREE.Mesh( new THREE.PlaneGeometry( 1200, 628, 8, 8 ), mapmaterial );
	ground.rotation.x += 270 * Math.PI / 180;
	scene.add( ground );
	
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 1200, 628, 8, 8 ), new THREE.MeshBasicMaterial( { transparent: true, wireframe: true } ) );
	plane.visible = false;
	scene.add( plane );
	plane.rotation.x += 270 * Math.PI / 180;
		
	group.add( ground )
	
	var material = new THREE.MeshLambertMaterial({ color: 0xcccccc });
	
	var loader = new THREE.JSONLoader();
	
	for(var i = 0; i < jsonFileNames.length; i++){
		var spriteName = buildingNames[i];
		var meshName = jsonFileNames[i].split("/")[2].split(".")[0];
		loader.load(jsonFileNames[i], makeHandler(meshName, spriteName));
	}
	
	function makeHandler(meshName, spriteName) {
		return function(geometry, materials) {
			mesh =  new THREE.Mesh( geometry, material );
			mesh.scale.set( 1, 1, 1 );
			mesh.position.set( -36, 0, -9 );
			clickobjects.push( mesh );
			group.add( mesh );
			mesh.name = meshName;
				
			var sprite = makeTextSprite( spriteName, mesh );
			scene.add( sprite );
			sprites.push( sprite );
			group.add( sprite );
			
			sprite.material.opacity = 0;
			makeIcon(mesh);
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

	document.getElementById("app").addEventListener( 'mousemove', onDocumentMouseMove, false );
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
	
}

var modal;

function positionTrackingOverlay()
{
	if(modal != null){
		var visibleWidth, visibleHeight, p, v, percX, percY, left, top;

		// this will give us position relative to the world
		
		modal.geometry.computeBoundingBox();
		var boundingBox = modal.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( modal.matrixWorld );
		
		p = position.clone();

		// projectVector will translate position to 2d
		v = projector.projectVector(p, camera);

		// translate our vector so that percX=0 represents
		// the left edge, percX=1 is the right edge,
		// percY=0 is the top edge, and percY=1 is the bottom edge.
		percX = (v.x + 1) / 2;
		percY = (-v.y + 1) / 2;


		// scale these values to our viewport size
		left = percX * WIDTH;
		top = percY * HEIGHT;
		
		var widthPercentage = (left - $("#modalpanel").width() / 2) / WIDTH * 100;
		var heightPercentage = (top - $("#modalpanel").height()) / HEIGHT * 100;
		
		// position the overlay so that it's center is on top of
		// the sphere we're tracking
		$("#modalpanel")
				.css('left', widthPercentage + '%')
				.css('top', heightPercentage + '%');
	}
}

//var test = scene.getObjectByName( 'sprite', true );