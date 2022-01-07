const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
renderer.setPixelRatio(2.667);
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

var counter = 0; // tracks number of bounces

let cube = scene.getObjectByName ("cube");

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

    cube.position.x += dxPerFrameX;
    cube.position.y += dxPerFrameY;

    
    if (cube.position.x > 20 && counter < 5){
        dxPerFrameX = -0.10;
        cube.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
        cube.scale.x -= 0.2;
        cube.scale.y -= 0.2;

        counter++;
        console.log(cube.scale.x);
    }

    if (cube.position.x < -20 && counter < 5){
        dxPerFrameX = 0.10;
        cube.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
        cube.scale.x -= 0.2;
        cube.scale.y -= 0.2;

        counter += 1;
        console.log(cube.scale.x);
    }

    if (cube.position.y > 10 && counter < 5){
        dxPerFrameY = -0.10;
        cube.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
        cube.scale.x -= 0.2;
        cube.scale.y -= 0.2;

        counter++;
        console.log(cube.scale.x);
    }

    if (cube.position.y < -10 && counter < 5){
        dxPerFrameY = 0.10;
        cube.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
        cube.scale.x -= 0.2;
        cube.scale.y -= 0.2;

        counter++;
        console.log(cube.scale.x);
    }

    if (counter >= 5){
        dxPerFrameX = -0.10;
        cube.scale.set(0);
        console.log(cube.scale.x);
    }
}
animate();

