function makeTextSprite( message, name ){
	var fontface = "Arial";
	var fontsize = 15;
	var spriteAlignment = THREE.SpriteAlignment.topLeft;
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Normal " + fontsize + "px " + fontface;
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
	context.fillStyle   = "rgba(255,255,255,1)";
	context.strokeStyle = "rgba(255,255,255,0)";

	context.lineWidth = 5;
	roundRect(context, 5/2, 5/2, textWidth + 5, fontsize * 1.4 + 5, 1);
	context.fillStyle = "#666666";

	context.fillText( message, 5, fontsize + 5);
	var texture = new THREE.Texture(canvas) 
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture, useScreenCoordinates: false, alignment: spriteAlignment, transparent: true } );
	var sprite = new THREE.Sprite( spriteMaterial );
	
	name.geometry.computeBoundingBox();
	var boundingBox = name.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );
	position.applyMatrix4( name.matrixWorld );
	
	sprite.position.set( position.x - 10, boundingBox.max.y + 12, position.z );
	sprite.scale.set(60,30,1.0);
	sprite.material.opacity = 0;
	sprites.push( sprite );
	group.add( sprite );
}

function makeZoomSprite( image ){

	var spriteMaterial = new THREE.SpriteMaterial( { map: THREE.ImageUtils.loadTexture( image ), useScreenCoordinates: false, alignment: THREE.SpriteAlignment.topCenter, transparent: true } );
	var sprite = new THREE.Sprite( spriteMaterial );
	
	sprite.scale.set(8,8,1.0);
	group.add( sprite );
	zoomArray.push(sprite);
	sprite.visible = false;
	
	return sprite;
}

