function makeTextSprite( message, name )
{
	var fontface = "Arial";
	var fontsize = 14;
	var borderColor = { r:255, g:255, b:255, a:1.0 };
	var backgroundColor = { r:255, g:255, b:255, a:1.0 };
	var spriteAlignment = THREE.SpriteAlignment.topLeft;
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Normal " + fontsize + "px " + fontface;
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
	context.fillStyle   = "rgba(255,255,255,0.8)";
	context.strokeStyle = "rgba(255,255,255,0)";

	context.lineWidth = 5;
	roundRect(context, 5/2, 5/2, textWidth + 5, fontsize * 1.4 + 5, 1);
	context.fillStyle = "#222222";

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
	
	sprite.position.set( position.x - 10, boundingBox.max.y + 6, position.z );
	sprite.scale.set(60,30,1.0);
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

function createArrays(array, mesh) {
	array.push(mesh);
}

function makeIcon(mesh) {
	switch(mesh.name){
		case "Becket_Court":
			makeData(mesh, 5863, roompriceArray);
			makeData(mesh, 103, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Bishopden_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Bossenden_Court":
			makeData(mesh, 5621, roompriceArray);
			makeData(mesh, 90, populationArray);
			makeData(mesh, 11, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Clowes_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Darwin_Houses":
			makeData(mesh, 4204, roompriceArray);
			makeData(mesh, 310, populationArray);
			makeData(mesh, 12, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Denstead_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Eliot_College":
			makeData(mesh, 3715, roompriceArray);
			makeData(mesh, 481, populationArray);
			makeData(mesh, 12, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Ellenden_Court":
			makeData(mesh, 4376, roompriceArray);
			makeData(mesh, 130, populationArray);
			makeData(mesh, 11, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Farthings_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Grimshill_Court":
			makeData(mesh, 4376, roompriceArray);
			makeData(mesh, 130, populationArray);
			makeData(mesh, 11, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Homestall_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Hothe_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Kemsdale_Court":
			makeData(mesh, 5621, roompriceArray);
			makeData(mesh, 170, populationArray);
			createArrays(locationIcons, mesh);
			break;
		case "Keynes_College":
			makeData(mesh, 5863, roompriceArray);
			makeData(mesh, 162, populationArray);
			makeData(mesh, 11, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Keynes_Flats":
			makeData(mesh, 5626, roompriceArray);
			makeData(mesh, 445, populationArray);
			makeData(mesh, 12, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Keynes_Houses":
			makeData(mesh, 4853, roompriceArray);
			makeData(mesh, 45, populationArray);
			makeData(mesh, 12, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Lypeatt_Court":
			makeData(mesh, 4376, roompriceArray);
			makeData(mesh, 160, populationArray);
			makeData(mesh, 11, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Marley_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Nickle_Court":
			makeData(mesh, 5621, roompriceArray);
			makeData(mesh, 170, populationArray);
			createArrays(locationIcons, mesh);
			break;
		case "Purchas_Court":
			makeData(mesh, 4376, roompriceArray);
			makeData(mesh, 160, populationArray);
			makeData(mesh, 11, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Rutherford_College":
			makeData(mesh, 3715, roompriceArray);
			makeData(mesh, 481, populationArray);
			makeData(mesh, 12, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Stock_Court":
			makeData(mesh, 5621, roompriceArray);
			makeData(mesh, 90, populationArray);
			makeData(mesh, 11, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Thornden_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Tudor_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Tyler_Court_A":
			makeData(mesh, 5353, roompriceArray);
			makeData(mesh, 189, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Tyler_Court_B":
			makeData(mesh, 5872, roompriceArray);
			makeData(mesh, 339, populationArray);
			makeData(mesh, 13, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Tyler_Court_C":
			makeData(mesh, 5872, roompriceArray);
			makeData(mesh, 339, populationArray);
			makeData(mesh, 13, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Willows_Court":
			makeData(mesh, 3955, roompriceArray);
			makeData(mesh, 80, populationArray);
			makeData(mesh, 10, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Woolf_Blocks":
			makeData(mesh, 5846, roompriceArray);
			makeData(mesh, 503, populationArray);
			makeData(mesh, 12, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Woolf_Residential":
			makeData(mesh, 6823, roompriceArray);
			makeData(mesh, 41, populationArray);
			makeData(mesh, 17, sizeArray);
			createArrays(locationIcons, mesh);
			break;
		case "Woolf_Pavillion":
			createArrays(locationIcons, mesh);
			break;
			
			////// TEACHING //////
			
		case "Aphra_Theatre":
			createArrays(teachingIcons, mesh);
			break;
		case "Boiler_House":
			createArrays(teachingIcons, mesh);
			break;
		case "Colyer_Fergusson":
			makeData(mesh, 82.7, subjectscoreArray);
			makeData(mesh, 89, subjectsatisfactionArray);
			makeData(mesh, 348, entrypointsArray);
			break;
		case "Cornwallis_George_Allen_Wing":
			createArrays(teachingIcons, mesh);
			break;
		case "Cornwallis_Mathematics_Institute":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 42.2, subjectscoreArray);
			makeData(mesh, 91, subjectsatisfactionArray);
			makeData(mesh, 361, entrypointsArray);
			break;
		case "Cornwallis_North_East":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 71.1, subjectscoreArray);
			makeData(mesh, 87, subjectsatisfactionArray);
			makeData(mesh, 325, entrypointsArray);
			break;
		case "Cornwallis_North_West":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 68.5, subjectscoreArray);
			makeData(mesh, 91, subjectsatisfactionArray);
			makeData(mesh, 365, entrypointsArray);
			break;
		case "Cornwallis_South_East":
			createArrays(teachingIcons, mesh);
			break;
		case "Cornwallis_South_West":
			createArrays(teachingIcons, mesh);
			break;
		case "Cornwallis_South":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 66.4, subjectscoreArray);
			makeData(mesh, 84, subjectsatisfactionArray);
			makeData(mesh, 370, entrypointsArray);
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
		case "Grimmond":
			createArrays(teachingIcons, mesh);
			break;
		case "Gulbenkian":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 84.4, subjectscoreArray);
			makeData(mesh, 93, subjectsatisfactionArray);
			makeData(mesh, 397, entrypointsArray);
			break;
		case "Ingram":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 49.7, subjectscoreArray);
			makeData(mesh, 96, subjectsatisfactionArray);
			makeData(mesh, 364, entrypointsArray);
			break;
		case "Jarman":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 81.3, subjectscoreArray);
			makeData(mesh, 78, subjectsatisfactionArray);
			makeData(mesh, 355, entrypointsArray);
			break;
		case "Jennison":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 82.9, subjectscoreArray);
			makeData(mesh, 100, subjectsatisfactionArray);
			makeData(mesh, 337, entrypointsArray);
			break;
		case "Kent_Business_School":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 69.4, subjectscoreArray);
			makeData(mesh, 90, subjectsatisfactionArray);
			makeData(mesh, 377, entrypointsArray);
			break;
		case "Kent_Law_School":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 66.1, subjectscoreArray);
			makeData(mesh, 87, subjectsatisfactionArray);
			makeData(mesh, 387, entrypointsArray);
			break;
		case "Keynes_College":
			createArrays(teachingIcons, mesh);
			break;
		case "Marlowe":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 86.1, subjectscoreArray);
			makeData(mesh, 86, subjectsatisfactionArray);
			makeData(mesh, 437, entrypointsArray);
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
			makeData(mesh, 79.3, subjectscoreArray);
			makeData(mesh, 94, subjectsatisfactionArray);
			makeData(mesh, 409, entrypointsArray);
			break;
		case "Stacey":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 62.4, subjectscoreArray);
			makeData(mesh, 93, subjectsatisfactionArray);
			makeData(mesh, 383, entrypointsArray);
			break;
		case "Sports_Centre":
			createArrays(teachingIcons, mesh);
			makeData(mesh, 86, subjectscoreArray);
			makeData(mesh, 92, subjectsatisfactionArray);
			makeData(mesh, 332, entrypointsArray);
			break;
		case "Tanglewood":
			createArrays(teachingIcons, mesh);
			break;
		case "Woodlands":
			createArrays(teachingIcons, mesh);
			break;
		case "Woolf_Main":
			createArrays(teachingIcons, mesh);
			break;
	}
	if (
	mesh.name == "Colyer_Fergusson" ||
	mesh.name == "Gulbenkian" ||
	mesh.name == "Senate" ||
	mesh.name == "Sports_Centre" ||
	mesh.name == "Sports_Pavillion" ||
	mesh.name == "Templeman_Library" ||
	mesh.name == "Venue" ||
	mesh.name == "Woodys" ||
	mesh.name == "Locke" ||
	mesh.name == "Parkwood_Shop"
	){
		createArrays(communityIcons, mesh);
	}
	if (
	mesh.name == "Campus_Watch" ||
	mesh.name == "Estates_Department" ||
	mesh.name == "Ground_Maintenance" ||
	mesh.name == "Oaks_Day_Nursery" ||
	mesh.name == "University_Medical_Centre"
	){
		createArrays(maintenanceIcons, mesh);
	}
	if (
	mesh.name == "Careers_Employability_Service" ||
	mesh.name == "Innovation_Center" ||
	mesh.name == "Kent_Enterprise_Hub" ||
	mesh.name == "Mandela_Building" ||
	mesh.name == "Parkwood_Administration" ||
	mesh.name == "Registry" ||
	mesh.name == "Research_and_Development_Centre" ||
	mesh.name == "UELT"
	){
		createArrays(adminIcons, mesh);
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
	mesh.name == "Locke" || 
	mesh.name == "Careers_Employability_Service" || 
	mesh.name == "Registry" ||
	mesh.name == "Colyer_Fergusson" ||
	mesh.name == "Parkwood_Administration"
	){
		texture = THREE.ImageUtils.loadTexture('assets/images/icons/ico_twitter.png', {}, function() {
			renderer.render(scene);
		})
		material = new THREE.MeshLambertMaterial({map: texture, transparent: true })
		var icon = new THREE.Mesh( new THREE.CubeGeometry( 6, 6, 6 ), material );
		mesh.geometry.computeBoundingBox();
		var boundingBox = mesh.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( mesh.matrixWorld );
		
		icon.name = "tweet-" + mesh.name;
		icon.position.set( position.x, boundingBox.max.y + 12, position.z );
		group.add( icon);
		clickobjects.push( icon );
		tweetIcons.push( icon );
		
		var tweenOne = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 12 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut);
		var tweenTwo = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 10 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut);
		
		tweenOne.chain(tweenTwo);
		tweenTwo.chain(tweenOne);
		
		tweenOne.start();
	}
}
function busRoutes(){
	var path = [
		{ x:-17, y:-33, z:486 },
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
    
    var geometry = new THREE.Geometry();
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
        geometry.vertices.push(new THREE.Vector3(o.x, o.y, o.z));
    }

    var darwinRoute = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xcc3333, linewidth: 4, transparent: true, opacity: 0.8 }));
	darwinRoute.name = "darwinRoute"
	darwinRoute.visible = false;
	group.add(darwinRoute);
	
	var path = [
        { x:-16, y:-33, z:485 },
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
    
    var geometry = new THREE.Geometry();
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
        geometry.vertices.push(new THREE.Vector3(o.x, o.y, o.z));
    }

    var parkwoodRoute = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x0099cc, linewidth: 4, transparent: true, opacity: 0.8}));
	parkwoodRoute.name = "parkwoodRoute"
	parkwoodRoute.visible = false;
	group.add(parkwoodRoute);
	
	var path = [
        { x:-18, y:-33, z:484 },
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
    
    var geometry = new THREE.Geometry();
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
        geometry.vertices.push(new THREE.Vector3(o.x, o.y, o.z));
    }

    var keynesRoute = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x9367bf, linewidth: 4, transparent: true, opacity: 0.8 }));
	keynesRoute.name = "keynesRoute"
	keynesRoute.visible = false;
	group.add(keynesRoute);
	
	var path = [
		{ x:36, y:1, z:-138 },
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
    
    var geometry = new THREE.Geometry();
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
        geometry.vertices.push(new THREE.Vector3(o.x, o.y, o.z));
    }

    var cycle1 = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xff7b00, linewidth: 4, transparent: true, opacity: 0.8 }));
	cycle1.name = "cycle1"
	cycle1.visible = false;
	group.add(cycle1);
	
	var path = [
		{ x:490, y:-42, z:425 },
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
    
    var geometry = new THREE.Geometry();
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
        geometry.vertices.push(new THREE.Vector3(o.x, o.y, o.z));
    }

    var cycle2 = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xff9900, linewidth: 4, transparent: true, opacity: 0.8 }));
	cycle2.name = "cycle2"
	cycle2.visible = false;
	group.add(cycle2);
}
function makeParkingOverlay(){
	var loader = new THREE.JSONLoader();
	loader.load( "assets/models/Permit_Parking.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({color: 0x5757b5, transparent: true, opacity: 0.8}) );
        mesh.scale.set( 1, 1, 1 );
		group.add( mesh );
		mesh.name = "Permit_Parking";
		mesh.visible = false;
    } );
	loader.load( "assets/models/Visitor_Parking.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({color: 0x0099cc, transparent: true, opacity: 0.8}) );
        mesh.scale.set( 1, 1, 1 );
		group.add( mesh );
		mesh.name = "Visitor_Parking";
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
	
	cycleIcon(busArray, 5).position.set(125,2,148);
	cycleIcon(busArray, 5).position.set(170,0,-92);
	cycleIcon(busArray, 5).position.set(165,2,-146);
	cycleIcon(busArray, 5).position.set(-331,0,-161);
	cycleIcon(busArray, 5).position.set(-116,2,-238);
	cycleIcon(busArray, 5).position.set(121,-3,363);
	cycleIcon(busArray, 5).position.set(132,-3,372);
	cycleIcon(busArray, 5).position.set(-133,2,-238);
	cycleIcon(busArray, 5).position.set(-341,0,-215);
	cycleIcon(busArray, 5).position.set(56,0,-237);
	cycleIcon(busArray, 5).position.set(0,0,-264);
	cycleIcon(busArray, 5).position.set(282,0,-240);
	cycleIcon(busArray, 5).position.set(124,2,160);
	cycleIcon(busArray, 5).position.set(423,0,-261);
}

