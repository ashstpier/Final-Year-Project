/*

////////// SPRITE TOGGLE ///////////

function toggleSprites( boolean )
{
	if ( boolean == true ){
		for (var i=0, tot=sprites.length; i < tot; i++) {
			sprites[i].visible = boolean;
		}
	} else {
		for (var i=0, tot=sprites.length; i < tot; i++) {
			sprites[i].visible = boolean;
		}
	}
}

toggleSprites( true );*/
	
function makeTextSprite( message, name )
{
	var fontface = "Arial";
	var fontsize = 12;
	var borderColor = { r:255, g:255, b:255, a:1.0 };
	var backgroundColor = { r:255, g:255, b:255, a:1.0 };
	var spriteAlignment = THREE.SpriteAlignment.topLeft;
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Normal " + fontsize + "px " + fontface;
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
	context.fillStyle   = "rgba(50,57,69,1)";
	context.strokeStyle = "rgba(50,57,69,1";

	context.lineWidth = 5;
	roundRect(context, 5/2, 5/2, textWidth + 5, fontsize * 1.4 + 5, 1);
	context.fillStyle = "rgba(255, 255, 255, 1.0)";

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
	
	sprite.position.set( position.x - 36, boundingBox.max.y + 30, position.z - 9 );
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
	mesh.name == "Woolf_Flats"  
	){
		var spriteMaterial = new THREE.SpriteMaterial( { map: THREE.ImageUtils.loadTexture( 'assets/images/icons/ico_location.png' ), useScreenCoordinates: false, alignment: THREE.SpriteAlignment.topCenter, transparent: true } );
		var icon = new THREE.Sprite( spriteMaterial );
		icon.scale.set(10,10,1.0);
		mesh.geometry.computeBoundingBox();
		var boundingBox = mesh.geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( mesh.matrixWorld );
		
		icon.position.set( position.x - 36, boundingBox.max.y + 30, position.z - 9 );
		scene.add( icon );
		group.add( icon);
		locationIcons.push( icon );
		icon.material.opacity = 0;
	}
}



function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	positionTrackingOverlay();
}

function animate() {
	TWEEN.update();
	controls.update();
	stats.update();
	//scene.overrideMaterial = depthMaterial;
	render();
	positionTrackingOverlay();
	//scene.overrideMaterial = null;
	//composer.render();
	requestAnimationFrame( animate );
}
function render() {
	renderer.render( scene, camera/*, depthTarget*/ );
}