// function for drawing rounded rectangles
function roundRect(ctx, x, y, w, h, r) {
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

function createArrays(array, mesh) {
	array.push(mesh);
}
function createAccommodationData(mesh) {
	$(xml).find("building[label='"+mesh.name+"']").each(function(){
		makeData(mesh, $(this).find('data[type="roomprice"]').text(), roompriceArray);
		makeData(mesh, $(this).find('data[type="population"]').text(), populationArray);
		makeData(mesh, $(this).find('data[type="roomsize"]').text(), sizeArray);
	});
}
function createSubjectData(mesh) {
	$(xml).find("building[label='"+mesh.name+"']").each(function(){
		makeData(mesh, $(this).find('data[type="subjectscore"]').text(), subjectscoreArray);
		makeData(mesh, $(this).find('data[type="subjectsatisfaction"]').text(), subjectsatisfactionArray);
		makeData(mesh, $(this).find('data[type="entrypoints"]').text(), entrypointsArray);
	});
}

function makeIcon(mesh) {
	switch(mesh.name){
		case "Becket_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Bishopden_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Bossenden_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Clowes_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Darwin_Houses":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Denstead_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Eliot_College":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Ellenden_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Farthings_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Grimshill_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Homestall_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Hothe_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Kemsdale_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Keynes_College":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Keynes_Flats":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Keynes_Houses":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Lypeatt_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Marley_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Nickle_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Purchas_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Rutherford_College":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Stock_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Thornden_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Tudor_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Tyler_Court_A":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Tyler_Court_B":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Tyler_Court_C":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Willows_Court":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Woolf_Blocks":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Woolf_Residential":
			createAccommodationData(mesh);
			createArrays(locationIcons, mesh);
			break;
		case "Woolf_Pavillion":
			createArrays(locationIcons, mesh);
			break;
			
			////// TEACHING //////
			
		case "Aphra_and_Lumley_Theatre":
			createArrays(teachingIcons, mesh);
			break;
		case "Boiler_House":
			createArrays(teachingIcons, mesh);
			break;
		case "Colyer_Fergusson":
			createSubjectData(mesh);
			createArrays(teachingIcons, mesh);
			break;
		case "Cornwallis_George_Allen_Wing":
			createArrays(teachingIcons, mesh);
			break;
		case "Cornwallis_Mathematics_Institute":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Cornwallis_North_East":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Cornwallis_North_West":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Cornwallis_South_East":
			createArrays(teachingIcons, mesh);
			break;
		case "Cornwallis_South_West":
			createArrays(teachingIcons, mesh);
			break;
		case "Cornwallis_South":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Cornwallis_West":
			createArrays(teachingIcons, mesh);
			break;
		case "Darwin_College":
			createArrays(teachingIcons, mesh);
			break;
		case "Eliot_College":
			createArrays(teachingIcons, mesh);
			break;
		case "Grimond":
			createArrays(teachingIcons, mesh);
			break;
		case "Gulbenkian":
			createSubjectData(mesh);
			createArrays(communityIcons, mesh);
			break;
		case "Ingram":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Jarman":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Jennison":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Kent_Business_School":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Kent_Law_School":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Keynes_College":
			createArrays(teachingIcons, mesh);
			break;
		case "Marlowe":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Missing_Link":
			createArrays(teachingIcons, mesh);
			break;
		case "Olive_Cottages":
			createArrays(teachingIcons, mesh);
			break;
		case "Rothford":
			createArrays(teachingIcons, mesh);
			break;
		case "Rutherford_Annexe":
			createArrays(teachingIcons, mesh);
			break;
		case "Rutherford_College":
			createArrays(teachingIcons, mesh);
			break;
		case "Rutherford_Extension":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Stacey":
			createArrays(teachingIcons, mesh);
			createSubjectData(mesh);
			break;
		case "Sports_Centre":
			createSubjectData(mesh);
			createArrays(communityIcons, mesh);
			break;
		case "Tanglewood":
			createArrays(teachingIcons, mesh);
			break;
		case "Woodlands":
			createArrays(teachingIcons, mesh);
			break;
		case "Woolf_College":
			createArrays(teachingIcons, mesh);
			break;
			
			////// COMMUNITY //////
			
		case "Colyer_Fergusson":
			createArrays(communityIcons, mesh);
			break;
		case "Gulbenkian":
			createArrays(communityIcons, mesh);
			break;
		case "Sports_Centre":
			createArrays(communityIcons, mesh);
			break;
		case "Sports_Pavillion":
			createArrays(communityIcons, mesh);
			break;
		case "Templeman_Library":
			createArrays(communityIcons, mesh);
			break;
		case "Venue":
			createArrays(communityIcons, mesh);
			break;
		case "Woodys":
			createArrays(communityIcons, mesh);
			break;
		case "Locke":
			createArrays(communityIcons, mesh);
			break;
		case "Parkwood_Shop":
			createArrays(communityIcons, mesh);
			break;
			
			////// MAINTENANCE //////
			
		case "Campus_Watch":
			createArrays(maintenanceIcons, mesh);
			break;
		case "Estates_Department":
			createArrays(maintenanceIcons, mesh);
			break;
		case "Ground_Maintenance":
			createArrays(maintenanceIcons, mesh);
			break;
		case "Oaks_Day_Nursery":
			createArrays(maintenanceIcons, mesh);
			break;
		case "University_Medical_Centre":
			createArrays(maintenanceIcons, mesh);
			break;
			
			////// ADMIN //////
			
		case "Careers_Employability_Service":
			createArrays(adminIcons, mesh);
			break;
		case "Innovation_Center":
			createArrays(adminIcons, mesh);
			break;
		case "Kent_Enterprise_Hub":
			createArrays(adminIcons, mesh);
			break;
		case "Mandela_Building":
			createArrays(adminIcons, mesh);
			break;
		case "Parkwood_Administration":
			createArrays(adminIcons, mesh);
			break;
		case "Registry":
			createArrays(adminIcons, mesh);
			break;
		case "Research_and_Development_Centre":
			createArrays(adminIcons, mesh);
			break;
		case "Senate":
			createArrays(teachingIcons, mesh);
			break;
		case "UELT":
			createArrays(adminIcons, mesh);
			break;
	}
}
function buildIcon(iconArray, iconPicture) {
	var spriteMaterial = new THREE.SpriteMaterial( { map: THREE.ImageUtils.loadTexture( iconPicture ), useScreenCoordinates: false, alignment: THREE.SpriteAlignment.topCenter, transparent: true } );
	var icon = new THREE.Sprite( spriteMaterial );
	icon.scale.set(10,10,1.0);
	mesh.geometry.computeBoundingBox();
	var boundingBox = mesh.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );
	position.applyMatrix4( mesh.matrixWorld );
	
	icon.position.set( position.x, boundingBox.max.y + 60, position.z );
	scene.add( icon );
	group.add( icon);
	iconArray.push( icon );
	icon.material.opacity = 0;
	
	var tweenOne = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 11 }, 1500 ).easing( TWEEN.Easing.Sinusoidal.InOut);
	var tweenTwo = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 10 }, 1500 ).easing( TWEEN.Easing.Sinusoidal.InOut);
	
	tweenOne.chain(tweenTwo);
	tweenTwo.chain(tweenOne);
	
	tweenOne.start();
}
function tweetIcon(mesh) {
	if (
	mesh.name == "Jennison" ||
	mesh.name == "Mandela_Building" || 
	mesh.name == "Careers_Employability_Service" || 
	mesh.name == "Registry" ||
	mesh.name == "Colyer_Fergusson" ||
	mesh.name == "Parkwood_Administration"
	){
		var loader = new THREE.JSONLoader();
		loader.load( "assets/models/twitter.js", function( geometry, materials ) {
			var material = new THREE.MeshLambertMaterial({ color: 0x316f9e, wrapAround: true });
			icon = new THREE.Mesh( geometry, material );
			icon.scale.set(0.18,0.18,0.18);
			textlookat.push(icon);
			
			mesh.geometry.computeBoundingBox();
			var boundingBox = mesh.geometry.boundingBox;
			var position = new THREE.Vector3();
			position.subVectors( boundingBox.max, boundingBox.min );
			position.multiplyScalar( 0.5 );
			position.add( boundingBox.min );
			position.applyMatrix4( mesh.matrixWorld );
			
			icon.name = "tweet-" + mesh.name;
			icon.position.set( position.x, boundingBox.max.y + 10, position.z );
			group.add( icon);
			clickobjects.push( icon );
			tweetIcons.push( icon );
			
			var tweenOne = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 12 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut);
			var tweenTwo = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 10 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut);
			
			tweenOne.chain(tweenTwo);
			tweenTwo.chain(tweenOne);
			
			tweenOne.start();
		});
	}
}

