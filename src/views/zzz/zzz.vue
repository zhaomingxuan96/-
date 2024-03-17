<template>
  
  <div class="homepage_container">
    <el-tree v-show="xianyin" :data="data" :props="defaultProps" @node-click="handleNodeClick" style="position: absolute;overflow:auto;
                background-color:transparent;color:#03e6e6;">
    </el-tree>
    <el-button type="primary" @click="donghua()"
      style="color: #ffffff;position: absolute;bottom: 10%; right: 20%;font-size: 20px;border-color:#1db6ae;background-color:transparent;z-index: 99">播放动画</el-button>
    <el-button type="primary" @click="mulushu()"
      style="color: #ffffff;position: absolute;bottom: 10%; right: 0%;font-size: 20px;border-color:#1db6ae;background-color:transparent;z-index: 99">构件目录</el-button>
    <div class="homepage_content" id="three"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as THREE from 'three'
import * as dat from 'dat.gui';
//import { GUI } from 'three/examples/js/libs/dat.gui.min';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AxesHelper, BoxGeometry, DoubleSide, PerspectiveCamera, WebGLRenderer } from "three";
import { readqddmTxt, readqddsTxt, readqdctTxt, readyzlbyzTxt, readyzlbxjTxt, readqtdbTxt, readxwhntTxt, readlqhntTxt, readqfzqTxt, readqdsTxt, readxjzzTxt } from '../../api/bridge'

var qddm = readqddmTxt()
var qdds = readqddsTxt()
var qdct = readqdctTxt()
var yzlbyz = readyzlbyzTxt()
var yzlbxj = readyzlbxjTxt()
var qtdb = readqtdbTxt()
var xwhnt = readxwhntTxt()
var lqhnt = readlqhntTxt()
var qfzq = readqfzqTxt()
var qds = readqdsTxt()
var xjzz = readxjzzTxt()
var xianyin = ref(false)

var scene: any, axes, renderer: any, renderer1: any, camera: any, controls: any, mixer: any, AnimationAction: any
/* 场景 */
function initScene() {
  scene = new THREE.Scene();
  scene.background = null;
}
/* 坐标轴 */
function initAxes() {
  axes = new THREE.AxesHelper(10000000)
  // scene.add(axes)
}
/* 渲染器 */
function initRender() {
  renderer = new THREE.WebGLRenderer({
    logarithmicDepthBuffer: true,
    antialias: true,//抗锯齿
    alpha: true
  })
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  //renderer.setClearColor(0x2f4f4f)
  renderer.setSize(800, 700)
  renderer.localClippingEnabled = true
  renderer.shadowMap.type = THREE.PCFShadowMap;
}
/* 相机 */
function initCamera() {
  var width = 800; //canvas画布宽度
  var height = 700; //canvas画布高度
  var k = width / height; //canvas画布宽高比
  var s = 100000; //三维场景显示范围控制系数，系数越大，显示的范围越大
  //创建相机对象
  camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 2000000);
  camera.position.set(10000, 200000, 200000); //设置相机位置
}
/* 灯光 */
function initLight() {
  var ambient = new THREE.AmbientLight(0x444444);
  scene.add(ambient);
}
/* 控制器 */
function initControls() {
  controls = new OrbitControls(camera, renderer.domElement)
  controls.target = new THREE.Vector3(7000, -150000, 0)
  controls.update();
  camera.lookAt(new THREE.Vector3(7000, -150000, 0))
}
/* 窗口变动触发 */
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

onMounted(() => {
  document.getElementById('three')?.appendChild(renderer.domElement)
})
interface Tree {
  label: string
  children?: Tree[]
}
// 目录树
var leve1group: any = [], handleNodeClick: any, data: Tree[], defaultProps: { children: string; label: string; }, group: any
var duration: any, clip: any
var posTrack1: any, posTrack2: any, posTrack3: any, posTrack4: any, posTrack5: any, posTrack6: any, posTrack7: any, posTrack8: any,
  posTrack9: any, posTrack10: any, posTrack11: any
