//Variables for setup

let container;    //will grab the container on our HTML page so that we can inject our 3-d model in it
let camera;       //will look at a part/angle of scene
let renderer;     //it will render the 3-d model on our page
let scene;        //it contains the scene of our model camera will looking at a part/angle of it
let house;        //our 3-d model

function init() {
    container = document.querySelector('.scene');

    //create scene
    scene = new THREE.Scene();

    const fov = 35;  //field of view
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 1000;

    //Camera Setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(-8,2,25);

    const ambient = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(10, 10, 100);
    scene.add(light);

    //Renderer
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);


    //Load Model
    let loader = new THREE.GLTFLoader();
    loader.load('./3-D/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        // console.log(gltf);
        // renderer.render(scene, camera);
        animate();
    });
}

function animate() {
    requestAnimationFrame(animate);
    house.rotation.z += 0.05;
    renderer.render(scene, camera);
}

init();

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);