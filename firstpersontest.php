<!DOCTYPE html>
<html lang="en">
<head>
    <title>three.js webgl - orbit controls</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <style>
        body {
            color: #000;
            font-family:Monospace;
            font-size:13px;
            text-align:center;
            font-weight: bold;

            background-color: #bfe6e6;
            margin: 0px;
            overflow: hidden;
        }

        #info {
            color:#000;
            position: absolute;
            top: 0px; width: 100%;
            padding: 5px;

        }

        a {
            color: red;
        }
    </style>
</head>

<body>
    <div id="app"></div>

    <script src="assets/js/three_r62.min.js"></script> 
    <script src="assets/js/controls/OrbitControls_r62.js"></script> 
    
    <script src="assets/js/utils/Detector.js"></script> 
    <script src="assets/js/utils/stats.min.js"></script> 

    <script>

        if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

        var container, stats;

        var camera, controls, scene, renderer;

        var cross;
		
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

        init();
        animate();

        function init() {

            camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 3000 );
            camera.position.z = 0.1;
			camera.position.y = 3.6;

            controls = new THREE.OrbitControls( camera );
            controls.addEventListener( 'change', render );
			controls.minPolarAngle = Math.PI/2.25; 
			controls.maxPolarAngle = Math.PI/1.75; 
			controls.minDistance = 10;
			controls.maxDistance = 10;
			controls.center.set(0, 3.6,-100);

            scene = new THREE.Scene();

            // world
			
            var loader = new THREE.JSONLoader();
            
            loader.load( "assets/models/map.js", function( geometry, materials ) {
                mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
                mesh.material.needsUpdate = true;
                mesh.receiveShadow = true;
                scene.add( mesh );
            } );
			
			for(var i = 0; i < jsonFileNames.length; i++){
				var meshName = jsonFileNames[i].split("/")[2].split(".")[0];
				loader.load(jsonFileNames[i], makeHandler(meshName));
			}
			
			function makeHandler(meshName) {
				return function(geometry, materials) {
					var material = new THREE.MeshPhongMaterial( { color: 0xaaaaaa, specular: 0x3333333, ambient: 0x222222, wrapAround: true, transparent: true } );
					mesh = new THREE.Mesh( geometry, material );
					mesh.scale.set( 1, 1, 1 );
					scene.add( mesh );
				};
			}

            // lights

            light = new THREE.DirectionalLight( 0xf5debc );
            light.position.set( 100, 500, -300 );
            scene.add( light );

           var hemiLight = new THREE.HemisphereLight( 0x555555, 0xcccccc, 0.8 ); 
	scene.add( hemiLight );


            // renderer

            renderer = new THREE.WebGLRenderer( { antialias: false } );
            renderer.setSize( window.innerWidth, window.innerHeight );

            container = document.getElementById( 'app' );
            container.appendChild( renderer.domElement );

            stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            stats.domElement.style.zIndex = 100;
            container.appendChild( stats.domElement );

            //

            window.addEventListener( 'resize', onWindowResize, false );

        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

            render();

        }

        function animate() {

            requestAnimationFrame( animate );
            controls.update();

        }

        function render() {

            renderer.render( scene, camera );
            stats.update();

        }


    </script>

</body>
</html>