function initContent() {
  group = new THREE.Group()
  var group1 = new THREE.Group()
  group1.name = "桥墩承台"
  var group2 = new THREE.Group()
  group2.name = "桥墩墩身"
  var group3 = new THREE.Group()
  group3.name = "桥墩墩帽"
  var group4 = new THREE.Group()
  group4.name = "桥垫石"
  var group5 = new THREE.Group()
  group5.name = "橡胶支座"
  var group6 = new THREE.Group()
  group6.name = "预制梁板现浇"
  var group7 = new THREE.Group()
  group7.name = "预制梁板预制"
  var group8 = new THREE.Group()
  group8.name = "桥头搭板"
  var group9 = new THREE.Group()
  group9.name = "纤维混凝土"
  var group10 = new THREE.Group()
  group10.name = "沥青混凝土"
  var group11 = new THREE.Group()
  group11.name = "桥防撞墙"
  group.add(group1, group2, group3, group4, group5, group6, group7, group8, group9, group10, group11)
  scene.add(group)
  // 从右向左
  const localPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 30000);
  // 从后向前
  const localPlane1 = new THREE.Plane(new THREE.Vector3(0, -1, 0), 10000);
  const localPlane2 = new THREE.Plane(new THREE.Vector3(0, 0, -1), 45000);


  var texture = new THREE.TextureLoader().load('./材质/hnt.png')
  var texture1 = new THREE.TextureLoader().load('./材质/沥青.png')
  var texture2 = new THREE.TextureLoader().load('./材质/墩身.png')
  var texture3 = new THREE.TextureLoader().load('./材质/挡板.png')
  const cubeMaterial = new THREE.MeshLambertMaterial({
    // color: 0xc0c0c0,
    map: texture,//添加到物体中
    side: DoubleSide,
    clippingPlanes: [localPlane
      , localPlane1,
      localPlane2,
    ],
    clipShadows: true
  })
  var mat = new THREE.MeshBasicMaterial({
    color: 0xcdc0b0, side: DoubleSide,
    clippingPlanes: [localPlane,
      localPlane1,
      localPlane2,
    ],
    clipShadows: true
  })
  var mat1 = new THREE.MeshBasicMaterial({
    color: 0xffe4b5, side: DoubleSide,
    clippingPlanes: [localPlane,
      localPlane1,
      localPlane2,
    ],
    clipShadows: true
  })
  var mat2 = new THREE.MeshBasicMaterial({
    color: 0x000000, side: DoubleSide,
    clippingPlanes: [localPlane,
      localPlane1,
      localPlane2,
    ],
    clipShadows: true
  })
  var mat3 = new THREE.MeshBasicMaterial({
    side: DoubleSide,
    map: texture1,
    clippingPlanes: [localPlane,
      localPlane1,
      localPlane2,
    ],
    clipShadows: true
  })
  var dsmat = new THREE.MeshBasicMaterial({
    side: DoubleSide,
    map: texture2,
    clippingPlanes: [localPlane,
      localPlane1,
      localPlane2,
    ],
    clipShadows: true
  })
  var dbmat = new THREE.MeshBasicMaterial({
    side: DoubleSide,
    map: texture3,
    clippingPlanes: [localPlane,
      localPlane1,
      localPlane2,
    ],
    clipShadows: true
  })
  // 三级目录
  var level3 = []
  // 桥墩承台
  for (var i = 0; i < qdct.length; i++) {
    var cube1 = new THREE.Geometry();
    var vertice1 = [
      new THREE.Vector3(qdct[i].x1, qdct[i].z1, -qdct[i].y1), //v0
      new THREE.Vector3(qdct[i].x2, qdct[i].z2, -qdct[i].y2), //v1
      new THREE.Vector3(qdct[i].x3, qdct[i].z3, -qdct[i].y3), //v2
      new THREE.Vector3(qdct[i].x4, qdct[i].z4, -qdct[i].y4), //v3
      new THREE.Vector3(qdct[i].x5, qdct[i].z5, -qdct[i].y5), //v4
      new THREE.Vector3(qdct[i].x6, qdct[i].z6, -qdct[i].y6), //v5
      new THREE.Vector3(qdct[i].x7, qdct[i].z7, -qdct[i].y7), //v6
      new THREE.Vector3(qdct[i].x8, qdct[i].z8, -qdct[i].y8), //v7
    ];
    cube1.vertices = vertice1;
    var face1 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube1.faces = face1;
    cube1.computeFaceNormals();
    var geometry1 = new THREE.Mesh(cube1, dsmat);//创建立方体网格模型
    geometry1.castShadow = true;
    geometry1.receiveShadow = true;
    geometry1.name = qdct[i].name + qdct[i].xh
    //geometry1.pnm = "桥墩承台"
    //geometry1.xmmc = "桥"
    group1.add(geometry1);
    level3.push(qdct[i].name + qdct[i].xh)
    // 创建名为Box对象的关键帧数据
    var times1 = [0, 10]; //关键帧时间数组，离散的时间点序列
    var values1 = [geometry1.position.x, geometry1.position.y, geometry1.position.z, geometry1.position.x, -100000, geometry1.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack1 = new THREE.KeyframeTrack(group1.name + '.position', times1, values1);
  }
  for (var i = 0; i < qdds.length; i++) {
    var cube2 = new THREE.Geometry();
    var vertice2 = [
      new THREE.Vector3(qdds[i].x1, qdds[i].z1, -qdds[i].y1), //v0
      new THREE.Vector3(qdds[i].x2, qdds[i].z2, -qdds[i].y2), //v1
      new THREE.Vector3(qdds[i].x3, qdds[i].z3, -qdds[i].y3), //v2
      new THREE.Vector3(qdds[i].x4, qdds[i].z4, -qdds[i].y4), //v3
      new THREE.Vector3(qdds[i].x5, qdds[i].z5, -qdds[i].y5), //v4
      new THREE.Vector3(qdds[i].x6, qdds[i].z6, -qdds[i].y6), //v5
      new THREE.Vector3(qdds[i].x7, qdds[i].z7, -qdds[i].y7), //v6
      new THREE.Vector3(qdds[i].x8, qdds[i].z8, -qdds[i].y8), //v7
    ];
    cube2.vertices = vertice2;
    var face2 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube2.faces = face2;
    cube2.computeFaceNormals();
    var geometry2 = new THREE.Mesh(cube2, dsmat);//创建立方体网格模型
    geometry2.castShadow = true;
    geometry2.receiveShadow = true;
    geometry2.name = qdds[i].name + qdds[i].xh
    //geometry2.pnm = "桥墩墩身"
    //geometry2.xmmc = "桥"
    group2.add(geometry2);
    level3.push(qdds[i].name + qdds[i].xh)
    // 创建名为Box对象的关键帧数据
    var times2 = [10, 20]; //关键帧时间数组，离散的时间点序列
    var values2 = [geometry2.position.x, geometry2.position.y, geometry2.position.z, geometry2.position.x, -100000, geometry2.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack2 = new THREE.KeyframeTrack(group2.name + '.position', times2, values2);
  }
  for (var i = 0; i < qddm.length; i++) {
    var cube3 = new THREE.Geometry();
    var vertice3 = [
      new THREE.Vector3(Number(qddm[i].x1), Number(qddm[i].z1), -Number(qddm[i].y1)), //v0
      new THREE.Vector3(Number(qddm[i].x2), Number(qddm[i].z2), -Number(qddm[i].y2)), //v1
      new THREE.Vector3(Number(qddm[i].x3), Number(qddm[i].z3), -Number(qddm[i].y3)), //v2
      new THREE.Vector3(Number(qddm[i].x4), Number(qddm[i].z4), -Number(qddm[i].y4)), //v3
      new THREE.Vector3(Number(qddm[i].x5), Number(qddm[i].z5), -Number(qddm[i].y5)), //v4
      new THREE.Vector3(Number(qddm[i].x6), Number(qddm[i].z6), -Number(qddm[i].y6)), //v5
      new THREE.Vector3(Number(qddm[i].x7), Number(qddm[i].z7), -Number(qddm[i].y7)), //v6
      new THREE.Vector3(Number(qddm[i].x8), Number(qddm[i].z8), -Number(qddm[i].y8)), //v7
    ];
    cube3.vertices = vertice3;
    var face3 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube3.faces = face3;
    cube3.computeFaceNormals();
    var geometry3 = new THREE.Mesh(cube3, dbmat);//创建立方体网格模型
    geometry3.castShadow = true;
    geometry3.receiveShadow = true;
    geometry3.name = qddm[i].name + qddm[i].xh + qddm[i].num
    //geometry3.pnm = "桥墩墩帽"
    //geometry3.xmmc = "桥"
    group3.add(geometry3);
    level3.push(qddm[i].name + qddm[i].xh + qddm[i].num)
    // 创建名为Box对象的关键帧数据
    var times3 = [20, 30]; //关键帧时间数组，离散的时间点序列
    var values3 = [geometry3.position.x, geometry3.position.y, geometry3.position.z, geometry3.position.x, -100000, geometry3.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack3 = new THREE.KeyframeTrack(group3.name + '.position', times3, values3);
  }
  for (var i = 0; i < qds.length; i++) {
    var cube4 = new THREE.Geometry();
    var vertice4 = [
      new THREE.Vector3(Number(qds[i].x1), Number(qds[i].z1), -Number(qds[i].y1)), //v0
      new THREE.Vector3(Number(qds[i].x2), Number(qds[i].z2), -Number(qds[i].y2)), //v1
      new THREE.Vector3(Number(qds[i].x3), Number(qds[i].z3), -Number(qds[i].y3)), //v2
      new THREE.Vector3(Number(qds[i].x4), Number(qds[i].z4), -Number(qds[i].y4)), //v3
      new THREE.Vector3(Number(qds[i].x5), Number(qds[i].z5), -Number(qds[i].y5)), //v4
      new THREE.Vector3(Number(qds[i].x6), Number(qds[i].z6), -Number(qds[i].y6)), //v5
      new THREE.Vector3(Number(qds[i].x7), Number(qds[i].z7), -Number(qds[i].y7)), //v6
      new THREE.Vector3(Number(qds[i].x8), Number(qds[i].z8), -Number(qds[i].y8)), //v7
    ];
    cube4.vertices = vertice4;
    var face4 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube4.faces = face4;
    cube4.computeFaceNormals();
    var geometry4 = new THREE.Mesh(cube4, mat);//创建立方体网格模型
    geometry4.castShadow = true;
    geometry4.receiveShadow = true;
    geometry4.name = qds[i].name + qds[i].xh
    //geometry4.pnm = "桥垫石"
    //geometry4.xmmc = "桥"
    group4.add(geometry4);
    level3.push(qds[i].name + qds[i].xh)
    // 创建名为Box对象的关键帧数据
    var times4 = [30, 40]; //关键帧时间数组，离散的时间点序列
    var values4 = [geometry4.position.x, geometry4.position.y, geometry4.position.z, geometry4.position.x, -100000, geometry4.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack4 = new THREE.KeyframeTrack(group4.name + '.position', times4, values4);
  }
  for (var i = 0; i < xjzz.length; i++) {
    var jdgeo = new THREE.CylinderGeometry(100, 100, 100)
    var jdmesh = new THREE.Mesh(jdgeo, mat2)
    jdmesh.position.x = Number(xjzz[i].x1)
    jdmesh.position.y = Number(xjzz[i].z1)
    jdmesh.position.z = -Number(xjzz[i].y1)
    jdmesh.castShadow = true;
    jdmesh.name = xjzz[i].name + xjzz[i].xh
    //jdmesh.pnm = "橡胶支座"
    //jdmesh.xmmc = "桥"
    group5.add(jdmesh)
    level3.push(xjzz[i].name + xjzz[i].xh)
  }
  var times5 = [40, 50]; //关键帧时间数组，离散的时间点序列
  var values5 = [group5.position.x, group5.position.y, group5.position.z, group5.position.x, -100000, group5.position.z]; //与时间点对应的值组成的数组
  // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
  posTrack5 = new THREE.KeyframeTrack(group5.name + '.position', times5, values5);
  for (var i = 0; i < yzlbxj.length; i++) {
    var cube6 = new THREE.Geometry();
    var vertice6 = [
      new THREE.Vector3(yzlbxj[i].x1, yzlbxj[i].z1, -yzlbxj[i].y1), //v0
      new THREE.Vector3(yzlbxj[i].x2, yzlbxj[i].z2, -yzlbxj[i].y2), //v1
      new THREE.Vector3(yzlbxj[i].x3, yzlbxj[i].z3, -yzlbxj[i].y3), //v2
      new THREE.Vector3(yzlbxj[i].x4, yzlbxj[i].z4, -yzlbxj[i].y4), //v3
      new THREE.Vector3(yzlbxj[i].x5, yzlbxj[i].z5, -yzlbxj[i].y5), //v4
      new THREE.Vector3(yzlbxj[i].x6, yzlbxj[i].z6, -yzlbxj[i].y6), //v5
      new THREE.Vector3(yzlbxj[i].x7, yzlbxj[i].z7, -yzlbxj[i].y7), //v6
      new THREE.Vector3(yzlbxj[i].x8, yzlbxj[i].z8, -yzlbxj[i].y8), //v7
    ];
    cube6.vertices = vertice6;
    var face6 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube6.faces = face6;
    cube6.computeFaceNormals();
    var geometry6 = new THREE.Mesh(cube6, mat3);//创建立方体网格模型
    geometry6.castShadow = true;
    geometry6.receiveShadow = true;
    geometry6.name = yzlbxj[i].name + yzlbxj[i].xh
    //geometry6.pnm = "预制梁板(现浇)"
    //geometry6.xmmc = "桥"
    group6.add(geometry6);
    level3.push(yzlbxj[i].name + yzlbxj[i].xh)
    // 创建名为Box对象的关键帧数据
    var times6 = [50, 60]; //关键帧时间数组，离散的时间点序列
    var values6 = [geometry6.position.x, geometry6.position.y, geometry6.position.z, geometry6.position.x, -100000, geometry6.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack6 = new THREE.KeyframeTrack(group6.name + '.position', times6, values6);
  }
  for (var i = 0; i < yzlbyz.length; i++) {
    var cube7 = new THREE.Geometry();
    var vertice7 = [
      new THREE.Vector3(yzlbyz[i].x1, yzlbyz[i].z1, -yzlbyz[i].y1), //v0
      new THREE.Vector3(yzlbyz[i].x2, yzlbyz[i].z2, -yzlbyz[i].y2), //v1
      new THREE.Vector3(yzlbyz[i].x3, yzlbyz[i].z3, -yzlbyz[i].y3), //v2
      new THREE.Vector3(yzlbyz[i].x4, yzlbyz[i].z4, -yzlbyz[i].y4), //v3
      new THREE.Vector3(yzlbyz[i].x5, yzlbyz[i].z5, -yzlbyz[i].y5), //v4
      new THREE.Vector3(yzlbyz[i].x6, yzlbyz[i].z6, -yzlbyz[i].y6), //v5
      new THREE.Vector3(yzlbyz[i].x7, yzlbyz[i].z7, -yzlbyz[i].y7), //v6
      new THREE.Vector3(yzlbyz[i].x8, yzlbyz[i].z8, -yzlbyz[i].y8), //v7
    ];
    cube7.vertices = vertice7;
    var face7 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube7.faces = face7;
    cube7.computeFaceNormals();
    var geometry7 = new THREE.Mesh(cube7, mat3);//创建立方体网格模型
    geometry7.castShadow = true;
    geometry7.receiveShadow = true;
    geometry7.name = yzlbyz[i].name + yzlbyz[i].xh
    //geometry7.pnm = "预制梁板(预制)"
    //geometry7.xmmc = "桥"
    group7.add(geometry7);
    level3.push(yzlbyz[i].name + yzlbyz[i].xh)
    // 创建名为Box对象的关键帧数据
    var times7 = [60, 70]; //关键帧时间数组，离散的时间点序列
    var values7 = [geometry7.position.x, geometry7.position.y, geometry7.position.z, geometry7.position.x, -100000, geometry7.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack7 = new THREE.KeyframeTrack(group7.name + '.position', times7, values7);
  }
  for (var i = 0; i < qtdb.length; i++) {
    var cube8 = new THREE.Geometry();
    var vertice8 = [
      new THREE.Vector3(qtdb[i].x1, qtdb[i].z1, -qtdb[i].y1), //v0
      new THREE.Vector3(qtdb[i].x2, qtdb[i].z2, -qtdb[i].y2), //v1
      new THREE.Vector3(qtdb[i].x3, qtdb[i].z3, -qtdb[i].y3), //v2
      new THREE.Vector3(qtdb[i].x4, qtdb[i].z4, -qtdb[i].y4), //v3
      new THREE.Vector3(qtdb[i].x5, qtdb[i].z5, -qtdb[i].y5), //v4
      new THREE.Vector3(qtdb[i].x6, qtdb[i].z6, -qtdb[i].y6), //v5
      new THREE.Vector3(qtdb[i].x7, qtdb[i].z7, -qtdb[i].y7), //v6
      new THREE.Vector3(qtdb[i].x8, qtdb[i].z8, -qtdb[i].y8), //v7
    ];
    cube8.vertices = vertice8;
    var face8 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube8.faces = face8;
    cube8.computeFaceNormals();
    var geometry8 = new THREE.Mesh(cube8, dbmat);//创建立方体网格模型
    geometry8.castShadow = true;
    geometry8.receiveShadow = true;
    geometry8.name = qtdb[i].name + qtdb[i].xh
    //geometry8.pnm = "桥头搭板"
    //geometry8.xmmc = "桥"
    group8.add(geometry8);
    level3.push(qtdb[i].name + qtdb[i].xh)
    // 创建名为Box对象的关键帧数据
    var times8 = [70, 80]; //关键帧时间数组，离散的时间点序列
    var values8 = [geometry8.position.x, geometry8.position.y, geometry8.position.z, geometry8.position.x, -100000, geometry8.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack8 = new THREE.KeyframeTrack(group8.name + '.position', times8, values8);
  }
  for (var i = 0; i < xwhnt.length; i++) {
    var cube9 = new THREE.Geometry();
    var vertice9 = [
      new THREE.Vector3(xwhnt[i].x1, xwhnt[i].z1, -xwhnt[i].y1), //v0
      new THREE.Vector3(xwhnt[i].x2, xwhnt[i].z2, -xwhnt[i].y2), //v1
      new THREE.Vector3(xwhnt[i].x3, xwhnt[i].z3, -xwhnt[i].y3), //v2
      new THREE.Vector3(xwhnt[i].x4, xwhnt[i].z4, -xwhnt[i].y4), //v3
      new THREE.Vector3(xwhnt[i].x5, xwhnt[i].z5, -xwhnt[i].y5), //v4
      new THREE.Vector3(xwhnt[i].x6, xwhnt[i].z6, -xwhnt[i].y6), //v5
      new THREE.Vector3(xwhnt[i].x7, xwhnt[i].z7, -xwhnt[i].y7), //v6
      new THREE.Vector3(xwhnt[i].x8, xwhnt[i].z8, -xwhnt[i].y8), //v7
    ];
    cube9.vertices = vertice9;
    var face9 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube9.faces = face9;
    cube9.computeFaceNormals();
    var geometry9 = new THREE.Mesh(cube9, mat3);//创建立方体网格模型
    geometry9.castShadow = true;
    geometry9.receiveShadow = true;
    geometry9.name = xwhnt[i].name + xwhnt[i].xh
    //geometry9.pnm = "纤维混凝土"
    //geometry9.xmmc = "桥"
    group9.add(geometry9);
    level3.push(xwhnt[i].name + xwhnt[i].xh)
    // 创建名为Box对象的关键帧数据
    var times9 = [80, 90]; //关键帧时间数组，离散的时间点序列
    var values9 = [geometry9.position.x, geometry9.position.y, geometry9.position.z, geometry9.position.x, -100000, geometry9.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack9 = new THREE.KeyframeTrack(group9.name + '.position', times9, values9);
  }
  for (var i = 0; i < lqhnt.length; i++) {
    var cube10 = new THREE.Geometry();
    var vertice10 = [
      new THREE.Vector3(lqhnt[i].x1, lqhnt[i].z1, -lqhnt[i].y1), //v0
      new THREE.Vector3(lqhnt[i].x2, lqhnt[i].z2, -lqhnt[i].y2), //v1
      new THREE.Vector3(lqhnt[i].x3, lqhnt[i].z3, -lqhnt[i].y3), //v2
      new THREE.Vector3(lqhnt[i].x4, lqhnt[i].z4, -lqhnt[i].y4), //v3
      new THREE.Vector3(lqhnt[i].x5, lqhnt[i].z5, -lqhnt[i].y5), //v4
      new THREE.Vector3(lqhnt[i].x6, lqhnt[i].z6, -lqhnt[i].y6), //v5
      new THREE.Vector3(lqhnt[i].x7, lqhnt[i].z7, -lqhnt[i].y7), //v6
      new THREE.Vector3(lqhnt[i].x8, lqhnt[i].z8, -lqhnt[i].y8), //v7
    ];
    cube10.vertices = vertice10;
    var face10 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube10.faces = face10;
    cube10.computeFaceNormals();
    var geometry10 = new THREE.Mesh(cube10, mat3);//创建立方体网格模型
    geometry10.castShadow = true;
    geometry10.receiveShadow = true;
    geometry10.name = lqhnt[i].name + lqhnt[i].xh
    //geometry10.pnm = "沥青混凝土"
    //geometry10.xmmc = "桥"
    group10.add(geometry10);
    level3.push(lqhnt[i].name + lqhnt[i].xh)
    // 创建名为Box对象的关键帧数据
    var times10 = [90, 100]; //关键帧时间数组，离散的时间点序列
    var values10 = [geometry10.position.x, geometry10.position.y, geometry10.position.z, geometry10.position.x, -100000, geometry10.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack10 = new THREE.KeyframeTrack(group10.name + '.position', times10, values10);
  }
  for (var i = 0; i < qfzq.length; i++) {
    var cube11 = new THREE.Geometry();
    var vertice11 = [
      new THREE.Vector3(qfzq[i].x1, qfzq[i].z1, -qfzq[i].y1), //v0
      new THREE.Vector3(qfzq[i].x2, qfzq[i].z2, -qfzq[i].y2), //v1
      new THREE.Vector3(qfzq[i].x3, qfzq[i].z3, -qfzq[i].y3), //v2
      new THREE.Vector3(qfzq[i].x4, qfzq[i].z4, -qfzq[i].y4), //v3
      new THREE.Vector3(qfzq[i].x5, qfzq[i].z5, -qfzq[i].y5), //v4
      new THREE.Vector3(qfzq[i].x6, qfzq[i].z6, -qfzq[i].y6), //v5
      new THREE.Vector3(qfzq[i].x7, qfzq[i].z7, -qfzq[i].y7), //v6
      new THREE.Vector3(qfzq[i].x8, qfzq[i].z8, -qfzq[i].y8), //v7
    ];
    cube11.vertices = vertice11;
    var face11 = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(5, 4, 7),
      new THREE.Face3(5, 6, 7),
      new THREE.Face3(1, 0, 4),
      new THREE.Face3(1, 5, 4),
      new THREE.Face3(0, 3, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(1, 2, 5),
      new THREE.Face3(2, 5, 6),
    ];
    cube11.faces = face11;
    cube11.computeFaceNormals();
    var geometry11 = new THREE.Mesh(cube11, mat3);//创建立方体网格模型
    geometry11.castShadow = true;
    geometry11.receiveShadow = true;
    geometry11.name = qfzq[i].name + qfzq[i].xh
    //geometry11.pnm = "桥防撞墙"
    //geometry11.xmmc = "桥"
    group11.add(geometry11);
    level3.push(qfzq[i].name + qfzq[i].xh)
    // 创建名为Box对象的关键帧数据
    var times11 = [100, 110]; //关键帧时间数组，离散的时间点序列
    var values11 = [geometry11.position.x, geometry11.position.y, geometry11.position.z, geometry11.position.x, -100000, geometry11.position.z]; //与时间点对应的值组成的数组
    // 创建位置关键帧对象：0时刻对应位置0, 0, 0   10时刻对应位置150, 0, 0
    posTrack11 = new THREE.KeyframeTrack(group11.name + '.position', times11, values11);
  }
  //     duration决定了默认的播放时间，一般取所有帧动画的最大时间
  // duration偏小，帧动画数据无法播放完，偏大，播放完帧动画会继续空播放
  duration = 110;
  // 多个帧动画作为元素创建一个剪辑clip对象，命名"default"，持续时间20
  clip = new THREE.AnimationClip("default", duration, [posTrack1, posTrack2, posTrack3, posTrack4, posTrack5, posTrack6, posTrack7, posTrack8, posTrack9, posTrack10, posTrack11]);
  mixer = new THREE.AnimationMixer(group);
  // 剪辑clip作为参数，通过混合器clipAction方法返回一个操作对象AnimationAction
  AnimationAction = mixer.clipAction(clip);
  //通过操作Action设置播放方式
  AnimationAction.timeScale = 2;//默认1，可以调节播放速度
  const gui = new dat.GUI(),
    folderLocal = gui.addFolder(' '),
    propsLocal = {
      get '是否开启'() {
        return renderer.localClippingEnabled;
      },
      set '是否开启'(v) {
        renderer.localClippingEnabled = v;
      },
      get 'x剖切'() {
        return localPlane.constant;
      },
      set 'x剖切'(v) {
        localPlane.constant = v;
      }
    },
    propsLocal1 = {
      get '是否开启'() {
        return renderer.localClippingEnabled;
      },
      set '是否开启'(v) {
        renderer.localClippingEnabled = v;
      },
      get 'y剖切'() {
        return localPlane1.constant;
      },
      set 'y剖切'(v) {
        localPlane1.constant = v;
      }
    },
    propsLocal2 = {
      get '是否开启'() {
        return renderer.localClippingEnabled;
      },
      set '是否开启'(v) {
        renderer.localClippingEnabled = v;
      },
      get 'z剖切'() {
        return localPlane2.constant;
      },
      set 'z剖切'(v) {
        localPlane2.constant = v;
      }
    }
  folderLocal.add(propsLocal, '是否开启');
  folderLocal.add(propsLocal, 'x剖切', -55000, 30000);
  folderLocal.add(propsLocal1, '是否开启');
  folderLocal.add(propsLocal1, 'y剖切', -45000, 10000);
  folderLocal.add(propsLocal2, '是否开启');
  folderLocal.add(propsLocal2, 'z剖切', -11000, 45000);
  folderLocal.open(); // 将剖切文件夹默认展开
  gui.domElement.style.position = 'fixed';
  gui.domElement.style.left = '37vw';
  gui.domElement.style.top = '69vh';
  // 一级目录
  //var level1 = ['桥']
  // 二级目录
  var level2 = ['桥墩承台', '桥墩墩身', '桥墩墩帽', '桥垫石', '橡胶支座', '预制梁板(现浇)', '预制梁板(预制)', '桥头搭板', '纤维混凝土', '沥青混凝土', '桥防撞墙']
  // for (var i =0; i < level1.length; i++) {
  //   const level1children = {
  //     label: level1[i],
  //     children: []
  //   }
  for (var j = 0; j < level2.length; j++) {
    const level2children = {
      label: level2[j],
      children: [] as any[]
    }
    // level1children.children.push(level2children);
    for (var n = 0; n < level3.length; n++) {
      if (level3[n].indexOf("桥墩承台") != -1 && level2[j] === "桥墩承台") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("桥墩墩身") != -1 && level2[j] === "桥墩墩身") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("桥墩墩帽") != -1 && level2[j] === "桥墩墩帽") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("桥垫石") != -1 && level2[j] === "桥垫石") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("橡胶支座") != -1 && level2[j] === "橡胶支座") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("预制梁板(现浇)") != -1 && level2[j] === "预制梁板(现浇)") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("预制梁板(预制)") != -1 && level2[j] === "预制梁板(预制)") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("桥头搭板") != -1 && level2[j] === "桥头搭板") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("纤维混凝土") != -1 && level2[j] === "纤维混凝土") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("沥青混凝土") != -1 && level2[j] === "沥青混凝土") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
      if (level3[n].indexOf("桥防撞墙") != -1 && level2[j] === "桥防撞墙") {
        const level3children = {
          label: level3[n]
        }
        level2children.children.push(level3children)
      }
    }
    leve1group.push(level2children);
  }
  // leve1group.push(level1children);
  // }
  // 模型树点击
  handleNodeClick = (data: Tree, node: Tree) => {
    console.log(data)
    scene.traverse((item: { type: string; name: string; visible: boolean; pnm: string; xmmc: string; }) => {
      if (item.type === 'Mesh') {
        if (item.name != data.label) {
          item.visible = false;
        } else {
          item.visible = true;
        }
        if (data.label === item.pnm) {
          item.visible = true
        }
        if (data.label === item.xmmc) {
          item.visible = true
        }
      }
    });
  }

  data = leve1group

  defaultProps = {
    children: 'children',
    label: 'label',
  }
}
function donghua() {
  AnimationAction.setLoop(THREE.LoopPingPong, 100).play();
  AnimationAction.paused = !AnimationAction.paused
}
function mulushu() {
  xianyin.value = !xianyin.value
}

