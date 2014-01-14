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
	
	sprite.position.set( position.x - 10, boundingBox.max.y + 5, position.z );
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
	mesh.name == "Tyler_Court_A" || 
	mesh.name == "Tyler_Court_B" || 
	mesh.name == "Tyler_Court_C" || 
	mesh.name == "Purchas_Court" || 
	mesh.name == "Lypeatt_Court" || 
	mesh.name == "Darwin_Houses" ||
	mesh.name == "Keynes_Flats" ||
	mesh.name == "Eliot_College" ||
	mesh.name == "Rutherford_College" ||
	mesh.name == "Bishopden_Court" ||
	mesh.name == "Bossenden_Court" ||
	mesh.name == "Clowes_Court" ||
	mesh.name == "Denstead_Court" ||
	mesh.name == "Ellenden_Court" ||
	mesh.name == "Farthings_Court" ||
	mesh.name == "Grimshill_Court" ||
	mesh.name == "Homestall_Court" ||
	mesh.name == "Hothe_Court" ||
	mesh.name == "Kemsdale_Court" ||
	mesh.name == "Lypeatt_Court" ||
	mesh.name == "Marley_Court" ||
	mesh.name == "Nickle_Court" ||
	mesh.name == "Purchas_Court" ||
	mesh.name == "Stock_Court" ||
	mesh.name == "Thornden_Court" ||
	mesh.name == "Tudor_Court" ||
	mesh.name == "Willows_Court" ||
	mesh.name == "Woolf_Flats"  
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
	
	var tweenOne = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 21 }, 1500 ).easing( TWEEN.Easing.Sinusoidal.InOut);
	var tweenTwo = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 20 }, 1500 ).easing( TWEEN.Easing.Sinusoidal.InOut);
	
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
		var icon = new THREE.Mesh( new THREE.CubeGeometry( 8, 8, 8 ), material );
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
		icon.material.opacity = 1;
		
		var tweenOne = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 35 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut);
		var tweenTwo = new TWEEN.Tween( icon.position ).to( { y: boundingBox.max.y + 30 }, 1000 ).easing( TWEEN.Easing.Sinusoidal.InOut);
		
		tweenOne.chain(tweenTwo);
		tweenTwo.chain(tweenOne);
		
		tweenOne.start();
	}
}

function makeTextOverlay( message )
{
	var theText = message;
	var text3d = new THREE.TextGeometry( theText, {
		size: 20,
		height: 3,
		curveSegments: 2,
		font: "helvetiker"
	});		
	var textMaterial = new THREE.MeshBasicMaterial( { color: 0x279CCD, overdraw: true } );
	var text = new THREE.Mesh( text3d, textMaterial );
	scene.add( text );
	group.add( text );
	return text;	
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	positionTrackingOverlay();
}