// 转换Roll-Pitch-Yaw到四元数和旋转矩阵
function rpyToQuatAndRotationMatrix(roll, pitch, yaw) {
    // 转换角度到弧度
    const rollRad = THREE.MathUtils.degToRad(roll);
    const pitchRad = THREE.MathUtils.degToRad(pitch);
    const yawRad = THREE.MathUtils.degToRad(yaw);

    // 计算四元数
    const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(rollRad, pitchRad, yawRad, 'XYZ'));

    // 计算旋转矩阵
    const rotationMatrix = new THREE.Matrix4().makeRotationFromQuaternion(quaternion);

    // 将旋转矩阵元素提取出来，格式为3x3
    const elements = rotationMatrix.elements;
    const formattedMatrix = [
        [elements[0], elements[1], elements[2]],
        [elements[4], elements[5], elements[6]],
        [elements[8], elements[9], elements[10]]
    ];

    // 返回四元数和旋转矩阵
    return {
        quaternion: quaternion,
        rotationMatrix: formattedMatrix
    };
}
