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
	context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
	context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

	context.lineWidth = 5;
	roundRect(context, 5/2, 5/2, textWidth + 5, fontsize * 1.4 + 5, 6);
	context.fillStyle = "rgba(0, 0, 0, 1.0)";

	context.fillText( message, 5, fontsize + 5);
	var texture = new THREE.Texture(canvas) 
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture, useScreenCoordinates: false, alignment: spriteAlignment } );
	var sprite = new THREE.Sprite( spriteMaterial );
	
	name.geometry.computeBoundingBox();
	var boundingBox = name.geometry.boundingBox;
	var position = new THREE.Vector3();
	position.subVectors( boundingBox.max, boundingBox.min );
	position.multiplyScalar( 0.5 );
	position.add( boundingBox.min );
	position.applyMatrix4( name.matrixWorld );
	
	sprite.position.set( position.x - 36, boundingBox.max.y + 10, position.z - 9 );
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

function makeIcon( mesh, iconType ){
	for (var i=0, tot=iconArray.length; i < tot; i++) {
		var spriteMaterial = new THREE.SpriteMaterial( { map: THREE.ImageUtils.loadTexture( 'assets/images/icons/ico_'+iconType+'.png' ), useScreenCoordinates: false } );
		var sprite = new THREE.Sprite( spriteMaterial );
		sprite.scale.set(12,12,1.0);
		iconArray[i].geometry.computeBoundingBox();
		var boundingBox = iconArray[i].geometry.boundingBox;
		var position = new THREE.Vector3();
		position.subVectors( boundingBox.max, boundingBox.min );
		position.multiplyScalar( 0.5 );
		position.add( boundingBox.min );
		position.applyMatrix4( iconArray[i].matrixWorld );
		
		sprite.position.set( position.x - 36, 60, position.z - 9 );
		scene.add( sprite );
	}
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
	TWEEN.update();
	requestAnimationFrame( animate );
	controls.update();
	stats.update();
	//scene.overrideMaterial = depthMaterial;
	render();
	//scene.overrideMaterial = null;
	//composer.render();
}
function render() {
	renderer.render( scene, camera/*, depthTarget*/ );
}