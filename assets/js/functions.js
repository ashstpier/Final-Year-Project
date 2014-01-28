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
	mesh.name == "Woolf_Residential"  
	){
		buildIcon(locationIcons, "assets/images/icons/ico_location.png");
	}
	if (
	mesh.name == "Woodys" ||
	mesh.name == "Darwin_College" ||
	mesh.name == "Keynes_College" ||
	mesh.name == "Sports_Centre" ||
	mesh.name == "Marlowe" ||
	mesh.name == "Sports_Pavillion" ||
	mesh.name == "Gulbenkian"
	){
		buildIcon(foodIcons, "assets/images/icons/ico_food.png");
	}
	if (
	mesh.name == "Locke" ||
	mesh.name == "Parkwood_Shop"  
	){
		buildIcon(shopIcons, "assets/images/icons/ico_shop.png");
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
		scene.add( icon );
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
function parkingIcon(iconArray, iconPicture){
	var spriteMaterial = new THREE.SpriteMaterial( { map: THREE.ImageUtils.loadTexture( iconPicture ), useScreenCoordinates: false, alignment: THREE.SpriteAlignment.topCenter, transparent: true } );
	var icon = new THREE.Sprite( spriteMaterial );
	icon.scale.set(12,12,1.0);
	scene.add( icon );
	group.add( icon);
	iconArray.push( icon );
	icon.material.opacity = 0;
	
	var tweenOne = new TWEEN.Tween( icon.position ).to( { y: 13 }, 1500 ).easing( TWEEN.Easing.Sinusoidal.InOut);
	var tweenTwo = new TWEEN.Tween( icon.position ).to( { y: 12 }, 1500 ).easing( TWEEN.Easing.Sinusoidal.InOut);
	
	tweenOne.chain(tweenTwo);
	tweenTwo.chain(tweenOne);
	tweenOne.start();
	
	return icon;
}
function makeParkingOverlay(){
	var parking1 = parkingIcon(visitorParking, "assets/images/icons/ico_parking.png");
	parking1.position.set(78,0,-25);
	var parking2 = parkingIcon(visitorParking, "assets/images/icons/ico_parking.png");
	parking2.position.set(275,0,-205);
	var parking3 = parkingIcon(visitorParking, "assets/images/icons/ico_parking.png");
	parking3.position.set(39,0,344);
	var parking4 = parkingIcon(visitorParking, "assets/images/icons/ico_parking.png");
	parking4.position.set(-333,0,-248);
	
	var parking5 = parkingIcon(permitParking, "assets/images/icons/ico_parking2.png");
	parking5.position.set(90,0,30);
	var parking6 = parkingIcon(permitParking, "assets/images/icons/ico_parking2.png");
	parking6.position.set(230,0,3);
	var parking7 = parkingIcon(permitParking, "assets/images/icons/ico_parking2.png");
	parking7.position.set(50,0,-200);
	var parking8 = parkingIcon(permitParking, "assets/images/icons/ico_parking2.png");
	parking8.position.set(230,0,-290);
	var parking9 = parkingIcon(permitParking, "assets/images/icons/ico_parking2.png");
	parking9.position.set(442,0,-153);
	var parking10 = parkingIcon(permitParking, "assets/images/icons/ico_parking2.png");
	parking10.position.set(-30,0,55);
	var parking11 = parkingIcon(permitParking, "assets/images/icons/ico_parking2.png");
	parking11.position.set(-115,0,-220);
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