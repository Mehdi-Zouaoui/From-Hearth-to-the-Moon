var camera, scene, renderer, controls;
var mesh;
let t = 1;
let r  = 35;
init();
animate();
moon_path();


function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);
    controls = new THREE.OrbitControls(camera);


    //controls.update() doit être appeler obligatoirement apre sun changement manuel de la camera
    controls.update();
    camera.position.set(0, 0, 100);

    const plane_texture = new THREE.TextureLoader().load('images/stars-1920x1080.jpg');
    const plane_geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 32);
    const plane_material = new THREE.MeshBasicMaterial({map: plane_texture, side: THREE.DoubleSide });
    const random_material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh(plane_geometry, plane_material);
    const plane_2 = new THREE.Mesh(plane_geometry,plane_material);
    const plane_3 = new THREE.Mesh(plane_geometry,plane_material);
    const plane_4 = new THREE.Mesh(plane_geometry,plane_material);
    plane_2.rotation.y = Math.PI/2;
    plane_3.rotation.y = Math.PI/2;
    
    plane.position.set(20,0,-200);
    plane_2.position.set(300,-50,200);
    plane_3.position.set(-500,-50,200);
    plane_4.position.set(20,0,500);
    scene.add(plane);
    scene.add(plane_2);
    scene.add(plane_3);
    scene.add(plane_4);

    const earth_texture = new THREE.TextureLoader().load('images/texture_earth-5400x2700.jpg');
    const earth_geometry = new THREE.SphereGeometry(10, 16, 16);
    const earth_material = new THREE.MeshBasicMaterial({ map: earth_texture });
    earth = new THREE.Mesh(earth_geometry, earth_material);
    earth.position.set(0, 0, 0);
    scene.add(earth);

    const moon_texture = new THREE.TextureLoader().load('images/texture_moon-2048x1024.jpg');
    const geometry = new THREE.SphereGeometry(5, 16, 16);
    const material = new THREE.MeshBasicMaterial({ map: moon_texture });
    moon = new THREE.Mesh(geometry, material);
    moon.position.set(0, 0, -60);
    scene.add(moon);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //
    

}


function moon_path(){
  
    moon.position.z = r*Math.sin(THREE.Math.degToRad(t));
    moon.position.x = r*Math.cos(THREE.Math.degToRad(t));
}


function animate() {

    t += 1;
    requestAnimationFrame(animate);
    controls.update();
    //const date  = new Date() ;


    console.log(r*Math.sin(THREE.Math.degToRad(t)));


    earth.rotation.y += 0.01;
    moon.rotation.y += 0.01;
    
   

    renderer.render(scene, camera);
    moon_path();
}
   