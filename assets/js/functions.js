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
	if (
	mesh.name == "Becket_Court" ||  
	mesh.name == "Bishopden_Court" ||
	mesh.name == "Bossenden_Court" ||
	mesh.name == "Clowes_Court" ||
	mesh.name == "Darwin_Houses" ||
	mesh.name == "Denstead_Court" ||
	mesh.name == "Eliot_College" ||
	mesh.name == "Ellenden_Court" ||
	mesh.name == "Farthings_Court" ||
	mesh.name == "Grimshill_Court" ||
	mesh.name == "Homestall_Court" ||
	mesh.name == "Hothe_Court" ||
	mesh.name == "Kemsdale_Court" ||
	mesh.name == "Keynes_Flats" ||
	mesh.name == "Lypeatt_Court" ||
	mesh.name == "Marley_Court" ||
	mesh.name == "Nickle_Court" ||
	mesh.name == "Purchas_Court" ||
	mesh.name == "Rutherford_College" ||
	mesh.name == "Stock_Court" ||
	mesh.name == "Thornden_Court" ||
	mesh.name == "Tudor_Court" ||
	mesh.name == "Tyler_Court_A" || 
	mesh.name == "Tyler_Court_B" || 
	mesh.name == "Tyler_Court_C" ||
	mesh.name == "Willows_Court" ||
	mesh.name == "Woolf_Blocks" ||
	mesh.name == "Woolf_Residential" ||
	mesh.name == "Woolf_Pavillion" 
	){
		createArrays(locationIcons, mesh);
	}
	if (
	mesh.name == "Aphra_Theatre" ||
	mesh.name == "Boiler_House" ||
	mesh.name == "Cornwallis_George_Allen_Wing" ||
	mesh.name == "Cornwallis_Mathematics_Institute" ||
	mesh.name == "Cornwallis_North_East" ||
	mesh.name == "Cornwallis_North_West" ||
	mesh.name == "Cornwallis_South_East" ||
	mesh.name == "Cornwallis_South_West" ||
	mesh.name == "Cornwallis_South" ||
	mesh.name == "Cornwallis_West" ||
	mesh.name == "Darwin_College" ||
	mesh.name == "Eliot_College" ||
	mesh.name == "Grimmond" ||
	mesh.name == "Ingram" ||
	mesh.name == "Jarman" ||
	mesh.name == "Jennison" ||
	mesh.name == "Kent_Business_School" ||
	mesh.name == "Kent_Law_School" ||
	mesh.name == "Keynes_College" ||
	mesh.name == "Marlowe" ||
	mesh.name == "Missing_Link" ||
	mesh.name == "Olive_Cottages" ||
	mesh.name == "Rothford" ||
	mesh.name == "Rutherford_College" ||
	mesh.name == "Stacey" ||
	mesh.name == "Tanglewood" ||
	mesh.name == "Woodlands" ||
	mesh.name == "Woolf_Main"
	){
		createArrays(teachingIcons, mesh);
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
	mesh.name == "Templeman_Library" ||
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
		icon.position.set( position.x, boundingBox.max.y + 30, position.z );
		group.add( icon);
		clickobjects.push( icon );
		tweetIcons.push( icon );
		
		var tweenOne = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 35 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut);
		var tweenTwo = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 30 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut);
		
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

    var darwinRoute = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xcc3333, linewidth: 4, transparent: true, opacity: 0 }));
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

    var parkwoodRoute = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x0099cc, linewidth: 4, transparent: true, opacity: 0}));
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

    var keynesRoute = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x9367bf, linewidth: 4, transparent: true, opacity: 0 }));
	keynesRoute.name = "keynesRoute"
	keynesRoute.visible = false;
	group.add(keynesRoute);
	
	var path = [
		{ x:36, y:1, z:-138 },
        { x:26, y:1, z:-123 },
		{ x:3, y:1, z:-110 },
        { x:-29, y:1, z:-119 },
		{ x:-89, y:9, z:-90 },
		{ x:-123, y:9, z:-71 },
		{ x:-145, y:6, z:-60 },
		{ x:-183, y:7, z:-69 },
		{ x:-200, y:6, z:-67 },
		{ x:-217, y:2, z:-66 },
		{ x:-254, y:2, z:-77 },
    ];
    
    var geometry = new THREE.Geometry();
    for (var pt = 0; pt < path.length; ++pt) {
        var o = path[pt];
        geometry.vertices.push(new THREE.Vector3(o.x, o.y, o.z));
    }

    var cycle1 = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xff7b00, linewidth: 4, transparent: true, opacity: 0 }));
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

    var cycle2 = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xff7b00, linewidth: 4, transparent: true, opacity: 0 }));
	cycle2.name = "cycle2"
	cycle2.visible = false;
	group.add(cycle2);
}
function parkingIcon(iconArray, size){
	var color;
	if (iconArray == visitorParking){
		color = 0x4b4bb3;
	} else if (iconArray == permitParking){
		color = 0xff6600;
	} else {
		color = 0xff7b00;
	}
	var sphere = new THREE.Mesh(new THREE.SphereGeometry(size, 20, 20), new THREE.MeshBasicMaterial({color: color, transparent: true}));
	group.add( sphere);
	iconArray.push( sphere );
	sphere.material.opacity = 0;
	sphere.visible = false;
	
	return sphere;
}
function makeParkingOverlay(){
	var parking1 = parkingIcon(visitorParking, 20);
	parking1.position.set(78,0,-25);
	var parking2 = parkingIcon(visitorParking, 20);
	parking2.position.set(275,0,-205);
	var parking3 = parkingIcon(visitorParking, 20);
	parking3.position.set(39,0,344);
	var parking4 = parkingIcon(visitorParking, 20);
	parking4.position.set(-333,0,-248);
	
	var parking5 = parkingIcon(permitParking, 20);
	parking5.position.set(90,0,30);
	var parking6 = parkingIcon(permitParking, 20);
	parking6.position.set(230,0,3);
	var parking7 = parkingIcon(permitParking, 20);
	parking7.position.set(50,0,-200);
	var parking8 = parkingIcon(permitParking, 20);
	parking8.position.set(230,0,-290);
	var parking9 = parkingIcon(permitParking, 20);
	parking9.position.set(442,0,-153);
	var parking10 = parkingIcon(permitParking, 20);
	parking10.position.set(-30,0,55);
	var parking11 = parkingIcon(permitParking, 20);
	parking11.position.set(-115,0,-220);
}
function makeCycleRacks(){
	var cycle1 = parkingIcon(cycleArray, 7);
	cycle1.position.set(0,3,0);
}