function drawCylinder(vstart, vend, name, colour){
    var HALF_PI = Math.PI * .5;
    var distance = vstart.distanceTo(vend);
    var position  = vend.clone().add(vstart).divideScalar(2);

    var material = new THREE.MeshBasicMaterial({ color: colour, transparent: true, opacity: 0.8 });
	if(colour == 0x333333){
    	var cylinder = new THREE.CylinderGeometry(0.5,0.5,distance,6,6,false);
	}else{
		var cylinder = new THREE.CylinderGeometry(1,1,distance,6,6,false);
	}

    var orientation = new THREE.Matrix4();//a new orientation matrix to offset pivot
    var offsetRotation = new THREE.Matrix4();//a matrix to fix pivot rotation
    var offsetPosition = new THREE.Matrix4();//a matrix to fix pivot position
    orientation.lookAt(vstart,vend,new THREE.Vector3(0,1,0));//look at destination
    offsetRotation.makeRotationX(HALF_PI);//rotate 90 degs on X
    orientation.multiply(offsetRotation);//combine orientation with rotation transformations
    cylinder.applyMatrix(orientation)

    var mesh = new THREE.Mesh(cylinder,material);
    mesh.position=position;
	mesh.visible = false;
    name.push(mesh);
	group.add(mesh);
}
	
