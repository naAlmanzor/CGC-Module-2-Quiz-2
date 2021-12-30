const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
document.body.appendChild( renderer.domElement );

// ---------------- Insert Code Here ---------------- // 

function dvd(){
    const cubeGeometry = new THREE.BoxGeometry(8,2,0);
    const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
    cube.position.set(0,0,0); // Default Position for the Cube 
    cube.name = 'cube';
    scene.add( cube );
}
dvd(scene);

camera.position.z = 15;

// ---------- Insert Animation Here ------------ //

var dxPerFrameX = 0.1; // Moves cube on X axis
var dxPerFrameY = 0.1; // Moves cube on Y axis

let cube = scene.getObjectByName ("cube");

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

    cube.position.x += dxPerFrameX;
    cube.position.y += dxPerFrameY;

    if (cube.position.x > 17){
        dxPerFrameX = -0.10;
        cube.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
    }

    if (cube.position.x < -17){
        dxPerFrameX = 0.10;
        cube.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
    }

    if (cube.position.y > 10){
        dxPerFrameY = -0.10;
        cube.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
    }

    if (cube.position.y < -10){
        dxPerFrameY = 0.10;
        cube.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
    }
}
animate();