function make3DText(message, color, size)
{
	var text3d = new THREE.TextGeometry( message, {
		size: size,
		height: 1,
		curveSegments: 2,
		font: "helvetiker"
	});		
	THREE.GeometryUtils.center( text3d );
	var textMaterial = new THREE.MeshBasicMaterial( { color: color, overdraw: true, transparent: true, opacity: 0.8 } );
	var text = new THREE.Mesh( text3d, textMaterial );
	scene.add( text );
	group.add( text );
	text.visible = false;
	return text;	
}
function makeCylinder(color, height)
{
	var cylinder = new THREE.Mesh( new THREE.CylinderGeometry(3, 3, height, 50, 50, false), new THREE.MeshBasicMaterial({color: color, transparent: true, opacity: 0.8}) );
	scene.add(cylinder);
	group.add(cylinder);
	cylinder.visible = false;
	return cylinder;	
}
function makeInvestmentOverlay(){
	var cylinder1 = makeCylinder(0x279CCD, 50);
	cylinder1.position.set(40, 0, -90);
	var data1 = make3DText("£4.8m sports facilities", 0x279CCD, 7);
	data1.position.set(40, 35, -90);
	
	var cylinder2 = makeCylinder(0x279CCD, 80);
	cylinder2.position.set(-355, 0, -45);
	var data2a = make3DText("£120m on new", 0x279CCD, 7);
	data2a.position.set(-355, 70, -45);
	var data2b = make3DText("student residences", 0x279CCD, 7);
	data2b.position.set(-355, 55, -45);
	
	var cylinder3 = makeCylinder(0xd47356, 60);
	cylinder3.position.set(19, 0, -186);
	var data3a = make3DText("£0.9m refurbishment", 0xd47356, 7);
	data3a.position.set(19, 55, -186);
	var data3b = make3DText("of Jennison building ", 0xd47356, 7);
	data3b.position.set(19, 40, -186);
	
	var cylinder4 = makeCylinder(0x279CCD, 60);
	cylinder4.position.set(225, 0, -40);
	var data4a = make3DText("£12.6m new", 0x279CCD, 7);
	data4a.position.set(225, 55, -40);
	var data4b = make3DText("teaching spaces", 0x279CCD, 7);
	data4b.position.set(225, 40, -40);
	
	var cylinder5 = makeCylinder(0xd47356, 50);
	cylinder5.position.set(294, 0, -220);
	var data5a = make3DText("£8m Colyer-Fergusson", 0xd47356, 7);
	data5a.position.set(294, 50, -220);
	var data5b = make3DText("Music Building", 0xd47356, 7);
	data5b.position.set(294, 35, -220);
	
	var cylinder6 = makeCylinder(0xd47356, 70);
	cylinder6.position.set(-30, 0, 112);
	var data6a = make3DText("Keynes", 0xd47356, 7);
	data6a.position.set(-30, 60, 112);
	var data6b = make3DText("College Extension", 0xd47356, 7);
	data6b.position.set(-30, 45, 112);
	
	investmentArray.push(cylinder1,cylinder2,cylinder4,data1,data2a,data2b,data4a,data4b);
	developmentArray.push(cylinder3,cylinder5,cylinder6,data3a,data3b,data5a,data5b,data6a,data6b);
}

function parkingRotate(){
	if (camera.position.z < 0){
		for (var i=0, tot=investmentArray.length; i < tot; i++) {
			investmentArray[i].rotation.y = 270 * Math.PI / 280;
		}
		for (var i=0, tot=developmentArray.length; i < tot; i++) {
			developmentArray[i].rotation.y = 270 * Math.PI / 280;
		}
	}else{
		for (var i=0, tot=investmentArray.length; i < tot; i++) {
			investmentArray[i].rotation.y = 0;
		}
		for (var i=0, tot=developmentArray.length; i < tot; i++) {
			developmentArray[i].rotation.y = 0;
		}
	}	
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	positionTrackingOverlay();
}