function busRoutes(){
	var path = [
		{ x:43, y:-28, z:462 },
        { x:76, y:-17, z:436 },
        { x:114,  z:389 },
		{ x:136,  z:345 },
        { x:146,  z:314 },
        { x:151, y:2, z:260 },
        { x:147, y:1, z:186 },
		{ x:129, y:2, z:181 },
		{ x:131, y:2, z:140 },
		{ x:150, y:1, z:134 },
        { x:153, y:2, z:108 },
        { x:161, y:1, z:64 },
        { x:171, y:1, z:26 },
        { x:162, y:1, z:10 },
		{ x:139, y:2, z:-1 },
		{ x:128, y:2, z:-16 },
		{ x:154, y:2, z:-40 },
		{ x:168, y:2, z:-83 },
		{ x:174, y:3, z:-154 },
		{ x:189, y:1, z:-197 },//////// split
		{ x:215, y:1, z:-218 },
		{ x:370, y:1, z:-292 },
		{ x:423, y:2, z:-315 },
		{ x:437, y:1, z:-279 },
		{ x:451, y:1, z:-246 },
		{ x:436, y:1, z:-242 },
		{ x:424, y:1, z:-271 },
		{ x:437, y:1, z:-279 }
    ];
    
    var previous = new THREE.Vector3(-17, -33, 486)
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), darwinRoute, 0xcc3333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
    }
	
	var path = [
		{ x:43, y:-28, z:460 },
        { x:76, y:-17, z:434 },
        { x:113,  z:389 },
		{ x:135,  z:345 },
        { x:145,  z:314 },
        { x:150, y:2, z:260 },
        { x:146, y:1, z:186 },
		{ x:128, y:2, z:181 },
		{ x:130, y:2, z:140 },
		{ x:149, y:1, z:134 },
        { x:152, y:2, z:108 },
        { x:160, y:1, z:64 },
        { x:170, y:1, z:26 },
        { x:161, y:1, z:10 },
		{ x:138, y:2, z:-1 },
		{ x:127, y:2, z:-16 },
		{ x:153, y:2, z:-40 },
		{ x:167, y:2, z:-83 },
		{ x:173, y:3, z:-154 },
		{ x:188, y:1, z:-197 },//////// split
		{ x:162, y:1, z:-211 },
		{ x:-2, y:1, z:-261 },
		{ x:-46, y:2, z:-268 },
		{ x:-85, y:2, z:-258 },
		{ x:-153, y:4, z:-226 },
		{ x:-192, y:5, z:-219 },
		{ x:-222, y:4.1, z:-219 },
		{ x:-281, y:3, z:-223 },
		{ x:-342, y:3, z:-218 },
		{ x:-369, y:1, z:-208 },
		{ x:-400, y:1, z:-189 },
		{ x:-418, y:1, z:-183 },
		{ x:-419, y:1, z:-121 },
		{ x:-409, y:1, z:-110 },
		{ x:-317, y:1, z:-165 },
		{ x:-296, y:1, z:-163 },
		{ x:-270, y:1, z:-161 },
		{ x:-238, y:3, z:-172 },
		{ x:-226, y:5.4, z:-171 },
		{ x:-222, y:4.1, z:-219 }
    ];
    
    var previous = new THREE.Vector3(-16, -33, 485);
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), parkwoodRoute, 0x0099cc);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:41, y:-28, z:459 },
        { x:75, y:-17, z:433 },
        { x:111,  z:389 },
		{ x:133,  z:345 },
        { x:143,  z:314 },
        { x:148, y:2, z:260 },
        { x:144, y:1, z:186 },
		{ x:126, y:2.5, z:181 },
		{ x:128, y:2, z:140 },
		{ x:147, y:1, z:134 },
		{ x:144, y:1, z:186 }
    ];
    
    var previous = new THREE.Vector3(-18, -33, 484);
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), keynesRoute, 0x9367bf);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
        { x:26, y:1, z:-123 },
		{ x:0, y:1, z:-108 },
        { x:-31, y:1, z:-118 },
		{ x:-87, y:9, z:-87 },
		{ x:-123, y:9, z:-68 },
		{ x:-145, y:6, z:-56 },
		{ x:-183, y:7, z:-65 },
		{ x:-200, y:6, z:-63 },
		{ x:-217, y:2, z:-62 },
		{ x:-254, y:2, z:-77 },
    ];
    
    var previous = new THREE.Vector3( 36, 1, -138)
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), cycleRoute, 0xff7b00);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:482, y:-38, z:410 },
		{ x:465, y:-32, z:390 },
		{ x:460, y:-29.5, z:377 },
		{ x:408, y:-35, z:300 },
		{ x:385, y:-23, z:264 },
		{ x:381, y:-15, z:223 },
		{ x:340, y:-13, z:141 },
        { x:283, y:-2, z:72 },
		{ x:263, y:-3, z:51 },
		{ x:246, y:-2, z:41 },
		{ x:234, y:-1, z:32 },
		{ x:189, y:2, z:19 },
		{ x:171, y:2, z:22 },
		{ x:147, y:2, z:-25 },
		{ x:161, y:1, z:-48 },
		{ x:168, y:1, z:-74 },
		{ x:172, y:3, z:-122 },
		{ x:163, y:4, z:-123 },
		{ x:167, y:1, z:-161 },
		{ x:177, y:1, z:-188 },
		{ x:172, y:1, z:-200 },
		{ x:162, y:1, z:-213 },
		{ x:-2, y:1, z:-263 },
		{ x:-46, y:2, z:-270 },
		{ x:-85, y:2, z:-258 },
		{ x:-153, y:4, z:-228 },
		{ x:-192, y:5, z:-221 },
		{ x:-222, y:4.1, z:-221 },
		{ x:-281, y:3, z:-225 },
		{ x:-342, y:3, z:-220 },
		{ x:-369, y:1, z:-210 },
		{ x:-400, y:1, z:-191 },
		{ x:-418, y:1, z:-183 },
		{ x:-564, y:6, z:-176 },
    ];
    
    var previous = new THREE.Vector3(490, -42, 425);
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), cycleRoute, 0xff7b00);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:-142, y:1, z:-18 }
    ];
    
    var previous = new THREE.Vector3( -144, 5, -56 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:-153, y:1, z:-10 },
		{ x:-118, y:1, z:10 }
    ];
    
    var previous = new THREE.Vector3( -201, 1, -25 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:-142, y:1, z:-17 },
		{ x:-80, y:9, z:-60 },
		{ x:-11, y:1, z:-105 },
		{ x:-14, y:1, z:-112 }
    ];
    
    var previous = new THREE.Vector3( -153, 1, -10 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:-201, y:1, z:-25 },
		{ x:-144, y:5, z:-56 }
    ];
    
    var previous = new THREE.Vector3( -222, 1, -6 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:398, y:-15, z:124 },
		{ x:401, y:-10, z:42 },
		{ x:402, y:-6, z:2 },
		{ x:398, y:-6, z:-27 },
		{ x:373, y:-2, z:-38 },
		{ x:365, y:-2, z:-59 },
		{ x:354, y:1, z:-97 },
		{ x:346, y:1, z:-100 }
    ];
    
    var previous = new THREE.Vector3( 383, -15, 223 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:424, y:-5, z:-32 },
		{ x:481, y:-6, z:27 },
		{ x:498, y:-10, z:-8 }
    ];
    
    var previous = new THREE.Vector3( 398, -6, -27 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:36, y:2, z:-56 },
		{ x:7, y:1, z:-102 },
		{ x:6, y:1, z:-110 }
    ];
    
    var previous = new THREE.Vector3( 77, 1.5, 0 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:185, y:1, z:84 },
		{ x:196, y:1, z:81 },
		{ x:208, y:1, z:69 },
		{ x:245, y:1, z:77 },
		{ x:254, y:-1, z:97 },
		{ x:262, y:-2, z:96 }
    ];
    
    var previous = new THREE.Vector3( 162, 1, 64 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:210, y:1, z:152 },
		{ x:254, y:4, z:206 },
		{ x:280, y:-1, z:269 },
		{ x:318, y:-20, z:306 }
    ];
    
    var previous = new THREE.Vector3( 185, 1, 84 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:77, y:1, z:-95 }
    ];
    
    var previous = new THREE.Vector3( 128, 2, -22 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:167, y:3, z:-122 }
    ];
    
    var previous = new THREE.Vector3( 42, 1, -154 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:209, y:1, z:-102 },
		{ x:277, y:1, z:-141 }
    ];
    
    var previous = new THREE.Vector3( 174, 2.5, -120 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:249, y:1, z:-28 },
		{ x:169, y:1, z:14 }
    ];
    
    var previous = new THREE.Vector3( 209, 1, -102 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:334, y:1, z:-74 },
		{ x:359, y:1, z:-127 },
		{ x:472, y:1, z:-186 }
    ];
    
    var previous = new THREE.Vector3( 249, 1, -28 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:298, y:1, z:-99 },
		{ x:361, y:1, z:-134 },
		{ x:380, y:1, z:-183 },
		{ x:399, y:1, z:-150 }
    ];
    
    var previous = new THREE.Vector3( 249, 1, -28 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:299, y:1, z:-251 }
    ];
    
    var previous = new THREE.Vector3( 360, 1, -128 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:-318, y:1, z:-110 },
		{ x:-371, y:1, z:-202 }
    ];
    
    var previous = new THREE.Vector3( -317, 1, -82 );
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
		{ x:484, y:-38, z:410 },
		{ x:467, y:-32, z:390 },
		{ x:462, y:-29.5, z:377 },
		{ x:410, y:-35, z:300 },
		{ x:387, y:-23, z:264 },
		{ x:383, y:-15, z:223 },
		{ x:342, y:-13, z:141 },
        { x:283, y:-2, z:72 },
		{ x:265, y:-3, z:51 },
		{ x:248, y:-2, z:41 },
		{ x:236, y:-1, z:32 },
		{ x:191, y:2, z:19 },
		{ x:171, y:2, z:20 },
    ];
    
    var previous = new THREE.Vector3(492, -42, 425);
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
	
	var path = [
        { x:26, y:1, z:-122 },
		{ x:0, y:1, z:-107 },
        { x:-31, y:1, z:-117 },
		{ x:-87, y:9, z:-86 },
		{ x:-123, y:9, z:-67 },
		{ x:-145, y:6, z:-55 },
		{ x:-183, y:7, z:-64 },
		{ x:-200, y:6, z:-62 },
		{ x:-217, y:2, z:-61 },
		{ x:-254, y:2, z:-76 },
		{ x:-266, y:1, z:-81 },
		{ x:-358, y:1, z:-83 },
		{ x:-517, y:2, z:-77 },
		{ x:-539, y:3, z:-72 },
    ];
    
    var previous = new THREE.Vector3( 36, 1, -137)
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
		drawCylinder(previous, new THREE.Vector3(o.x, o.y, o.z), footPath, 0x333333);
		previous = new THREE.Vector3(o.x, o.y, o.z);
	}
}
function makeParkingOverlay(){
	var loader = new THREE.JSONLoader();
	loader.load( "assets/models/Permit_Parking.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({color: 0x4d7ba8, transparent: true, opacity: 0.8}) );
        mesh.scale.set( 1, 1, 1 );
		group.add( mesh );
		mesh.name = "Permit_Parking";
		mesh.visible = false;
    } );
	loader.load( "assets/models/Visitor_Parking.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({color: 0x1e3954, transparent: true, opacity: 0.8}) );
        mesh.scale.set( 1, 1, 1 );
		group.add( mesh );
		mesh.name = "Visitor_Parking";
		mesh.visible = false;
    } );
}
function makeDevelopments(){
	var loader = new THREE.JSONLoader();
	loader.load( "assets/models/Templeman_Extension.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0xc98c3c, specular: 0x555555, ambient: 0x222222, wrapAround: true, transparent: true } ));
        mesh.position.y = -99999;
		group.add( mesh );
		clickobjects.push( mesh );
		mesh.castShadow = true;
		mesh.name = "Templeman_Extension";
		hoverbuildings.push( mesh);
		mesh.visible = false;
    } );
	loader.load( "assets/models/Turing_College.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: 0xc98c3c, specular: 0x555555, ambient: 0x222222, wrapAround: true, transparent: true } ));
        mesh.position.y = -99999;
		group.add( mesh );
		clickobjects.push( mesh );
		mesh.castShadow = true;
		mesh.name = "Turing_College";
		hoverbuildings.push( mesh);
		mesh.visible = false;
    } );
}
function cycleIcon(iconArray, size){
	var color;
	if (iconArray == cycleArray){
		color = 0xff9900;
	}else{
		color = 0xcc3333;
	}
	var sphere = new THREE.Mesh(new THREE.SphereGeometry(size, 20, 20), new THREE.MeshBasicMaterial({color: color, transparent: true, opacity: 0.8}));
	group.add( sphere);
	iconArray.push( sphere );
	sphere.visible = false;
	
	return sphere;
}
function makeCycleRacks(){
	cycleIcon(cycleArray, 5).position.set(31,0,-143);
	cycleIcon(cycleArray, 5).position.set(-27,0,88);
	cycleIcon(cycleArray, 5).position.set(53,1,167);
	cycleIcon(cycleArray, 5).position.set(97,1,65);
	cycleIcon(cycleArray, 5).position.set(237,-2,23);
	cycleIcon(cycleArray, 5).position.set(474,-8,-28);
	cycleIcon(cycleArray, 5).position.set(321,1,-218);
	
	cycleIcon(cycleArray, 3).position.set(-511,2,-133);
	cycleIcon(cycleArray, 3).position.set(-500,2,-94);
	cycleIcon(cycleArray, 3).position.set(-460,1,-118);
	cycleIcon(cycleArray, 3).position.set(-456,1,-142);
	cycleIcon(cycleArray, 3).position.set(-398,1,-145);
	cycleIcon(cycleArray, 3).position.set(-351,1,-167);
	cycleIcon(cycleArray, 3).position.set(-327,1,-125);
	cycleIcon(cycleArray, 3).position.set(-292,1,-125);
	cycleIcon(cycleArray, 3).position.set(-302,1,-192);
	cycleIcon(cycleArray, 3).position.set(-276,1,-190);
	cycleIcon(cycleArray, 3).position.set(-458,1,-32);
	cycleIcon(cycleArray, 3).position.set(-471,1,45);
	cycleIcon(cycleArray, 3).position.set(-434,1,55);
	cycleIcon(cycleArray, 3).position.set(-401,1,56);
	cycleIcon(cycleArray, 3).position.set(-338,1,22);
	cycleIcon(cycleArray, 3).position.set(-282,1,3);
	cycleIcon(cycleArray, 3).position.set(-213,1,-3);
	cycleIcon(cycleArray, 3).position.set(-85,1,-186);
	cycleIcon(cycleArray, 3).position.set(-47,1,79);
	cycleIcon(cycleArray, 3).position.set(55,1,48);
	cycleIcon(cycleArray, 3).position.set(88,1,56);
	cycleIcon(cycleArray, 3).position.set(57,1,-125);
	cycleIcon(cycleArray, 3).position.set(35,1,-165);
	cycleIcon(cycleArray, 3).position.set(58,1,-181);
	cycleIcon(cycleArray, 3).position.set(162,1,-244);
	cycleIcon(cycleArray, 3).position.set(233,1,-22);
	cycleIcon(cycleArray, 3).position.set(283,1,-144);
	cycleIcon(cycleArray, 3).position.set(390,1,-209);
	cycleIcon(cycleArray, 3).position.set(412,1,-212);
}

