// 引入Three.js
import * as THREE from 'three';
// 引入Three.js扩展库
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * 创建场景对象Scene
 */
var scene = new THREE.Scene();
/**
 * 创建网格模型
 */
var geometry = new THREE.BoxGeometry(100, 10, 300); //创建一个立方体几何对象Geometry
var material = new THREE.MeshLambertMaterial({
    color: 0x008080
}); //材质对象Material
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
scene.add(mesh); //网格模型添加到场景中
/**
 * 光源设置
 */
//点光源
var point = new THREE.PointLight(0xffffff,1);
point.position.set(600, 600, 600); //点光源位置
scene.add(point); //点光源添加到场景中
//环境光
var ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);
/**
 * 相机设置
 */
var width = 500; //canvas画布宽度
var height = 500; //canvas画布高度
var k = width / height; //canvas画布宽高比
var s = 250; //三维场景显示范围控制系数，系数越大，显示的范围越大
//创建相机对象
var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 10, 1000);
camera.position.set(200, 300, 200); //设置相机位置
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
/**
 * 创建渲染器对象
 */
var renderer = new THREE.WebGLRenderer({
    //抗锯齿属性，WebGLRenderer常用的一个属性
   antialias:true,
   alpha:true
});

renderer.setClearAlpha(0);
scene.background = null;
renderer.setSize(width, height);//设置渲染区域尺寸
//renderer.setClearColor(0xf0f0f0); //设置背景颜色
//renderer.setClearColor(0xFFFFFF, 1); //设置背景颜色
// document.body.appendChild(renderer.domElement); //body元素中插入canvas对象


// 渲染函数
function render() {
    renderer.render(scene, camera);//执行渲染操作
    mesh.rotateX(0.01);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
}
render();
//创建控件对象  相机对象camera作为参数   控件可以监听鼠标的变化，改变相机对象的属性
new OrbitControls(camera, renderer.domElement);

export {renderer};