/* 初始化 */
function init() {
  initScene();
  initAxes();
  initCamera();
  initRender();
  initLight();
  initControls();
  initContent();
  /* 监听事件 */
  window.addEventListener('resize', onWindowResize, false);
}
var clock = new THREE.Clock();
function update() {
  controls.update
  mixer.update(clock.getDelta());
}
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  update();
}
/* 初始加载 */
(function () {
  init();
  animate();
})();

</script>
<style lang='less'>
.dg {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0px;
  background-color: transparent;
  border-radius: 5px;
  font-family: sans-serif;
  color: #03e6e6;
  font: 11px 'Lucida Grande', sans-serif;
  //text-shadow: 0 -1px 0 #111;
}

.dg.main .close-button {
  -webkit-transition: opacity .1s linear;
  -o-transition: opacity .1s linear;
  -moz-transition: opacity .1s linear;
  transition: opacity .1s linear;
  border: 0;
  line-height: 19px;
  height: 20px;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
}

.dg .property-name {
  cursor: default;
  float: left;
  clear: left;
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dg .c {
  float: left;
  width: 60%;
  position: relative;
}

.dg .slider {
  float: left;
  width: 66%;
  margin-left: -5px;
  margin-right: 0;
  height: 19px;
  margin-top: 4px;
}

.dg .c .slider {
  background: #303030;
  cursor: ew-resize;
}

.dg .c .slider-fg {
  background: #0bdceb91;
  max-width: 100%;
}

.dg .c input[type=text] {
  background: transparent;
  outline: none;
}

.dg .cr.number input[type=text] {
  color: #14c8ce;
}

.dg .cr.boolean {
  border-left: 0px transparent;
}

.dg .cr.number {
  border-left: 0px;
}

.dg li.title {
  padding-left: 16px;
  background: transparent;
  cursor: pointer;
  //border-bottom: 10px solid rgb(221, 200, 13);
}

.dg.main .close-button:hover {
  background-color: transparent;
}

.dg .c input[type=checkbox] {
  margin-top: 7px;
}

.dg li:not(.folder) {
  background: transparent;
  border-bottom: 1px solid #708685;
}

.homepage_container {
  position: absolute;
  margin-top: 10px;
  height: 80%;
  overflow: hidden;

  .homepage_content {
    //position: fixed;
    //left:200px;
    align-items: center;
    width: 50vw;
    //top: 0px;
    height: 100vh;
    background-color: transparent;
    //opacity: 1;
  }



  .el-tree {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 150px;
    height: 400px;
    z-index: 100;
  }

  .el-tree-node__content {
    &:hover {
      background-color: #434d53;
    }
  }

  //使用的地方  不要加scoped
  .el-tree-node.is-current>.el-tree-node__content {
    background-color: #3d80ac !important;

  }

  .el-tree::-webkit-scrollbar {
    width: 3px;
  }

  .el-tree::-webkit-scrollbar-thumb {
    background-color: #27aca1;
  }

  .el-tree::-webkit-scrollbar-track {
    background-color: #000000;
  }
}
</style>