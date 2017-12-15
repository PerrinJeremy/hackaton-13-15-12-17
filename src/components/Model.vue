<template>
    <div>
        <button @click="init()"></button>
        <div id="container">
            <div class="element" v-for="asset of assets" @click="select(asset)">
                <p class="symbol">{{asset.name}}</p>
                <p class="number">Taux: {{asset.rate}} %</p>
            </div>
        </div>
    </div>
</template>
<script src='three-renderer-css3d/index.js'></script>
<script>
import { mapState } from 'vuex';
import store from '../store';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three-renderer-css3d/index.js';
import AssetList from './AssetList';


export default {
    name: 'model',
    computed: {
        assets: () => store.state.assets
    },
    mounted() { this.animate() },
    data() {
        return {
            loaded: false,
            newAsset: {
                idUser: 2,
                idAssetModel: '',
                name: '',
                amount: '2000',
                rate: '',
                start: null,
                end: null
            },
            objects: [],
            targets: { table: [] },
        }

    },
    methods: {
        animate() {
            requestAnimationFrame(this.animate);
        },
        select1() {
            console.log('toto1')
        },
        select(asset) {
            console.log('toto')
            this.newAsset.idAsset = asset.idAsset
            this.newAsset.idAssetModel = asset.idAssetModel
            this.newAsset.name = asset.name
            this.newAsset.rate = asset.rate / 100
            this.$store.dispatch('ADD_ASSET', this.newAsset)
        },
        init() {

            this.loaded = true;
            var scene = new THREE.Scene()
            var camera = new THREE.PerspectiveCamera(40, 600 / 600, 1, 10000)
            camera.position.z = 1000;
            var divs = document.getElementById('container').childNodes
            var i = 0;
            while (i < divs.length) {
                var div = divs.item(i);
                    div.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
                    var object = new CSS3DObject(div);
                    object.position.x = (i) * 40 - 150;
                    object.position.y = -(i) * 40 + 140;
                    object.position.z = 0;
                    scene.add(object);
                    this.objects.push(object);
                    var object = new THREE.Object3D();
                    object.position.x = (4 * i * 40);
                    object.position.y = - (4 * i * 80);
                    this.targets.table.push(object);
                    i++;
                }
                var renderer = new CSS3DRenderer();
                renderer.setSize(600, 600);
                renderer.domElement.style.position = 'absolute';
                document.getElementById('container').appendChild(renderer.domElement);
                window.addEventListener('resize', onWindowResize, false);
                render();
                function onWindowResize() {
                    camera.aspect = 600 / 600;
                    camera.updateProjectionMatrix();
                    renderer.setSize(600, 600);

                }
                function render() {
                    renderer.render(scene, camera);
                }
            }
        }
    }
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#info {
    position: absolute;
    width: 100%;
    color: #ffffff;
    padding: 5px;
    font-family: Monospace;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    z-index: 1;
}

#menu {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
}

.element {
    width: 120px;
    height: 160px;
    box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.5);
    border: 1px solid rgba(127, 255, 255, 0.25);
    text-align: center;
    cursor: default;
}

.element:hover {
    box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.75);
    border: 1px solid rgba(127, 255, 255, 0.75);
    width: 320px;
    height: 400px;
    background-color: rgba(0, 255, 255, 0.8);
    z-index: 1000;
}

.element .number {
    visibility: hidden;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 12px;
    color: rgba(127, 255, 255, 0.75);
}

.element .symbol {
    position: absolute;
    top: 40px;
    left: 0px;
    right: 0px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);
}

.element:hover .symbol {
    position: absolute;
    top: 40px;
    left: 0px;
    right: 0px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);
}

.element:hover .number {
    visibility: visible;
    position: absolute;
    top: 70%;
    left: 0px;
    right: 0px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);
}

.element .details {
    position: absolute;
    bottom: 15px;
    left: 0px;
    right: 0px;
    font-size: 12px;
    color: rgba(127, 255, 255, 0.75);
}

.button {
    color: rgba(127, 255, 255, 0.75);
    background: transparent;
    outline: 1px solid rgba(127, 255, 255, 0.75);
    border: 0px;
    padding: 5px 10px;
    cursor: pointer;
}

.button:hover {
    background-color: rgba(0, 255, 255, 0.5);
}

.button:active {
    color: #000000;
    background-color: rgba(0, 255, 255, 0.75);
}
</style>
