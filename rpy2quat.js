let scene, camera, renderer, axesHelper, rotationGroup;

// 初始化 Three.js 场景
function initScene() {
    const container = document.getElementById("canvas");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(3, 3, 3);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 添加坐标系
    axesHelper = new THREE.AxesHelper(2);
    scene.add(axesHelper);

    // 旋转的组
    rotationGroup = new THREE.Group();
    scene.add(rotationGroup);

    // 添加网格地面
    const gridHelper = new THREE.GridHelper(5, 10);
    scene.add(gridHelper);

    // 添加鼠标控制
    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    animate();
}

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// 计算四元数和旋转矩阵
function updateRotation() {
    const roll = parseFloat(document.getElementById("roll").value) || 0;
    const pitch = parseFloat(document.getElementById("pitch").value) || 0;
    const yaw = parseFloat(document.getElementById("yaw").value) || 0;

    // 将角度转换为弧度
    const rollRad = THREE.MathUtils.degToRad(roll);
    const pitchRad = THREE.MathUtils.degToRad(pitch);
    const yawRad = THREE.MathUtils.degToRad(yaw);

    // 计算欧拉角和四元数
    const euler = new THREE.Euler(rollRad, pitchRad, yawRad, "XYZ");
    const quaternion = new THREE.Quaternion().setFromEuler(euler);
    const rotationMatrix = new THREE.Matrix4().makeRotationFromEuler(euler);

    // 更新结果显示
    document.getElementById("quaternion").innerText = quaternion.toArray().map(v => v.toFixed(4)).join(", ");
    document.getElementById("matrix").innerText = JSON.stringify(rotationMatrix.elements.map(v => v.toFixed(4)));

    // 更新3D坐标系
    rotationGroup.rotation.set(rollRad, pitchRad, yawRad);
}

// 初始化场景
initScene();

