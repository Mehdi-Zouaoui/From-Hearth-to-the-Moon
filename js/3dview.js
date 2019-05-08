var camera, scene, renderer;
var mesh;
init();
animate();



function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.set(0, 20, 50);
    scene = new THREE.Scene();


    const earth_texture = new THREE.TextureLoader().load( 'images/texture_earth-5400x2700.jpg' );
    const earth_geometry = new THREE.SphereGeometry( 10, 16, 16 );
    const earth_material = new THREE.MeshBasicMaterial( { map: earth_texture } );
    earth = new THREE.Mesh( earth_geometry, earth_material );
    earth.position.set(40,40,-40);
    scene.add(earth);

    const moon_texture = new THREE.TextureLoader().load( 'images/texture_moon-2048x1024.jpg' );
    const geometry = new THREE.SphereGeometry( 5, 16, 16 );
    const material = new THREE.MeshBasicMaterial( { map: moon_texture } );
    moon = new THREE.Mesh( geometry, material );
    moon.position.set(-30,10,-20);
    scene.add( moon );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    //
   
}

function animate() {
    requestAnimationFrame( animate );
    //earth.rotation.x += 0.005;
    earth.rotation.y += 0.01;
    moon.position.x += 0.1;
    renderer.render( scene, camera );
}