function make3DText(message, color, mesh){
	var text3d = new THREE.TextGeometry( message, {
		size: 7,
		height: 1,
		curveSegments: 2,
		font: "helvetiker",
		weight: "bold"
	});	
	THREE.GeometryUtils.center( text3d );
	
	var textMaterial = new THREE.MeshLambertMaterial( { color: color, overdraw: true, transparent: true, opacity: 1, alphaTest: 0.5 } );
	var text = new THREE.Mesh( text3d, textMaterial );
	group.add( text );
	textlookat.push(text);
	text.visible = false;
	return text;
}
function makeData(mesh, height, dataArray)
{
	var percent, color;
	var prefix = "";
	var suffix = "";
	
	switch(dataArray){
		case roompriceArray:
			if (height < 4000){
				color = 0x0066cc;
			}else if (height < 5000 && height > 4000){
				color = 0x1b4985;
			} else {
				color = 0x333399;
			}
			percent = ((height / 6900) * 100);
			prefix = "£";
			break;
		case populationArray:
			if (height < 200){
				color = 0x0066cc;
			}else if (height < 400 && height > 200){
				color = 0x1b4985;
			} else {
				color = 0x333399;
			}
			percent = ((height / 500) * 100) * 1.5;
			break;
		case subjectscoreArray:
			if (height < 60){
				color = 0x0066cc;
			}else if (height < 80 && height > 60){
				color = 0x1b4985;
			} else {
				color = 0x333399;
			}
			percent = ((height / 100) * 100) * 1;
			break;
		case subjectsatisfactionArray:
			if (height < 85){
				color = 0x0066cc;
			}else if (height < 92 && height > 85){
				color = 0x1b4985;
			} else {
				color = 0x333399;
			}
			percent = ((height / 100) * 100) * 1;
			suffix = "%";
			break;
		case entrypointsArray:
			if (height < 360){
				color = 0x0066cc;
			}else if (height < 380 && height > 360){
				color = 0x1b4985;
			} else {
				color = 0x333399;
			}
			percent = ((height / 440) * 100) * 1;
			break;
		case sizeArray:
			if (height < 11){
				color = 0x0066cc;
			}else if (height < 13 && height > 11){
				color = 0x1b4985;
			} else {
				color = 0x333399;
			}
			percent = ((height / 15) * 100) * 1;
			suffix = "m²";
			break;
	}
	
	var bar = new THREE.Mesh( new THREE.CubeGeometry(10, percent, 10), new THREE.MeshLambertMaterial({color: color, transparent: true, opacity: 0.8, alphaTest: 0.5}) );
	mesh.geometry.computeBoundingBox();
	var boundingBox = mesh.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );
	position.applyMatrix4( mesh.matrixWorld );
	
	bar.position.set( position.x, boundingBox.max.y, position.z );
	group.add(bar);
	bar.visible = false;
	
	var text = make3DText(prefix+height+suffix, color, mesh);
	text.position.set( position.x, boundingBox.max.y + ((percent / 2) + 10), position.z );	
	
	dataArray.push( text, bar );
}
function makeRoadName( message ){
	var fontface = "Arial";
	var fontsize = 16;
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Normal " + fontsize + "px " + fontface;
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
	context.fillStyle   = "#ed7b5f";
	context.strokeStyle = "#ed7b5f";

	context.lineWidth = 5;
	roundRect(context, 5/2, 5/2, textWidth + 5, fontsize * 1.4 + 5, 1);
	context.fillStyle = "#ffffff";

	context.fillText( message, 5, fontsize + 5);
	var texture = new THREE.Texture(canvas) 
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture, useScreenCoordinates: false, transparent: true, opacity: 0 } );
	var sprite = new THREE.Sprite( spriteMaterial );
	
	sprite.scale.set(60,30,1.0);
	group.add(sprite);
	roadArray.push( sprite );
	return sprite;	
}
function makeRoads(){
	makeRoadName("Giles Lane").position.set(-189,15,120);
	makeRoadName("Giles Lane").position.set(240,7,-241);
	makeRoadName("Giles Lane").position.set(57,7,0);
	makeRoadName("Park Wood Road").position.set(148,7,-218);
	makeRoadName("Park Wood Road").position.set(-193,10,-228);
	makeRoadName("St. Stephen's Hill").position.set(546,7,-172);
	makeRoadName("Whitstable Road A290").position.set(-412,10,255);
	makeRoadName("University Road").position.set(156,7,75);
	makeRoadName("University Road").position.set(148,7,289);
}
function makeZoom(){
	var loader = new THREE.JSONLoader();
	loader.load( "assets/models/zoom.js", function( geometry, materials ) {
		var material = new THREE.MeshLambertMaterial({ color: 0x333333, wrapAround: true });
        icon = new THREE.Mesh( geometry, material );
		icon.position.set(335,10,-51);
		icon.scale.set(0.5,0.5,0.5);
		clickobjects.push(icon);
		zoomobjects.push(icon);
		textlookat.push(icon);
		group.add(icon);
	
		icon = new THREE.Mesh( geometry, material );
		icon.position.set(153,10,27);
		icon.scale.set(0.5,0.5,0.5);
		clickobjects.push(icon);
		zoomobjects.push(icon);
		textlookat.push(icon);
		group.add(icon);
		
		icon = new THREE.Mesh( geometry, material );
		icon.position.set(47,10,-155);
		icon.scale.set(0.5,0.5,0.5);
		zoomobjects.push(icon);
		textlookat.push(icon);
		group.add(icon);
	} );
	
	var material = new THREE.MeshBasicMaterial({ color: 0xed7b5f, wrapAround: true });
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(335,10,-51);
	cube.visible = false;
	cube.name = "zoom_library"
	clickobjects.push(cube);
	group.add(cube);
	
	cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(153,10,27);
	cube.name = "zoom_venue"
	cube.visible = false;
	clickobjects.push(cube);
	group.add(cube);
	
	cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(47,10,-155);
	cube.name = "zoom_sport"
	cube.visible = false;
	clickobjects.push(cube);
	group.add(cube);
}
function makeBusstops(){
	var loader = new THREE.JSONLoader();
	loader.load( "assets/models/bus.js", function( geometry, materials ) {
		var material = new THREE.MeshLambertMaterial({ color: 0x663399, wrapAround: true });
		
		// keynes
        bus = new THREE.Mesh( geometry, material );
		bus.position.set(125,10,150);
		bus.scale.set(0.12,0.12,0.05);
		textlookat.push(bus);
		zoomobjects.push(bus);
		busIcons.push(bus);
		group.add(bus);
		
		// parkwood
		bus = new THREE.Mesh( geometry, material );
		bus.position.set(-331,10,-161);
		bus.scale.set(0.12,0.12,0.05);
		textlookat.push(bus);
		zoomobjects.push(bus);
		busIcons.push(bus);
		group.add(bus);
		
		// darwin
		bus = new THREE.Mesh( geometry, material );
		bus.position.set(423,10,-261);
		bus.scale.set(0.12,0.12,0.05);
		textlookat.push(bus);
		zoomobjects.push(bus);
		busIcons.push(bus);
		group.add(bus);
	} );
	var material = new THREE.MeshBasicMaterial({ color: 0xed7b5f, wrapAround: true });
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(125,10,150);
	cube.visible = false;
	cube.name = "keynes_bus"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(-331,10,-161);
	cube.name = "parkwood_bus"
	cube.visible = false;
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(423,10,-261);
	cube.name = "darwin_bus"
	cube.visible = false;
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
}
function makeFacts(){
		
	var geometry = new THREE.TextGeometry( "?", {
		size: 10,
		height: 1,
		curveSegments: 2,
		font: "helvetiker",
		weight: "bold"
	});	
	THREE.GeometryUtils.center( geometry );
	var material = new THREE.MeshLambertMaterial({ color: 0xa34129, wrapAround: true });
	
	// Fact 1
	fact = new THREE.Mesh( geometry, material );
	fact.position.set(250,15,-60);
	textlookat.push(fact);
	zoomobjects.push(fact);
	factIcons.push(fact);
	group.add(fact);
	
	// Fact 2
	fact = new THREE.Mesh( geometry, material );
	fact.position.set(180,15,-140);
	textlookat.push(fact);
	zoomobjects.push(fact);
	factIcons.push(fact);
	group.add(fact);
	
	// Fact 3
	fact = new THREE.Mesh( geometry, material );
	fact.position.set(260,15,-210);
	textlookat.push(fact);
	zoomobjects.push(fact);
	factIcons.push(fact);
	group.add(fact);
	
	// Fact 4
	fact = new THREE.Mesh( geometry, material );
	fact.position.set(-330,15,-15);
	textlookat.push(fact);
	zoomobjects.push(fact);
	factIcons.push(fact);
	group.add(fact);
	
	// Fact 5
	fact = new THREE.Mesh( geometry, material );
	fact.position.set(-298,15,-256);
	textlookat.push(fact);
	zoomobjects.push(fact);
	factIcons.push(fact);
	group.add(fact);
	
	// Fact 6
	fact = new THREE.Mesh( geometry, material );
	fact.position.set(-57,15,-196);
	textlookat.push(fact);
	zoomobjects.push(fact);
	factIcons.push(fact);
	group.add(fact);
	
	
	
	var material = new THREE.MeshBasicMaterial({ color: 0xed7b5f, wrapAround: true });
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(250,15,-60);
	cube.visible = false;
	cube.name = "fact_1"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(180,15,-140);
	cube.visible = false;
	cube.name = "fact_2"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(260,15,-210);
	cube.visible = false;
	cube.name = "fact_3"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(-342,10,-29);
	cube.visible = false;
	cube.name = "fact_4"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(-298,10,-256);
	cube.visible = false;
	cube.name = "fact_5"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(-57,10,-196);
	cube.visible = false;
	cube.name = "fact_6"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
}
function makeFood(){
	var loader = new THREE.JSONLoader();
	loader.load( "assets/models/food.js", function( geometry, materials ) {
		var material = new THREE.MeshLambertMaterial({ color: 0x3d806b, wrapAround: true });
		THREE.GeometryUtils.center( geometry );
		
		// Mungos
		food = new THREE.Mesh( geometry, material );
		food.position.set(318,16,36);
		food.scale.set(0.7,0.7,0.7);
		textlookat.push(food);
		zoomobjects.push(food);
		foodIcons.push(food);
		group.add(food);
		
		// Rutherford
		food = new THREE.Mesh( geometry, material );
		food.position.set(425,16,-60);
		food.scale.set(0.7,0.7,0.7);
		textlookat.push(food);
		zoomobjects.push(food);
		foodIcons.push(food);
		group.add(food);
		
		// Dolche Vita
		food = new THREE.Mesh( geometry, material );
		food.position.set(55,16,100);
		food.scale.set(0.7,0.7,0.7);
		textlookat.push(food);
		zoomobjects.push(food);
		foodIcons.push(food);
		group.add(food);
		
		// Origins
		food = new THREE.Mesh( geometry, material );
		food.position.set(512,16,-215);
		food.scale.set(0.7,0.7,0.7);
		textlookat.push(food);
		zoomobjects.push(food);
		foodIcons.push(food);
		group.add(food);
	});
	
	var material = new THREE.MeshBasicMaterial({ color: 0xed7b5f, wrapAround: true });
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(318,16,36);
	cube.visible = false;
	cube.name = "food_1"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	var material = new THREE.MeshBasicMaterial({ color: 0xed7b5f, wrapAround: true });
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(425,16,-60);
	cube.visible = false;
	cube.name = "food_2"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	var material = new THREE.MeshBasicMaterial({ color: 0xed7b5f, wrapAround: true });
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(55,16,100);
	cube.visible = false;
	cube.name = "food_3"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
	
	var material = new THREE.MeshBasicMaterial({ color: 0xed7b5f, wrapAround: true });
	var cube = new THREE.Mesh( new THREE.CubeGeometry( 12, 12, 6 ), material );
	cube.position.set(512,16,-215);
	cube.visible = false;
	cube.name = "food_4"
	clickobjects.push(cube);
	iconHide.push(cube);
	group.add(cube);
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	if($(window).height() < 600){
		for (var i=0, tot=zoomArray.length; i < tot; i++) {
			zoomArray[i].scale.set(10,10,1.0);
			zoomArray[i].position.y = 12;
		}
	}else{
		for (var i=0, tot=zoomArray.length; i < tot; i++) {
			zoomArray[i].scale.set(8,8,1.0);
		}
	}if($(window).height() < 400){
		for (var i=0, tot=zoomArray.length; i < tot; i++) {
			zoomArray[i].scale.set(14,14,1.0);
			zoomArray[i].position.y = 15;
		}
	}
}