function make3DText(message, color, mesh){
	var text3d = new THREE.TextGeometry( message, {
		size: 6,
		height: 1,
		curveSegments: 2,
		font: "helvetiker"
	});		
	var textMaterial = new THREE.MeshBasicMaterial( { color: color, overdraw: true, transparent: true, opacity: 0.7, alphaTest: 0.5 } );
	var text = new THREE.Mesh( text3d, textMaterial );
	text.rotation.z = 270 * Math.PI / 60;
	group.add( text );
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
				color = 0x3798b8;
			}else if (height < 5000 && height > 4000){
				color = 0x0066cc;
			} else {
				color = 0x333399;
			}
			percent = ((height / 6900) * 100);
			prefix = "£";
			break;
		case populationArray:
			if (height < 200){
				color = 0x3798b8;
			}else if (height < 400 && height > 200){
				color = 0x0066cc;
			} else {
				color = 0x333399;
			}
			percent = ((height / 500) * 100) * 1.5;
			break;
		case subjectscoreArray:
			if (height < 60){
				color = 0x3798b8;
			}else if (height < 80 && height > 60){
				color = 0x0066cc;
			} else {
				color = 0x333399;
			}
			percent = ((height / 100) * 100) * 1;
			break;
		case subjectsatisfactionArray:
			if (height < 85){
				color = 0x3798b8;
			}else if (height < 92 && height > 85){
				color = 0x0066cc;
			} else {
				color = 0x333399;
			}
			percent = ((height / 100) * 100) * 1;
			suffix = "%";
			break;
		case entrypointsArray:
			if (height < 360){
				color = 0x3798b8;
			}else if (height < 380 && height > 360){
				color = 0x0066cc;
			} else {
				color = 0x333399;
			}
			percent = ((height / 440) * 100) * 1;
			break;
		case sizeArray:
			if (height < 11){
				color = 0x3798b8;
			}else if (height < 13 && height > 11){
				color = 0x0066cc;
			} else {
				color = 0x333399;
			}
			percent = ((height / 15) * 100) * 1;
			suffix = "m²";
			break;
	}
	
	var bar = new THREE.Mesh( new THREE.CubeGeometry(10, percent, 10), new THREE.MeshLambertMaterial({color: color, transparent: true, opacity: 0.7, alphaTest: 0.5}) );
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
	text.position.set( position.x + 3, boundingBox.max.y + ((percent / 2) + 5), position.z );	
	
	dataArray.push( text, bar );
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	positionTrackingOverlay();
}