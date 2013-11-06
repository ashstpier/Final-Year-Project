var container, stats, camera, scene, renderer, projector, controls, group = new THREE.Object3D();
var depthMaterial, depthTarget, composer;
var clickobjects = [], iconAcademic = [], iconLocation = [], iconMusic = [], iconAnnouncement = [], sprites = [];
var jsonFileNames = [
	'assets/models/Keynes_College.js',
	'assets/models/Templeman_Library.js'
];

var objects = [], plane;
var mouse = new THREE.Vector2(),
offset = new THREE.Vector3(),
INTERSECTED, SELECTED;
	
init();
animate();

function init() {
	
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 10, 2000 );
	camera.position.z = 500;
	camera.position.y = 400;
	
	//////// ORBIT CONTROLS /////////

	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );
	controls.maxPolarAngle = Math.PI/2.25; 
	controls.minDistance = 200;
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
	
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000, 8, 8 ), new THREE.MeshBasicMaterial( { transparent: true, wireframe: true } ) );
	plane.visible = false;
	scene.add( plane );
	plane.rotation.x += 270 * Math.PI / 180;
		
	group.add( ground )
	
	var material = new THREE.MeshLambertMaterial({ color: 0xcccccc });
	
	var loader = new THREE.JSONLoader();
	
	for(var i = 0; i < jsonFileNames.length; i++){
		var meshName = jsonFileNames[i].split("/")[2].split(".")[0];
		loader.load(jsonFileNames[i], makeHandler(meshName));
	}
	
	var meshes = new Object();
	
	function makeHandler(meshName) {
		return function(geometry, materials) {
			mesh =  new THREE.Mesh( geometry, material );
			mesh.scale.set( 1, 1, 1 );
			mesh.position.set( -36, 0, -9 );
			clickobjects.push( mesh );
			group.add( mesh );
				
			spriteName = meshName.split("_")[0] + " " + meshName.split("_")[1];
			var sprite = makeTextSprite( spriteName, mesh );
			scene.add( sprite );
			sprites.push( sprite );
			group.add( sprite );
			
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
	stats.domElement.style.top = '0px';
	stats.domElement.style.right = '0px';
	container.appendChild( stats.domElement );
	container.style.cursor = 'move';

	renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
	renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
	renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );

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

//var test = scene.getObjectByName( 'sprite', true );